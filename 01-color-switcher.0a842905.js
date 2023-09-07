!function(){let e;let t=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),o=document.querySelector("body");function r(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}d.disabled=!0,t.addEventListener("click",()=>{o.style.backgroundColor=`${r()}`,t.disabled=!0,d.disabled=!1,e=setInterval(()=>{o.style.backgroundColor=`${r()}`},1e3)}),d.addEventListener("click",()=>{clearInterval(e),t.disabled=!1,d.disabled=!0})}();//# sourceMappingURL=01-color-switcher.0a842905.js.map

//# sourceMappingURL=01-color-switcher.0a842905.js.map
