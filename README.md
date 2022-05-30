# Getting started

### Commands for development

- yarn dev - starts express locally
- yarn build - builds backend into js files and put them into dist directory
- yarn start - will run those js files in dist

To run docker image:
- install docker desktop and run in
- in terminal run: docker build . 
- then run: docker-compose up


In the .env.local file
```
DB_USER=<postgres user>
DB_PASSWORD=<password>
DB_NAME=planout
```
