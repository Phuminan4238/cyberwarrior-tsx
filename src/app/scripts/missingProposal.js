const axios = require("axios");

const BASE_URL = "http://cyberwarrior2025.io/api/proposals?populate=uploadfile";

async function fetchProposals() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.data;
  } catch (error) {
    console.error(
      "❌ Error fetching proposals:",
      JSON.stringify(error.response?.data || error.message, null, 2)
    );
    return null;
  }
}

function logProposalsToReupload(proposals) {
  const invalids = proposals.filter((p) => {
    const file = p.attributes?.uploadfile?.data;
    const size = file?.attributes?.size;
    return !file || size > 2_000_000;
  });

  if (invalids.length === 0) {
    console.log("✅ All proposals are valid.");
    return;
  }

  console.log("🛑 These teams need to re-upload:\n");

  invalids.forEach((p) => {
    const attrs = p.attributes;
    if (!attrs) {
      console.log("🧪 Raw attributes: undefined");
      return;
    }

    const teamName = attrs.teamName || "(unknown)";
    const token = attrs.token || "—";
    const file = attrs.uploadfile?.data;
    const sizeMB = file?.attributes?.size
      ? (file.attributes.size / 1024 / 1024).toFixed(2) + " MB"
      : null;
    const reason = !file
      ? "⚠️  Missing file on Strapi"
      : `⚠️  File too large (${sizeMB})`;

    console.log(`- ${teamName} (proposal ID: ${p.id})`);
    console.log(`  ${reason}`);
    console.log(
      `  ↳ Re-upload link: https://cyberwarrior2025.io/proposal/reupload/${token}\n`
    );
  });
}

(async () => {
  const proposals = await fetchProposals();
  if (proposals) logProposalsToReupload(proposals);
})();
