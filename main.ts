#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n************* WELLCOME TO SABA SCHOOL ************\n")
const remdomNumber : number = Math.floor(100000 +Math.random()*90000);
let myBalance : number = 0
let answer = await inquirer.prompt([{
    name : "Students",
    type:"input",
    message :"Pleaze enter student Name:",
    validate: function  (value){
        if (value.trim()!==""){
            return true;
        }
            return"Pleaze enter a non-empty value."
        
    }
    },
    {
        name:"Courses",
        type:"list",
        message :"Select the course to enrolled",
        choices:["MS.Office","HTML","Javascript","typescript","Python"],
    }
]);
const tutionFee:{[key:string]: number}={
    "MS.Office":2000,
    "HTML":2500,
    "Javascript":3000,
    "typescript":3500,
    "Python":4000
};
console.log(`\nTutionfee: ${tutionFee[answer.Courses]}/\n`);
console.log(`Balance:${myBalance}\n`);

let paymentType = await inquirer.prompt([{
    name:"payment",
    type:"list",
    message:"Select your payment method",
    choices:["Bank transfer","Easypaisa","Jazzcash"]
},
{
    name:"amount",
    type:"input",
    message:"Transfer money",
    validate:function (value){
        if (value.trim()!==""){

        
    return true;
        }
    return"Pleaze enter a non-empty value."
},
}
]);
console.log(`you select payment method ${paymentType.payment}`);
const tutionFees =tutionFee[answer.Courses];
const paymentAmount = parseFloat(paymentType.amount)
if (tutionFees === paymentAmount){
    console.log(`Congratulations! you have successfully enrolled in ${answer.Courses}.\n`);
    let ans = await inquirer.prompt([
        {
        name:"select",
        type:"list",
        message:"What would you like to do next?",
        choices:["Veiw status","Exit"]

    }
])
    if (ans.select ==="Veiw status"){
        console.log("\n ************* STATUS ************\n");
        console.log(`Student Name: ${answer.Students}`);
        console.log(`Student ID: ${remdomNumber}`);
        console.log(`Course: ${answer.Courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
 }else{
             console.log("\nExiting Student Management System\n")
 }
}
else{
    console.log("Invalid amount due to course \n")
};
console.log("*************** THANK YOU FOR COMING ***************");