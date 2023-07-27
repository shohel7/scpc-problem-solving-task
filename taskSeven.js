function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentVal = romanNumeralsMap[romanNumeral[i]];
      const nextVal = romanNumeralsMap[romanNumeral[i + 1]];
  
      if (nextVal > currentVal) {
        result -= currentVal;
      } else {
        result += currentVal;
      }
    }
  
    return result;
  }
  
  console.log(romanToInt("II"));

  