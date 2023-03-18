import FoodList from '../Modules/display.js';

test('new FoodList object is instanciated', () => {
  const foodList = new FoodList();
  expect(foodList.foods).toBeDefined();
});

describe('Add food', () => {
  const foodList = new FoodList();

  test('add new food', () => {
    const id = '1';
    const title = 'the title';
    const imageUrl = 'image url';

    foodList.addSingleMeal(id, title, imageUrl);

    expect(foodList.foods[id].title).toBe(title);
    expect(foodList.foods[id].image).toBe(imageUrl);
  });

  test('add extra food', () => {
    foodList.addSingleMeal('2', 'second food', 'second image');
    const numberOfFood = Object.keys(foodList.foods).length;

    expect(numberOfFood).toBe(2);
    expect(foodList.foods['2'].title).toBe('second food');
  });

  test('add multiple foods', () => {
    // arrange
    const foods = [
      {
        idMeal: '3',
        strMeal: 'third',
        strMealThumb: 'url',
      },
      {
        idMeal: '4',
        strMeal: 'fourth',
        strMealThumb: 'url',
      },
    ];
    const numberOfFoodsBeforeAdd = Object.keys(foodList.foods).length;

    // act
    foodList.addMeals(foods);
    const numberOfFoodsAfterAdd = Object.keys(foodList.foods).length;

    expect(numberOfFoodsBeforeAdd).toBe(2);
    expect(numberOfFoodsAfterAdd).toBe(4);
  });
});

describe('Get likes', () => {
  const foodList = new FoodList();
  foodList.addSingleMeal('11', '', '');

  test('no like returns 0', () => {
    expect(foodList.getLikes('11')).toBe(0);
  });

  test('five likes', () => {
    foodList.foods['11'].likes = 5;
    expect(foodList.getLikes('11')).toBe(5);
  });
});

describe('Set likes', () => {
  const foodList = new FoodList();

  test('zero like', () => {
    foodList.addSingleMeal('11', '', '');
    foodList.setLikes('11', 2);
    expect(foodList.getLikes('11')).toBe(2);
  });

  test('zero like', () => {
    foodList.addSingleMeal('11', '', '');
    foodList.setLikes('11', 5);
    expect(foodList.getLikes('11')).toBe(5);
  });
});

describe('Get human readable like counter', () => {
  const foodList = new FoodList();

  test('zero like', () => {
    foodList.addSingleMeal('11', '', '');
    foodList.setLikes('11', 0);
    expect(foodList.getLikesText('11')).toBe('0 like');
  });

  test('one like', () => {
    foodList.addSingleMeal('22', '', '');
    foodList.setLikes('22', 1);
    expect(foodList.getLikesText('22')).toBe('1 like');
  });

  test('many likes', () => {
    foodList.addSingleMeal('33', '', '');
    foodList.setLikes('33', 2);
    expect(foodList.getLikesText('33')).toBe('2 likes');
  });
});

describe('Count all food items', () => {
  test('count 0 items', () => {
    const foodList = new FoodList();
    expect(foodList.getItemsCount()).toBe(0);
  });

  test('count multiply items', () => {
    const foodList = new FoodList();
    foodList.addSingleMeal('123', '', '');
    foodList.addSingleMeal('333', '', '');
    foodList.addSingleMeal('222', '', '');
    expect(foodList.getItemsCount()).toBe(3);
  });
});

describe('count comments', () => {
  test('count 0 comment', () => {
    const foodlist = new FoodList();
    foodlist.addSingleMeal('676', '', '');
    expect(foodlist.getCommentsCount('676')).toBe(0);
  });

  test('count multiple comments', () => {
    const foodList = new FoodList();
    foodList.addSingleMeal('676', '', '');
    foodList.addComments('676', [
      {
        comment: '',
        creation_date: '',
        username: '',
      },
      {
        comment: '',
        creation_date: '',
        username: '',
      },
    ]);
    expect(foodList.getCommentsCount('676')).toBe(2);
  });
});

describe('retrieve comments', () => {
  test('get 0 comments', () => {
    const foodList = new FoodList();
    foodList.addSingleMeal('676', '', '');
    expect(foodList.getComments('676')).toEqual([]);
  });

  test('get 1 comment', () => {
    const foodList = new FoodList();
    foodList.addSingleMeal('345', '', '');
    foodList.addComments('345', [
      {
        username: 'check',
        comment: 'response',
        date: '2023-05-04',
      },
    ]);
    expect(foodList.getComments('345')).toEqual([
      {
        username: 'check',
        comment: 'response',
        date: '2023-05-04',
      },
    ]);
  });
});
