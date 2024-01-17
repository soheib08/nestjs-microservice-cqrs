# NestJS Microservices Example using rabbitMQ and GRPC

this example use 3 microservices for handling task management, named ashland, gallatin and nashville. each microservice implemented by cqrs pattern library provided by nestjs.for database i used postgreSql. nashville is a gateway that handles http requests and send the requests to gallatin microservice to provide a appropriate response to the client. the communication between this to microservice was handled by GRPC. ashland microservice is a logger that log every action that happened in gallatin microservice. communication between ashland and gallatin handled by rabbiq mq.

## Project Requirements

Make sure you have the following installed before running the app

- nodejs 18.12.1

and also make sure to set proper .env file for all 3 projects.

### Running the App

For run postgreSql please run the following command:

```bash
docker-compose up
```

and after that you can run each project based on their readme file.
