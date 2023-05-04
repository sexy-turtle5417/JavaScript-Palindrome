const textfield = document.getElementById('textfield');
const result = document.getElementById('result');
const submit = document.getElementById('submit');

submit.onclick = function(){

    let userText = textfield.value;
    
    if(userText.length < 1){
        console.log('must type in a number');
    }
    else{

       if(isPalindrome(userText)){
            result.innerHTML = `'${userText}' is a palindrome`;
       }
       else{
            result.innerHTML = `'${userText}' is not a palindrome`;
       }

    }
}

function isPalindrome(string){

    string = string.replaceAll(' ','');
    let reversedWord = '';
    let i;

    for(i = string.length - 1; i > -1; i--){
        reversedWord += string.charAt(i);
    }

    if(string.toLowerCase() == reversedWord.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}
