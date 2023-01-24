const getNum1 = ()=>{
  const num1 = document.getElementById('num1').value
  return Number(num1)
}

const getNum2 = ()=>{
  const num2 = document.getElementById('num2').value
  return Number(num2)
}

const getNum3 = ()=>{
  const num3 = document.getElementById('num3').value
  return Number(num3)
}

const addEventListenerToSumButton = ()=>{
  const sumButton = document.getElementById('sum')
  sumButton.addEventListener('click', ()=>{
    const numOne = getNum1()
    const numTwo = getNum2()
    const numThree = getNum3()

    const sum = numOne + numTwo + numThree

    alert(`The sum of ${numOne}, ${numTwo}, and ${numThree} is: ${sum}`)
  })
}

addEventListenerToSumButton()

const addEventListenerToAverageButton = ()=>{
  const AverageButton = document.getElementById('average')
  AverageButton.addEventListener('click', ()=>{
    const numOne = getNum1()
    const numTwo = getNum2()
    const numThree = getNum3()

    const average = (numOne + numTwo + numThree)/3

    alert(`The average of ${numOne}, ${numTwo}, and ${numThree} is: ${average}`)
  })
}

addEventListenerToAverageButton()

const addEventListenerToMultiplyButton = ()=>{
  const MultiplyButton = document.getElementById('multiply')
  MultiplyButton.addEventListener('click', ()=>{
    const numOne = getNum1()
    const numTwo = getNum2()
    const numThree = getNum3()

    const multiply = (numOne * numTwo * numThree)

    alert(`The product of ${numOne}, ${numTwo}, and ${numThree} is: ${multiply}`)
  })
}

addEventListenerToMultiplyButton()

const addEventListenerToPowerButton = ()=>{
  const PowerButton = document.getElementById('power')
  PowerButton.addEventListener('click', ()=>{
    const numTwo = getNum2()
    const numThree = getNum3()

    const power = Math.pow(numTwo, numThree);

    alert(`${numTwo} to the power of ${numThree} is: ${power}`)
  })
}

addEventListenerToPowerButton()

const addEventListenerToSquareRootButton = ()=>{
  const SquareRootButton = document.getElementById('sqrt')
  SquareRootButton.addEventListener('click', ()=>{
    const numThree = getNum3()

    const sqrt = Math.sqrt(numThree);

    alert(`The square root of ${numThree} is: ${sqrt}`)
  })
}

addEventListenerToSquareRootButton()