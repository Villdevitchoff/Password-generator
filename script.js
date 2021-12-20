
//generate button to initiate password generator. List charactor variables.
var generateBtn=document.getElementById("generate")
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var number=["0","1","2","3","4","5","6","7","8","9"]
var specialCharactors=["!","@","#","$","%","^","&","/","?",".","?","<",">","~","`",";",":","[","]","{","}","(",")","|"]
var arrayofAcceptableValues=[]
var length=0
var passWord=""
var charactorQuantity=""
var useUpperCase=""
var useLowerCase=""
var useNumbers=""
var useSpecialCharactors=""


    
var generatePassword=function(){
   
     charactorQuantity= window.prompt("Please enter a number of charactor length between 8 and 128")
      useUpperCase= window.prompt("Enter Upper Case yes or no","no")
      useLowerCase= window.prompt("Enter lower case yes or no","no")
      useNumbers= window.prompt("Enter numbers yes or no","no")
      useSpecialCharactors= window.prompt("Enter special charactors yes or no","no")
       
    //5 criteria to create password.
     getcharactorQuantity()
     getuseUpperCase()
     getuseLowerCase()
     getuseNumbers()
     getusespecialcharactors()
  
    //conditional statements using variables and arrays.
     if(arrayofAcceptableValues.length>0){
         for(var i=0;i<length;i++){
    var pointToAcceptableValues= Math.floor( Math.random()*arrayofAcceptableValues.length)
    var addarrayofAcceptableValues=arrayofAcceptableValues[pointToAcceptableValues]
    var results=Math.floor(Math.random()*addarrayofAcceptableValues.length)
    passWord+=addarrayofAcceptableValues[results]
    console.log(passWord)
         }
   }    
   
         
 }  
   //choice of charactor length between 8 and 128.
     function getcharactorQuantity(){
        var charactorParse=parseInt(charactorQuantity)
        if(charactorParse>=8&&charactorParse<=128){
    length=charactorParse
        }else{
            alert("invalid input. Valid input requires an amount of charactors between 8 and 128. Also, at least 1 of 4 options must be answered as yes.")
           getcharactorQuantity()
        }
     }
     //choose yes or no to include upper case lexicon.
     function getuseUpperCase(){
         if(useUpperCase==="yes"||useUpperCase==="no"){
             if(useUpperCase==="yes"){
            arrayofAcceptableValues.push(upperCase)
             }
         }
     }

     //choose yes or no to include lower case lexicon.
     function getuseLowerCase(){
        if(useLowerCase==="yes"||useLowerCase==="no"){
            if(useLowerCase==="yes"){
           arrayofAcceptableValues.push(lowerCase)
            }
        }
    }
    
    //choose yes or no to include numbers.
    function getuseNumbers(){
        if(useNumbers==="yes"||useNumbers==="no"){
            if(useNumbers==="yes"){
           arrayofAcceptableValues.push(number)
            }
        }
    } 

    //choose yes or no to include special charactors.
    function getusespecialcharactors(){
        if(useSpecialCharactors==="yes"||useSpecialCharactors==="no"){
            if(useSpecialCharactors==="yes"){
           arrayofAcceptableValues.push(specialCharactors)
            }
        }
    } 
    
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passWord;

}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword)