//2
let birthYear = 1995;          // год рождения, тип данных: number
let age = 28;                   // возраст, тип данных: number
let name = "Алексей";           // имя, тип данных: string
let isWorking = true;           // работаете ли вы, тип данных: boolean

// Часть 2: Выводим значения переменных и их типы в консоль

console.log("Год рождения:", birthYear, "- тип:", typeof birthYear);
console.log("Возраст:", age, "- тип:", typeof age);
console.log("Имя:", name, "- тип:", typeof name);
console.log("Работаете ли вы?", isWorking, "- тип:", typeof isWorking);

// Меняем значение возраста
age = 29;
console.log("Новый возраст:", age);

//3
const booleanValue = false;
const numberValue = 20.20;
const stringValue = "30";
// Менять код ниже
// 1. Преобразуем booleanValue в строку
const booleanToString = String(booleanValue);
console.log("booleanValue в строке:", booleanToString, "- тип:", typeof booleanToString);

// 2. Преобразуем numberValue в целое число (округление в меньшую сторону)
const numberToInteger = Math.floor(numberValue);
console.log("numberValue в целое число:", numberToInteger, "- тип:", typeof numberToInteger);

// 3. Преобразуем stringValue в число
const stringToNumber = Number(stringValue);
console.log("stringValue в число:", stringToNumber, "- тип:", typeof stringToNumber);

//4
const lower = -20;
const upper = 100;
const threshold = 30;
let a = Math.floor(Math.random() * (upper-lower+1)) + lower; // Пока не обращаем внимания, тут будет случайное число от -20 до 100
let greek = Math.floor(Math.random() * 11); // от 0 до 10

console.log("Текущее значение переменной a - "+a); 

// Менять код ниже


// Часть 1: создаем переменную partOne
let partOne;
let condition;

// Проверяем значение a относительно threshold и присваиваем partOne соответствующее значение
if (a < threshold) {
    partOne = upper - lower; // полный диапазон чисел от lower к upper
    condition = "a < threshold";
} else if (a > threshold) {
    partOne = a * threshold; // произведение a и threshold
    condition = "a > threshold";
} else {
    partOne = "Вам невероятно повезло!"; // a равно threshold
    condition = "a == threshold";
}

// Вычисляем вероятность для каждого условия
let probability = 0;
if (condition === "a < threshold") {
    probability = ((threshold - lower) / (upper - lower + 1)) * 100;
} else if (condition === "a > threshold") {
    probability = ((upper - threshold) / (upper - lower + 1)) * 100;
} else {
    probability = (1 / (upper - lower + 1)) * 100;
}

// Выводим результат
console.log("Новое значение partOne:", partOne);
console.log("Условие:", condition);
console.log("Вероятность:", probability.toFixed(2) + "%");

// Часть 2: выводим значение greek в греческой записи
const greekNumerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
console.log("Значение greek в греческой записи:", greekNumerals[greek]);

// Часть 3: проверяем, является ли a четным или нечетным
if (a % 2 === 0) {
    console.log("Значение a является четным.");
} else {
    console.log("Значение a является нечетным.");
}

//5
for (let i = 1; i <= 20; i++) {
    for (let j = 0; j <= 20; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('--------------------'); // Разделитель между таблицами
  }

  //6
  // Объявления функций
console.log("Тут объявляются функции");

// Задача 1: Развернуть строку и проверить палиндром
function reverseString(str) {
  const reversed = str.split("").reverse().join("");
  if (str === reversed) {
    console.log("Строка является палиндромом");
  }
  return reversed;
}

// Задача 2: Подсчёт гласных в строке
function countVowels(str) {
  const vowels = "aeiouаеёиоуыэюя"; // Включаем гласные для английского и русского
  return [...str.toLowerCase()].filter(char => vowels.includes(char)).length;
}

// Задача 3: Проверка пароля
function isPasswordValid(password) {
  const minLength = 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  return password.length >= minLength && hasLowercase && hasUppercase && hasNumber;
}

// Тестирование функций
console.log("Вызов функций");

// Тестирование функции reverseString
console.log("Функция reverseString");
console.log(reverseString("level")); // палиндром
console.log(reverseString("hello"));
console.log(reverseString("world"));

// Тестирование функции countVowels
console.log("Функция countVowels");
console.log(countVowels("Programming")); // 3
console.log(countVowels("Программирование")); // 6
console.log(countVowels("12345")); // 0

// Тестирование функции isPasswordValid
console.log("Функция isPasswordValid");
console.log(isPasswordValid("Password123")); // true
console.log(isPasswordValid("password")); // false
console.log(isPasswordValid("Pass123")); // false
