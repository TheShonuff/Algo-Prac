function alphabetPosition(text) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const result = [];

  for (let i = 0; i < text.length; i++) {
    let position = (element) =>
      element.toLowerCase() === text.charAt(i).toLowerCase();
    if (alphabet.findIndex(position) >= 0) {
      result.push(alphabet.findIndex(position) + 1);
    } else if (alphabet.findIndex(position) === -1) {
      continue;
    }
  }
  return result.join(" ");
}

//this is working on gnome
