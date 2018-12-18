function toggleRoadmap(obj) {
    
    if (obj.innerHTML == "Hide") {
        document.getElementById("roadmap").getElementsByTagName("h3")[0].style.display = "none"
        document.getElementById("roadmap").getElementsByTagName("ul")[0].style.display = "none"
        obj.innerHTML = "Show roadmap"
    } else {
        document.getElementById("roadmap").getElementsByTagName("h3")[0].style.display = "block"
        document.getElementById("roadmap").getElementsByTagName("ul")[0].style.display = "block"
        obj.innerHTML = "Hide roadmap"
    }
};