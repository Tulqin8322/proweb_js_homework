var a=1;
var b=+prompt("Son kiriting");
for(let i=1; i<=b; i++){

    a=a*i;
}

alert("1 dan "+b+" gacha sonlarning ko'paytmasi "+a+" ga teng");


var yosh=+prompt("yoshingizni kiriting");

if (yosh>0 && yosh<=18) {
    alert("siz o'qishingiz kerak")
} else if (yosh>18 && yosh<=50) {    
    alert("siz ishlashingiz kerak")
} else if (yosh>50 && yosh<=59) {
    alert("siz yaqinda nafaqaga chiqasiz")
} else if(yosh>59 && yosh<=150){
    alert("siz hayot bo'lsangiz nafaqadasiz")
} else{
    alert("nimadir xato ketdi")
}

var a1=+prompt("birinchi sonni kiriting");
var a2=+prompt("ikkinchi sonni kiriting");
var a3=+prompt("uchinchi sonni kiriting");

if (a1>a2 && a1<a3||a1<a2 && a1>a3) {
    alert("o'rtacha son "+a1)
} else if (a2>a1 && a2<a3||a2<a1 && a2>a3) {
    alert("o'rtacha son "+a2)
} else if (a3>a1 && a3<a2||a3<a1 && a3>a2) {
    alert("o'rtacha son "+a3)
} else if(a1==a2 && a1==a3){
    alert("hamma son bir biriga teng")
}


var vaqt=+prompt("vaqtni kiriting");

if (vaqt>=0 && vaqt<6) {
    alert("tungi soat "+vaqt)
} else if (vaqt>=6 && vaqt<10) {
    alert("ertalabki soat "+vaqt)
} else if (vaqt>=10 && vaqt<15) {
    if(vaqt>12){
        alert("tushki soat "+vaqt-12)
    } else{
        alert("tushki soat "+vaqt)
    }
} else if (vaqt>=15 && vaqt<20) {
    let vaqt1=vaqt-12;
        alert("kechki soat "+vaqt1) ;   
} else if(vaqt>=20 && vaqt<25){
    let vaqt1=vaqt-12;
    alert("tungi soat "+vaqt1)
} else {
    alert("xato kiritdingiz")
}