function rot13(str) {
  let arr = str.split(" ");
  let newArrFinal =[];
  for(let i=0; i<arr.length; i++){
    let newArr =[];
    for(let j=0; j<arr[i].length; j++){
      if(arr[i].charCodeAt(j)>=78 && arr[i].charCodeAt(j)<=90){
        let value = arr[i].charCodeAt(j)-13;
        let convertedLetter = String.fromCharCode(value);
        newArr.push(convertedLetter);
      }else if(arr[i].charCodeAt(j)<78 && arr[i].charCodeAt(j)>=65){
        let value = arr[i].charCodeAt(j)+13;
        let convertedLetter = String.fromCharCode(value);
        newArr.push(convertedLetter);
      }else{
        newArr.push(arr[i][j]);
      }
    }
    newArrFinal.push(newArr);
    //console.log(newArr);

  }
  let result =newArrFinal.join(" ");
  console.log(result);
  result = result.replace(/,+/g, '')
  console.log(result);
  return result;
}

rot13("SERR PBQR PNZC");

let a = "S";
let b =a.charCodeAt(0)-13;
console.log(b);
console.log(typeof b);
console.log(String.fromCharCode(b));
let str ="HOLA H H HOLA";
console.log(str.split(" "));
