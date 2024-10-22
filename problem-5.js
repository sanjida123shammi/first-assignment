/**

* Problem 05 : Monthly Savings of a Freelancer
 
* ফ্রিল্যান্সার শাহেদ প্রতি মাসে বেশ কিছু পেমেন্ট ক্লায়েন্টদের থেকে পায়। কিন্তু পেমেন্ট এর কিছু ট্যাক্স পরিশোধ
  এবং নিজের লিভিং কস্ট এর কারনে সে সেভিংস করতে পারে না। তার সেভিংস এর হিসেব করার জন্যে তাকে
  monthlySavings() নামে একটি ফাংশন তৈরী করে দিতে যেটা ইনপুট হিসেবে নেবে একটি Array (প্রতি মাসে
  পাওয়া সকল পেমেন্ট) এবং একটি Number (শাহেদের লিভিং কস্ট)।
  শাহেদের যেসকল পেমেন্ট 3000 টাকা বা তার বেশি সে সকল পেমেন্ট থেকে ব্যাংক Tax হিসেবে ২০% টাকা কেটে
  নেয়। এখন মোট ইনকাম থেকে Tax গুলো বাদ দিয়ে এবং Living cost বাদ দিয়ে বাকী যে টাকা থাকে সেটাই
  হলো শাহেদের সেভিংস। অর্থাৎ ফাংশনটি শাহেদের সেভিংসকে রিটার্ন করবে। যদি সেভিংস করার মতো টাকা না
  থাকে অর্থাৎ সেভিংস এর ভ্যালু যদি ০ এর চেয়ে কম হয় তাহলে ফাংশনটি রিটার্ন করবে একটি স্ট্রিং তাহলো “earn more” ।

* Input : ফাংশনটি ইনপুট নেবে একটি Array (All payments) এবং একটি number (Living cost)।

* Output : 
  ফাংশনটি একটি number অথবা string রিটার্ন করবে।
  ● যদি savings 0 বা তার থেকে বেশি হয় তাহলে রিটার্ন করবে একটা number (Total Savings)
  ● যদি savings 0 থেকে ছোট হয় তাহলে রিটার্ন করবে String যার ভ্যালু হবে earn more

* Challenge 📢: 
  ফাংশনটি তখন "invalid input" - string টি রিটার্ন করবে।
  ● যদি প্রথম প্যারামিটারটি Array না হয়
  ● যদিও ২য় প্যারামিটারটি নাম্বার না হয়

 */

function monthlySavings(payments, livingCost) {
  if (Array.isArray(payments) === false || typeof livingCost !== "number" || isNaN(livingCost) === true) {
    return "Invalid input";
  }
  else{
    let totalEarning = 0;

    for (const payment of payments) {
      if (payment >= 3000){
        totalEarning = totalEarning + (payment - (payment * (20 / 100)));
      }
      else {
        totalEarning = totalEarning + payment;
      }
    }

    const savings = totalEarning - livingCost;

    if (savings < 0) {
      return "Earn More";
    }
    else {
      return savings;
    }
  }
}

const firstSavings = monthlySavings([1000, 2000, 3000] , 5400);
const secondSavings = monthlySavings([1000, 2000, 2500] , 5000);
const thirdSavings = monthlySavings([900, 2700, 3400] , 10000);
const fourthSavings = monthlySavings(100, [900, 2700, 3400]);

console.log(firstSavings);
console.log(secondSavings);
console.log(thirdSavings);
console.log(fourthSavings);
