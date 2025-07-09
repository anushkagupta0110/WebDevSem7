// currying -> way to pass single argument or parameter at a time

function sum(a, b, c)
{
    console.log(a+b+c);
    return a+b+c;
}

sum(2, 4, 6);

// SUBWAY -> choose bread, choose patty, want cheese or not

// normal function
function subwayOrder(bread, patty, cheese)
{
    console.log("bread:", bread);
    console.log("patty:", patty);
    console.log("cheese:", cheese);
}

console.log("Subway order:")
subwayOrder("garlic", "aloo", "yes");

// after currying
function curryingOrder(bread)
{
    return function(patty)
    {
        return function(cheese)
        {
            console.log("bread:", bread);
            console.log("patty:", patty);
            console.log("cheese:", cheese);
        }
    }
}

console.log("Currying order:");
curryingOrder("bread")("paneer")("no");

// event listeners

// DOM -> document object model
// tree like structure of elements

// container1
const container1 = document.getElementById("container");
container1.addEventListener("click", () => {
    console.log("this is container 1");
});

// event bubbling -> when an event starts at the target element and bubbles up to its parent elements in the DOM hierarchy, clicking on child makes the parent and grandparent work
// event capturing -> when an event starts from the outermost parent and travels down to the target element in the DOM hierarchy, passing a third argument (true), which changes bubbling to capturing

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", ()=>{
    console.log("grandparent called");
}, true);

parent.addEventListener("click", ()=>{
    console.log("parent called");
}, true);

child.addEventListener("click", ()=>{
    console.log("child called");
}, true);

// event listeners are very expensive as they are active every time
// solution -> event delegation
// reduces number of event listeners to handle nested events

const unorderedList = document.getElementById("navbar");
unorderedList.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI")
    {
        console.log(event.target.textContent);
    }
});

// adding new element
const newElement = document.createElement("li");
newElement.innerText= "new element";
unorderedList.appendChild(newElement);