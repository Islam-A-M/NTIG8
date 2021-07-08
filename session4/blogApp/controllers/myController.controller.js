
const home = (req, res) => {
    let images = [
        {ind:true, src :"/images/1.jpg", alt :"image 1"}, 
        {ind:false, src :"/images/2.jpg", alt :"image 1"}, 
        {ind:false, src :"/images/3.jpg", alt :"image 1"}
    ]
    res.render('home', {data: images, title:"home page"})
}

const getApiData = ( url, cb ) =>{
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
let api = require('http')
console.log(regex.test(url));
    if (regex.test(url)) {
        console.log('is https');
        api = require('https')
    }else{
        console.log('no https');

    }
    const request = api.request(url, (response)=>{
    let result = ''
    response.on('data', (chunk)=>{
        console.log(chunk.toString())
        result +=chunk.toString()
    })
    response.on('end', ()=>{
        const all = JSON.parse(result)
        console.log(all)
        cb(all, false)
    })
    })
    request.on('error',(err)=>  {console.log(err); cb(false, 'error')})
    request.end()
}

const renderApiData = (req,response) =>{
    url= "https://jsonplaceholder.typicode.com/photos?_limit=20"
    getApiData(url, (res, err)=>{
        if(err) response.send(err)
        response.render('contact', {data:res, title:'all images'})
    })
}
const task1RenderApiData = (req,response) =>{
    url= `http://medical.mind-techs.com/api/blog/${req.params.langId}/0/${req.params.pgNumber}`
    getApiData(url, (res, err)=>{
        if(err) response.send(err)
        console.log(res);

        response.render('task_all', {data:res.data, title:'All data'})
    })
}
const task2RenderApiData = (req,response) =>{
    url= `http://medical.mind-techs.com/api/SingleBlog/${req.params.articleID}/${req.params.langId}`
    getApiData(url, (res, err)=>{
        if(err) response.send(err)
    console.log(res);
       // response.render('contact', {data:res, title:'all images'})
    })
}
const getSingle = (req,response)=>{
    url= `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    getApiData(url, (res, err)=>{
        if(err) response.send(err)
        response.render('single', {data:res, title:'all images'})
    })


}
module.exports = {
    home,
    renderApiData,
    task1RenderApiData,
    task2RenderApiData,
    getSingle
}