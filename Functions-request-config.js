const fs = require("fs")

// Loads environment variables from .env.enc file (if it exists)
require("@chainlink/env-enc").config()

const BILLIE_EILISH = "11e81bcc-9c1c-ce38-b96b-a0369fe50396"

const TONES_AND_I = "ca22091a-3c00-11e9-974f-549f35141000"

const Location = {
  Inline: 0,
  Remote: 1,
}

const CodeLanguage = {
  JavaScript: 0,
}

const ReturnType = {
  uint: "uint256",
  uint256: "uint256",
  int: "int256",
  int256: "int256",
  string: "string",
  bytes: "Buffer",
  Buffer: "Buffer",
}

// Configure the request by setting the fields below
const requestConfig = {

  codeLocation: Location.Inline,
  codeLanguage: CodeLanguage.JavaScript,
  source: fs.readFileSync("./Twilio-Spotify-Functions-Source-Example.js").toString(),
  walletPrivateKey: process.env.PRIVATE_KEY,

  args: [
    TONES_AND_I,
    "Tones&I",
    "14000000", // 14 million
    process.env.ARTIST_EMAIL,
    process.env.VERIFIED_SENDER,
  ],

  expectedReturnType: ReturnType.int256,

  secretsURLs: [],

  secrets: {
    soundchartAppId: process.env.SOUNDCHART_APP_ID,
    soundchartApiKey: process.env.SOUNDCHART_API_KEY,
    twilioApiKey: process.env.TWILIO_API_KEY,
  },

  perNodeSecrets: [
    {
      soundchartAppId: process.env.SOUNDCHART_APP_ID,
      soundchartApiKey: process.env.SOUNDCHART_API_KEY,
      twilioApiKey: process.env.TWILIO_API_KEY,
    },
    {
      soundchartAppId: process.env.SOUNDCHART_APP_ID,
      soundchartApiKey: process.env.SOUNDCHART_API_KEY,
      twilioApiKey: "",
    },
    {
      soundchartAppId: process.env.SOUNDCHART_APP_ID,
      soundchartApiKey: process.env.SOUNDCHART_API_KEY,
      twilioApiKey: "",
    },
    {
      soundchartAppId: process.env.SOUNDCHART_APP_ID,
      soundchartApiKey: process.env.SOUNDCHART_API_KEY,
      twilioApiKey: "",
    },
  ],
 }

module.exports = requestConfig
