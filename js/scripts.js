var str="Привет",
	sum=123,
	num=15.8,
	flag=true,
	txt="true";
console.log(typeof str, typeof sum, typeof num, typeof flag, typeof txt);

console.log("2-ая задача");
console.log(a1 = 5 % 3, typeof a1);
console.log(a2 = 3 % 5, typeof a2);
console.log(a3 = 5 + '3', typeof a3);
console.log(a4 = '5' + 3, typeof a4);
console.log(a5 = 75 + 'кг', typeof a5);
console.log(a6 = 785 * 653, typeof a6);
console.log(a7 = 100 / 25, typeof a7);
console.log(a8 = 0 * 0, typeof a8);
console.log(a9 = 0 / 2, typeof a9);
console.log(a10 = 89 / 0, typeof a10);
console.log(a11 = 98 + 2, typeof a11);
console.log(a12 = 5 - 98, typeof a12);
console.log(a13 = (8 + 56 * 4) / 5, typeof a13);
console.log(a14 = (9 - 12) * 7 / (5 + 2), typeof a14);
console.log(a15 = +"123", typeof a15);
console.log(a16 = 1 || 0, typeof a16);
console.log(a17 = false || true, typeof a17);
console.log(a18 = true > 0, typeof a18);


console.log("3-ья задача");
var width=23,
	height=10;
SPryam = width * height;
console.log(SPryam);

console.log("4-aя задача");
console.log(Math.PI * (a7 / 2)**2 * 10);
console.log("5-aя задача");
console.log(Math.PI * 5**2);
console.log("6-aя задача");
var a = 5,
	b = 7,
	h = 10;
console.log(STrap = h / 2 * (a + b));
console.log("7-aя задача");
console.log(Pereplata = (2000000 - (2000000 * 0.9)) * 5); // вроде так ) 
console.log("8-aя задача");   // чота труднова-то у меня вже с алгеброй...
console.log("9-aя задача");  
console.log("   Бывало, спит у ног собака,");
console.log("   костер занявшийся гудит,");
console.log("   и женщина из полумрака");
console.log("   глазами зыбкими глядит.");
console.log("");
console.log("   глазами зыбкими глядит.");
console.log("   на куртку рыжую мою.");
console.log("   и мне, задумчивая, скажет:");
console.log("");
console.log(""); 
console.log('   "А ну-ка, спой!.."- и я пою.');
console.log("10-aя задача"); 
var q1 = "индо земля зашаталась под ногами-и вырос,",
	q2 = "и заревел он голосом диким…",
	q3 = "блеснула молния и ударил гром,",
	q4 = "а так какое-то чудище, страшное и мохнатое,",
	q5 = "как будто из-под земли, перед купцом:",
	q6 = "Он подошёл и сорвал аленький цветочек.",
	q7 = "зверь не зверь, человек не человек,",
	q8 = "В ту же минуту, безо всяких туч,";
console.log(q6 + " " + q8 + " " + q5 + " " +q3 + " " +q1 + " " +q7 + " " +q2);
console.log("");
console.log("HomeWork 2_1");
console.log(""); 
console.log("1-aя задача");
var $name = prompt('Ваше имя?', '');
var $age = prompt('Сколько Вам лет?', '');
var $city = prompt('В каком городе Вы живёте?', '');
var $phone = prompt('Ваш номер телефона', '');
var $email = prompt('Ваш e-mail', '');
var $company = prompt('Где Вы работаете?', '');
document.write("Меня зовут " + $name + " Мне " + $age + " лет. Я проживаю в городе " + $city + " и работаю в компании " + $company + " Мои контактные данные: " + $phone + ", " + $email);
document.write("</ hr> ");  // почему-то не работает...
document.write($name + " родился в " + (2019-$age) + " году." ); 
console.log("3-ья задача");
var $str = prompt('Введите число из 6-ти символов', '');
if ((- $str[0] - $str[1] - $str[2]) == ( - $str[3] - $str[4] - $str[5]))
	{console.log("Да")}
else {
	console.log("Нет")
}
console.log("4-ая задача");
var $a = prompt('Введите число больше ноля', '');
if ($a>0)
	{
		{console.log("Верно")}
	}
else{
		console.log("Неверно")
}
console.log("5-ая задача");
var a=10,
	b=2;
console.log( a+b, a-b, a*b, a/b);
if ((a + b) > 0) 
{
	console.log((a + b)**2)
}
console.log("6-ая задача");
if (( 11>a > 2 ) || (14 > b >= 6)   )
{
	console.log("Верно")
}
else {
	console.log("Неверно")	
} 
console.log("7-ая задача");
var $quarter = prompt('Введите число  от 0 до 59', '');
if ( $quarter >= 0 &&  $quarter < 15)
	{ console.log("Число находится в 1-ой четверти") }
else if ( $quarter >= 15 &&  $quarter < 30)
	{ console.log("Число находится во 2-ой четверти") }
else if ( $quarter >= 30 &&  $quarter < 45)
	{ console.log("Число находится в 3-ей четверти") }
else if ( $quarter >= 45 &&  $quarter <= 59)
	{ console.log("Число находится в 4-ой четверти") }
else { console.log("Вы ввели число не входящее в заданный диапазон") }

console.log("8-ая задача");
var $day = prompt('Введите число  от 1 до 31', '');
if ( $day > 0 && $day < 10)
	{ console.log("Число находится в 1-ой декаде") }
else if	( $day >= 10 && $day < 20)
	{ console.log("Число находится в 2-ой декаде") }
else if	( $day >= 20 && $day <= 31)
	{ console.log("Число находится в 3-ей декаде") }

console.log("9-ая задача");  
var $days = prompt('Введите количество дней', '');
if ($days < 365)
	{ console.log("Не хватает до полного года") }
else { console.log($yers =  $days / 365 + " лет")}
if ($days < 31)
	{ console.log("Не хватает до полного месяца") }
else { console.log($month =  $days / 31 + " месяцев")}
if ($days < 7)
	{ console.log("Не хватает до полной недели") }
else { console.log($month =  $days / 7 + " недель")}

console.log("10-ая задача");
var $days = prompt('Введите порядковый день года от 1 до 365', '');

$month =  Math.abs($days / 31);
console.log($month);
switch ($month) {
	case 0:
		console.log("январь"); $season = "зима";
	break;
	case 1:
		console.log("февраль"); $season = "зима";
	break;
	case 2:
		console.log("март"); $season = "весна";
	break;
	case 3:
		console.log("апрель"); $season = "весна";
	break;
	case 4:
		console.log("май"); $season = "весна";
	break;
	case 5:
		console.log("июнь"); $season = "лето";
	break;
	case 6:
		console.log("июль"); $season = "лето";
	break;
	case 7:
		console.log("август"); $season = "лето";
	break;
	case 8:
		console.log("сентябрь"); $season = "осень";
	break;
	case 9:
		console.log("октябрь"); $season = "осень";
	break;
	case 10:
		console.log("ноябрь"); $season = "осень";
	break;
	case 11:
		console.log("декабрь"); $season = "зима";
	break;					
	default:
		alert('Вы ввели число не входящее в заданный интервал');
}
console.log($season);

// последняя задача почему-то не работает!!!