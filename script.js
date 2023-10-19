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
const today_watch = [today.getHours() + "00"];
console.log(today_watch);

const timeContent =  Number(today_watch);
console.log(timeContent);

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


var TimeTable = "";

function weatherTime(){

  if(timeContent <= 200 || timeContent <= 300 || timeContent <= 400){

    TimeTable = "0200";

  }else if(timeContent <= 500 || timeContent <= 600 || timeContent <= 700){
    
    TimeTable = "0500";

  }else if(timeContent <= 800 || timeContent <= 900 || timeContent <= 1000){
    
    TimeTable = "0800";

  }else if(timeContent <= 1100 || timeContent <= 1200 || timeContent <= 1300){
    
    TimeTable = "1100";

  }else if(timeContent <= 1400 || timeContent <= 1500 || timeContent <= 1600){
    
    TimeTable = "1400";

  }else if(timeContent <= 1700 || timeContent <= 1800 || timeContent <= 1900){
    
    TimeTable = "1700";

  }else if(timeContent <= 2000 || timeContent <= 2100 || timeContent <= 2200){
    
    TimeTable =  "2000";

  }else if(timeContent <= 2300 || timeContent <= 2400){
    
    TimeTable =  "2300";

  }else{

    console.log('전송오류');
  }

  console.log(TimeTable);
   
};

    
    weatherTime();
    
    
        const allToday = all_day.Years + all_day.Months + all_day.Dates;
        console.log(allToday);
        const SERVICE_KEY = `YoydCVXD8oU6UaQUlDTq3fKhhTqVTHnG3zEp2CPT4l5OpgfWmpJxINRotG7wMSPjNMeHVrXqFumuDhHWxoZikw%3D%3D`;
        const API_URL = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=12&dataType=JSON&base_date=${allToday}&base_time=${TimeTable}&nx=60&ny=127`;

        //공공데이터 포털에서 기상청 api_연장신청해줘야작동함!

const weatherImg = [

    "./img/icon1.svg",
    "./img/icon2.svg",
    "./img/icon3.svg",
    "./img/icon4.svg",
    "./img/icon5.svg",
    "./img/icon6.svg",
    "./img/icon7.svg",
];

let weatherIcon = document.querySelector(".weatherIcon");


async function getWeather () {
    

    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    console.log((data.response.body.items));
    console.log((data.response.body.items.item));

    const today_sky = (JSON.stringify(data.response.body.items.item[5].fcstValue));
    const today_temp = (JSON.stringify(data.response.body.items.item[0].fcstValue));
    const today_rain = (JSON.stringify(data.response.body.items.item[6].fcstValue));
    const today_windy = (JSON.stringify(data.response.body.items.item[4].fcstValue)); //정확하게 가져오려는 데이터의 이름을 차례로 기입해야함

    const skyBox = today_sky;
    const rainBox = today_rain;
    console.log(typeof(skyBox));
    console.log(rainBox);

    var Sky = "";
    var Rain  = "";

    function skyContent(){

        if(skyBox == '"1"'){
    
            Sky += `맑음`;   
            weatherIcon.innerHTML =  `<img src=${weatherImg[0]} alt="img1" class="nowIcon">`;   
    
        }else if(skyBox == '"2"'){
    
            Sky += `구름많음`;  
            weatherIcon.innerHTML =  `<img src=${weatherImg[4]} alt="img1" class="nowIcon">`; 
    
        }else if(skyBox == '"3"'){
    
            Sky += `구름과 흐림 그 사이`;  
            weatherIcon.innerHTML =  `<img src=${weatherImg[1]} alt="img1" class="nowIcon">`; 
    
        }else if(skyBox == '"4"'){
    
            Sky += `흐림`;  
            weatherIcon.innerHTML =  `<img src=${weatherImg[4]} alt="img1" class="nowIcon">`; 
    
        }else{
    
           console.log('skybox 전송오류');
        }
    
    
       };
    
       skyContent();
    
    
        function rainContent(){
    
            if(rainBox == '"0"'){
        
                Rain += `없음`;     
        
            }else if(rainBox == '"1"'){
                Rain += `있음`; 
        
            }else if(rainBox == '"2"'){
        
                Rain += `비/눈있음`; 
        
            }else if(rainBox == '"3"'){
        
                Rain += `눈소식있음`; 
        
            }else if(rainBox == '"4"'){
        
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




