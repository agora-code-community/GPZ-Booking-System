## GPZ Booking System
# Setup

#### Server folder
The server now runs on Laravel, once the project has been cloned (the new/frontend branch) run the command
`composer update`. This will install all relevant dependencies.

1. **Database setup (Laravel .env file)**
The _.env_ file is ignored during Git commits so create a new file in the root server directory and name it ***.env***.
Copy the contents of the _.env_example_ file and paste them in the newly created **env** file.

Replace the database details (db_name, db_secret, etc) to concide with your **MySQL** credentials

Run the command `php artisan key:generate` to generate a new app key (or else the server might not run).

From here you can run the server by running the command `php artisan serve`.
Server must run on URL http://127.0.0.1:8000 or else api calls wont work.

#### Client folder

This is where the angular frontend app is housed. 

To get started run the command `nm install` to install dependencies

Once dependencies are installed app is ready to run by running command `ng serve -o`.
This opens the browser to http://localhost:4200
