const {insertFreedom, readFreedom} = require("./freedom.controller");

const router = require("express").Router();
const validateDto = require("../../middleware/validate-dto");
const songSchema = require("../../schemas/songs");

/**
 * @swagger
 * /songs:
 *  post:
 *      description: Inserting new freedom data
 *      responses: 
 *          '201':
 *              description: The request succeeded
 *          '400':
 *              description: Bad POST Request
 */
 router.post("/freedom", validateDto(songSchema), insertFreedom);

 /**
  * @swagger
  * /songs/user/:UserID:
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