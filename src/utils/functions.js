export function toggle(collection, value) {
  const arr = [...collection];
  const index = arr.findIndex(i => i === value);
  if (index === -1) {
    arr.push(value);
  } else {
    arr.splice(index, 1);
  }
  return arr;
}
