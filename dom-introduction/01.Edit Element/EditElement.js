function edit(element, match, replacer) {
  element.innerText = element.innerText.replace(new RegExp(match, "g"), replacer);
}
