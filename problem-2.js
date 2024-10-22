/**
 * Problem-02: Good Name , Bad Name

 * সালমান ভাই ও রাশেদা ভাবীর কোল জুড়ে এসেছে একটা পুত্র সন্তান। সালমান ভাই পুত্র সন্তানের একটা ভালো নাম 
   রাখতে চান। কিন্তু তাদের এলাকায় গ্রামের মানুষরা নামকে ব্যাংগ করে উচ্চারন করে। যেমন কারো নাম salman 
   হলে তারা বলে সালমাইন্যা। কারো নাম jafor হলে তারা বলে জাফইর‍্যা। সালমান ভাই চাননা তার পুত্র সন্তানকে 
   কেউ এভাবে ক্ষেপাক ।
   
 * সালমান ভাই দেখতে পেলেন যে যাদের নামের শেষে a, y, i , e , o , u, w থাকে তাদের কে আসলে ক্ষেপানো 
   যায় না। যেমন - Tonoy, utsho , Roide, shanto এসব ধরনের নাম গুলো কে ব্যাংগ করে উচ্চারন করা যায় না।

 * এখন তোমাকে সালমান ভাইর জন্য checkName() নামে একটা ফাংশন লিখে দিতে হবে। যেটা একটা স্ট্রিং 
   ইনপুট নেবে। এবং ফাংশনটি চেক করে দেখবে নামটি রাখা ভালো হবে না খারাপ হবে। ভালো হলে সে রিটার্ন 
   করবে Good Name আর নামটি খারাপ হলে রিটার্ন করবে Bad Name । 

 * Input : তোমার ফাংশনটি ইনপুট নেবে একটি নাম। ইনপুটটি হবে একটি স্ট্রিং। যেখানে character গুলো 
   ছোট হাতের বা বড় হাতের হতে পারে। 

 * Output : ফাংশনটি আউটপুট হিসেবে রিটার্ন করবে একটি স্ট্রিং। যার ভ্যালু হবে Good Name অথবা Bad Name 

 * Challenge 📢 : ইনপুট হিসেবে স্ট্রিং টাইপের বাইরে অন্য যেকোন কিছু দিলে এটা শুধুমাত্র “invalid” রিটার্ন করবে।
 */

function checkName(a) {
    if (typeof a !== 'string') {
        return 'Invalid';
    }
    else {
        let name = a.toLowerCase();
        if(name.at(-1) === 'a' || name.at(-1) === 'y' || name.at(-1) === 'i' || name.at(-1) === 'e' || name.at(-1) === 'o' || name.at(-1) === 'u' || name.at(-1) === 'w') {
            return 'Good Name';
        }     
        else {
            return 'Bad Name';
        }
    }
}

console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName('Jhankar'));
console.log(checkName(199));
console.log(checkName(['Rashed']));