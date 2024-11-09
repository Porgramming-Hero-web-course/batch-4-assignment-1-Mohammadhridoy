{
    type Circle = {
        shape: string,
        radius: number
    }
    type Rectangle ={
        shape: string, 
        height: number,
        width: number
    }

    type Shape = Circle | Rectangle



    const calculateShapeArea = (shape:Shape) =>{    

        if('radius' in shape){
            return Math.PI*shape.radius*shape.radius
            
        }else if('height' in shape){
            return shape.height * shape.width
        }
        

    }













}