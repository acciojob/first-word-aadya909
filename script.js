function firstWord(s) {
  // Trim leading spaces to find the first actual word
  s = s.trimStart();
  
  // Find the index of the first space
  let spaceIndex = s.indexOf(' ');
  
  // If no space is found, return the entire string
  if (spaceIndex === -1) {
    return s;
  }
  
  // Return substring up to the first space
  return s.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

