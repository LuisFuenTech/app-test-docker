# Test app
## Local
To run locally the project containerized, create a **.env** file in the root and the values that you will use:
```
# Local
LOCAL_NODE_PORT=
LOCAL_MONGO_PORT=

# Docker
DOCKER_NODE_PORT=3000
DOCKER_MONGO_PORT=27017

MONGO_USERNAME=
MONGO_PASS=
MONGO_HOST=mongo
```
Then, you can run the `compose` command: `docker compose up -d`

Finally, go to the web browser and type http://localhost:3000

## Docker
### Pulling the image
You can pull the image [fuentech/pets-app](https://hub.docker.com/r/fuentech/pets-app) with the following command: `docker pull fuentech/pets-app`

### Create a container from the image
Prerequisites:
- Create a `.env` file with the following variables:
  ```
    # Local
    LOCAL_NODE_PORT=
    LOCAL_MONGO_PORT=

    # Docker
    DOCKER_NODE_PORT=
    DOCKER_MONGO_PORT=
    
    MONGO_USERNAME=
    MONGO_PASS=
    MONGO_HOST=mongo
    ```
- In the same path, run the following command to use the **.env**: `docker run --env-file ./.env -d fuentech/pets-app`
