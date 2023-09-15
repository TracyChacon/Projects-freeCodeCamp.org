[BACK TO MAIN](https://github.com/TracyChacon)

# URL Shortener Microservice

A URL shortener is a service that takes a long URL and creates a shorter, more memorable version of it. Very useful to make URLs easier to type and remember, to fit long URLs into social media posts or text messages, track the number of clicks on a link, or prevent spam and phishing attacks.

## Compentencies:

- Express: Express is a popular web framework for Node.js. It provides a set of functions and middleware that can be used to create web applications.

- Body-parser: Body-parser is a middleware that can be used to parse the body of HTTP requests. This is useful for applications that need to read data from the request body, such as a URL shortening application.

- CORS: CORS is a mechanism that allows web applications to make cross-origin requests. This is important for a URL shortening application, as it allows users to shorten URLs from any website.

- Mongoose: Mongoose is a MongoDB object modeling framework for Node.js. It provides a way to interact with MongoDB databases.

- DNS: DNS is a system that translates hostnames to IP addresses. This is used by the application to validate the hostnames that are submitted by users.

## Summary

1. The require('dotenv').config() function loads environment variables from a .env file. This is useful for storing sensitive information, such as database credentials.

2. The mongoose.connect() function connects to the MongoDB database.

3. The app.use() function registers middleware with the application. This middleware is used to parse the request body, enable CORS, and serve static files.

4. The app.post('/api/shorturl') function is an API endpoint that can be used to shorten a URL. The function first parses the hostname from the request body. Then, it validates the hostname by resolving it to an IP address. If the hostname is valid, the function saves it to the database and returns a JSON response with the original URL and the shortened URL.

5. The app.get('/api/shorturl/:shortUrl') function is an API endpoint that can be used to redirect to the original URL for a given shortened URL. The function first finds the shortened URL in the database. If the shortened URL is found, the function redirects to the original URL.

6. The app.listen() function listens for HTTP requests on the specified port.
