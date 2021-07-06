//clousers
// const counter = () =>{
//     c=10
//     return {
//         c,
//         inc(){ c++},
//         dec(){c--},
//         read(){return c}
//     }
// }
// const x  = counter()
// x.inc()
// x.dec()
// console.log(x.read())

// const myClouser = (a,b)=>{
//     result = 0
//     return{
//         add() { result += a+b},
//         sub() { result += a-b},
//         show() { return result},
//         result
//     }
// }
// let x = myClouser(5,3)
// x.add()
// x.sub()
// console.log(x.show())
// z = 0
// console.log('a')
// setTimeout((z=5, x, y, w)=>{ console.log('b')}, 2000)
// console.log('c')
// console.log(z)

//callback
// const test = (x, cb) => {
//     setTimeout(()=>{
//         if(typeof x=="number") cb(true, false)
//         else cb(false, true)
//     }, 2000)
// }

// test(5, (err, res)=>{
//     if(err) return console.log('error')
//     console.log('done')
// })

//promises
// const myPromise = (val) => new Promise( (resolve, reject)=>{
//     setTimeout(()=>{
//         typeof val == "number"? resolve(val**3) : reject('da msh rkm')
//     }, 2000)   
// })

// console.log(myPromise(4))

// then catch
// myPromise('hello').then((data)=> console.log(data), (err)=>console.log(err))//.catch(err=> console.log(err))
//async await
// const myFun = async()=>{
//     try{
//         x= await myPromise('hello')
//         await myPromise(9)
//         await myPromise(14)
//         console.log(x)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// myFun()

//api read (fetch) https://jsonplaceholder.typicode.com/users
p = document.querySelector('#content-wrapper')
const createCustomElements = function(parent, elementTag, classes, textContent, attributes){
    myNewElement = document.createElement(elementTag)
    myNewElement.classList = classes
    myNewElement.textContent = textContent
    attributes.forEach(attr=>{
        myNewElement.setAttribute(attr.attrName, attr.attrValue)
    })
    parent.appendChild(myNewElement)
    return myNewElement
}
showSinglePhoto = (element)=>{
    console.log(element)
    const mainDiv = createCustomElements(p, 'div', 'col-4 p-3 y', '', []) 
    const mainDiv2 = createCustomElements(mainDiv, 'div', 'border border-3 border-primary m-3 p-3 x', '', []) 
    createCustomElements(mainDiv2,'img','',element.url, [{attrName:"src",attrValue:element.url}])
    
}
const myApiCall = async(cb) =>{
    let data = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
    let x = await data.json()
    // return(x)
    //console.log(x)
    cb(x)
    ////////////////////
}
showAllData=(data)=>{
    console.log(data)
    data.forEach(element => {
        showSinglePhoto(element)  
    });
}
myApiCall(data=> showAllData(data))


