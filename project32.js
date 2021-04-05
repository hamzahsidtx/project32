var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
hour = datetime.slice(11,13);
backgroundImg = loadImage(bg);

var responseJSON = await response.json();
var datetime = responseJSON.datetime;
if(hour>=04 && hour <= 06){
bg = "sunrise1.png";
}else if(hour>=06 && hour <= 08){
bg = "sunrise2.png";
}else if(hour>=23 && hour ==0){
bg = "sunset10.png"
}else if(hour==0 && hour <= 03){
bg = "sunset11.png"
}else{
bg = "sunset12.png"
}