function splitString(array, inputPattern) {
  let temp = "";
  let temparr = [];
  let regextmp;

  for (let i = 0; i < array.length; i++) {
    temparr = [];

    temp = array[i];

    //matching text with pattern by using RegExp
    //reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    regextmp = new RegExp(temp);

    let k = 0;
    //condition using method match to match all about the pattern and array
    if (inputPattern.match(regextmp)) {
      // given temparr[k] asign as arra[i]
      temparr[k] = array[i];

      for (let j = 0; j < array.length; j++) {
        if (array[j] !== array[i]) {
          //matching text with pattern by using RegExp to find multiple cases about array and pattern
          regextmp = new RegExp(temp + array[j]);

          if (inputPattern.match(regextmp)) {
            k++;
            temparr[k] = array[j];
            temp = array[j];
          }
        }
      }

      regextmp = new RegExp(temp);
      if (inputPattern.match(regextmp)) {
        console.log(temparr);
      }
    }
  }
}
const arrayDictionary = ["pro", "gram", "merit", "program", "it", "programmer"];
const pattern = "programit"; // input pattern in here

splitString(arrayDictionary, pattern);
