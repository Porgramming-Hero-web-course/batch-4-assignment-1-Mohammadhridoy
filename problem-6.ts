{

    interface Profile  {
        name:string;
        age:number;
        email:string
    } 

    type keyType ={
        name?:string; 
        age?:number;
         email?:string
    }

    function updateProfile(object : Profile, key:keyType):Profile{

          
        return {
            ...object,
            ...key
            
        }

    }




}