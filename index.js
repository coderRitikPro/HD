
let quotes = ["Diwali is a time to celebrate the victory of good over evil, light over darkness, and knowledge over ignorance",
"On Diwali, let's light up not just our homes, but also our hearts",
"Diwali is a time to reflect on the blessings in our lives and to be grateful for all that we have",
"Diwali is a reminder that light will always triumph over darkness, and good will conquer evil",
"Let the spirit of Diwali fill your heart with love and your life with prosperity",
"Diwali teaches us to embrace the light within and let it shine for the world to see",
"May the diyas light lead you onto the road of growth and prosperity",
"This Diwali illuminates your life with lights and colours",
"May the lamps of Diwali brighten your life and Rangoli add more hues to your life"];

 let audio = false;
document.querySelector(".btn").addEventListener("click",function(){
wishes();
});


 async function wishes() {
 let name ;
if(audio==false){ name = prompt("Type your name here");}
if (name != null) {
document.getElementById("wishes").innerHTML =
"HAPPY DIWALI ✨ " + name;
}
if (name == null){
document.getElementById("wishes").innerHTML =
"HAPPY DIWALI ✨ ";
} 
 
document.querySelector(".box-2").innerHTML = quotes[Math.floor(Math.random()*100)%quotes.length];

if (audio == false){ document.querySelector("#audio").play(); audio=true;}
else  if(audio==true) { document.querySelector("#audio").pause(); audio=false;} 


}

