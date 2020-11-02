
  
class Company {
    name;
    astablishedDate;
    country;
    bussinessType;
    employees = [];
    constructor(name, astablishedDate, country, bussinessType, employees) {
        this.name = name;
        this.astablishedDate = astablishedDate;
        this.country = country;
        this.bussinessType = bussinessType;
        this.employees = employees;
    }
    addEmployees(employees) {

    }
    showAllEmployees() {
        this.employees.forEach(function(employee, index) {
            console.log(`${index+1}. ${employee.name}, ${employee.age}, ${employee.sex}, ${employee.address}`);
        })

    }
    showCEO() {
        this.employees.forEach(function(employee, index) {
            // console.log(employee instanceof CEO);
            if (employee instanceof CEO) {
                console.log(`${index+1}. ${employee.name}, ${employee.age}, ${employee.sex}, ${employee.strategy} `);
            }
        })
    }
    showManagers() {
        console.log('Managers');

    }
    showStaff() {
        console.log('Stall');
    }

};
class Employee {
    name;
    age;
    sex;
    address;
    constructor(name, age, sex, address) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }
    about() {
        console.log(`My name is ${this.name}, I'm ${this.age} yearold`);
    }
}
class CEO extends Employee {
    strategy;
    constructor(name, age, sex, address, strategy) {
        super(name, age, sex, address);
        this.strategy = strategy;
    }
}
class Managers extends Employee {
    managemenStyle;
    constructor(name, age, sex, address, managemenStyle) {
        super(name, age, sex, address);
        this.managemenStyle = managemenStyle
    }
}
class Staff extends Employee {
    experience;
    constructor(name, age, sex, address, experience) {
        super(name, age, sex, address);
        this.experience = experience;
    }

}
// let mindX = new Company("MindX", '2020-3-15', 'Viet Nam', 'Open', []);
// console.log(mindX);

let haidang = new CEO('Nguyen Hai Đang', 24, 'Nam', 'Ha Noi', 'Freelance');
let tung = new Managers('Nguyen Thanh Tung', 26, 'Nam', 'Ha Noi', 'Cong dong mo');
let minh = new Managers('Pham Nhat Minh', 21, 'Nam', 'Ha Noi', 'Cong dong mo');
let trang = new Managers('Nguyen Thu Trang', 23, 'Nam', 'Ha Noi', 'Cong dong mo');
let huy = new Managers('Do Quang Huy', 22, 'Nam', 'Ha Noi', 'Cong dong mo');
let my = new Managers('Tran Ha My', 25, 'Nam', 'Ha Noi', 'Cong dong mo');
console.log(haidang);

let h1 = new Staff('S1', 24, 'nu', 'Ha Noi', 1);
let h2 = new Staff('S2', 30, 'nam', 'Ha Noi', 2);
let h3 = new Staff('S3', 14, 'nu', 'Ha Noi', 12);
let h4 = new Staff('S4', 19, 'nam', 'Ha Noi', 13);
let h5 = new Staff('S5', 25, 'nu', 'Ha Noi', 13);
let h6 = new Staff('S6', 22, 'nu', 'Ha Noi', 17);
let h7 = new Staff('S7', 26, 'nam', 'Ha Noi', 17);
let h8 = new Staff('S8', 24, 'nu', 'Ha Noi', 15);
let h9 = new Staff('S9', 29, 'nam', 'Ha Noi', 12);
let h10 = new Staff('S10', 20, 'nu', 'Ha Noi', 19);

let employees = [haidang, tung, minh, trang, huy, my, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10]
let mindX = new Company("MindX", '2020-3-15', 'Viet Nam', 'Open', employees);
mindX.showCEO()
mindX.showAllEmployees()
