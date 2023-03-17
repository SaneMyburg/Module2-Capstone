/**
 * @jest-environment jsdom
 */

import { getAllFoodData } from './Methods-all.js';
import FoodList from './display.js';

jest.mock('..//Modules/__Mocks__/Mock-api.js');

test('Get correct number of items by calling food API', () => {
  // arrange
  const allFoodList = new FoodList();

  // act
  getAllFoodData()
    .then(() => {
      expect(allFoodList.getItemsCount()).toBe(3);
    })
    .catch(() => {
      expect(allFoodList.getItemsCount()).toBe(0);
    });
});
