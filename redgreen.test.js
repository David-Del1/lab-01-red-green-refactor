import getName from './utils.js';

describe('red/green refactor', () => {

  it('returns name spot', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    getName(spot);

    expect(getName(spot)).toEqual('spot');
  });

  it('returns name Aang', () => {
    const character = { 
      _id: '5cf5679a915ecad153ab68c9', 
      name: 'Aang' 
    };
    getName(character);

    expect(getName(character)).toEqual('Aang');
  });


});
