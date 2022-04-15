# Readme for DataProcessing_nodejs_2021_22
* Oragnization: **NHL Stenden University of Applied Sciences**
* Subject: **Data Processing**
* Date: **2022, March 1th**
* Period: **3**
* Made by **Sander Siimann**
* Updated: 15/04/2022

## Set up the local API
1. Download and install latest Xampp. (Apachefriends. (n.d.). *Download XAMPP*)
2. On Xampp dashboard, open phpMyAdmin by clicking **Admin** under MySQL module, then import the sql file that is located in the project. Make sure that database name would be "dataprocessing" in phpMyAdmin. (You might need to create first empty database first, then import the sql file on newly created database.).
3. Then run **start** Apache and MySQL Module on Xampp dashboard.
4. Install the project, and open the API project "DataProcessing_nodejs_2021_22" in Visual Studio Code.
5. Set up the Node.js in project:
   1. Install Node_modules using this command in terminal: "npm install". This command should install all dependencies / devDependencies which is stated in package.json. (Web Development Field Guide. (2015, June 25). *Initialize NPM on an existing project*).
   2. Using this command, it starts the API local server : "npm run start". 
   3. if still some modules are missing in the project, then in the terminal run: "npm install **moduleName** --save". And **moduleName** replace with missing module that is stated in the terminal as an error. Only for one dependency the command has a little difference: "npm install --save-dev nodemon". (Npm. (2021, November 9). *npm: nodemon*.)
   4. Then run again in terminal: "npm run start".


## Testing the API in Postman
1. Make sure the Authorization type is 'No auth'. 
  ![Class Diagram](/images/no%20auth.png)

  

2. Run a url link to generate jwt key for getting an access to the other CRUD methods in Postman. URL link: **http://localhost:5500/lfbvo5184sgrg84e**

   

3. Locate the key as following:
  ![Class Diagram](/images/jwt%20token%20in%20postman.png)
  Make sure the 'jwt' is front of the key.

  

4. Then start to test our endpoints to see if its responds correctly using schemas and respond states.

## Swagger documentation
Here you find more info of API system docs: **http://localhost:5500/api-docs**.
Make sure that the API is in run mode to see the Swagger doc.
![Class Diagram](/images/swagger.png)

### Reference 

* Web Development Field Guide. (2015, June 25). *Initialize NPM on an existing project*. http://weaintplastic.github.io/web-development-field-guide/Development/Frontend_Development/Setting_up_your_project/Setup_Dependency_Managers/Node_Package_Manager/Initialize_NPM_on_an_existing_project.html
* Apachefriends. (n.d.). *Download XAMPP*. https://www.apachefriends.org/download.html
* Npm. (2021, November 9). *npm: nodemon*. https://www.npmjs.com/package/nodemon