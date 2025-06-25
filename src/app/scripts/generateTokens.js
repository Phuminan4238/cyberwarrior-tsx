const axios = require("axios");
const crypto = require("crypto");

const STRAPI_URL = "https://cyberwarrior2025.io";
const TOKEN = "0efc938cdd6d40a28828c86343e30f65becde773ee1131e78293fc314d4cb229bd1b8dc1e093c7f6fb51545c83b0f1e8527ba0f8997ef5de7ce106c2f73da1b969ff9e6e245ebe07887aab2c83168a03f82eeed62cebf565bfe5d929678aa4505990d3386a4c19242268b41144181ee5a7e594f5fb2129406e82225e0a4cb35f";

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

async function assignTokensToTeams() {
  try {
    const res = await axios.get(
      `${STRAPI_URL}/api/forms?pagination[pageSize]=1000`,
      { headers }
    );
    const forms = res.data.data;

    for (const form of forms) {
      const id = form.id;
      const teamName = form.teamName || "unknown"; 
      const token = crypto.randomBytes(4).toString("hex");

      console.log(
        `⏳ Updating team "${teamName}" (ID: ${id}) with token ${token}`
      );

      try {
        await axios.put(
          `${STRAPI_URL}/api/forms/${id}`,
          { data: { teamToken: token } },
          { headers }
        );
        console.log(`✅ Token "${token}" assigned to "${teamName}"`);
      } catch (err) {
        console.error(
          `❌ Failed to update team "${teamName}" (ID: ${id}):`,
          err.response?.data || err.message
        );
      }
    }

  } catch (err) {
    console.error(
      "❌ Failed to fetch forms:",
      err.response?.data || err.message
    );
  }
}

assignTokensToTeams();
