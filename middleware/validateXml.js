//for validating xml schema
const xml = require("object-to-xml");
const libxmljs = require('libxmljs2');
const RE2 = require("re2");
const { errorMonitor } = require('tedious/lib/bulk-load');

function validateXml(xmlvalidation, body) {
    return (req, res, next) => {
        const xmlDoc = libxmljs.parseXml(body);
        const valid = xmlDoc.validate(xmlvalidation, { throwError: true, regExp: RE2 });
        if (!valid) {
            const errors = errorMonitor;
            res.send(xml(errors));
        } else {
            res.send(xml({
                success: 1,
                data: results
            }));
        }
        next();
    };
}

module.exports = validateXml;