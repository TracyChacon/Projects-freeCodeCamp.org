[BACK TO MAIN](https://github.com/TracyChacon)

# File Metadata Microservice

## Introduction

a file metadata microservice application built using Express, Multer, and HTML. The application allows users to upload files and analyzes the uploaded files to extract their metadata, including the original filename, mimetype, and size. The extracted metadata is then displayed to the user.

## Sumary

- index.js: This file sets up the Express application, configures Multer for file uploads, and mounts the routes defined in routes/index.js.

- routes/index.js: This file defines the routes for the application, including a GET route for the home page and a POST route for handling file uploads and metadata extraction.

- controllers/index.js: This file contains the controller functions for handling requests, including getIndex for serving the home page and fileanalyse for processing uploaded files and extracting metadata.

- views/index.html: This file defines the HTML structure for the application's user interface, including the file upload form, output section, and footer.

## Competencies
Programming Languages: Proficiency in JavaScript and Node.js is essential for working with the Express framework, Multer middleware, and other backend components.

1. Web Development: Understanding of web development concepts, including HTML, CSS, and routing mechanisms, is crucial for building the user interface and handling user interactions.

2. File Handling: Knowledge of file handling techniques and libraries like Multer is necessary for processing uploaded files and extracting metadata.

3. API Development: Familiarity with API development principles and practices is important for designing and implementing the microservice architecture.

4. Testing and Debugging: Expertise in testing methodologies and debugging techniques is crucial for ensuring the quality and reliability of the application.

5. Problem-Solving Skills: Strong problem-solving skills are essential for identifying and resolving any technical challenges that arise during development and maintenance.

6. Attention to Detail: A meticulous approach and attention to detail are vital for ensuring the accuracy and consistency of the application's behavior.
