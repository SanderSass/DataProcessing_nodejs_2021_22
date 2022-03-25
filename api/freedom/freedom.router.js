const {insertFreedom, readFreedom, readFreedomByCountry, updateFreedom, deleteFreedom} = require("./freedom.controller");

const router = require("express").Router();

const validateJson = require("../../middleware/validateJson");
const freedomSchema = require("../../schemas/json/freedom.json");

const validationXML = require("../../middleware/validateXml");
// const freedomSchemaXsd = require("../../schemas/xsd/freedom.xsd");
// const xmlSchemaDoc = loadXmlSchema(freedomSchemaXsd);

/**
 * @swagger
 * /freedom:
 *  post:
 *      description: Inserting new freedom data
 *      responses:
 *          '201':
 *              description: The request succeeded
 *          '400':
 *              description: Bad POST Request
 */
 router.post("/freedom", validateJson(freedomSchema),insertFreedom);

 /**
  * @swagger
  * /freedom:
  *  get:
  *      description: Select freedom data
  *      responses:
  *          '200':
  *              description: A successful response
  *          '204':
  *              description: Record not found
  *          '400':
  *              description: Bad GET Request
  */
 router.get("/freedom", readFreedom);

  /**
  * @swagger
  * /freedom/:Country:
  *  get:
  *      description: Select freedom data by Country
  *      responses:
  *          '200':
  *              description: A successful response
  *          '204':
  *              description: Record not found
  *          '400':
  *              description: Bad GET Request
  */
  router.get("/freedom/:Country", readFreedomByCountry);

 /**
  * @swagger
  * /freedom:
  *  patch:
  *      description: Use it to update the freedom
  *      responses:
  *          '200':
  *              description: Updated successfully!
  *          '204':
  *              description: Record not found
  *          '400':
  *              description: Bad Update Request
  */
 router.patch("/freedom", validateJson(freedomSchema), updateFreedom);

 /**
  * @swagger
  * /freedom:
  *  delete:
  *      description: Use it to delete the freedom
  *      responses:
  *          '200':
  *              description: "Song is deleted successfully!"
  *          '204':
  *              description: Record not found
  *          '400':
  *              description: Bad Delete Request
  */
 router.delete("/freedom", validateJson(freedomSchema), deleteFreedom);

module.exports = router;