console.log("JAY SHREE RAM");

const home_tab = document.querySelector(".home_tab");
const history_tab = document.querySelector(".history_tab");
const architecture_tab = document.querySelector(".architecture_tab");
const galary_tab = document.querySelector(".galary_tab");

const home = document.querySelector(".home");
const history = document.querySelector(".history");
const architecture = document.querySelector(".architecture");
const galary = document.querySelector(".galary");

const more_images_button=document.querySelector(".box3");
const second_page=document.querySelector(".second_page");

home_tab.classList.add("tab");
home.classList.add("activehome");


home_tab.addEventListener("click", () => {
    home_tab.classList.add("tab");
    history_tab.classList.remove("tab");
    architecture_tab.classList.remove("tab");
    galary_tab.classList.remove("tab");

    home.classList.add("activehome");
    history.classList.remove("activehistory")
    architecture.classList.remove("activearchitecture");
    galary.classList.remove("activegalary");

    more_images_button.classList.remove("hide_more");
    second_page.classList.remove("activesecondpage");
    
})
history_tab.addEventListener("click", () => {
    home_tab.classList.remove("tab");
    history_tab.classList.add("tab");
    architecture_tab.classList.remove("tab");
    galary_tab.classList.remove("tab");
    
    home.classList.remove("activehome");
    history.classList.add("activehistory")
    architecture.classList.remove("activearchitecture")
    galary.classList.remove("activegalary")
    more_images_button.classList.remove("hide_more");
    second_page.classList.remove("activesecondpage");
})
architecture_tab.addEventListener("click", () => {
    home_tab.classList.remove("tab");
    history_tab.classList.remove("tab");
    architecture_tab.classList.add("tab");
    galary_tab.classList.remove("tab");
    
    home.classList.remove("activehome");
    history.classList.remove("activehistory");
    architecture.classList.add("activearchitecture");
    galary.classList.remove("activegalary");
    more_images_button.classList.remove("hide_more");
    second_page.classList.remove("activesecondpage");
    
})
galary_tab.addEventListener("click", () => {
    home_tab.classList.remove("tab");
    history_tab.classList.remove("tab");
    architecture_tab.classList.remove("tab");
    galary_tab.classList.add("tab");

    home.classList.remove("activehome");
    history.classList.remove("activehistory")
    architecture.classList.remove("activearchitecture");
    galary.classList.add("activegalary");
    
    more_images_button.classList.remove("hide_more");
    second_page.classList.remove("activesecondpage");
})

function more_images(){
    more_images_button.classList.add("hide_more");
    second_page.classList.add("activesecondpage");
}