module.exports = function (source) {
  let style = `
    const style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.append(style);
  `;

  return style;
}