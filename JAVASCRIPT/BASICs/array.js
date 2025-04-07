let array = [23,11,45,33];
console.log(array);

   
    check(45);

    function check(a){
        for(i=0;i<array.length;i++){
            if(array[i] == 45){
                console.log("found");
            }
        }
        return -1;
    }

   