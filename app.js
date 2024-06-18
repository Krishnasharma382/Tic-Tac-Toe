let boxes = document.querySelectorAll(".Box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player O

const winPatterns = 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () =>
        {
            turnO = true;
            enablebtn();
            msgContainer.classList.add("hide");
        }
boxes.forEach((Box) =>
{
    Box.addEventListener("click",() =>{
        console.log("Box is clicked");
       if (turnO)
        {
            Box.innerText = "O";
            turnO = false;
        }
        else // if playter x is having a turn then this loop should be executed
        {
            Box.innerText = "X";
            turnO = true;
        }
        Box.disabled = true;
        checkWinner();
    });
});
const disableBtn = () =>
    {
        for(let box of boxes)
            {
                box.disabled =true;
            }
    }

const enablebtn = () =>
    {
        for(let box of boxes)
            {
                box.disabled = false;
                box.innerText = "";
            }
    }

const showWinner = (Winner) =>
{
    msg.innerText = `Congrats, Winner is ${Winner}`;// displying the name of the winner 
    msgContainer.classList.remove("hide"); //because it is hidden so we have to remove it from the hidden class 
    disableBtn();
}
const checkWinner =() =>
    {
        for(pattern of winPatterns)
            {
                let pos1 = boxes[pattern[0]].innerText;
                let pos2 = boxes[pattern[1]].innerText;
                let pos3 = boxes[pattern[2]].innerText;
                

                if (pos1 != "" && pos2 != "" && pos3 != "")
                    {
                        if(pos1 === pos2 && pos2 === pos3)
                            {
                                console.log("Winner",pos1);
                                showWinner(pos1);
                            }
                    }
            }

    }

newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

