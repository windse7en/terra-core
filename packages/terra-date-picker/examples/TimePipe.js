export default function createAutoCorrectedDatePipe(dateFormat = 'hh:mm') {
  return function(conformedValue) {
    // debugger;

    const indexesOfPipedChars = []
    const dateFormatArray = dateFormat.split(/[^hm]+/)
    const maxValue = {'hh': 23, 'mm': 59}
    const minValue = {'hh': 0, 'mm': 0}
    const conformedValueArr = conformedValue.split('')
    const dateFormatCharacterArr = dateFormat.split('')
    let i = 0;

    // Check first digit
    dateFormatArray.forEach((format) => {
      // debugger;
      const position = dateFormat.indexOf(format)
      const maxFirstDigit = parseInt(maxValue[format].toString().substr(0, 1), 10)

      if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
        conformedValueArr[position + 1] = conformedValueArr[position]
        conformedValueArr[position] = 0
        indexesOfPipedChars.push(position)
      }
    })

    // Replace placeholder mask character with the date format character
    // for (i = 0; i < conformedValueArr.length; i++) { 
    //   if (conformedValueArr[i] === '_') {
    //     conformedValueArr[i] = dateFormatCharacterArr[i]
    //   }
    // }

    // Check for invalid date
    const isInvalid = dateFormatArray.some((format) => {
      const position = dateFormat.indexOf(format)
      const length = format.length
      const textValue = conformedValue.substr(position, length).replace(/\D/g, '')
      const value = parseInt(textValue, 10)

      return value > maxValue[format] || (textValue.length === length && value < minValue[format])
    })

    if (isInvalid) {
      return false
    }

    return {
      value: conformedValueArr.join(''),
      indexesOfPipedChars
    }
  }
}
