const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"]; // List of HTTP verbs supported by the server
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"]; // List of paths the server responds to
const serverResponses = [
    "Welcome to WEB700 Assignment 1", // Response for GET "/"
    "This course name is WEB700. This assignment was prepared by Lavatharini Jasinthakumar", // Response for GET "/about"
    "ljasinthakumar@myseneca.ca\nLavatharini Jasinthakumar", // Response for GET "/contact"
    "Hello, User Logged In", // Response for POST "/login"
    "Main Panel", // Response for GET "/panel"
    "Logout Complete. Goodbye" // Response for POST "/logout"
];

// Function to simulate an HTTP request and return the appropriate response
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`; // Return the corresponding response with a 200 status
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`; // Return a 404 status if no match is found
}

console.log(httpRequest("GET", "/")); // Test GET request for "/" - Expected: 200: Welcome to WEB700 Assignment 1
console.log(httpRequest("GET", "/about")); // Test GET request for "/about" - Expected: 200: This course name is WEB700...
console.log(httpRequest("GET", "/contact")); // Test GET request for "/contact" - Expected: 200: ljasinthakumar@gmail.com...
console.log(httpRequest("POST", "/login")); // Test POST request for "/login" - Expected: 200: Hello, User Logged In
console.log(httpRequest("GET", "/panel")); // Test GET request for "/panel" - Expected: 200: Main Panel
console.log(httpRequest("POST", "/logout")); // Test POST request for "/logout" - Expected: 200: Logout Complete. Goodbye
console.log(httpRequest("PUT", "/")); // Test PUT request for "/" - Expected: 404: Unable to process PUT request for /

function getRandomInt(max) {
    return Math.floor(Math.random() * max); // Return a random integer from 0 to max-1
}

// Function to automate random HTTP requests for testing
function automateTests() {
    const testVerbs = ["GET", "POST"]; // List of verbs for testing
    const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"]; // List of paths for testing

    // Function to simulate a random HTTP request
    function randomRequest() {
        const randVerb = testVerbs[getRandomInt(testVerbs.length)]; // Pick a random verb
        const randPath = testPaths[getRandomInt(testPaths.length)]; // Pick a random path
        console.log(httpRequest(randVerb, randPath)); // Log the result of the random request
    }

    setInterval(randomRequest, 1000); // Call randomRequest every 1 second
}

automateTests(); // Start the automated test
