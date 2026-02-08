const axios = require("axios");
const config = require("../config");

let accessToken = null;
let tokenExpiry = null;

// Get Zoom Access Token
const getZoomAccessToken = async () => {
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  const res = await axios.post(
    "https://zoom.us/oauth/token",
    null,
    {
      params: {
        grant_type: "account_credentials",
        account_id: config.zoom.accountId,
      },
      auth: {
        username: config.zoom.clientId,
        password: config.zoom.clientSecret,
      },
    }
  );

  accessToken = res.data.access_token;
  tokenExpiry = Date.now() + res.data.expires_in * 1000;

  console.log("✅ Zoom access token generated");

  return accessToken;
};

// Create Zoom Meeting
const createZoomMeeting = async ({ topic, startTime, duration }) => {
  const token = await getZoomAccessToken();

  const res = await axios.post(
    "https://api.zoom.us/v2/users/me/meetings",
    {
      topic,
      type: 2,
      start_time: startTime,
      duration,
      timezone: "Asia/Kolkata",
      settings: {
        waiting_room: true,
        join_before_host: false,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

module.exports = { createZoomMeeting };
