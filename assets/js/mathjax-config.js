window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    macros: {
      // Keep vector symbols compatible with local file:// viewing in Chrome.
      // MathJax's optional boldsymbol extension is not reliably loaded there.
      boldsymbol: ["\\mathbf{#1}", 1]
    }
  },
  chtml: {
    scale: 1.05,
    matchFontHeight: false
  }
};
