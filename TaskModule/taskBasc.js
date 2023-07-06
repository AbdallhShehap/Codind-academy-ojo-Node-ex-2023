console.log("Hello, World!");

const args = process.argv.slice(2);

 args[0] = "arg1"
args[1] = "arg2"

console.log( args[0] , args[1]);

// 3. Use the setTimeout() function to print "Hello, World!" after 2 seconds.
// Input: None;
// Output: "Hello, World!" (Delayed by 2 seconds)

setTimeout(()=>{
    console.log("Hello, World!" );
},2000)


// 4. Use the setInterval( ) function to print "Hello, World!" every 2 seconds.
// Input: None.
// Output: "Hello, World!" (Repeated every 2 seconds)


setInterval(()=>{
    console.log("Hello, World!" );

},2000) 

// 5.Use the console global object to print a warning message. 
// Input: None; Output: "Warning:
// Something went wrong"

console.warn("Warning");