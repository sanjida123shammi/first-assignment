/**
 * Problem 03 : Virus in my Array

 * তোমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রিয়েট করতে হবে যা ইনপুট হিসেবে একটি Array নেবে। 
   ফাংশনটি আরেকটি Array রিটার্ন করবে যেখানে ভ্যালুগুলো হবে শুধু নাম্বার। অর্থাৎ Array এর যে সকল elements 
   নাম্বার না, তাদের ডিলিট করে শুধুমাত্র নাম্বার গুলোকে Array আকারে রিটার্ন করতে হবে। তুমি যদি এই ফাংশনে এই 
   [NaN, 1, 12, 0, -1, undefined] Array টি পাস করো তাহলে সে তোমাকে রিটার্ন করবে [1, 12, 0, -1] 

 * Input: ফাংশনটি ইনপুট নেবে একটি Array। Array এর উপাদান গুলোর Datatype যেকোনো ধরনের হতে পারে। 
 
 * Output: ফাংশনটি আউটপুট দেবে আরেকটি Array। Array এর উপাদান গুলো হবে শুধুমাত্র নাম্বার। 

 * Challenge 📢: ফাংশনটিতে Array ছাড়া অন্য কোনো ভ্যালুপাস করলে সেটা একটা error message রিটার্ন করবে।
 */


function deleteInvalids(array) {
    let numbers = [];
    if(Array.isArray(array) === true) {
        for(let i = 0; i < array.length; i++) {
            const element = array[i];
            if (typeof element === "number" && isNaN(element) === false) {               
                numbers.push(element);                
            }
        }
        return numbers;
    }
    else {
        return "Please Provide an array";
    }
}

const array = [NaN, 1, 12, 0, -1, undefined];
const array2 = ["1" , {num:2} , NaN ];
const array3 = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const array4 = [ 1 , 2 , -3 ];
const number = {num: [ 1 , 2 , 3 ]};

console.log(deleteInvalids(array));
console.log(deleteInvalids(array2));
console.log(deleteInvalids(array3));
console.log(deleteInvalids(array4));
console.log(deleteInvalids(number));

const nan = NaN;
console.log(typeof nan);