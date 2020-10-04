console.log(document.querySelectorAll('.task')[1].textContent);

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const containerUl = document.querySelector('#ingredients');

// const elements = ingredients.map(option => {
//   const newItem = document.createElement('li');
//   newItem.textContent = option;
//   //newItem.textContent = `${option}: ${option.length} символов`;
//   //newItem.classList.add('ingredients-item');
//   return newItem;
// });

// console.log(containerUl);
// //console.log(elements);

const makeElementsLi = options => {
  return options.map(option => {
    const newItem = document.createElement('li');
    newItem.textContent = option;
    //newItem.textContent = `${option}: ${option.length} символов`;
    //newItem.classList.add('ingredients-item');
    return newItem;
  });
};

console.log(containerUl);
//console.log(elements);

const elements = makeElementsLi(ingredients);
containerUl.append(...elements);

/*
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива
ingredients создаст отдельный li, после чего вставит
все li за одну операцию в список ul.ingredients.
Для создания DOM - узлов
используй document.createElement().
*/
