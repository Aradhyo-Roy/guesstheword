function Adduser(){
    Player1Name=document.getElementById("player_1_name_input").value;
    Player2Name=document.getElementById("player_2_name_input").value;

    localStorage.setItem("Player1Name", Player1Name);
    localStorage.setItem("Player2Name", Player2Name);

    window.location="game_page.html";
}