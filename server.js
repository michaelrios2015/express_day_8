// we have started using nodemon npm i nodemon --save-dev
//  and in the script we us "start:dev": "nodemon server"
// start:dev because the default is start but start does not need to listen
// changes to the server and in teh scripts becuase when you run npm run it
// looks in the scripts in the package json

// so node server.js runs server.js or whatever file you put there

// npm run needs a script in the package json

// nodemon is just a bit more code so that when you make changes the
// code will be run automatically

//  should work ./node_modules/.bin/nodemon server.js but I get an error
// message about running scripts... might look into later 

// it does make everthing a lot simplier take away point is that is you go
// into the node modules folder you can find these programs and execute them
// but it is easier to put a script in the package json and npm run it

// also now we have a node_modules folder and it get's big fast...
// it is probably following a specific form or some such 

// but now we need to start using gitingnore or we should start using it 


console.log('Hi!!');