const doTest = () => {
  var varGlobal = "9999";
  return varGlobal;
};

varGlobal = "99999";
const varStr = varGlobal.toString();
console.log(varGlobal);
