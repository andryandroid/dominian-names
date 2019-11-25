var frase = {
    who: ['the dog','my granma','his turtle','my bird'],
    what: [ 'ate','pissed','crashed','broked'],
    object: ['my homework','my car','my sandwich','my computer'],
    when: [ 'before the class','this morning','when I finished it','during my lunch','while I was praying']
    };

function random(max){
    var num = Math.floor(Math.random()*max);
    return num;
}

window.onload=function (){
document.querySelector('#excuse').innerHTML= frase.who[random(frase.who.length)]+" "+ frase.what[random(frase.what.length)]+" "+frase.object[random(frase.object.length)]+" "+frase.when[random(frase.when.length)];
}
