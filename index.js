
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let p1El=document.getElementById("p1")
let p2El=document.getElementById("p2")


function validate (x)
{
    if (x<16) {
        generate(x)
    }

    else {
        document.getElementById('nn').reset();
    }
}

function generate(x) {
    
    let pass1=""
    let pass2=""
    for (let i=1; i<=x ; i+=1){
        let random = Math.floor(Math.random()*characters.length)
        pass1+=characters[random]

    }

    for (let i=1; i<=x ; i+=1){
        let random = Math.floor(Math.random()*characters.length)
        pass2+=characters[random]

    }

    p1El.textContent = pass1
    p2El.textContent = pass2

}