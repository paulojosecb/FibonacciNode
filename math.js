// var fibonacci = exports.fibonacci = function(n, callback) {
//     const num = parseInt(n)
//     if (num === 1) {
//         callback(1)
//     } 
//     else if (num === 2) { 
//         callback(1)
//     } else {
//         fibonacci(n-1, (firstResult) => {
//             fibonacci(n-2, (secondResult) => {
//                 callback(firstResult + secondResult)
//             })
//         })
//     };
// }

var fibonacci = exports.fibonacci = function(n, callback) {
    const num = parseInt(n)
    if (num === 1) {
        callback(1)
    } 
    else if (num === 2) { 
        callback(1)
    } else {
        setImmediate(() => {
            fibonacci(n-1, (firstResult) => {
                setImmediate(() => {
                    fibonacci(n-2, (secondResult) => {
                        callback(firstResult + secondResult)
                    })
                })
            })
        })
    };
}


// var fibonacci = exports.fibonacci = function(n) {

//     return new Promise(async (resolve, reject) => {
//         const num = parseInt(n)
//         if (num === 1) {
//             resolve(1)
//         } 
//         else if (num === 2) { 
//             resolve(1)
//         } else {
//             try {
//                 const first = await fibonacci(n-1)
//                 const second = await fibonacci(n-2)
//                 resolve(first + second)
//             } catch (err) {
//                 reject(0)
//             }
//         };
//     })


// }

// var fibonacci = exports.fibonacci = function(n) {
//     const num = parseInt(n)
//     if (num === 1) {
//         return(1)
//     } 
//     else if (num === 2) { 
//         return(1)
//     } else {
//         return(fibonacci(n-1) + fibonacci(n-2))
//     };
// }