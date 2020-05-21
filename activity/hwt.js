
// series id=19322,1187684
let seriesId=process.argv[2];
let scoreCardyId=process.argv[3];
//let url=`https://www.espncricinfo.com/series/${seriesId}/commentary/${commentaryId}/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20`
let url=`https://www.espncricinfo.com/series/${seriesId}/scorecard/${scoreCardyId}/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20`
let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
//let url="https://www.espncricinfo.com/series/19322/scorecard/1187686/new-zealand-vs-india-2nd-test-india-in-new-zealand-2019-20"
//console.log(1);
//console.log("work start");
request(url,function(err,response,data){
    console.log("come_bake later")
    //console.log(response);
    if(err==null&&response.statusCode===200){
        //fs.writeFileSync("index.html",data);
        parseHTML(data)
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
    //let text=$("title").text();
    console.log("################################");
    //let AllC=$(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    //let text=$(AllC[0]).text();
    let bowlersArr=$(".table.bowler tbody tr");
    for(let i=0;i<bowlersArr.length;i++){
        let name=$($(bowlersArr[i]).find("td")[0]).text();
        let wicket=$($(bowlersArr[i]).find("td")[4]).text();
        console.log(name+" "+wicket);
    }
    //console.log(text);
    console.log("################################");
}
