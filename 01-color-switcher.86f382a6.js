const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(()=>{timerID=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(timerID)}));
//# sourceMappingURL=01-color-switcher.86f382a6.js.map
