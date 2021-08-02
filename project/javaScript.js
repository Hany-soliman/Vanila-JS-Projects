// asynchronous

// let stock = {
//     Fruit : ["strawberry", "grapes", "banana", "apple"],
//     liquid : ["water", "ice"],
//     holder : ["cone", "cup", "stick"],
//     toppings : ["chocolate", "vanila"]
// };


// callback hell


// let order = (fruit, callProd)=>{

//     setTimeout(()=>{
// console.log(`${stock.Fruit[fruit]}`)
// callProd(); 
//     },2000)
       
// };

// let prod = ()=>{

//     setTimeout(()=>{
//         console.log("received")
//         setTimeout(()=>{
//             console.log("fruit is done")
//             setTimeout(()=>{
//                 console.log(`${stock.liquid[0]} and ${stock.liquid[1]}`)
//                 setTimeout(() => {
//                     console.log("started")
//                     setTimeout(() => {
//                         console.log(`${stock.holder[0]}`)
//                         setTimeout(() => {
//                             console.log(`${stock.toppings[0]}`)
//                             setTimeout(() => {
//                                 console.log("served")
//                             }, 2000);
//                         }, 3000);
//                     }, 1000);
//                 }, 1000);
//             },1000)
//         }, 2000)
//     },1000)

    
    
    
// };

// order('1',prod);



//  promises


// let open = true;

// let order = (time, work)=>{

//     return new Promise((resolve, reject)=>{
// if(open){

//     setTimeout(() => {
//         resolve(work())
//     }, time);
    
// } else {
//     reject(console.log("closed"))
// }
//     })
// }

// order(2000,()=>console.log(`${stock.Fruit[0]}`))

// .then(()=>{
//     return order(0000, ()=>{console.log('started')})
// })

// .then(()=>{
//     return order(2000, ()=>{console.log('chopped')})
// })

// .then(()=>{
//     return order(1000, ()=>{console.log(`${stock.liquid[0]} and ${stock.liquid[1]}`)})
// })

// .then(()=>{
//     return order(1000, ()=>{console.log('Started')})
// })

// .then(()=>{
//     return order(2000, ()=>{console.log(`${stock.holder[0]}`)})
// })

// .then(()=>{
//     return order(3000, ()=>{console.log(`${stock.toppings[0]}`)})
// })

// .then(()=>{
//     return order(1000, ()=>{console.log('served')})
// })


// .catch(()=>{
//     console.log('customer left')
// })

// .finally(()=>{
//     console.log("done")
// })

// let open = true

// let choice = ()=>{
//     return new Promise ( (resolve, reject) =>{
//         setTimeout(() => {
//             resolve(console.log('got it'))
//      }, 3000);
//     })
// }

// async function order(){

//     try{
//     console.log('1')
//     console.log('2')
//     console.log('3')
//     await choice()
//     console.log('4')
//     console.log('5')
//     }
    
//     catch(error){
//         console.log(error)
//     }
//     finally{
//         console.log('done')
//     }
// }

// order()

// console.log('rest of code')


// let open = true


// function time(ms){
//     return new Promise( (resolve, reject)=>{
//         if (open){
//             setTimeout(resolve,ms)
//         }else{
//             reject('console.log("closed")')
//         }
//     })
// }

// async function kitchen(){
//     try{
//         await time(2000)
//         console.log(`${stock.Fruit[0]}`)
//     }

//     catch(error){
//         console.log(error)
//     }
//     finally{
//         console.log("done")
//     }
// }

// kitchen()




// Promise


// let p = new Promise((resolve,reject)=>{
//     let a = 1 + 1
//     if(a == 2){
//         resolve("cool")
//     }else{
//         reject('failed')
//     }
// })


// p.then((message)=>{
//     console.log('this is in the then ' + message)
// }).catch((message)=>{
//     console.log('this is the catch '+ message)
// })


// callback


// const userLeft = true
// const userWatching = true

// function watchingCallbackTutorial(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: 'Oh no!'
//         })
//     }else if(userWatching){
//         errorCallback({
//             name: 'User watching',
//             message: 'oh yea'
//         })
//     }else{
//         callback('Thumbs up')
//     }
// }

// watchingCallbackTutorial((message)=>{
//     console.log('success: ' + message)
// }, (error=>{
//     console.log(`${error.name} ${error.message}`)
// }))

// function watchingPromiseTutorial(){
//     return new Promise((resolve, reject)=>{
//         if(userLeft){
//             reject({
//                 name: 'user left.',
//                 message: 'oh no!'
//             })
//         } else if(userWatching){
//             reject({
//                 name: 'User watching.',
//                 message: 'hot damn'
//             })
//         }else{
//             resolve("success!!!!!")
//         }
//     })
// }

// watchingPromiseTutorial()
// .then((message) =>{
//     console.log(`success ${message}`)
// })
//     .catch((error)=>{
//         console.log(`${error.name} ${error.message}`)
//     })


// const one = new Promise( (resolve, reject) =>{
//     resolve('task 1')
// } )

// const two = new Promise( (resolve, reject) =>{
//     resolve('task 2')
// })

// const three = new Promise( (resolve, reject) =>{
//     resolve('task 3')
// })

// // run all promises at the same time
// Promise.all([
//     one,
//     two,
//     three
// ])
// .then((messages) =>{
//     console.log(messages)
// })

// // get the result as soon as one of the functions are completed

// Promise.race([
//     one,
//     two,
//     three
// ])

// .then((messages)=>{
//     console.log(messages)
// })




// Actuall example of callbacks

// const posts = [
//     {title: 'post one', body:'this is post one'},
//     {title: 'post two', body:'this is post two'}
// ]

// function getPosts(){
//     setTimeout(() => {
//         let output = ''
//         posts.forEach(post => {
//             output += `<li>${post.title}</li>
//             <p>${post.body}</p>`
//         });
//         document.body.innerHTML = output
//     }, 1000);
// }

// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000);
// }



// createPost({title: 'post three', body:'this is post three'}, getPosts)



const posts = [
    {title: 'post one', body:'this is post one'},
    {title: 'post two', body:'this is post two'}
]



function getPosts(){
    setTimeout(() => {
        let output = ''

        posts.forEach(post => {
            output += `<li>${post.title}</li>
            <p>${post.body}</p>`
        });
        document.body.innerHTML = output
    }, 1000);
}

function createPost(post){
    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
        posts.push(post)
        const error = false
        if(!error){
            resolve()
        }else{
            reject('error!!')
        }
        }, 2000)
       
        
    })


}

// createPost({title:'post three', body:'this is post three'})
// .then(getPosts)
// .catch(err=> console.log(err))

async function init(){
    await createPost({title:'post three', body:'this is post three'})
    getPosts()
}
async function fetchUsers(){
    await init()
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')

    const data = await res.json()

    console.log(data)
    
}




fetchUsers()




// const promise1 = Promise.resolve('hello world')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject)=>{
// setTimeout(resolve, 2000, 'goodBye')
// })

// const promise4 = fetch ('https://jsonplaceholder.typicode.com/users')
// .then(res=> res.json())

// Promise.all([
//     promise1,
//     promise2,
//     promise3,
//     promise4
// ]).then(messages=> console.log(messages))
// .then(createPost({title:'post three', body:'this is post three'}))
// .then(getPosts)