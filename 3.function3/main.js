function alphabetSort(message){
   
   var str = message.split('');
   for(var i = 0; i < str.length - 1; i++){
	   for(var j = 0; j < str.length - i - 1; j++){
		   if(str[j] > str[j+1]){
				var temp = str[j];
				str[j] = str[j+1];
				str[j+1] = temp;
		   }
	   }
   }
   var s = '';
   for(var i = 0; i < str.length; i++)
		s += str[i];
   return s;
}
console.log(alphabetSort('hello')); // should return 'ehllo'