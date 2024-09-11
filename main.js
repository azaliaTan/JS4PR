'use strict';




//1 задание - готов

function Chet(a,b){
 a=Number(a);
 b=Number(b);

 for(;a<=b;a++){
  if(a % 2 == 1) continue;
  alert (a);
 }
 
}

 Chet(prompt('введите первое число',''),prompt('введите второе число',''));


 //2 задание -готов

let i=0;
while(i<3){
    alert (`number ${i}!`);
    i++
}



 //3 задание - готово

let h;

do {
  h = prompt("введите число", "");
  if (h === null) {
      alert("нажата отмена");
      break;
  }
} while (Number(h) <= 10);

if (h!== null && Number(h) > 10) {
  alert("вы ввели число больше 10");
 }

// //4 задание - готов 

function Min(a,b){
    a=Number(a);
    b=Number(b);

  if(a>=b){
    alert(b);
  }else{
    alert(a);
  }
}

Min(prompt('первое число',''),
prompt('второе число',''));



 //5 задание -готово

let ask = (question,yes,no)=> {
  if (confirm(question)) yes() 
  else no();
};

ask( "Вы согласны?" , () => alert("Вы согласились"), 
  ()=> alert("Вы отменили выполнение"))

//6 задание


function checkAge(age){
  let Check = age > 18 ||  confirm('Родители разрешили?');
  alert(Check);
}

checkAge(prompt('Введите возраст',''));