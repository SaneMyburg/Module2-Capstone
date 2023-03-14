export const getData = () => {
  fetch('https://themealdb.com/api/json/v1/1/search.php?s')
    .then((response) => response.json())
    .then((data) => {
      const { meals } = data;
      const allFoods = document.querySelector('.all-foods');
      const mealList = document.createElement('ul');
      meals.forEach((meal) => {
        const listItem = document.createElement('li');
        listItem.textContent = meal.strMeal;
        mealList.appendChild(listItem);
      });
      allFoods.appendChild(mealList);

      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('button-container');
      const button1 = document.createElement('button');
      button1.textContent = 'Likes';
      buttonDiv.appendChild(button1);
      const button2 = document.createElement('button');
      button2.textContent = 'Comments';
      buttonDiv.appendChild(button2);
      allFoods.appendChild(buttonDiv);
    })
    .catch((error) => console.error(error));
};
