console.log("main.js hello");
$('#myButton').click(function () {
    console.log("button is clicked");
    var input_n = parseInt($('#input').val());
    console.log("get text;" + input_n);
   
    
    var output="";
 for(var i=1;i<=input_n;i++){
    
        for(var j=1;j<=i;j++){
            output=output+"*";
        }
        output=output+"<br/>";
        //console.log(output);
    }
    
    var outputField=$('#output');
    outputField.html(output);
    /*var i="*";
    if(i<=input_n){
        i=i+"*";
    console.log(i);
    }else if(i>input_n){
    }*/
})
    

var x = 2;

if(x==2){
    console.log("x is 2");
}else{
    console.log("X isn't 2");
}

var y ="123"
if(y==123){
    console.log("happy");
}else{
    console.log("tobby");
}

var tag=3
if(tag==1){
    console.log("happy");
}else if(tag==2){
    console.log("happy 2");
}else if(tag==3){
    console.log("happy 3");
}else{
    console.log("happy 4");
}

var n=10;
while(n>=1){
    console.log(n);
    n=n-1;
}
console.log("last:"+n);

for(var i=1;i<=10;i++){
    console.log(i);
}

var t=1;
while(t<=100){
    console.log(t)
    t=t*2
}
console.log("last;"+t);

function f(x){
    return(x+1);
}

function fab(x){
    if (x==1||x==2){
        return 1;
    }
    return fab(x-1)+fab(x-2)
}

for(var i=1;i<10;i++){
    console.log(i+":"+fab(i));
}