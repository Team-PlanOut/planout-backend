## _PlanOut_ 


### A Social Task Manager Application for Casual Event Planning

## Built With

 - [NodeJS](https://nodejs.org/en/docs/)
 - [Express](https://expressjs.com/) 
 - [Knex.js](http://knexjs.org/)
 - [Docker](https://docs.docker.com/)
 - [PostgreSQL](https://www.postgresql.org/docs/)
 

# Getting started

### Commands for development

To start the server locally: 

```bash
npm run dev
# or
yarn dev
```


Build the backend into js files and put them into the dist directory

```bash
npm run build
# or
yarn build
```
This will run the js files in dist
```bash
npm start
# or
yarn start
```



To run docker image:

- Install docker desktop and run 
- In your terminal run: `docker build . `
- Then run: `docker-compose up `


In the .env.local file:
```

DB_USER=<postgres user>
DB_PASSWORD=<password>
DB_NAME=planout

```



## Authors

- [Jon Gull](https://github.com/JonrGull)
- [Konstantin Shambazov](https://github.com/Constantine7s)
- [Dominic Lowes](https://github.com/SodaJyu)
- [Yushiko Salvador](https://github.com/yushisalvador)
- [Juli Boucree](https://github.com/juliwithoutthee)
