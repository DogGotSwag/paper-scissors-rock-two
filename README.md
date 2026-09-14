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
ELSE IF humanChoice is "paper" and computerChoice is "rock" THEN
    PRINT “You WIN! Paper beats Rock”
ELSE IF humanChoice is "scissors" and computerChoice is "paper" THEN
    PRINT “You WIN! Scissors beats Paper”
ELSE IF humanChoice is "rock" and computerChoice is "scissors" THEN
    PRINT “You WIN! Rock beats Scissors”
ELSE
    PRINT “You Lose! computerChoice beats humanChoice”