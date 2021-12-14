let settingsmenu=document.querySelector(".settings-menu");
let darkbtn=document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if(localStorage.getItem("theme")=="light")
    {
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}
if(localStorage.getItem("theme")=="light")
{
    darkbtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;
  
  