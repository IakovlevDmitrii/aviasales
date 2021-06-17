
const compose = (...functions) => (component) => (
  functions.reduceRight(
    (wrapped, func) => func(wrapped),
    component
  )
);

export default compose;
