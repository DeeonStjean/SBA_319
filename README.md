# SBA_319
MongoDB Database Application

Requirement

Use at least three different data collections within the database (such as users, posts, or comments).

Utilize reasonable data modeling practices.

Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.

Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.

Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.

Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.

Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.

Include sensible MongoDB data validation rules for at least one data collection.

Utilize reasonable code organization practices.

Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

Commit frequently to the git repository.

Include a README file that contains a description of your application.

This README must include a description of your API's available routes and their corresponding CRUD operations for reference.

Level of effort displayed in creativity and user experience.

ROUTES

GET
/zips /grades /posts all pull at least 10 data from the databases

Post
/zips and /posts can add a new data to the databases

Delete
/zips/:id and /posts/:id can delete one data from the database based on the id you enter

Patch
/posts/:id can update a one of the data from the database base on the id you enter