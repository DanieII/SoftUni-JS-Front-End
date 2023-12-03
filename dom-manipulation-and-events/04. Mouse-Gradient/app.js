function attachGradientEvents() {
  const gradient = document.querySelector("#gradient");
  const resultContainer = document.querySelector("#result");
  gradient.addEventListener("mousemove", handleGradientMouseOver);
  gradient.addEventListener("mouseout", handleGradientMouseOut);

  function handleGradientMouseOver(e) {
    const mouseRelativeToGradient = e.offsetX;
    const gradientWidth = gradient.clientWidth;
    const result = Math.trunc((mouseRelativeToGradient / gradientWidth) * 100);
    resultContainer.textContent = `${result}%`;
  }

  function handleGradientMouseOut() {
    resultContainer.textContent = "";
  }
}
