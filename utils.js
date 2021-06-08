export default (obj) => {
  const object = { obj };
  return Object.values(object)[0];
};

export function copyAndPush(arr, item)  {
  const newArray = [...arr];
  newArray.push(item);

  return [arr, newArray];
}

export function capitalizeAndFilter(arr) {
  
  const newArray = [];
  arr.map(word => {
    if(word[0] !== 'f') {
      newArray.push(word.toUpperCase()); 
    }
  });
  
  return newArray;
  
}
