btn.style.backgroundColor = "black"
btn.style.color = "white"

let mySelectHrs = document.getElementById(`selectHrs`)
let mySelectMin = document.getElementById(`selectMin`)
let mySelectMeri = document.getElementById(`selectMeri`)

let selectedHrsVal;
let selectedMinVal;
let selectedMeriVal;


let dHrs,dMin
let adjustedHours,adjustedMinutes
let myAudio
let adjMeri



 setAlarm = (event) =>{
   if (event.target.innerText === "Set Alarm") {
    selectedHrsVal = mySelectHrs.value
    selectedMinVal = mySelectMin.value
    selectedMeriVal = mySelectMeri.value
    btn.style.color = "grey"
   }
   else if(event.target.innerText === "Stop Alarm"){
    myAudio.pause()
    myAudio.currentTime = 0;
    btn.style.color = "grey"
    alert("Pls refresh your browser to reset Alarm")
   }
}



alarm = () => {
    let originalDate = new Date();

    dHrs = originalDate.getHours()
    dMin = originalDate.getMinutes()
    dSec = originalDate.getSeconds() 


    adjustedHours = dHrs < 10 ? "0" + dHrs : dHrs
    adjustedMinutes = dMin < 10 ? "0" + dMin : dMin
    adjustedSeconds = dSec < 10 ? "0" + dSec : dSec


    dHrs == 13 ? adjustedHours = "0" + 1 :1
    dHrs == 14 ? adjustedHours = "0" + 2 :2
    dHrs == 15 ? adjustedHours = "0" + 3 :3
    dHrs == 16 ? adjustedHours = "0" + 4 :4
    dHrs == 17 ? adjustedHours = "0" + 5 :5
    dHrs == 18 ? adjustedHours = "0" + 6 :6
    dHrs == 19 ? adjustedHours = "0" + 7 :7
    dHrs == 20 ? adjustedHours = "0" + 8 :8
    dHrs == 21 ? adjustedHours = "0" + 9 :9
    dHrs == 22 ? adjustedHours = 10 :10
    dHrs == 23 ? adjustedHours = 11 :11
    dHrs == 24 ? adjustedHours = 12 :12   

    

    if (dHrs <= 12 ) {
        adjMeri = "AM"
        demo.innerText = adjustedHours + ":" + adjustedMinutes + ":" + adjustedSeconds + " "  + adjMeri
    }
    else if (dHrs >=13){
        adjMeri = "PM"
        demo.innerText = adjustedHours + ":" + adjustedMinutes + ":" + adjustedSeconds + " "  + adjMeri
    }

    

    if ( selectedHrsVal == adjustedHours && selectedHrsVal != "" && selectedMinVal== adjustedMinutes && selectedMinVal != "" && adjustedSeconds =="00" && selectedMeriVal == adjMeri) {
        myAudio = new Audio("https://cdn.trendybeatz.com/audio/Seyi-Vibez-Ft-Zlatan-Professor-Peller-(TrendyBeatz.com).mp3");
        myAudio.play();
        btn.style.color = "orangered"
        btn.innerText = "Stop Alarm"
    }
    
}


setInterval(alarm, 1000)
alarm()

