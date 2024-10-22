/**
 * Problem 04 : Make A Great Password

 * কলিমুদ্দিন সাহেব নতুন ফোন কিনে বিভিন্ন ওয়েবসাইটে ভিজিট করেন এবং বিভিন্ন এপ্লিকেশনে একাউন্ট ক্রিয়েট করেন। 
   কিন্তু তিনি পাসওয়ার্ড মনে রাখতে পারেন না। তিনি এমন একটি ফাংশন চান, যেখানে তার ইনফরমেশন এবং ওয়েবসাইট 
   নেম দিলে সেটা কলিমুদ্দিন সাহেবকে একটি মনে রাখার মতো পাসওয়ার্ড জেনারেট করে দিতে পারবে।
   তার জন্য password() নামে একটা ফাংশন লিখতে হবে।

 * Input: ফাংশনটি একটা object ইনপুট হিসেবে নিবে। যেখানে শুধু তিনটি প্রোপার্টি থাকবে।
   { name: "kolimuddin" , birthYear: 1999 , siteName: "google" }
⚠️ অব্জেক্ট এ প্রোপার্টি গুলোর নাম একদম সেইম হতে হবে।

 * Password-Structure :
   Website Name (প্রথম অক্ষর বড় হাতের হবে)    |     #     |     ইউজার নেম      |      @     |    birthYear

 * Output: ফাংশনটি উপরের স্ট্রাকচার অনুযায়ী একটা স্ট্রিং আউটপুট আকারে রিটার্ন করবে।
   যেমন - Google#kolimuddin@1999

 * Challenge 📢: যদি কোনো একটা প্রোপার্টি মিসিং থাকে অথবা যদি birthYear 4 ডিজিটের না হয় ফাংশনটি রিটার্ন 
   করবে একটি স্ট্রিং যার ভ্যালু হবে invalid
   
 */

const info = {
    name: "kolimuddin", 
    birthYear: 1999, 
    siteName: "google"
}

const info2 = { 
    name: "rahat", 
    birthYear: 2002, 
    siteName: "Facebook" 
}

const info3 = {
    name: "toky", 
    birthYear: 200, 
    siteName: "Facebook"
}

const info4 = {
    name: "maisha", 
    birthYear: 2002
}

// console.log(info.birthYear.toString().length);
// console.log(info.siteName.charAt(0).toUpperCase(), info.siteName.slice(1));
   
function password(info){
    if(info.name === undefined || info.birthYear === undefined || info.siteName === undefined || info.birthYear.toString().length !== 4) {
        return "Invalid";
    }
    else {
        const site = info.siteName.charAt(0).toUpperCase() + info.siteName.slice(1);
        const strongPassword = site + "#" + info.name + "@" + info.birthYear;
        return strongPassword;
    }
}

console.log(password(info));
console.log(password(info2));
console.log(password(info3));
console.log(password(info4));