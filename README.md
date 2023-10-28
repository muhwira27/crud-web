# Management Students
A simple web application that allows users to perform CRUD (Create, Read, Update, Delete) operations on student data.

## Website Screenshots
![image](https://github.com/muhwira27/D121211049_TugasWebsite/blob/f686bc84dd15ea85230592cb011502bb9e5d4517/screenshots/Screenshot%202023-10-26%20163351.png) <br> <br>
![image](https://github.com/muhwira27/D121211049_TugasWebsite/blob/f686bc84dd15ea85230592cb011502bb9e5d4517/screenshots/Screenshot%202023-10-26%20163408.png) <br> <br>
![image](https://github.com/muhwira27/D121211049_TugasWebsite/blob/f686bc84dd15ea85230592cb011502bb9e5d4517/screenshots/Screenshot%202023-10-26%20163425.png) <br> <br>

## Technology Used
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) &nbsp;&nbsp; 
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB) &nbsp;&nbsp;
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) &nbsp;&nbsp; 
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Building from Source

Fetch latest source code from main branch.
```
https://github.com/muhwira27/crud-web.git
```
### Backend
1. Change directory to backend and install the dependencies
```
cd backend
npm install
```
2. Create an .env file inside the backend folder and add database configuration information like the following example
```
DB_USER='root'
DB_PASSWORD=''
DB_HOST='localhost'
DB_PORT='33061'
```
3. Create a database **students_db** in MySQL according to the configuration you have specified.
4. Run the server
```
npm run start
```
### Frontend
1. Open another terminal then change directory to frontend and install the dependencies
```
cd frontend
npm install
```
2. Run the application
```
npm run dev
```
