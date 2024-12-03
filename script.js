function isLeap(year) {
    
/**************Don't change the code above****************/    
    var op;
    //Write your code here.    
    if(year%4 === 0){
        if(year%100 === 0){
            if(year%400 === 0){
                op = "Leap year.";
            }
            else{
                op = "Not leap year.";
            }
        }
        else{
            op = "Leap year.";
        }
    }
    else{
        op ="Not leap year.";
    }
    return op;

    

/**************Don't change the code below****************/    

}
