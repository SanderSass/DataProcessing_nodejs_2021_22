const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const RE2 = require("re2");
//const fs = require("fs");
//const path = require("path");
//const standaloneCode = require("ajv/dist/standalone").default

const ajvInstance = new Ajv({ allErrors: true,  regExp: RE2});

addFormats(ajvInstance);

module.exports = ajvInstance;

// const Ajv = require("ajv");
// const ajv = Ajv({allErrors:true, removeAdditional:'all'});
// const insertSchema = require("./schemas/songs");
// ajv.addSchema(insertSchema, 'songs')