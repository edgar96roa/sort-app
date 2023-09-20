# Application (Node-Express)

## Instructions to run application
1. To run this apllication you need to have installed Docker: https://docs.docker.com/get-docker/ If you installed Docker before go to step 2

2. Run this command to build the Docker image:
```
docker build -t sort-app .
```

3. Run this command to build our own application
```
docker run -d -p 3000:3000 --name sort-app sort-app
```

## Instructions to test the application

1. To test the application you need to have installed Postman: https://www.postman.com/downloads/ If you installed Postman before go to step 2

2. Go to postman to create an HTTP Request, choose POST method

3. On Params section set the following variables:
```
Content-Type: application/json
Accept: application/json
```

4. On url section you have to set up the following url:
```
http://localhost:3000/sort
```

5. Copy and paste the following json
```
{
    "sortKeys": ["fruits", "numbers"],
    "payload": {
        "fruits": ["watermelon", "apple", "pineapple"],
        "numbers": [1333, 4, 2431, 7],
        "colors": ["green", "blue", "yellow"]
    }
}
```

6. Click on send, you will get the following response:
```
{
    "fruits": [
        "apple",
        "pineapple",
        "watermelon"
    ],
    "numbers": [
        4,
        7,
        1333,
        2431
    ],
    "colors": [
        "green",
        "blue",
        "yellow"
    ]
}
```

## Instructions to stop and delete the application
1. Run this command to stop the application
```
docker stop sort-app
```

2. Run this command to delete the application
```
docker rm sort-app
```

## Bonus to run application locally

1. To run this application locally you have to install nodejs https://nodejs.org/es

2. On command prompt run
```
node -v
npm -v
```
to make sure installation is ok

3. Clone the repository

4. Run this command to install all dependencies
```
npm install
```

5. Run this commando to run application locally
```
npm start
```

6. To stop application do: **ctrl+c**