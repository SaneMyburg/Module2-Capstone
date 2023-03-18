function getMealData() {
  return Promise.resolve({
    meals: [
      {
        strMeal: 'item1',
        strMealThumb: 'image url',
        idMeal: '123',
      },
      {
        strMeal: 'item2',
        strMealThumb: 'image url',
        idMeal: '456',
      },
      {
        strMeal: 'item3',
        strMealThumb: 'image url',
        idMeal: '789',
      },
    ],
  });
}

export default getMealData;