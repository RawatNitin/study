function pow(base, power){
    if(power == 0){
        return 1;
    } else if(power == 1){
        return base;
    }
    return base * pow(base, power - 1);
}


pow(2,4)

