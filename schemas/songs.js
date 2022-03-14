const ajvInstance = require('./ajv-instance');

const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  title: "List of Songs",
  description: "This document records the details of an user songs",
  properties: {
    UserID: {
        title: "UserID", 
        type: "string",
        minLength: 3
    },
    songName: {
        title: "songName", 
        type: "string",
        minLength: 1
    }
  },
  required: [		
      "UserID",
    "songName"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(schema);