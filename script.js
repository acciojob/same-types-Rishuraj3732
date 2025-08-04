function isSameType(value1, value2) {
  //your js code here
	try {
    const val1 = JSON.parse(value1);
    const val2 = JSON.parse(value2);
    return typeof val1 === typeof val2;
  } catch {
    // If JSON.parse fails, treat both as strings
    return true; // both are strings if parse fails
  }
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
