# Readme for DataProcessing_nodejs_2021_22
* Oragnization: **NHL Stenden University of Applied Sciences**
* Subject: **Data Processing**
* Date: **2022, March 1th**
* Period: **3**
* Made by **Sander Siimann**

## Access to the live database
* Credentials and links are stored in the report.

## Set up the local API
1. Download and install latest Xampp.
2. Open phpMyAdmin by clicking **Admin** under MySQL module on Xampp dashboard, then import the sql file that is located in the project
3. Then run **start** Apache and MySQL Module on Xampp dashboard.
4. Open the API project 'DataProcessing_nodejs_2021_22' in Visual Studio Code.
5. Open terminal and run: "npm start"
6. if some modules are missed in the project, then in the terminal run: "npm install **moduleName** --save". And **moduleName** replace with missing module that is stated in terminal as an error.
7. Then run again in terminal: "npm run start"

## Testing the API in Postman
1. Make sure the Authorization type is setted as a 'No auth'. 
![Class Diagram](/images/no%20auth.png)

2. Run a url link to generate jwt key for getting an access to the other CRUD methods in Postman. URL link can be found in the report under **Generate a key to access the API**.

3. Locate the key as following:
![Class Diagram](/images/jwt%20token%20in%20postman.png)
Make sure the 'jwt' is front of the key.
4. Then start to test our endpoints to see if its responds correctly using json schemas and respond states.

## Swagger documentation
Here you find more info of API system docs: **http://localhost:5500/api-docs**.
Make sure that the API is in run mode to see the Swagger doc.
![Class Diagram](/images/swagger.png)