let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
let url="https://www.espncricinfo.com/series/19322/scorecard/1187686/new-zealand-vs-india-2nd-test-india-in-new-zealand-2019-20"
//console.log(1);
//console.log("work start");
request(url,function(err,response,data){
    console.log("come_bake later")
    //console.log(response);
    if(err==null&&response.statusCode===200){
        //fs.writeFileSync("index.html",data);
        parseHTML(data);
    }else if(response.statusCode==404){
        console.log("page not found")
    }else{
        console.log(err);
        console.log(res.statusCode)
    }
})
//console.log("doing other stuff");
function parseHTML(data){
    //page=>cheerio
    let $=cheerio.load(data);
    //page => selector pass=> text=>text
    let text=$("title").text();
    console.log(text);
}