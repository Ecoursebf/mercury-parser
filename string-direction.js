module.exports = function(text) {
  const rtlChars = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
  return rtlChars.test(text) ? 'rtl' : 'ltr';
};
