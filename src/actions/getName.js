export const getName = target => {
  const newName = target.value;
  target.value = '';
  return newName;
}