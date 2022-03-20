const path = require('path');
// of so this is the start of express which is just a bunch of pre written 
// code to make using the node HTTP thing from day 7 easier to use and
// it does... lot less code.. much of it just magic to me but that is ok

// this is just how we get code from the modules in the backend
// essentially just importing the express library
const express = require('express');

// I assume I am initalizing and instance or some such, no new 
// no seems to just put a function in varibable interesting... really need to know more of the basics
const app = express();

// console.log(express.toString());
// not sure looks like it is just a function??? a function in a varible
// I guess so
// console.log(app.toString());

// so this is an example of use and middleware so I am still fuzzy on use... i know get is looking for a specifc path
// so I guess use is for other things (possibly) everything else and morgan is middleware..is my regular function also
// middle ware.. maybe anyway morgan shows me what request I sent and how they were answered so nice 
app.use(require('morgan')('dev'));

// so I think this is the main gain, instead of having a bunch of if statements
// we can just tell it the address we are looking for we also get to exclude
// some lines of code... not sure how we do a catch all and next is imporant
// but not entirely sure how

// another example of app.use so I guess whenever it sees /assests it know to use this 
// I know we need to use this... I don't quite understand why..css, pictures, these are all considered static
app.use('/assests', express.static(path.join(__dirname, 'assests')));

// so this is the first example of a component and we make it a function so we can accept and use varibles
// it's pretty neat you can start to see the strength of node this does make maintaince much easier 
const nav = ( url ) => {
    return `
    <nav>
         <a href='/' class='${ url === '/' ?  'selected': '' }'>Home</a>
         <a href='/rams' class='${ url.startsWith('/rams')  ?  'selected': '' }' >Rams</a>
    </nav>
    `;
}

//  this is fine too but you can't take in variables
const test = 'test test test';


app.get('/', (req, res, next)=> {
    res.send(`
    <html>
        <head>
            <link rel='stylesheet' href='/assests/styles.css' />
        </head>
        <body>
             ${ nav(req.url) }
            <h1>!!FORDHAM!!</h1>
            ${ test }
            </body>

    </html>`)
})

// are all the (req, res, next)=> functions middle ware
// the req(request?? comes with a lot of useful information)
app.get('/rams', (req, res, next)=> {
    res.send(`
    <html>
        <head>
            <link rel='stylesheet' href='/assests/styles.css' />
        </head>
    <body>
        ${ nav(req.url) }
        <h1>!!rams!!</h1>
        <ul>
            <li><a href='/rams/1'>Ramesy</a></li>
            <li><a href='/rams/5'>RamVan</a></li>
            <li><a href='/rams/7'>Ram</a></li>
        <ul>
    </body>
    </html>`)
})


app.get('/rams/:id', (req, res, next)=> {
    
    // console.log is going in the terminal... I guess because this is the server?? 
    // not entirely sure will see when it just shows up in the website 
     console.log(req)
    //  console.log('HI');

    res.send(
        `
    <html>
        <head>
            <link rel='stylesheet' href='/assests/styles.css' />
        </head>
    <body>
        ${ nav(req.url) }
        <h1><a href='/rams'>!!rams!!</a></h1>
        To do: information about a user with an if of ${req.params.id}
    </body>
    </html>`)
})


// this is the same as without express process.env.PORT is just what we us when deployed is it always this, IDK
// apperently on a Mac you can just type in PORT = 3001 in the terminal and it will know that is the process.env 
// interesting 
const port = process.env.PORT || 3000;

// I think this is a bit less but even if it is not now it tells you 
// why it fails
app.listen(port, ()=> console.log(`listening on port ${port}`));

// this is acting very strange



