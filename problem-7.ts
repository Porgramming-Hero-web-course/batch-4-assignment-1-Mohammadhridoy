{
    class Car {
        make: string;
        model:string; 
        year:number; 
        constructor( make: string, model:string, year:number,){
            this.make = make;
            this.model=model; 
            this.year = year
        }

        getCarAge(){
            const currentYear:number = new Date().getFullYear()
            const  carAges = currentYear - this.year

            console.log(`${carAges} (assuming current year is ${currentYear})`)
        }

    }




}