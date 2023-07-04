
// let button = document.getElementById('btn');
// button.addEventListener('click',function(){
//     console.log('Why did you click me?');
// });   

// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// let gp = document.getElementById('gp');
// let p = document.getElementById('p');
// let c = document.getElementById('c');

// gp.addEventListener('click',function(){
//     console.log('form');
// },true);

// p.addEventListener('click',function(){
//     console.log('div');
// },true);

// c.addEventListener('click',function(){
//     console.log('p');
// },true);

// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

// let btn = document.createElement('button');
// let divEl= document.getElementById('pr');
// btn.innerHTML = 'Click me';
// divEl.appendChild(btn);

// library vs framework
// library - you can use it anywhere , you can use it in any way.
// framework - you have to use it in a specific way , you have to follow the rules .


// !################################################# ABOVE TOPIC ENDS HERE ####################################################################

document.getElementById('doubleHolder').addEventListener('click',function(e){
    console.log(e.target); // output - <button class="double">double</button>
    if(e.target.classList.contains('double')){
        var btn = document.createElement('button');
        btn.setAttribute('class','double');
        btn.innerHTML = 'double';

        var btn2 = document.createElement('button');
        btn2.setAttribute('class','double');
        btn2.innerHTML = 'double';

        this.appendChild(btn); // this is the current element on which the event is fired
        this.appendChild(btn2);
        this.removeChild(e.target);

    }
});