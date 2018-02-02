let inputNumberArray = [];
let globalInputCounter = 0;

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

let answer = random4Numbers();
console.log("answer = " + answer); //答案
//console.log(random4Numbers());  //use for debug

/*let tempInput = document.getElementsByClassName('inputNumberBtn');
let inputNumberButton = [tempInput[9]];
for(let i = 0; i <= 8; i++){
  inputNumberButton.push(tempInput[i]);
}*/

const checkAnswer = () =>{
  if(inputNumberArray.length != 4){
    window.alert("沒有4位數，母湯喔!");
    return false;
  }
  let hint = [];
  let A = 0;
  let B = 0;
  for(let i = 0; i <= 3; i++){
    for(let j = 0; j <= 3; j++){
      if(inputNumberArray[i] == answer[j]){
        if(i == j){
          A++;
        }
        else{
          B++;
        }
      }
    }
  }
  hint.push(A);
  hint.push(B);
  console.log("hint = " + hint);
  clearInput();
  if(A == 4){
    window.alert("恭喜你贏了!");
    return false;
  }
  return hint;
}

//Input Output
const storeInput = (number) =>{
  if(globalInputCounter >= 4){
    return false;
  }
  inputNumberArray.push(number);
  display();
  globalInputCounter++;
}

const deleteInput = () =>{
  if(globalInputCounter >= 1){
    inputNumberArray.pop();
    globalInputCounter--;
    display();
  }
}

const clearInput = () =>{
  let length = inputNumberArray.length;
  for(let i = 0; i <= (length - 1); i++){
    inputNumberArray.pop();
    globalInputCounter--;
    display();
  }
  console.log("global counter = "+globalInputCounter);
}

const display = () =>{
  let displayName = ('display'+ globalInputCounter);
  let displayTarget = document.getElementById(displayName);
  if(inputNumberArray[globalInputCounter] != null){
    displayTarget.innerHTML = inputNumberArray[globalInputCounter];
  }
  else{
    displayTarget.innerHTML = "-";
  }
}

let inputBox = document.querySelector('.numberInputColumn');
inputBox.addEventListener('click', (e) => {
  let target = e.target;
  if (target.type === 'button') {
    storeInput(target.innerHTML);
    //console.log(inputNumberArray);
  }
});

let submitBox = document.querySelector('.submit');
submitBox.addEventListener('click', (e) =>{
  let target = e.target;
  if (target.type === 'button'){
    if (target.innerHTML === '清除'){
      deleteInput();
      //console.log(inputNumberArray);
    }
    else if(target.innerHTML === '送出'){
      console.log("input = " + inputNumberArray);
      let temporary = checkAnswer();
    }
  }
});
