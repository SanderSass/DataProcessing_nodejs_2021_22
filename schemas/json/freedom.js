const ajvInstance = require('../ajv-instance');

const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  title: "Freedom",
  description: "This document validates the dataset of freedom",
  properties: {
    Year: {
        "type": "integer"
    },
    ISO_Code: {
        "type": "string"
    },
    Country: {
        "type": "string"
    },
    PERSONAL_FREEDOM_Score: {
        "type": "number"
    },
    ECONOMIC_FREEDOM_Score: {
        "type": "number"
    },
    HUMAN_FREEDOM_Score: {
        "type": "number"
    },
    HUMAN_FREEDOM_Rank: {
        "type": "number"
    },
    HUMAN_FREEDOM_Quartile: {
        "type": "number"
    }
  },
  required: [		
      "Country"
    ],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(schema);