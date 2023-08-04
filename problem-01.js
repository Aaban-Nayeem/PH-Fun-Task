// Take a Function name with takaToDollar()
function takaToDollar(taka) {
  // Dollar 0.0092 = Taka 1
  let dollar = 0.0092;
  let convertTakaToDollar = taka * dollar;
  return convertTakaToDollar + "$";
}
console.log(takaToDollar(110));
