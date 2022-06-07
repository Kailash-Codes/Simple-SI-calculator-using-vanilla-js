let submit = document.getElementById('sub-btn');
let p = document.getElementById('principal-box');
let t = document.getElementById('time-box');
let r = document.getElementById('rate-box');
let out = document.getElementById('result');

submit.addEventListener('click',(e)=>{
    
        output = (p.value*t.value*r.value)/100;
out.innerHTML = output;

e.preventDefault();
});
