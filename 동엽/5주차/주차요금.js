// function solution(fees, records) {
//     var answer = new Array();
//     const cost = new Array();
//     let carlist = new Array();
//     const lasttime = 23*60+59;
//     for(const i of records){
//         const sep = i.split(' ');
//         sep[0]= parseInt(sep[0].substr(0,2))*60+parseInt(sep[0].substr(3,2))
//         carlist.push(sep)
//     }
//     carlist.sort((a,b)=>{return parseInt(a[1])-parseInt(b[1])})
//     answer.push({"carnumber":carlist[0][1],"time":carlist[0][0],"type":"IN"})
//     for(let i=1; i<carlist.length; i++){
//         if(carlist[i][1] == answer[answer.length-1]["carnumber"]){
//             if(carlist[i][2] == "IN"){
//                 answer[answer.length-1]["time"] += carlist[i][0]
//                 answer[answer.length-1]["type"] = "IN";
//             }else if(carlist[i][2] == "OUT"){
//                 answer[answer.length-1]["time"] -= carlist[i][0];
//                 answer[answer.length-1]["type"] = "OUT"
//             }
//         }else{
//             if(answer[answer.length-1]["type"] == "IN"){
//                 answer[answer.length-1]["time"] -= lasttime
//             }
//             answer.push({"carnumber":carlist[i][1],"time":carlist[i][0],"type":"IN"})
//         }
//     }
//     if(answer[answer.length-1]["type"] == "IN"){
//                 answer[answer.length-1]["time"] -= lasttime
//             }
//     for(const i of answer){
//         if(Math.abs(i["time"])-fees[0]>0){
//             cost.push(fees[1]+Math.ceil((Math.abs(i["time"])-fees[0])/fees[2])*fees[3])
//         }else{
//             cost.push(fees[1])
//         }
//     }
//     return cost;
// }

function solution(fees,records){
    let parkingcar = {};
    let answer = new Array();
    let maxtime = 60*23+59
    records.forEach(e=>{
        let [time,carnumber,type] = e.split(' ')
        let [h,m] = time.split(':')
        time = h*60 + parseInt(m)
        if(!parkingcar[carnumber]) parkingcar[carnumber] = 0;
        if(type == 'IN') parkingcar[carnumber] += maxtime - time;
        if(type== 'OUT') parkingcar[carnumber] -= maxtime - time;
    })
    for(const [carnumber,time] of Object.entries(parkingcar)){
        if(fees[0]<time){
            answer.push([carnumber,Math.ceil((time-fees[0])/fees[2])*fees[3]+fees[1]])
        }else{
            answer.push([carnumber,fees[1]])
        }            
    }
    answer = answer.sort((a,b)=>a[0]-b[0]).map(e=>e[1])
    return answer
    
}