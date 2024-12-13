require('dotenv').config();

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
  },
  env: {
    password: process.env.PASSWORD?.trim(),
  },
});
