const SPAN_CHANGE_COLOR = document.querySelector("span.change-color");

SPAN_CHANGE_COLOR.addEventListener("click", function (event) {
    event.preventDefault();
    document.documentElement.style.setProperty('--bg1', '#f5f5f5');
    document.documentElement.style.setProperty('--bg2', '#D5D4D8');
    document.documentElement.style.setProperty('--color3', '#F47D27');
    document.documentElement.style.setProperty('--color4', '#2B283A');
    document.documentElement.style.setProperty('--color5', '#4A4E74');
    document.documentElement.style.setProperty('--color6', '#918E9B');
    document.documentElement.style.setProperty('--color8', '#2B283A');
    document.documentElement.style.setProperty('--color9', '#4A4E74');
    console.log("test")
})