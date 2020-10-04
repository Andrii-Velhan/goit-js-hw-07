console.log(document.querySelector('.task').textContent);

const categoriesItem = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesItem.length} категории.`);

categoriesItem.forEach(num => {
  console.log(`Категория: ${num.firstElementChild.textContent}`),
    console.log(`Количество элементов ${num.lastElementChild.children.length}`);
});

/*
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories,
найдет и выведет в консоль текст заголовка элемента (тега h2)
и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/
