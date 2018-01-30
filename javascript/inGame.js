
const getRandomNumber = () =>{
  let maxNum = 9;
  let minNum = 0;
  let n = Math.floor(Math.random() * (maxNum - minNum + 1));
  return n ;
}

const checkRepeat = (arr, n) =>{
  for(let i = 0; i < n; i++){
    if(arr[n] === arr[i]){
      return true;
    }
  }
  return false;
}
//Becareful array count from 0

const random4Numbers = () =>{
  let arr = [0, 0, 0, 0];
  let counter = 0;
  arr[counter] = getRandomNumber();
  counter++;
  while(counter < 4){
    arr[counter] = getRandomNumber();
    while(checkRepeat(arr, counter)){
      arr[counter] = getRandomNumber();
    }
    counter++;
  }
  return arr;
}

console.log(random4Numbers());
