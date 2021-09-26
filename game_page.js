player1name=localStorage.getItem(player1name);
player2name=localStorage.getItem(player2name);

player1score=0;
player2score=0;

function send() 
{
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    question_number="<h4>" + number1 + " X " + number2 +"</h4>";
    inputbox="<br>Answer : <inputbox inputtype='text' id='input_check_box'> </inputbox>";
    check_button="<br><br><button class=btn btn-info onclick='check()'>Check</button>";
    row=question_number + inputbox + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}