// Every step Incresed the level -
// Basic Step 1
const promisesOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
promisesOne.then(function () {
    console.log("Promise Consmed");
})


// Short-Length same code
// step 2

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 is complete');
        resolve()
    }, 1000)
}).then(function () {
    console.log("Promise Consmed 2");
})

// step 3 
// Here we return a object form resolve to then
const promisesThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 3 is complete');
        resolve({ username: 'ishaan', email: 'sw@gmail.com' })
    }, 1000)
})
promisesThree.then(function (user) {
    console.log(user);
})

// step 4 

const promisesFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true
        let error = false
        if (!error) {
            console.log('Async task 4 is complete');
            resolve({ username: 'ishaan', email: 'sw@gmail.com' })
        } else {
            reject('ERROR: Somethig is wrong')
        }
    }, 1000)
})
promisesFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);

    })
    .catch((error) => {
        console.log(error);
    }).finally(() => {

    })

// step 5
const promisesFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true
        let error = false
        if (!error) {
            console.log('Async task 4 is complete');
            resolve({ username: 'ishaan', email: 'sw@gmail.com' })
        } else {
            reject('ERROR: Somethig is wrong in js-5')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promisesFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()