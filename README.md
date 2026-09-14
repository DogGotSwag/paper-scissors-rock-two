# paper-scissors-rock-two

this project is super easy and will not really take me long but
im going to be more focusing on writing pseudocode
which will take me a little longer than writing just the
code. This a skilled ive never really touched on and I think it
is needed for later on when creating more complex systems 
and working the real world with other software developers/people
of different fields. 

<<<<<<<<<< Pseudocode: >>>>>>>>>>

<< function getComputerChoice >>

INIT num
COMPUTE random number between 1 and 3
SET num to the result

CASE num OF
    1: RETURN "paper"
    2: RETURN "scissors"
    3: RETURN "rock"
ENDCASE



<< function getHumanChoice >>

OBTAIN input from user either "paper"/"scissors"/"rock"
RETURN result 


<< function playRound >>

SET humanChoice to lowercase
SET computerChoice to lowercase

IF humanChoice is the same as computerChoice THEN
    PRINT you tie!
    RETURN 0
ELSE IF humanChoice is "paper" and computerChoice is "rock" THEN
    PRINT “You WIN! Paper beats Rock”
    RETURN 1
ELSE IF humanChoice is "scissors" and computerChoice is "paper" THEN
    PRINT “You WIN! Scissors beats Paper”
    RETURN 1
ELSE IF humanChoice is "rock" and computerChoice is "scissors" THEN
    PRINT “You WIN! Rock beats Scissors”
    RETURN 1
ELSE
    PRINT “You Lose!" computerChoice with first letter capitalized only "beats" humanChoice first letter capitalized only
    RETURN 2
ENDIF


<< function playGame >>

SET humanScore to zero
SET computerScore to zero

FOR 1 to 5
    CALL playRound RETURNING a number
    SET res to return result
    CASE res OF
        1: ADD one to humanScore
        2: ADD one to computerScore
    ENDCASE
ENDFOR

IF humanScore is greater than computerScore THEN
    PRINT "you are the winner!!"
ELSE if humanScore is equal to computerScore THEN
    Print "you both tied lol"
ELSE
    PRINT "oh no u lost scoreboarddd!!"
ENDIF