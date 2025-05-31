// utils/time.ts
export const isRegistrationClosed = () => {
    const targetDate = new Date("2025-06-01T00:00:00");
    const now = new Date();
    return now.getTime() > targetDate.getTime();
  };
  