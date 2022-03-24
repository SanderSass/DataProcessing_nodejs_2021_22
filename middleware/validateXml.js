const xml = require("object-to-xml");
const libxml = require('libxmljs2');
const RE2 = require("re2");
const { errorMonitor } = require('tedious/lib/bulk-load');

function validateXml(xmlvalidation) {
    return (req, res, next) => {
        const allXmlData = libxml.parseXmlString(req.body);
        const valid = validate(allXmlData, xmlvalidation, { throwError: true, regExp: RE2 });
        if (!valid) {
            const errors = errorMonitor;
            res.status(500).xml(errors);
        }
        next()
    };
}

module.exports = validateXml;