const isAnagram = (string1, string2) => {
    const splitString1 = string1.split('')
    console.log(splitString1)
    console.log(sizeof(splitString1) ) 
	return
}
// Pure letter strings
console.log(isAnagram("hello", "oellh")); // true
console.log(isAnagram("listen", "lidfje")); // false
console.log(isAnagram("Listen", "silent")); // true
// String phrases with spaces (Needs to ignore spaces)
console.log(isAnagram("dorMITORY", "dirty room")); // true
// String phrases with punctuation (Needs to ignore punctuation).
console.log(isAnagram("convers a t i o n", "voices!RANT!ON  !")); // true
console.log(isAnagram("dkj fsdjfh", "this doesn't work")); // false
