//examples of bike serial nubers
const bikeString1 = '6F2k-1d-0-z'
const bikeString2 = '1-4k-9-b'
//function that changes the code to a valid format
const format_serial_number = (bikeString , length) => {
  /*
  value 1 is the final result by reversing 2 
  value 2 is when we add the new dashes to the reversed string 3
  value 3 is when we take out the previous dashes from the bikeString
  value 4 counter is a way I can count the index of the string
  */
  newSerialNo = '';//1
  newBikeSerialNo = '';//2
  undashedSerialNo = '';//3
  counter = 0;//4
  //gets rid of hashes
  for (let letter in bikeString) {
    undashedSerialNo = bikeString[letter]!= '-' ? undashedSerialNo += bikeString[letter] : undashedSerialNo ;
    /*if (bikeString[i]!= '-') { undashedSerialNo += bikeString[i] 
    }*/
  } 


  // reverses string and adds hashes , implements format system
  for (let i=undashedSerialNo.length-1 ; i>=0 ; i--) {
    /*if ((counter)%length == 0 && counter!= 0) {
      newBikeSerialNo += '-'
    }*/
    newBikeSerialNo = counter%length == 0 && counter!= 0 ? newBikeSerialNo += '-' : newBikeSerialNo ;
    newBikeSerialNo += undashedSerialNo[i]
    counter++
  }

  //reverses string back again and converts to upper case
  for (let j = newBikeSerialNo.length - 1; j >= 0; j--) { 
        newSerialNo += newBikeSerialNo[j];
    }
    return newSerialNo.toUpperCase();
}

console.log([format_serial_number(bikeString1,4) , format_serial_number(bikeString2,2)])
console.log( format_serial_number('1ggg-4kgg-r-b555' , 5))



