// RANDOM PASSWORD GENERATOR

function generatePassword(){
    const passwordLength = 12;
    const includeLowercase =  true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSpecialChars = true;

    const Lowercase = "abcdefghijklmnopqrstuvwxyz";
    const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Numbers = "0123456789";
    const SpecialChars = "!@#$%^&*()_+~";
    
    let allowedChars = "";
    let password = "";

    if(includeLowercase) allowedChars += Lowercase;
    if(includeUppercase) allowedChars += Uppercase;
    if(includeNumbers) allowedChars += Numbers;
    if(includeSpecialChars) allowedChars += SpecialChars;

    if(passwordLength <= 0){
        return `(Error: Password length must be greater then 0)`;
    }
     if(allowedChars.length === 0){
        return `(Error: At least one character type must be selected)`;
     }
    for(let i = 0; i < passwordLength ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    document.getElementById("password").value = password;
}
