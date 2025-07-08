// we cannot keep on using .then() syntax because then the order would not be maintained
// .then() is working synchronously, but setTimeout() is working asynchronously, it keeps on resolving and waits for its turn

const promise1 = new Promise((resolve, reject)=>
{
    setTimeout(()=>{
        resolve("Promise 1");
    }, 2000);
});

promise1
    .then((res) => console.log(res))
        .then(()=>{
            setTimeout(() => {
                console.log("Promise 2");
            }, 10000);
        })
        .then(()=>{
            setTimeout(() => {
                console.log("Promise 3");
            }, 8000);
        })
        .then(()=>{
            setTimeout(() => {
                console.log("Promise 4");
            }, 6000);
        })
        .then(()=>{
            setTimeout(() => {
                console.log("Promise 5");
            }, 4000);
        })
    .catch((err) => console.log(err));

// to maintain a specifir order, make different promises
// after resolving p1, it returns p2

const myPromise1 = new Promise((resolve, reject) =>
{
    setTimeout(()=>{
        resolve("myPromise1");
    }, 4000);
});

const myPromise2 = new Promise((resolve, rejet) => {
    setTimeout(() => {
        resolve("myPromise2");
    }, 2000);
});

const myPromise3 = new Promise((resolve, rejet) => {
    setTimeout(() => {
        resolve("myPromise3");
    }, 6000);
});

myPromise1
    .then((res)=>{
        console.log(res);
        myPromise2
            .then((res)=>{
                console.log(res);
                myPromise3
                    .then((res)=>{
                        console.log(res);
                        console.log("all promises resolved");
                    })
            })
    });

// instead of promises, you can also make functions

function somethingSomething(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("something something");
            resolve("done");
        }, delay);
    });
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise");
    }, 6000);
});

promise
    .then((res) => {
        console.log(res);
        return somethingSomething(4000);
    })
    .then((res) => {
        console.log(res);
        return somethingSomething(8000);
    })
    .then((res) => {
        console.log(res);
    });

// promise apis

const p1 = new Promise((resolve, reject) => {
    if (true)
    {
        resolve("p1");
    }
    else
    {
        reject("error in p1");
    }
});

const p2 = new Promise((resolve, reject) => {
    if (true)
    {
        resolve("p2");
    }
    else
    {
        reject("error in p2");
    }
});

const p3 = new Promise((resolve, reject) => {
    if (false)
    {
        resolve("p3");
    }
    else
    {
        reject("error in p3");
    }
});

const p4 = new Promise((resolve, reject) => {
    if (true)
    {
        resolve("p4");
    }
    else
    {
        reject("error in p4");
    }
});

// fails immediately if any one promise rejects
Promise.all([p1, p2, p3, p4])
    .then((res) => {
        console.log("Promise all");
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// shows the status of all promises
Promise.allSettled([p1, p2, p3, p4])
    .then((res) => {
        console.log("Promise allSettled");
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// shows the first promise to resolve/reject
Promise.race([p1, p2, p3, p4])
    .then((res) => {
        console.log("Promise race");
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// shows the first fulfilled promise
Promise.any([p1, p2, p3, p4])
    .then((res) => {
        console.log("Promise any");
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// async await
// used for fetching data

const assignment = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("working on assignment");
        resolve("assignment completed");
    }, 4000);
});

async function assignmentEval()
{
    var assignmentDetail = await assignment;
    console.log("checking assignment:", assignmentDetail);
}

assignmentEval();

// fetch() -> promise object

async function apiData()
{
    const data = await fetch('https://dummyjson.com/users');
    const myData = await data.json();
    console.log(myData);
}

apiData();

// call(), apply(), bind()
// immediately invoked -> call(), apply()
// call() -> we pass arguments
// apply() -> array of arguments
// works with this keyword
// bind() -> call the function and pass the arguments normally

function assignmentSubmission(studentName, batchNo)
{
    console.log(`Student Name: ${this.studentName}, Batch : ${this.batchNo}`);
}

const student1 = {
    studentName: "ABC", batchNo: "G5"
}
const student2 = {
    studentName: "DEF", batchNo: "G6"
}
const student3 = {
    studentName: "GHI", batchNo: "G7"
}

assignmentSubmission.call(student1);