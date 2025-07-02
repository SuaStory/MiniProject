let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let playTime = document.getElementById("playTime");
let timer = null;

function stopwatch() {
    milliseconds++;
    if (milliseconds === 60) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    playTime.innerHTML = h + ":" + m + ":" + s + ":" + ms ;
}


function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000/60);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0,0];
    playTime.innerHTML = "00:00:00:00"
}