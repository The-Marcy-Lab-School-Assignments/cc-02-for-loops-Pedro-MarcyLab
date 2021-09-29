//1
function countToTen(){
  for(i = 1; i <= 10; i++){
      console.log(i)
  }
}

//2
function countFromOne(int){
  for(i = 1; i <= int; i++){
      console.log(i)
  }
}

//3
function countEveryEven(int){
  for(let i = 1; i <= int; i++){
      if(i % 2 === 0){
          console.log(i)
      }
  }
}

//4
function countEveryOdd(int){
  for(let i = 1; i <= int; i++){
      if(i % 2 !== 0){
          console.log(i)
      }
  }
}

//5 
function countEvens(){
  
}

countToTen()
countFromOne(7)
countEveryEven(8)
countEveryOdd(10)