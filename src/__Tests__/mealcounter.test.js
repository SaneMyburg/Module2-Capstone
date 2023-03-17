import getMealData from '.__Mock__/mockapi.js';

describe('getItemsCount', () => {
  test('returns the correct number of items in the foodList array', () => {
    const foodList = new FoodList();
    foodList.addFood({ idMeal: 1, strMeal: 'Spaghetti', strMealThumb: 'spaghetti.jpg' });
    foodList.addFood({ idMeal: 2, strMeal: 'Pizza', strMealThumb: 'pizza.jpg' });
    const count = getItemsCount(foodList);
    expect(count).toBe(2);
  });
});

