let dark = document.getElementById("dark");
let classList = document.body.classList;


if (localStorage.getItem("mode") === null) {
    localStorage.setItem("mode","sun");
}

let localData = localStorage.getItem("mode");

if (localData === "sun") {
    dark.src = "images/moon.png";
    document.body.classList.remove("dark-mode");
}else if (localData === "moon") {
    dark.src = "images/sun.png";
    document.body.classList.add("dark-mode");
}

dark.onclick = () => {
    classList.toggle("dark-mode")
    if (classList.contains("dark-mode")) {
        dark.src = "images/sun.png"; 
        localStorage.setItem("mode","moon");       
    }else{
        dark.src = "images/moon.png";
        localStorage.setItem("mode","sun");
    }
}