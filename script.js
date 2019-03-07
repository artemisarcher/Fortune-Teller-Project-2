$("button").click(function(){//when i click on the button the following things will happen.//
    
    
    var year=parseInt($(".year").val());//i am declaring the variable "year" to be whatever is in the input with the class ".year". i am also telling to be a number instead of a string.//  
    
    
    var name=$(".name").val();//i am declaring the variable "name" to be whatever is in the input with the class ".name".//
    
    
    var interests=parseInt($(".int").val());//i am declaring the variable "interests" to be whatever is in the input with the class ".int".i am also telling to be a number instead of a string.//
    
    
    var fin= 3000 - year;//i am telling the computer to calculate the difference between 300 and whatever is the value of variable "year"//
    
    
    var fin2 = fin * interests;//i am telling the computer to calculate the product of the variable "fin" and the value of the variable "interests" and make the result a variable.//
    
    $(".str1").text(name);//i am tellng the computer to change the text of the space with the class ".str1" to the value of the variable "name"//
    
    
    $(".str2").text(fin2);//i am telling the computer to change the text of the place with the class ".str2" to the value of the variable "fin2"//
    
    
    $("body").css("background-image","radial-gradient(peachpuff,gainsboro,mistyrose");//i am telling the computer to change the background image of the body when the button is clicked.// 
    
    
    $("p").css("color","darkslateblue");//i am telling the computer to change the color of the text in the " p" tag when the button is clicked.//
}); 