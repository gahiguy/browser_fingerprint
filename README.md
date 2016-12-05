# Browser fingerprints

A group project for experiment the trace we're creating while browsing
on internet.

## Getting started

These instructions will get you a copy of the project up and 
running on your local machine for development and testing purposes. 
See deployment for notes on how to deploy the project on a live 
system.

### Prerequisites

What things you need to install the software and how to install them

* Git (to clone the project)
* Node / npm (to download the node_modules)

## Running the tests

_Not implemented yet..._

## Deployment

### Application

The application runs on a NodeJS stack and with HTML5/CSS3. 
You can __download the necessary modules__ with

```shell
$ npm install
```

You can __minify the assets__ to optimize the client navigation with

```shell
$ gulp
```

You can __run the application__ with

```shell
$ node server/server.js
```

Now open your browser [here](http://localhost:3000).

### Database

The request data will be caught in a Javascript script, convert as
a long string and then, through a SHA1 crypto-algorithm, it will 
be set as a FingerPrint Object. These Objects will be registered in 
the database.

The global population is around 7.5 billion people. Each key-value
will be set on 5 bytes (almost 32 Tera-bytes for everyone).

## Built with

* [Freelance Bootstrap template](https://startbootstrap.com/template-overviews/freelancer/)
* ['sha1' npm's module](https://www.npmjs.com/package/sha1)

## Contributing

No contributions needed.

## Versioning

v0.1

* Implementation of the NodeJS stack
* Research of the valuable attributes
* Development of an hash function to caught the request data, convert it into a long string and push it in the database as a FingerPrint Object
