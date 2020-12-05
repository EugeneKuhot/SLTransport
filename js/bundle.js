(()=>{"use strict";!function(){const e=document.querySelector(".greetings__text"),t=document.querySelector(".greetings__title"),o=document.querySelector(".greetings__start-btn"),c=document.querySelector(".greetings__desc-block"),s=document.querySelector(".header"),r=document.querySelector(".greetings__mobile-list");function n(){e.classList.add("onload"),c.classList.add("onload"),setTimeout((function(){t.classList.add("onload")}),300),setTimeout((function(){r.classList.add("onload")}),450),setTimeout((function(){o.classList.add("onload")}),600)}window.addEventListener("load",(function(){s.classList.add("onload"),setTimeout(n,500)}))}(),function(){const e=document.querySelector("#popup-form"),t=document.querySelector("#contact-form"),o=e.querySelector("#modal-contact-file"),c=e.querySelector(".contact-form__file-label span"),s=t.querySelector("#contact-file"),r=t.querySelector(".contact-form__file-label span");function n(e,t){t.textContent=e.value.replace("C:\\fakepath\\","")}o.addEventListener("change",(function(){n(o,c)})),s.addEventListener("change",(function(){n(s,r)}))}(),function(){const e=document.querySelector(".contact-form__wrap"),t=document.querySelector(".header__start-btn"),o=document.querySelector(".greetings__start-btn"),c=e.querySelector(".close-btn");function s(){e.classList.add("opened-form")}t.addEventListener("click",s),o.addEventListener("click",s),c.addEventListener("click",(function(){e.classList.remove("opened-form")})),window.openForm={getFormPopup:s,formWrap:e}}(),function(){const e=document.querySelector(".js-poland-btn"),t=document.querySelector(".js-ukraine-btn"),o=document.querySelector(".js-poland-phone"),c=document.querySelector(".js-ukraine-phone");e.addEventListener("click",(function(){e.classList.add("active"),t.classList.remove("active"),o.style="display: block;",c.style="display: none;"})),t.addEventListener("click",(function(){e.classList.remove("active"),t.classList.add("active"),o.style="display: none;",c.style="display: block;"}))}(),function(){const e=document.querySelector(".workers"),t=e.querySelectorAll(".workers__tabs-item button"),o=[document.querySelector(".js-project-wrap"),document.querySelector(".js-developing-wrap"),document.querySelector(".js-support-wrap")];t.forEach((e=>e.addEventListener("click",(function(){var c;c=e,t.forEach((e=>e.classList.remove("active"))),c.classList.add("active"),function(){t.forEach((e=>e.setAttribute("disabled","true")));for(let e=0;e<o.length;e++)t[e].classList.contains("active")&&(o.forEach((function(e){e.classList.contains("add-worker")&&(e.classList.remove("add-worker"),e.classList.add("remove-worker")),e.classList.contains("remove-worker")&&e.classList.remove("remove-worker")})),o[e].classList.add("add-worker"),t.forEach((e=>e.removeAttribute("disabled","true"))))}()}))));const c=e.querySelector(".js-webdesigner-btn"),s=e.querySelector(".js-graphdesigner-btn"),r=e.querySelector(".js-webdesign"),n=e.querySelector(".js-graphdesign");function i(e,t){r.classList.add("hidden"),n.classList.add("hidden"),c.classList.remove("active"),s.classList.remove("active"),e.classList.remove("hidden"),t.classList.add("active")}c.addEventListener("click",(function(){i(r,c)})),s.addEventListener("click",(function(){i(n,s)}))}(),function(){let e=document.querySelector(".services"),t=e.querySelectorAll(".services__tabs-item button"),o=[document.querySelector(".services__webpages-wrap"),document.querySelector(".services__webmarketing-wrap"),document.querySelector(".services__design-wrap"),document.querySelector(".services__copywrite-wrap")];t.forEach((e=>e.addEventListener("click",(function(){var c;c=e,t.forEach((e=>e.classList.remove("active"))),c.classList.add("active"),function(){for(let e=0;e<o.length;e++)t[e].classList.contains("active")&&(o.forEach((e=>e.classList.remove("active"))),o.forEach((e=>e.classList.remove("slide-in-blurred-bottom"))),o[e].classList.add("active"),o[e].classList.add("slide-in-blurred-bottom"),o[e].querySelectorAll("button").forEach((e=>e.classList.remove("active"))),o[e].querySelector("button").classList.add("active"))}()}))));let c=e.querySelectorAll(".services__service-list button");c.forEach((t=>t.addEventListener("click",(function(){var o;!function(t){if(!t.classList.contains("active")){let o=t.parentElement.parentElement.parentElement.querySelectorAll(".services__tab-desc");o.forEach((e=>e.classList.add("hidden"))),o.forEach((e=>e.classList.remove("slide-in-blurred-bottom")));let c=t.classList+"-block",s=e.querySelector("."+c);s.classList.remove("hidden"),s.classList.add("slide-in-blurred-bottom")}}(t),o=t,c.forEach((e=>e.classList.remove("active"))),o.classList.add("active")}))))}(),function(){const e=[document.querySelector(".about-us"),document.querySelector(".workers"),document.querySelector(".services"),document.querySelector(".portfolio"),document.querySelector(".contact")],t=new IntersectionObserver((function(e,t){e.forEach((e=>{e.isIntersecting&&e.target.classList.add("animated")}))}),{threshold:.4});e.forEach((e=>t.observe(e)))}(),function(e,t){let o=document.querySelector(".slider"),c=o.querySelector(".slider__wrapper"),s=o.querySelectorAll(".slider__item"),r=o.querySelectorAll(".slider__control"),n=o.querySelector(".slider__control_left"),i=o.querySelector(".slider__control_right"),l=parseFloat(getComputedStyle(c).width),a=parseFloat(getComputedStyle(s[0]).width),d=0,u=0,m=a/l*100,f=[];s.forEach((function(e,t){f.push({item:e,position:t,transform:0})}));let v=f.length-1,L=function(e){if(e.target.classList.contains("slider__control")){e.preventDefault(),function(e){if("right"===e){if(d+l/a-1>=v)return;n.classList.contains("slider__control_show")||n.classList.add("slider__control_show"),i.classList.contains("slider__control_show")&&d+l/a>=v&&i.classList.remove("slider__control_show"),d++,u-=m}if("left"===e){if(d<=0)return;i.classList.contains("slider__control_show")||i.classList.add("slider__control_show"),n.classList.contains("slider__control_show")&&d-1<=0&&n.classList.remove("slider__control_show"),d--,u+=m}c.style.transform="translateX("+u+"%)"}(e.target.classList.contains("slider__control_right")?"right":"left")}};r.forEach((function(e){e.addEventListener("click",L)}))}(),function(){const e=window.openForm.formWrap.querySelector(".contact-form"),t=e.querySelector("#modal-contact-policy"),o=e.querySelector("#modal-name"),c=e.querySelector("#modal-email"),s=e.querySelector("#modal-phone"),r=document.querySelector(".contact-form"),n=r.querySelector("#contact-policy"),i=r.querySelector("#name"),l=r.querySelector("#email"),a=r.querySelector("#phone");function d(e){e.classList.add("invalid"),e.classList.remove("valid")}function u(e){e.classList.add("valid"),e.classList.remove("invalid")}function m(e){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value.trim())?u(e):d(e)}function f(e){e.forEach((function(e){""===e.value.trim()?d(e):u(e)}))}function v([e,t,o]){return[e,t,o].every((e=>e.classList.contains("valid")))}i.addEventListener("change",(function(){u(i)})),l.addEventListener("change",(function(){m(l)})),a.addEventListener("change",(function(){u(a)})),o.addEventListener("change",(function(){u(o)})),c.addEventListener("change",(function(){m(c)})),s.addEventListener("change",(function(){m(s)})),r.addEventListener("submit",(function(e){e.preventDefault(),f([i,l,a]),m(l),n.checked?v([i,l,a])&&r.submit():r.querySelector(".contact-form__label").classList.add("invalid")})),e.addEventListener("submit",(function(r){r.preventDefault(),f([o,c,s]),m(c),t.checked?v([o,c,s])&&e.submit():e.querySelector(".contact-form__label").classList.add("invalid")}))}(),function(){const e=document.querySelector(".burger-btn"),t=e.querySelector("svg"),o=document.querySelector(".header__burger-wrap");e.addEventListener("click",(function(){t.classList.toggle("active"),o.classList.toggle("slide-in-left"),o.classList.toggle("slide-out-left")}))}(),function(){const e=document.querySelector(".backToTop");window.addEventListener("scroll",(function(){let t=window.pageYOffset,o=document.documentElement.clientHeight;t>o&&e.classList.add("backToTop-show"),t<o&&e.classList.remove("backToTop-show")})),e.addEventListener("click",(function(){window.scrollTo(0,0)}))}()})();