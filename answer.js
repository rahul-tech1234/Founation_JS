//Ques 01 
function describeValue(value) {
    const dataType=typeof(value);
   
    if (dataType == "string" && value) {
        return "string | truthy";
    }else if(dataType == "string" && !value){
        return "string | falsy";
    }else if(dataType == "number" && value){
        return "number | truthy";
    }else if(dataType == "number" && !value){
        return "number | falsy";
    }else if(dataType=="boolean" && value){
        return "boolean | truthy";
    }else if(dataType == "boolean" && !value){
        return "boolean | falsy";
    }else if(dataType == "object"){
        return "objet | falsy";
    }else{
        return "undefined | false";
    }
}

//Quse 02
function getDayType(day){
    const toLowerCase=day.toLowerCase().trim();
    
switch (toLowerCase) {
  case "friday":
  case "saturday":
    return "Weekend";
  case "sunday":
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
    return "Working Day";

  default:
    return "Invalid Day";
}
}
// Ques 03
function validateUsername(user){
    const userName=user;
    if(user.length < 4){
        return "Too Short";
    }else if(user.includes(" ")){
        return "No Space Allowed";
    }else if(user.toLowerCase().includes("admin")){
        return "Reserved Word"
    }else{
        return "Avalable";
    }
}
//Ques 04
function getCngFare(distance,isNight=false,waitingMinutes=0){
    if (distance > 2 && !isNight && !waitingMinutes){
        const describeValue=distance -2;
        const totalFare=50+describeValue *15;
        return totalFare;
    }else if(distance > 2 && !isNight && waitingMinutes){
        const describeValue=distance -2;
        const totalFare=50+(describeValue *15) + (waitingMinutes *2);
        return totalFare;
    }else if(distance > 2 && isNight){
        const describeValue=distance -2;
        const totalFare=50+(describeValue *15) + (waitingMinutes *2);
        const final=totalFare +(totalFare*0.2);
        return final;
    }else{
        return 50;
    }
}
//Ques 05
function getChaseVerdict(target,score,ballsLeft){
    const runsNeeded=target-score;
    const requireRate=(runsNeeded /ballsLeft)*6;
    if(runsNeeded <= 0){
        return "Won";
    }else if(ballsLeft <= 0){
        return "Lost"
    }else if(requireRate <= 6){
        return `Need ${runsNeeded} runs in ${ballsLeft} | Comfortable`;
    }else if(requireRate >6 && requireRate <12){
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
    }else{
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }
}
console.log(getChaseVerdict(200,200,12))
console.log(getChaseVerdict(100,90,0))
console.log(getChaseVerdict(100,90,12))
console.log(getChaseVerdict(100,80,12))
console.log(getChaseVerdict(100,70,12))
console.log(getChaseVerdict(150,149,1))