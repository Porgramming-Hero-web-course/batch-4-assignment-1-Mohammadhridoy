# The significance of union and intersection types in Typescript
union and intersection types 

# union type
Union has the ability to combine one or two different types of data. It is the most powerful way to express a variable with multiple types. Use Pipe(|) symbol to combine two or more data types to achieve Union type. 
### syntex 
type id = number| string; 

Here, id can be either a number or a string. union types are useful when a value might be one of several types. It gives code flexibility.

# Intersection types 
An interesction type is a type that merges several kinds into one. This allows you to combine many types.
The & operator is used to create the intersection type 

## For example
type Person = {name: string; age:number}

type Employee = {employeeId: number}

type EmployeePerson = Person & Employee


# Why use it?
1. It's helpful when you need an object to have properties from multiple types, ensuring it meets all requirements at once. 
2. It reduces the need for creating new types by combining existing ones. 