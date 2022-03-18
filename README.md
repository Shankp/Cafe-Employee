# Cafe-Employee

### Steps to run in local enviorment

1. Run `npm install` command inside the CafeEmployeeApp folder which contains React front end.

2. Open the `CafeManagerServer` folder and open the solution(BidSystem.sln) by Visual studion 2019.

3. Run the `CafeSQLWithData.sql` file(https://github.com/Shankp/Cafe-Employee/tree/master/SqlScript/CafeSQLWithData.sql ) in MySql workbench to create the database.

4. update the connection string with approprite credentials in appsetting.development.json file inside the `CafeManagerServer` project (https://github.com/Shankp/Cafe-Employee/blob/master/CafeEmployeeServer/CafeManagerServer/CafeManagerServer/appsettings.Development.json)

3. Run the Server app opened by visual studio .Make sure CafeManagerServer is the startup project.

4. Go to the location `https://github.com/Shankp/Cafe-Employee/blob/master/CafeEmployeeApp/public/config.json` and change the CafeServerURL to the running CafeManagerServer.

5. Go to the `CafeEmployeeApp` folder and open CMD and run `npm start` command to run reactjs app
 
