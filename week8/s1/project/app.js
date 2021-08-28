function add(type1,type2){
    if(type1%1 == 0){
        type1 = String;
    }
    if(type2%1 == 0){
        type2 = String;
    }
    if(type1 & type2 == String){
        console.log('pass');
    }else{
        console.log('fail');
    }
}

var number = add('salam'),(2) 
