Sign up, Login, Profile pages app - MERN stack project

This project is made using React js, node js, express and mongo db.
The frontend files are inside src folder.
The backend files are inside signupbackend folder.

To run this project successfully, follow these steps:-
1. Create a '.env' file inside 'signupbackend' folder with the following variables below:

DATABASE_ACCESS = "mongodb+srv://<username>:<password>@cluster0.ywtddvn.mongodb.net/<tablename>?retryWrites=true&w=majority"
JWT_SECRET = 'dghafvjdusmyhgsdhbgfiudykhg'

2. The DATABASE_ACCESS should contain the link to your mongodb credentials(username / password) and table name. The JWT_SECRET has some random secret for authentication purposes.
3. Save the files.
4. Run the backend server with 'npm start' command from 'signupbackend folder.
5. Run the frontend server with 'npm start' command from the project folder.
6. The project runs on http://localhost:3000/ in your browser.
