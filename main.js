//================1. find va findIndex metodlari bo‘yicha masalalar==============


//============================================
//1-Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.
// let arr=[1,2,3,4,6,7,8,9,10]
// let res= arr.find(value=>{
//     return value%5==0
// })
// console.log(res)

//============================================
//2-Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res=arr.find(value=>{
//     return value%2!=0 && value<20
// })
// console.log(res);

//============================================
//3-Massiv ichida 0 bilan tugaydigan birinchi elementni toping.
// let arr=[1,20,3,4,50,6,70,8,90];
// let res=arr.find(value=>{
//     return value%10==0
// })
// console.log(res);



//=================2. some metodi bo‘yicha masalalar================


//======================================
//1-Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.
// let arr=[1,2,3,4,5,60,7,8,9,];
// let res=arr.some(value=>{
//     return value>=50
// })
// console.log(res);

//======================================
//2-Massivda manfiy sonlar bor-yo‘qligini aniqlang.
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let res=arr.some(value=>{
//     return value<0
// })
// console.log(res);

//======================================
//3-Massivda 3 ga karrali bo‘lgan sonlar bor-yo‘qligini tekshiring.
// let arr = [1,2,4,5,7,8,9];
// let res=arr.some(value=>{
//     return value%3==0
// })
// console.log(res);


//=================3. every metodi bo‘yicha masalalar================


//========================================
//1-Massivdagi barcha sonlar musbat ekanligini tekshiring.
// let arr = [1,2,34,5,6,7,8,9];
// let res=arr.every(value=>{
//     return value>0
// })
// console.log(res);

//========================================
// 2-Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.
// let arr = [20,30,40,50,60,70,80,90];
// let res=arr.every(value=>{
//     return value>10
// })
// console.log(res);

//========================================
// 3-Massivdagi barcha sonlar toq ekanligini aniqlang.
// let arr = [1,3,5,7,9,11];
// let res=arr.every(value=>{
//     return value%2!=0
// })
// console.log(res);


//=====================charAt=====================


//================================================
// 1-Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.
// let text="Hello world!"
// let res=text.charAt(2)
// console.log(res);

//================================================
//2-Matnning oxiridan ikkinchi belgisini toping.
// let text = "Hello world!";
// let res = text.charAt(text.length-2);
// console.log(res);


//==================charCodeAt======================


//==================================================
//1-Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.
// let text = "Hello world!";
// let res = text.charCodeAt(0);
// console.log(res);

//==================================================
// 2-Matnning beshinchi belgisining Unicode qiymatini toping.
// let text = "Hello world!";
// let res = text.charCodeAt(4);
// console.log(res);


//=======================slice=======================


//===================================================
// 1-Berilgan matndan birinchi 5 ta belgini ajratib oling.
// let text = "Hello world!";
// let res = text.slice(0,5);
// console.log(res);

//===================================================
//2-Matnning oxirgi 3 ta belgisini ajratib oling.
// let text = "Hello world!";
// let res = text.slice(text.length-3);
// console.log(res);


//========================substring=====================


//======================================================
//1-Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.
// let text = "Hello world!";
// let res = text.substring(1,5);
// console.log(res);

//======================================================
// 2-Matnning oxirgi uchta belgisini substring yordamida oling.
// let text = "Hello world!";
// let res = text.substring(text.length-3);
// console.log(res);


//=========================substr========================


//======================================================
// 1-Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.
// let text = "Hello world!";
// let res = text.substr(3,5);
// console.log(res);

//======================================================
//2-Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.
// let text = "Hello world!";
// let res = text.substr(0, 7);
// console.log(res);


//==============toUpperCase, toLowerCase===============


//======================================================
//1-Berilgan matnni faqat katta harflar bilan yozing.
// let text = "Hello world!";
// let res = text.toUpperCase();
// console.log(res);

//======================================================
//2-Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.
// let text = "Hello world!";
// let half=Math.floor(text.length/2);
// let kichik=text.slice(0,half).toLowerCase()
// let katta = text.slice(half).toUpperCase();
// let res = kichik+katta;
// console.log(res);


//======================concat========================


//====================================================
//1-Berilgan ikkita matnni birlashtiring.
// let text1="Hello";
// let text2="world!";
// let testRes=text1.concat(" ",text2);
// console.log(testRes);

//===================================================
// 2-Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.
// let text="Hello world";
// let textRes=text.concat("!")
// console.log(textRes);


//================trim, trimStart, trimEnd==================


//==========================================================
// 1-Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.
// let text = "      Hello world  ";
// let res = text.trim();
// console.log(res);

//=========================================================
// 2-Matnning faqat boshidagi bo‘sh joylarni olib tashlang.
// let text = "      Hello world!       ";
// let res = text.trimStart();
// console.log(res);


//====================padStart, padEnd=========================

//=============================================================
//1-Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.
// let text = "56";
// let res = text.padStart(text.length+10,'*');
// console.log(res);
//10 ni o'zini yozsa 8 ta qoshyapti shuning uchun length dan foydalandim.

//=============================================================
//2-Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.
// let text = "56";
// let res = text.padEnd(text.length+15, "#");
// console.log(res);


//=========================repeat===========================


//==========================================================
// 1-Matnni 3 marta takrorlab yangi matn yarating.
// let text = "Hello world! ";
// let res = text.repeat(3);
// console.log(res);

//==========================================================
//2-Belgini 5 marta takrorlab, string yaratib oling.
// let text= "*";
// let res = text.repeat(5)
// console.log(res);


//===================replace, replaceAll=======================


//=============================================================
//1-Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.
// let text = "Hella world!";
// let res = text.replace("a","o");
// console.log(res);

//============================================================
// 2-Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.
// let text = " Hello world! ";
// let res = text.replaceAll(" ", "_");
// console.log(res);


//=======================split=========================


//=====================================================
//1-Matnni har bir so‘zdan ajratib massivga aylantiring.
// let text = "Hello world ! Hi";
// let res = text.split(" ");
// console.log(res);

//====================================================
//2-Matnni har bir belgidan ajratib massiv yarating.
// let text = "Hello world !";
// let res = text.split("");
// console.log(res);


//===================indexOf, lastIndexOf==================


//=========================================================
//1-Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.
// let text = "HALA MADRID !";
// let res = text.indexOf("A");
// console.log(res);

//=========================================================
// 2-Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.
// let text = "Hello world e !";
// let res = text.lastIndexOf("e");
// console.log(res);


//====================includes====================


//================================================
// 1-Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.
// let text = "Hello world !";
// let res = text.includes("Hello");
// console.log(res);

//================================================
// 2-Matn ichida "!" belgisi mavjudligini aniqlang.
// let text = "Hello world !";
// let res = text.includes("!");
// console.log(res);


//==========================search========================


//========================================================
// 1-Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.
// let text = "Hello world ! good";
// let res = text.search("good");
// console.log(res);

//=======================================================
// 2-Matnda raqam uchraydigan joyni aniqlang.
//=
// let text="Hell0 world!"
// let res = text.search(Number)
// console.log(res);


//==================startsWith, endsWith=================


//=======================================================
// 1-Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.
// let text = "Hello world!";
// let res = text.startsWith("Hello");
// console.log(res);

//=======================================================
// 2-Matn oxirida "bye" so‘zi borligini aniqlang.
// let text = "Hello world!";
// let res = text.endsWith("bye");
// console.log(res);





//=============Massiv ichida obyektlar=================\\


//=====================================================
//1-users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.
// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let res=users.filter(user=>user.age>25)
// console.log(res);

//=====================================================
// 2-products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang. 
// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];
// let res=products.filter(value=>value.price<500)
// console.log(res);

//=====================================================
//3- tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.
// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "pending" },
//   { id: 3, title: "Go shopping", status: "pending" }
// ];
// let res = tasks.filter(value => value.status == "pending");
// console.log(res);

//=====================================================
//4-users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.
// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let res=users.filter(value=>value.isActive).length;
// console.log(res);

//=====================================================
// 5- products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.
//Tushunmadm
//  products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.
// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

//=====================================================
//6-users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.
// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let res=users.map(value=>({
//     name:value.name,
//     age:value.age
// }))
// console.log(res);


//=====================================================
//7-products massivida price qiymati eng kichik bo‘lgan mahsulotni aniqlang.
//Tushunmadm
// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

//=====================================================
//8-tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.
// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "pending" },
//   { id: 3, title: "Go shopping", status: "pending" }
// ];
// let res=tasks.findIndex(value=>value.title=="Clean room")
// console.log(res);


//=====================================================
//9-users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.
// let sum=0
// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// for(let i=0;i<users.length;i++){
//     sum+=users[i].age
// }

// console.log(sum);

//=====================================================
//10-products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.
// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 4.2 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];
// let res=products.map(value=>({...value,price:value.price*0.9}))
// console.log(res);

//=====================================================
//11-users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.
// let users = [
//   { id: 1, name: "Ali", age: 25, isActive: true },
//   { id: 2, name: "Bobur", age: 30, isActive: false },
//   { id: 3, name: "Zara", age: 22, isActive: true }
// ];
// let res=users.filter(value=>value.name=="Ali")
// console.log(res);

//=====================================================
//12-tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.
// let tasks = [
//   { id: 1, title: "Do homework", status: "completed" },
//   { id: 2, title: "Clean room", status: "completed" },
//   { id: 3, title: "Go shopping", status: "completed" }
// ];
// let res=tasks.every(value=>value.status==="completed")
// console.log(res);

//=====================================================
//13- products massivida rating qiymati 4 dan katta bo‘lgan mahsulotlar sonini hisoblang.
// let products = [
//   { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//   { id: 102, name: "Phone", price: 500, rating: 3.9 },
//   { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];
// let res=products.filter(value=>value.rating>4).length
// console.log(res);

//=====================================================
//14-users massivida age qiymati eng katta bo‘lgan foydalanuvchini aniqlang.
//Tushunmadm
let users = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true }
];

//=====================================================
// tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.

// let tasks = [
//   { id: 1, title: "do homework", status: "completed" },
//   { id: 2, title: "clean room", status: "pending" },
//   { id: 3, title: "go shopping", status: "pending" }
// ];
// let res=tasks.map(value=>({...value,title:value.title.charAt(0).toUpperCase()+value.title.slice(1)}));
// console.log(res);



