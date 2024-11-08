{

    function removeDuplicates( arrayNumbers:number[]):number[]{

        return  arrayNumbers.filter((number:number, index):boolean=>{
                return arrayNumbers.indexOf(number) === index
        })

      

    }





}