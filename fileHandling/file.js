const fs = require ("fs");

// comment code then run one by one to see the output
//write method!

// syncronus...
fs.writeFileSync('./test.txt', 'Hello world to node!');

// asyncronus...
fs.writeFile('./test.txt', 'Hello world Async!', (err) => {}); //callback function needed for error capturing


// read method!

//sync...
const data = fs.readFileSync('./read.txt', 'utf8');
console.log (data);

//async...
// this will print before the file is read because it's async
fs.readFile('./read.txt', 'utf8', (err, data) => { 
    if (err) {
        console.log('ERROR',err);
    }else {
        console.log(data);
    }
});
//it checks then prints the data in the file
// async function will always expects a callback function 
