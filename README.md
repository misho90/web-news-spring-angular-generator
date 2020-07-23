
This is a multi-module Spring Boot Angular Maven 
The frontend Angular app is built using [angular-cli](https://cli.angular.io/). 

`backend`: contains Java code of the application.
`ui`: This contains source code for the Angular based frontend.

This project uses following versions:

1. Spring Boot v2.2.6.RELEASE
2. Angular v9.1.1
3. Node v12.16.2

## Running the full application

You can build the package as a single artifact by running the `./mvnw clean install`.
Next, you can run the application by executing:

```bash
$ java -jar backend/target/app.jar
```

The application will be accessible at `http://localhost:8080`.

## Features


You can also run the application using Maven.

```bash
$ cd backend
$  ../mvnw spring-boot:run
```

## Running the frontend for development mode

To install all the required binaries for your project, you can run following command.

```
$ cd frontend
$ ../mvnw frontend:install-node-and-npm
```

Once the above command finishes, you can start the frontend using the `npm run serve` command.