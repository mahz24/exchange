const { response } = require("express");

const axios = require("axios").default;
module.exports = {
  async getLatest(req, res) {
    const response = await axios.get(
      `${process.env.EXCHANGE_API_URL}/latest.json`,
      {
        params: {
          app_id: process.env.EXCHANGE_APP_ID,
        },
      }
    );
    res.render("latest", {
      data: response.data,
    });
  },
};
