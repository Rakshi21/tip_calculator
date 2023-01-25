const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numPeople = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')



// Get number of people from number of people div
let num = Number(numPeople.innerText)


// ** Calculate the total bill per person **
const calculateBill = () => {

  // console.log(num)
  // console.log(billInput.value)

  // get bill from user input & convert it into a number
  const bill = Number(billInput.value)
  // console.log(bill)

  // get the tip from user & convert it into a percentage (divide by 100)
  const tip = Number(tipInput.value) / 100
  // console.log(tip)

  // get the total tip amount

  const tipAmount = Number(bill * tip)
  // console.log({ totalTip })


  // calculate the total (tip amount + bill)

  const total = Number(tipAmount + bill)
  // console.log({total})
  // calculate the per person total (total divided by number of people)
  const perPersonTotal = Number(total / num)
  // console.log({perPersonTotal})

  // update the perPersonTotal on DOM & show it to user and keep it upto 2 decimal places .toLocaleString('en-US')-for currency
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  num += 1

  // update the DOM with the new number of people
  numPeople.innerText = num

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (num <= 1) {
    alert("Hey, You cannot have less than 1 person!")
    return
  }


  // decrement the amount of people
  num -= 1

  // update the DOM with the new number of people
  numPeople.innerText = num

  // calculate the bill based on the new number of people
  calculateBill()
}