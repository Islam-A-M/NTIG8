// request http/https
// const request = require('request')
const url = "https://jsonplaceholder.typicode.com/users"
const https = require('https')
const getReq = (cbFunc,onErrorFunc)=>{
    const request = https.request(url, (response)=>{
        let result = ''
        response.on('data', (chunk)=>{
            console.log(chunk.toString())
            result +=chunk.toString()
        })
        response.on('end', ()=>{
            const all = JSON.parse(result)
            
            cbFunc(all)
        })
    })
    
    request.on('error',(err)=> onErrorFunc(err))
    request.end()
}
getReq((data)=>console.log(data),(err)=>console.log(err))
// let x = []
// test =(cb)=>{
//      request( { url , json:true} , (err, {body})=>{
//         if(err) console.log('fe error')
        // if(res.body.err)
        // else {
            // console.log(res.body)
            // cb(body)
            // return body
//         }
//     } )
// }
// test((x)=>  console.log(x))
