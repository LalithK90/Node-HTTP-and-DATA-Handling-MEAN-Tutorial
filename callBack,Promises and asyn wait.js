const userLeft = false;
const userWatchingCatMeme = true;
// ====Using CallBack======== //
// function watchTutorialCallBack(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up')
//     }
// }

// watchTutorialCallBack((message) => {
//     console.log('success' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// }
// )


// ====Using Promise======== //
// function watchTutorialPromise() {
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             errorCallback({
//                 name: 'User left',
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             errorCallback({
//                 name: 'User Watching Cat Meme',
//                 message: 'WebDevSimplified < Cat'
//             })
//         } else {
//             callback('Thumbs up')
//         }
//     })
// }

// watchTutorialPromise().then((message) => {
//     console.log('success' + message)
// }).catch((error) => {
//     console.log(error.name + ' ' + error.message)
// })

// const recordOne = new Promise((resolve,reject)=>{
//     resolve('record One')
// })
// const recordTwo = new Promise((resolve,reject)=>{
//     resolve('record Two')
// })
// const recordThree = new Promise((resolve,reject)=>{
//     resolve('record Three')
// })
// Promise.all([
//     recordOne,
//     recordTwo,
//     recordThree
// ]).then((messages)=>{
//     console.log(messages)
// })
// Promise.race([
//     recordOne,
//     recordTwo,
//     recordThree
// ]).then((message)=>{
//     console.log(message)
// })


// ====Using Asyn await======== //

function makeRequest(){
    return new Promise((resolve, reject)=>{
        console.log(`Making Request to ${location}`)
        if(location==='Google'){
            resolve('Google says ok')
        }else{
            reject(' not response')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('Processing response')
        resolve(`Extra information + ${response}`)
    })
}

// makeRequest('Google').then(response=>{
//     console.log('Response Recived')
//     return processRequest(response)
// }).then(processedResponse=>{
//     console.log(processedResponse)
// }).catch(error=>{
//     console.log(error)
// })

async function doWork(){
    try {
        const response = await makeRequest('Google')
    console.log('Response Receive')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    } catch (error) {
        console.log(error)
    }
    
}

doWork()