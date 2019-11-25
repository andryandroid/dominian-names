
let pronoun= ['the','our'];
let adj= [ 'ate','pissed'];
let noun= ['jogger','racoon'];

var dominian =[];
var cont=0;
var nombre1 ="";
var nombre2 ="";
var nombre3 ="";

for(i=0;i<pronoun.length;i++){
    nombre1 = pronoun[i];
    for(j=0;j<adj.length;j++){
        nombre2 = adj[j];
        for(k=0;k<noun.length;k++){
            nombre3 = noun[k];
            dominian[cont]= nombre1+nombre2+nombre3+".com"
            cont++;
            nombre3="";
        }
        nombre2="";
    }
    nombre1="";
}

for(i=0;i<dominian.length;i++){
    document.write(dominian[i]+"<br>");
}

