console.log('Hey Worldies');

// let rectangle = {
//     length: 1,
//     breadth: 1,

//     draw : function() {
//         console.log('Drawing it');
//     }
// };

// rectangle.draw();


//factory function

// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth: bre,

//         draw() {
//             console.log('I can draw rectangle');
//         }
//     };
//     return rectangle;
// };

// let rectangle1 = createRectangle(5, 5);
// let rectangle2 = createRectangle(3, 6);


// Constructor Function -> Pascal Notation is used and every word has capital letter as first

// function Rectangle(len, bre) {
//     this.length = len,
//     this.breadth = bre,
//     this.draw = function() {
//         console.log('I can draw Rectangle');
//     }
// }

// let object = new Rectangle(3, 4);

// console.log(object);

// object.color = 'yellow';
// console.log(object);

// delete object.color;
// console.log(object);


// let Rectangle = new Function (
//     'length', 'breadth',
//     `this.length = length,
//     this.breadth = breadth,
//     this.draw = function() {
//     console.log('I can draw rectangle);
//     }`);

// //object creation using Rectangle1
// let rect = new Rectangle(2,3);

// rect.length;

// console.log(rect);


// rectangle.length;
// rectangle.breadth;

// rectangle.draw();

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// Pass by value 

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// Pass by reference

// let a = { value: 10 };
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);



// Function pass by value


// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);


// Function pass by Reference


// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);


let rectangle = {
    length: 2,
    breadth: 4
};

// for-in loop 
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


// object - colone // #1

// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);


// Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

// Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);


