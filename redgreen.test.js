import getName, { capitalizeAndFilter, fetchQuotes } from './utils.js';
import { copyAndPush } from './utils.js';

describe('red/green refactor', () => {

  it('returns name spot', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    getName(spot);

    expect(getName(spot.name)).toEqual('spot');
  });

  it('returns name Aang', () => {
    const character = { 
      _id: '5cf5679a915ecad153ab68c9', 
      name: 'Aang' 
    };
    getName(character);

    expect(getName(character.name)).toEqual('Aang');
  });


});

describe('copy and push function', () => {

  it('returns a new array with all original items plus new item pushed to end', () => {
    const numbers = [1, 2, 3];
    const newNumbers = copyAndPush(numbers, 4);
    // copyAndPush(numbers, 4);

    expect(newNumbers).toEqual([numbers, [1, 2, 3, 4]]);
  });


});

describe('Capitalize and push', () => {
  it('Capitalizes all strings and filters out F/f', () => {
    const array = ['coffee', 'milk', 'bread', 'french toast', 'buns', 'french fries'];

    expect(capitalizeAndFilter(array)).toEqual(['COFFEE', 'MILK', 'BREAD', 'BUNS']);
  });
});

describe('fetch quotes', () => {
  it('returns a single quote in appropriate format', async () => {
    const quote = await fetchQuotes();
    console.log(quote);
    expect(quote).toEqual({ 'image': 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png', 'name': 'Bender', 'text': 'Bite my shiny metal ass.' });


  });
});
