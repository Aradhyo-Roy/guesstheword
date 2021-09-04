player1_name=localStorage.getItem("Player1Name");
player2_name=localStorage.getItem("Player2Name");
 player1_score=0;
 player2_score=0;

 document.getElementById("Name1").innerHTML= player1_name + ":";
 document.getElementById("Name2").innerHTML= player2_name +":";

 document.getElementById("Score_p1").innerHTML= player1_score;
 document.getElementById("Score_p2").innerHTML= player2_score;

 document.getElementById("Question_turn").innerHTML= "Question turn -" + player1_name;
 document.getElementById("Answer_turn").innerHTML= "Answer turn -" + player2_name;

 function send(){
     getWord=document.getElementById("Quiz_questioner").value;
     word= getWord.toLowerCase();
     console.log("word in lower case= " + word);

     charAt1= word.charAt(1);
     console.log(charAt1);

     length_divide_2=Math.floor(word.length/2);
     charAt2=word.charAt(length_divide_2);
     console.log(charAt2);

     length_minus_1= word.length-1;
     charAt3=word.charAt(length_minus_1);
     console.log(charAt3);

     remove_char_at_1=word.replace(charAt1, "__" );
     remove_char_at_2=remove_char_at_1.replace(charAt2, "__");
     remove_char_at_3=remove_char_at_2.replace(charAt3, "__");
     console.log(remove_char_at_3);

     question_word="<h3 id='question'>Q. "+remove_char_at_3+"</h3>";
     answer_row="<br> Answer: <input type='text' id='answer'>";
     check_button="<br><br><button id='check_button' class='btn btn-info' onclick='check()'>Check</button>";
     row=question_word+answer_row+check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("Quiz_questioner").value="";
 }
 answer_turn="player1";
 question_turn="player2";
 function check(){
     get_answer=document.getElementById("answer").value;
     answer=get_answer.toLowerCase();
     console.log("answer in lower case =" + answer);
     if(answer==word){
         if(answer_turn=="player1"){
             player1_score=player1_score+1;
             document.getElementById("Score_p1").innerHTML=player1_score;
         }
         else{
             player2_score=player2_score+1;
             document.getElementById("Score_p2").innerHTML=player2_score;
         }
     }
     if(question_turn=="player1"){
         question_turn="player2";
         document.getElementById("Question_turn").innerHTML="Question turn-"+player2_name;
     }
     else{
         question_turn="player1";
         document.getElementById("Question_turn").innerHTML="Question turn-"+player1_name;
     }
     if(answer_turn=="player1"){
         answer_turn="player2";
         document.getElementById("Answer_turn").innerHTML="Answer turn-"+player2_name;
     }
     else{
         answer_turn="player1";
         document.getElementById("Answer_turn").innerHTML="Answer turn-"+player1_name;
     }
     document.getElementById("output").innerHTML="";
 }