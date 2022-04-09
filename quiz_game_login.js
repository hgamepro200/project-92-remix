function login(){
    var login1 = document.getElementById("player1_name_input").value;
    var login2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1", login1)
    localStorage.setItem("player2", login2)

    window.location ="quiz_game_page.html"   
    
}