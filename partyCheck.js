//note:- run this  code inside chrome developer tool, thanx
var guestList=["Gurpreet", "Angela", "Raman", "Taran"]
var guestName=prompt("Please enter your name:")
function checkList(name){
    if( guestList.includes(name)){
        return " welcome to the party"
    }
    else{
        return " sorry, you are not invited"
    }
}

alert(checkList(guestName))