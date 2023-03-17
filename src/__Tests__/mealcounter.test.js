/**
 * @jest-environment jsdom
 */
import { getMealData } from "../__Mock__/mockapi";

describe('getMealData function', () => {
  test('should return an object with meals array', () => {
    return getMealData().then(data => {
      expect(data).toBeDefined();
      expect(data.meals).toBeDefined();
      expect(Array.isArray(data.meals)).toBe(true);
    });
  });

  test('should return an array with 3 meal objects', () => {
    return getMealData().then(data => {
      expect(data.meals.length).toBe(3);
      expect(typeof data.meals[0]).toBe('object');
      expect(typeof data.meals[1]).toBe('object');
      expect(typeof data.meals[2]).toBe('object');
    });
  });

  test('should have a strMeal, strMealThumb, and idMeal properties for each meal', () => {
    return getMealData().then(data => {
      data.meals.forEach(meal => {
        expect(meal.strMeal).toBeDefined();
        expect(meal.strMealThumb).toBeDefined();
        expect(meal.idMeal).toBeDefined();
      });
    });
  });
});


