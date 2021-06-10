function timer(){
    for(var i=5; i>=1; i--){
        setTimeout(function(){
           i++;
           console.log(i);
        }, 1000*i);
    }
}
timer();