export default (obj) => {
  const object = { obj };
  return Object.values(object)[0];
};

export function copyAndPush(arr, item)  {
  const newArray = [...arr];
  newArray.push(item);
  return [arr, newArray];
}
