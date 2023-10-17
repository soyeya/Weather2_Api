let weatherBox = document.querySelector(".weather");
const tdSky = document.getElementById("tdSky");
const tdTemp = document.getElementById("tdTemp");
const tdRain = document.getElementById("tdRain");
const tdWindy = document.getElementById("tdWindy");

let today = new Date();
const dates = today.getDate();
const days  = today.getDay();
const months  = today.getMonth() + 1;
const years  = today.getFullYear();
let today_watch = [today.getHours()] + '00';
let all_watch = Number(today_watch);
console.log(today_watch);
console.log(all_watch);

const Days_array = [ "Sunday",  "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday", "Saturday"];
const Month_array = [ "January" , "February" , "March" , "April" , "May" , "Jun" , "July" , "August" , "September" , "Octobor" , "November" , "December"]

const nowDays = Days_array[days];
const nowMonths = Month_array[months];

var all_day = {

     Dates : [dates],
     Days : [nowDays],
     Months : [months],
     Years : [years]
}

console.log(all_day.Dates);
console.log(all_day.Days);
console.log(all_day.Months);
console.log(all_day.Years);


const allToday = all_day.Years + all_day.Months + all_day.Dates;
console.log(allToday);

// if(all_watch > 2230){

    

// }
const SERVICE_KEY = `YoydCVXD8oU6UaQUlDTq3fKhhTqVTHnG3zEp2CPT4l5OpgfWmpJxINRotG7wMSPjNMeHVrXqFumuDhHWxoZikw%3D%3D`;
const API_URL = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=12&dataType=JSON&base_date=${allToday}&base_time=1700&nx=60&ny=127`;

async function getWeather () {

    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    console.log((data.response.body.items));
    console.log((data.response.body.items.item));

    const today_sky = (JSON.stringify(data.response.body.items.item[5].fcstValue));
    const today_temp = (JSON.stringify(data.response.body.items.item[0].fcstValue));
    const today_rain = (JSON.stringify(data.response.body.items.item[6].fcstValue));
    const today_windy = (JSON.stringify(data.response.body.items.item[4].fcstValue));

    const skyBox = today_sky;
    const rainBox = today_rain;
    console.log(skyBox);
    console.log(rainBox);

    var Sky = "";
    var Rain  = "";

function skyContent(){

    if(skyBox <= "1"){
 
        Sky += `맑음`;     

    }else if(skyBox >= "2"){

        Sky += `구름많음`;  

    }else if(skyBox >= "4"){

        Sky += `흐림`;  

    }else{

        console.log('잘못된 전송1');
    }

   };

   skyContent();


    function rainContent(){

        if(rainBox <= "0"){
    
            Rain += `없음`;     
    
        }else if(rainBox <= "1"){
    
            Rain += `있음`; 
    
        }else if(rainBox <= "2"){
    
            Rain += `비/눈있음`; 
    
        }else if(rainBox <= "3"){
    
            Rain += `눈소식있음`; 
    
        }else if(rainBox >= "4"){
    
            Rain += `소나기`; 
    
        }else{
    
           Rain += ``; 
           console.log('잘못된 전송2');
    
        }};
    
        rainContent();
    

    tdSky.textContent =  Sky;
    tdTemp.textContent = `${today_temp} °C`;
    tdRain.textContent = Rain;
    tdWindy.textContent = `${today_windy} ms`;



};

getWeather ();




