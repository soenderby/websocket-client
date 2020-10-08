// Debug function using partial application
const trace = label => value => {
  console.log(label + ': ' + value);
  return value;
}

// curried map function
// does not really need tests
const curriedMap = fn => mappable => mappable.map(fn);

export {
  trace,
  curriedMap
}