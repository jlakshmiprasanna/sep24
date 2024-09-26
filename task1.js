// Question-1
const car = {
    make: "Ford",
    model: "fusion",
    year: 2015
};  
Object.freeze(car);  
car.model = "Camry";  
console.log(car); 

// Question-2
const user = {
    name:"Prasanna",
    age: 22,
    email:"prassu@gmail.com"
};
console.log(Object.isFrozen(user));
Object.freeze(user);
console.log(Object.isFrozen(user)); 

// Question-3
const product = {
    name: "Laptop",
    category: "Electronics",
    price: 1200
};
console.log(Object.isSealed(product)); 
Object.seal(product);
console.log(Object.isSealed(product)); 
  
// Question-4
const laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    price: 150000
}
const keys = Object.keys(laptop);
console.log(keys); 
  
// Question-5
const house = {
    location: "Hyderabad",
    size: "2000 sqft",
    price: 500000
};
const values = Object.values(house);
console.log(values);

// Multiple method Questions
// Question--6
const smartphone = {
    brand: "Oneplus",
    model: "Nord CE5G",
    price: 800
};
Object.seal(smartphone);
smartphone.price =25000;
console.log(Object.isSealed(smartphone));
console.log(smartphone); 
  
// Question--7
const book = {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949
};
Object.freeze(book);
book.publishedYear = 2020;
console.log(Object.isFrozen(book)); 
console.log(book);

// Question--8
const person = {
    firstName: "prasanna",
    "last name": "Jonnalagadda",  
    age: 20,
  };
  
  console.log(Object.keys(person));  
  console.log(Object.values(person)); 
  
// Question--9
const course = {
    title: "JavaScript",
    instructor: "Jane Doe",
    duration: "2 months"
};
const entries = Object.entries(course);
console.log("Entries:", entries);
delete course.duration;
console.log("Modified course:", course); 
  
// Question--10
const employee = {
    name: "Jyothi",
    position: "Developer",
    salary: 60000
};

Object.seal(employee);
employee.position = "Senior Developer";
employee.department = "Engineering";
const properties = Object.keys(employee);

console.log("Properties of the employee object:", properties);
console.log("Employee Object:", employee);