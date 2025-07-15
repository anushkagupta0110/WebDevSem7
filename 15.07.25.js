/*
DEBOUNCING
~ main purpose -> make search bar
~ to give delay for a function to execute
~ technique to make sure that a function is not called to many times in a short period of time.
~ used to prevent function from being called multiple times when user is typing in a textbox or clicking a button.
~ controlling number of calls to optimise solution. basically making optimistic calls to invoke function.
*/

let timeout;
const searchinput = document.getElementById("searchInput");

searchinput.addEventListener("input",(event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log("INPUT WORD: ",event.target.value)
    }, 2000);   
});

/*
NODE.JS
~ js runtime environment
~ single threaded, asynchronous, event-driven architecture
~ used to run js outside browser
~ cross platform -> server, arduino, raspberry
~ built on top of V8 engine, which is built on top of C++
~ single process, does not create a new thread for every process
*/