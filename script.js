"use strict"; 
// Создаем массив случайных слов
let words = [
  "патрик", "гитара", "философия", "корабль", "стрекоза",
  "ваза", "прожектор", "красный", "перепелка", "монитор",
  "градус", "лобзик", "каракурт", "графика", "коробок", 
  "матрица", "колобок", "пися", "стол", "моргенштерн"
];

// Выбираем случайное слово из массива слов
let word = words[Math.floor(Math.random() * words.length)];

// Создаем итоговый массив, который будет ответом
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}


let remainingLetters = word.length

// Игровой цикл
incorrectChar: while(remainingLetters > 0) {
  // Показываем состояние игры
  alert(answerArray.join(" "));

  // Запрос варианта ответа
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры."); 

  if (guess === null) { // Выход из игрового цикла
    break;
  } else if (guess.length !== 1)  { // Просьба поменять букву
    alert("Пожалуйста, введите только одну букву");
  } else { // Проверку прошли, значит обновляем состояние игры

    for (let j = 0; j < word.length; j++) {
      guess = guess.toLowerCase();
      
      if (word[j] === guess && answerArray[j] !== guess) {
        answerArray[j] = guess;
        remainingLetters--;
        alert("Ура, правильная буква!");
      }
    }
  }
  let attemps = 0;
  attemps++;
}
alert(answerArray.join(" ")); // Конец игры
alert("Отлично! Было загадано слово " + '"' + word + '"');
alert("Вы потратили " + attemps + " попыток");
