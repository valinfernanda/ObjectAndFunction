//how to call the object 
const user = {name: "Valin", age: 23};
console.log(user.age); 

//object values bisa juga dijadiin function 
// const cobaFunction {
//     name: ()=>{ --->tanda kurung () artinya function 
//         //code
//     }
// };

//contoh lanjutan dari baris 5
const dataDiri = {
    name: "Valin", 
    greet: ()=>{
        console.log("Hello");
    }
};
dataDiri.greet(); //kalo mau panggil function


//buat bikin data untuk multiple users, gunakan objek 
// class Pendaftar{  // untuk nama kelas, pake uppercase 

// }

// buat bikin objek dalam kelas 
//objek yang dibuat dari kelas namanya Instances
// class Pendaftar{

// }
// const pendaftar = new Pendaftar(); // "new" buat assign ke constnya 
// console.log(pendaftar); //output : Pendaftar{}

// //constructors : adalah special method for class
// //buat ngasih initial values ke instances 
// //buat ngasih constructor to class, pake constructor(){}

// class Pendaftar{
//     constructor(){      //constructor
//         console.log("Hello");   //consturctor
//     }                   //constructor 

// }
// const pendaftar = new Pendaftar(); // output : Hello

//dalam contructor, untuk menambahkan properti and values related to instances 
//untuk nulisnya, pake this.property = value;
// class Pendaftar{
//     constructor(){      //constructor
//     this.name="Valin";             //consturctor, pake this 
//     }                   //constructor 
// }
// const pendaftar = new Pendaftar();  
// console.log(pendaftar.name); //output: Valin 
// console.log(`Hello, nama saya ${pendaftar.name}`); // jangan lupa pake back thick 

//untuk mengubah value freely, 
// class Pendaftar{
//     constructor(name, age){     // untuk ngubah 
//         this.name = name;
//         this.age = age; 
//     }
// }
// const pendaftar = new Pendaftar("Leo", 3); // pass values as arguments (baris 60)
// console.log(pendaftar.name);

//method adalah functions that belong to class OR "actions" of an instances 
//methods can express a whole set of instructions like "greeting someone" and "calculating values".
//methods are declared within classes by writing methodName(){}
// class Pendaftar{
//     constructor(name, age){     // untuk ngubah 
//         this.name = name;
//         this.age = age; 
//     }
//     greet(){        //method
//         console.log("Hello!");       //method
//     }               //method
// }
// const pendaftar = new Pendaftar("Leo", 3); 
// console.log(pendaftar.name);
// pendaftar.greet();

//using values within methods 
//kalo mau ambil instance values inside a method
//tulis this.propertyName
// class Pendaftar{
//     constructor(name, age){     // untuk ngubah 
//         this.name = name;
//         this.age = age; 
//     }
//     info(){        //method
//         console.log(`My name is: ${this.name}`);      //using values within methods
//     }               //method
// }
// const pendaftar = new Pendaftar("Leo", 3); 
// console.log(pendaftar.name);
// pendaftar.info();

//using methods within methods 
class Pendaftar{
    constructor(name, age){     // untuk ngubah 
        this.name = name;
        this.age = age; 
    }
    greet(){
        console.log("Hello");
    }
    info(){        
        this.greet(); //using methods within methods
    }               
}
const pendaftar = new Pendaftar("Leo", 3); 
console.log(pendaftar.name);
pendaftar.greet();
pendaftar.info();
