function isSameType(value1, value2) {
  try {
    const parsed1 = JSON.parse(value1);
    const parsed2 = JSON.parse(value2);
    return typeof parsed1 === typeof parsed2;
  } catch {
    // fallback if input can't be parsed (e.g., user enters a word)
    return typeof value1 === typeof value2;
  }
}

let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
