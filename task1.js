let data={name:"monisha",address:{door:15,street:"North street",village: "Agarakattu"}};
let data1=JSON.parse(JSON.stringify(data));
data1.address.door="1/3";
data1.address.street="Kamarajar street";
data1.address.village="Virudhunagar";

// console.log(data);
console.log(data1);

let data2={name:"monisha",address:{door:15,street:"North street",village: "Agarakattu"}};
let data3=Object.assign({},data2);
data3.address={door:"1/3",street:"Kamarajar street",village:"Virudhunagar"};
// console.log(data2);
console.log(data3);


let data4={name:"monisha",address:{door:15,street:"North street",village: "Agarakattu"}};
let data5={...data4,address:{door:"1/3",street:"Kamarajar street",village:"Virudhunagar"}};
// console.log(data4);
console.log(data5);
/*.............................................................. */
console.log("Question No: 2");
let fruits = [{name: "Apple",weight: "1Kg",price:280},{name: "Orange",weight: "1Kg",price:180},{name: "Pomegranate",weight: "1Kg",price:250}];
let frt=fruits.map((e)=>{
    return {...e,type:"Fruits"};
});
console.log(frt);

/*.............................................................. */
console.log("Question No:3");
let me = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];

let msc=me.map((e)=>{
    return e[0];
});
console.log(msc);

/*.............................................................. */
console.log("Question No:4");
let ms = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];
let res=ms.filter((e)=>{
    if(e[e.length-1]=="A")
    {
        return e
    }
})
let y=res.map((e)=>{
    return e[0];
})
console.log(y);

/*.............................................................. */
console.log("Question No:5");
const names =["Ananth","Arun","Vellasamy","Ranjith"];
names.forEach((e,i)=>{
    i=i+1
     console.log("Rollno "+i+" :"+e);
});

/*.............................................................. */

console.log("Queston No:6");
let num1 = [1,2,3];
let num2= [4,5,6];
let nu=[...num1,...num2];
console.log(nu);

/*.............................................................. */
console.log("Question No:7");
const obj1={a:1,b:2};
const obj2 = {b:3,c:4};
const obj3={...obj1,...obj2};
console.log(obj3);
/*.............................................................. */
console.log("Question No:8");
var employee =[{
    name : "Karuppasamy",
    age : 24,
    Salary : 25000,
    level : "junior"
    },
    {
    name : "Samy",
    age : 21,
    Salary : 20000,
    level : "junior"
    },{
    name : "Kaviya",
    age : 22,
    Salary : 18000,
    level : "junior"
    },{
    name : "Naresh",
    age : 45,
    Salary : 100000,
    level : "senior"
    },{
    name : "Prem",
    age : 24,
    Salary : 50000,
    level : "senior"
    }];

    let x=employee.filter((e)=>{
         if(e.level=="senior"){
            return e.name;
         }
    })
    let r=x.map((e)=>{
        return e.name;
    })
    console.log(r);

/*.............................................................. */
console.log("Question No:9");
let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];

  let na=users.map((e)=>{
    return e.firstName+e.lastName;
  })
  console.log(na);
/*.............................................................. */
console.log("Question No:10");
const a=[1,2,3];
const b=[...a];
b.push(4);
console.log(b);

let c={v1:190,v2:200,v3:188};
let d=Object.assign([],c);
d.v2=50;
d.v4=c.v2;
console.log(d);

let e=["Hello"];
let f=JSON.parse(JSON.stringify(e));
f.push("sanjeev");
console.log(f);

document.write("Veiw this answers in console..!");
