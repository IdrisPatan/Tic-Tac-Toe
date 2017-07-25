window.onload = function () {
    let playerTurn = true;
    let turnNumber = 0;

    [...document.querySelectorAll(".cell")].forEach((button) => {
        button.addEventListener("click", (e) => {
            if(button.innerHTML === "_") {

                if (playerTurn) {
                    button.innerHTML = "X";
                    document.querySelector(".playerTurn").innerHTML = "Player One's Turn."
                }
                else {
                    button.innerHTML = "0";
                    document.querySelector(".playerTurn").innerHTML = "Player Two's Turn."
                }

                turnNumber++;
                document.querySelector(".numTurns").innerHTML = "Number of Turns: " + turnNumber;

                playerTurn = !playerTurn;

                if(turnNumber >=5){
                    checkWinnerStraight("col1")
                    checkWinnerStraight("col2")
                    checkWinnerStraight("col3")
                    checkWinnerStraight("row1")
                    checkWinnerStraight("row2")
                    checkWinnerStraight("row3")
                    checkWinnerDiaongal("cell0", "cell4", "cell8")
                    checkWinnerDiaongal("cell6", "cell4", "cell2")
                }

                if(turnNumber == 9){
                    alert("CAT'S GAME!")
                    location.reload();
                }
            }
        });
    });

    document.querySelector("button").addEventListener("click",(e) => {
        location.reload()
    });
};

function checkWinnerStraight(name){
    let cells = [...document.querySelectorAll("." + name)];

    if(cells[0].innerHTML === cells[1].innerHTML &&
        cells[0].innerHTML === cells[2].innerHTML &&
        cells[0].innerHTML !== "_")
    {

        if(cells[0].innerHTML === "X")
            alert("PLAYER ONE WINS!");
        else
            alert("PLAYER TWO WINS!")

        location.reload();

    }
    //clear()
}

function checkWinnerDiaongal(c1, c2, c3){
    let one = document.getElementById(c1).innerText
    let two = document.getElementById(c2).innerText
    let three = document.getElementById(c3).innerText

    if(one === two && one === three && one !== "_") {

        if(one === "X")
            alert("PLAYER ONE WINS!");
        else
            alert("PLAYER TWO WINS!")

        location.reload();
    }
}







