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
  const finalArray = [];
  const newArray = arr.map(word => word.toUpperCase());

  for(let i = 0; i < newArray.length; i++) {
    if(newArray[i][0] !== 'F') {
      finalArray.push(newArray[i]);
    }
  }
  return finalArray;
  
}
