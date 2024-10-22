/**
 * Problem-01: Help The Zoo Manager

 * বাকের ভাই মিরপুর চিড়িয়াখানার ম্যানেজার। প্রতিদিন তাকে অসংখ্য টিকেট বিক্রি করতে হয়। টাকার হিসেব এ 
   তিনি সবসময় গড়মিল বাধিয়ে ফেলেন। তুমি যেহেতু সদ্য ডেভেলপার হচ্ছো বাকের ভাই তোমার কাছে একটি 
   হেল্প চেয়েছে। বাকের ভাইকে calculateMoney() নামে একটি ফাংশন বানিয়ে দিতে হবে যাকে প্রতিদিন 
   টিকেট সেল করার সংখ্যা ইনপুট দিলে সে সকল খরচ বাদ দিয়ে মোট কত টাকা বাকের ভাইর কাছে থাকে তা বলে 
   দিতে পারে।
 
 * চিড়িয়াখানায় প্রতি টিকেট বিক্রি হয় ১২০ টাকায়। আর ব্যয় এর মধ্যে প্রতিদিন ১ জন দারোয়ান কে দিতে হয় ৫০০ 
   টাকা এবং ৮ জন স্টাফ কে লাঞ্চ করানোর জন্যে খরচ হয় জনপ্রতি ৫০ টাকা করে।
  
 * Input: ফাংশনটি ইনপুট নেবে টিকেট সেল করার সংখ্যা। ইনপুট হবে একটি পজিটিভ সংখ্যা । (0<=Input)
  
 * Output: টিকেটের আয় ও ব্যয়গুলো ক্যালকুলেট করে বাকী কত টাকা বাকের ভাইর কাছে থাকলো সেটাই তোমার 
   ফাংশন আউটপুট হিসেবে রিটার্ন করবে। আউটপুট পজিটিভ নেগেটিভ যেকোন কিছুই হতে পারে। 
 💡যেমন - ইনপুট যদি 10 হয় তাহলে আউটপুট হবে => ( 10 * 120) - ( 500 + (8 * 50) ) = 300
  
 * Challenge 📢: বাকের ভাই যদি ইনপুট হিসেবে নেগেটিভ সংখ্যা দেয় তাহলে তোমাকে একটা error ম্যাসেজ 
   আউটপুট হিসেবে রিটার্ন করে দিতে হবে ।
 */

function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const guardSalary = 500;
    const staff = 8;
    const staffLunch = 50;

    const totalTicketSale = ticketPrice * ticketSale;    
    const staffLunchTotal = staff * staffLunch;
    const totalExpenditure = guardSalary + staffLunchTotal;

    const remainingMoney = totalTicketSale - totalExpenditure;
    
    if (ticketSale < 0){
        return `The ticket that is sold cannot be a negative number`;
    }
    else {
        return remainingMoney;
    }
}

console.log(calculateMoney(10));
console.log(calculateMoney(-10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));