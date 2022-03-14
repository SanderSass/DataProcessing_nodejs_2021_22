require("dotenv").config();

const jwt = require("jsonwebtoken");
const fs = require("fs");

const code = process.env.ENC_SECRET;

/**
 * JWT key is used to auhtize the API connection.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
 function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync(code, "utf8");
        
        jwt.verify(token, privateKey, {algorithm: "HS256"}, (err, decoded) => {
            if (err) {
                res.status(401).json({ error: "Not Authorized" })
            }
            console.log(decoded);

            return next();
        })
    } else {
        res.status(401).json({ error: "Not Authorized" })
    }
}

module.exports = isAuthorized;