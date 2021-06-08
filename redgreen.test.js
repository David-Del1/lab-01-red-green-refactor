import getName from './utils.js';
import { copyAndPush }from './utils.js';

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
