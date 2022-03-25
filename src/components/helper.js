export function checkTodoExists(arr, todo) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].text === todo) {
      return true;
    }
  }
  return false;
}
