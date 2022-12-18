const sombre = document.querySelector("#btn1")
let body = document.querySelector("body")

sombre.addEventListener("click", function (e) {
    if(body.classList.contains("light")){
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else{
        body.classList.remove("dark");
        body.classList.add("light");
    }
})

const navbar = document.getElementById("elementA")

navbar.style.backgroundColor = "#9585B5";
navbar.style.color = "white";
navbar.style.borderRadius= "20px 20px";
