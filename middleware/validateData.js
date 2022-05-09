// const validateJson = require("validateJson.js");
// const validateXml = require("validateXml.js");

//for validating json schema
const jsonValidator = require('jsonschema').Validator;
const validator = new jsonValidator();

//for validating xml schema
const xml = require("object-to-xml");
const libxmljs = require('libxmljs2');

//both validation techniques uses the same function
const RE2 = require("re2");
const { errorMonitor } = require('tedious/lib/bulk-load');

function validateData(jsonvalidation, xmlvalidation, body){
    (req, res, next) => {
        if(req.get('Content-Type') === "application/json")
        {
            const valid = validator.validate(body, jsonvalidation, { throwError: true, regExp: RE2 });
            if (!valid) {
                const errors = errorMonitor;
                res.status(500).json(errors);
            } else {
                return res.status(200).json({
                    success: 1,
                    data: results
                });
            }
            next();
        } 
        else if (req.get('Content-Type') === "application/xml")
        {
            const xmlBody = body;
            const xmlDoc = libxmljs.parseXmlString(xmlBody);

            const valid = xmlDoc.validate(xmlvalidation, { throwError: true, regExp: RE2 });
            if (!valid) {
                const errors = errorMonitor;
                res.status(400).send(xml(errors));
            } else {
                res.status(200).send(xml({
                    success: 1,
                    data: results
                }));
            }
            next();
        } 
        else 
        {
            res.status(400).send("Invalid data type");
        }
    }
}

module.exports = validateData