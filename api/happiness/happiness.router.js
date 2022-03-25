const {insertHappiness, readHappiness, readHappinessByCountry, updateHappiness, deleteHappiness} = require("./happiness.controller");

const router = require("express").Router();
const validateJson = require("../../middleware/validateJson");
const freedomSchema = require("../../schemas/json/freedom.json");

/**
 * @swagger
 * /happiness:
 *  post:
 *      description: Inserting new happiness data
 *      responses:
 *          '201':
 *              description: The request succeeded
 *          '400':
 *              description: Bad POST Request
 */
router.post("/happiness", validateJson(freedomSchema),insertHappiness);

/**
 * @swagger
 * /happiness:
 *  get:
 *      description: Select happiness data
 *      responses:
 *          '200':
 *              description: A successful response
 *          '204':
 *              description: Record not found
 *          '400':
 *              description: Bad GET Request
 */
router.get("/happiness", readHappiness);

/**
 * @swagger
 * /happiness/:Country:
 *  get:
 *      description: Select happiness data by Country
 *      responses:
 *          '200':
 *              description: A successful response
 *          '204':
 *              description: Record not found
 *          '400':
 *              description: Bad GET Request
 */
router.get("/happiness/:Country", readHappinessByCountry);

/**
 * @swagger
 * /happiness:
 *  patch:
 *      description: Use it to update the happiness
 *      responses:
 *          '200':
 *              description: Updated successfully!
 *          '204':
 *              description: Record not found
 *          '400':
 *              description: Bad Update Request
 */
router.patch("/happiness", validateJson(freedomSchema), updateHappiness);

/**
 * @swagger
 * /songs:
 *  delete:
 *      description: Use it to delete the happiness
 *      responses:
 *          '200':
 *              description: "Song is deleted successfully!"
 *          '204':
 *              description: Record not found
 *          '400':
 *              description: Bad Delete Request
 */
router.delete("/happiness", validateJson(freedomSchema), deleteHappiness);

module.exports = router;