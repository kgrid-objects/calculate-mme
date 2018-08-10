// mme_conversion.js
// MME Conversion Calculator

// Created by Jack Allan (jackall@umich.edu) on June 14th, 2018


// ====================================
//  Global Variable & Data Definitions
// ====================================
function calculateMME(inputs) {


var opiodArray =
["Codeine","Fentanyl Transdermal","Hydrocodone","Hydromorphone","Methadone 1-20 mg/day","Methadone 21-40 mg/day","Methadone 41-60 mg/day","Methadone 61-90 mg/day",
"Morphine","Oxycodone","Oxymorphine","Burprenorphine Film/Tablet","Burprenorphine Patch","Burprenorphine Film","Butorphanol","Dihydrocodeine","Fenta Buccal or SL Tablets","Fentanyl Film or Oral Spray",
"Fentanyl Nasal Spray","Fentanyl Patch","Levorphanol Tartrate","Meperidine hydrochloride", "Opium","Pentazocine","Tapentadol","Tramadol"];

var factorArray =
[0.15,2.4,1,4,4,8,10,12,1,1.5,3,30,12.6,0.03,7,0.25,0.13,0.18,0.16,7.2,11,0.1,1,0.37,0.4,0.1];

var dose =
[];

var rxnorm =
[];

//switch this to array of objects

// ------------------------------------------------------------------------- //


  dose = readMyData(inputs)[0];
  drugname = readMyData(inputs)[1];
  returnValue = convertToMME(dose, drugname);



function readMyData(inputs){
  var obj = JSON.parse(inputs);
  return [obj.dose, obj.drugname];
};

function convertToMME(dose, drugname){
  var index = opiodArray.indexOf(drugname);
  return factorArray[index] * dose;
};

return returnValue;


}
