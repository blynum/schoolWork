
Employees = []

function Employees (name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
     
}


// Employees.prototype.status =  function(){
//     console.log(this.status)
// }
    
    // printEmployeeForm()
Employees.prototype.print = function printEmployeeForm(){
    console.log(this.name, this.jobTitle, this.salary, this.status)
    return printEmployeeForm
}
    

let employee1 = new Employees("Joe", "Rep", "$40,000", "Full-Time")
let employee2 = new Employees("Emily", "Manager", "$60,000", "Full-Time")
let employee3 = new Employees("Shonda","Analyst", "$70,000", "Part-Time")

// console.log(employee1, employee2, employee3)