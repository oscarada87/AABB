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

//console.log(random4Numbers());  //use for debug

/*let tempInput = document.getElementsByClassName('inputNumberBtn');
let inputNumberButton = [tempInput[9]];
for(let i = 0; i <= 8; i++){
  inputNumberButton.push(tempInput[i]);
}*/

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
    console.log(inputNumberArray);
  }
});

let submitBox = document.querySelector('.submit');
submitBox.addEventListener('click', (e) =>{
  let target = e.target;
  if (target.type === 'button'){
    if (target.innerHTML === '清除'){
      deleteInput();
      console.log(inputNumberArray);
    }
    else if(target.innerHTML === '送出'){
      console.log("送出");
      console.log(inputNumberArray);
    }
  }
})
