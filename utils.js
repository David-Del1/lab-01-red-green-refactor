export default (obj) => {
  const object = { obj };
  return Object.values(object)[0];
};

export function copyAndPush(arr, item)  {
  arr.push(item);
  return arr;
}
