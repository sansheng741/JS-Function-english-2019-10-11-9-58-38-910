function palindrome(message){
	for(var i = 0, j = message.length - 1; i < message.length/2; i++,j--){
		if(message[i] != message[j]){
			return false;
		}
	}
	return true;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true