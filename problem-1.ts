{
    let storSumNumbers:number = 0

    function  sumArray (arrayAllNumber:number[]){

         arrayAllNumber.forEach((number:number)=> {
                storSumNumbers =  storSumNumbers + number
            
         })
    
      

    }

    sumArray([1, 2, 3, 4, 5]);
    console.log(storSumNumbers)

}
