console.log(document.querySelectorAll('.task')[3].textContent);

const counterValue = document.querySelector('#value');

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.value;
  //console.log(`Значение счетчика: ${counterValue.textContent}`);
});

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.value;
  //console.log(`Значение счетчика: ${counterValue.textContent}`);
});

/*
Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать
и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее
значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения
значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/
