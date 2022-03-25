const xml = require("object-to-xml");
const libxmljs = require('libxmljs2');
const RE2 = require("re2");
const { errorMonitor } = require('tedious/lib/bulk-load');

function validateXml(xmlvalidation) {
    return (req, res, next) => {
        const xmlBody = req.body;
        const xmlDoc = libxmljs.parseXml(xmlBody);
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
    };
}

module.exports = validateXml;