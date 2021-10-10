
// let points = new Array(100)

 for(let i = 0; i <= 100; i++){
     let nums  = "";
     if(i % 3 === 0){
         //  console.log("fizz")
         nums += "fizz";
        }
        else if(i % 5 === 0){
            //  console.log("buzz")
            nums += "buzz";
        }
        else if(i % 3 === 0 && i % 5 ===0){
            nums += "fizzbuzz";
        } 
        else 
        nums = i;
    console.log(nums)
    }



   

   