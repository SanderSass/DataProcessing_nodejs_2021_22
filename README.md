# Readme for DataProcessing_nodejs_2021_22
* Organization: **NHL Stenden University of Applied Sciences**
* Subject: **Data Processing - Resit**
* Date: **2022, March 1th**
* Period: **3**
* Made by **Sander Siimann**
* Updated: 15/04/2022

## Set up the local API
1. Download and install latest Xampp. (Apachefriends. (n.d.). *Download XAMPP*)

2. On Xampp dashboard, open phpMyAdmin by clicking **Admin** under MySQL module, then import the sql file that is located in the project. Make sure that database name would be "dataprocessing" in phpMyAdmin. (You might need to create first empty database first, then import the sql file on newly created database.).

3. Then run **start** Apache and MySQL Module on Xampp dashboard.

4. Install the project and locate the project into xampp->htdocs folder. For example: D: .\\..\xampp\\**htdocs**

5. Open the API project **DataProcessing_nodejs_2021_22** in Visual Studio Code.

6. Set up the Node.js in project:

   1. Install Node_modules using this command in terminal: "npm install". This command should install all dependencies / devDependencies (environment variables) which is stated in **package.json**. (Web Development Field Guide. (2015, June 25). *Initialize NPM on an existing project*).

   2. Using this command, it starts the API local server : "npm run start".

      Should return:

      ![Class Diagram](/images/returnServerupAndDatabaseConnected.png)

   3. if still some modules are missing in the project, then in the terminal run: "npm install **moduleName** --save". And **moduleName** replace with missing module that is stated in the terminal as an error. Only for one dependency the command has a little difference: "npm install --save-dev nodemon". (Npm. (2021, November 9). *npm: nodemon*.)

   4. Then run again in terminal: "npm run start".


## Testing the API in Postman
1. Make sure the Authorization type is 'No auth'. 
    ![Class Diagram](/images/no%20auth.png)

  

2. Run a url link to generate jwt key for getting an access to the other CRUD methods in Postman. URL link: **http://localhost:5500/lfbvo5184sgrg84e**

![Class Diagram](/images/generateKey.png)

3. Locate the key as following:
   ![Class Diagram](/images/jwt%20token%20in%20postman.png)
   Make sure the 'jwt' is front of the key.



4. Then start to test our endpoints to see if its responds correctly using schemas and respond states.

   Main endpoints (More info in Swagger documentation):

   * http://localhost:5500/api/freedom
   * http://localhost:5500/api/happiness
   * http://localhost:5500/api/population

   To update(PATCH) or delete, then have to use a variable Country in the body to test update and delete.

   PATCH: I used patch for update because I want to update only a specific object with certain variable, but with PUT it would overwrite all the objects variable.

## Swagger documentation
Here you find more info of API system docs: **http://localhost:5500/api-docs**.
Make sure that the API is in run mode to see the Swagger doc.
![Class Diagram](/images/swagger.png)

### Reference 

* Web Development Field Guide. (2015, June 25). *Initialize NPM on an existing project*. http://weaintplastic.github.io/web-development-field-guide/Development/Frontend_Development/Setting_up_your_project/Setup_Dependency_Managers/Node_Package_Manager/Initialize_NPM_on_an_existing_project.html
* Apachefriends. (n.d.). *Download XAMPP*. https://www.apachefriends.org/download.html
* Npm. (2021, November 9). *npm: nodemon*. https://www.npmjs.com/package/nodemon

### NOTES FROM LECTURER

General:

* Typo in    package.json causing npm install to fail, after fixing it succeeds

API:

* The population     and happiness endpoints do not work, they keep returning “unauthorized”
* Looking at the     code the population and happiness endpoints use the freedom schema for     validation which can’t be right.
* GET http://localhost:5500/api/freedom/Timboektoe     returns 200 (OK) while the record cannot be found. It should’ve returned     404 instead
* GET returns     integer values as strings, e.g. "Year": "2014"
* POST on     /freefrom results in an error
* XML support     has not been implemented
* Restrictions     defined in the XML schemas are not implemented in the json schemas
* XML schema has     a target namespace of [www.w3schools.com](http://www.w3schools.com/)
* XML schemas     are not correct. missing root element, use of complex types where simple     types should’ve been used

{

"Year": 2014,

"ISO_Code": "TBT",

"Country": "Timboektoe",

"PERSONAL_FREEDOM_Score": 7.61,

"ECONOMIC_FREEDOM_Score": 7.48,

"HUMAN_FREEDOM_Score": 7.54,

"HUMAN_FREEDOM_Rank": 50,

"HUMAN_FREEDOM_Quartile": 2

}

ReferenceError: results is not defined

Visualisation:

* Implemented, but doesn’t work, probably due to the jwt authorization in the endpoints. You might want to consider removing the authentication for the resit     anyway.