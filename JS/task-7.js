console.log(document.querySelectorAll('.task')[6].textContent);

const fontSizeControlEl = document.querySelector('#font-size-control');
console.dir(fontSizeControlEl.value);

const textEl = document.querySelector('#text');
console.log(textEl.style.fontSize);

fontSizeControlEl.addEventListener('input', fontSizeChange);

function fontSizeChange() {
  console.log(fontSizeControlEl.value);
  textEl.style.fontSize = `${fontSizeControlEl.value}px`;
}

// function fontSizeChange(event) {
//   textEl.style.fontSize = event.currentTarget.value + 'px';
// }

/*
Задание 7
Напиши скрипт, который реагирует на изменение значения
input#font-size-control (событие input) и изменяет инлайн-стиль
span#text обновляя свойство font-size. В результате
при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>
*/
