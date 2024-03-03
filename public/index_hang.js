

const words=['DIAMOND','BICYCLE','OCTAGON','WEATHER','RAINBOW','TEACHER','LIBRARY','GLOWING','BALLOON'];

let wrongcount=0;
let correctcount=0;

let word = "";
let done = 2;

function game()
{
word = words[Math.floor(Math.random() * 10)];
console.log(word);
done=1;
}
    function change(a)
    {   
        if(done==1)
        {
        var k = 0;
        for(i = 0; i < 7;i++)
        {
            if(a==word[i])
            {
                let b="p"+(i+1);
                document.getElementById(b).innerText=a;
                correctcount+=1;
                check(correctcount,wrongcount);
                k=1;
            }
            
        }
        if(k==0)
        {
            wrongcount+=1;
            changeimage(wrongcount);
            if(wrongcount == 6 ){
                window.alert(`Player Lost . The word is ${word}`);
                done=0;
            }
        }
        document.getElementById(a).style.backgroundColor='black';
        document.getElementById(a).style.Color='black';
        }
        else if(done==2)
        {
            window.alert("Start the Game");
        }
        else{
            window.alert(" Game Over");
        }
        console.log("Correct count= " + correctcount);
        console.log("Wrong count= " + wrongcount);

    }

    function check(correctcount,wrongcount)
    {
    if(correctcount==7 )
    {
        window.alert("Player Wins");
        done=0;
    }
    
    }

    function changeimage(wrongcount)
    {
        if(wrongcount==1)
        document.querySelector('.display img').src='hangman-1.svg';
        else if(wrongcount==2)
        document.querySelector('.display img').src='hangman-2.svg';
        else if(wrongcount==3)
        document.querySelector('.display img').src='hangman-3.svg';
        else if(wrongcount==4)
        document.querySelector('.display img').src='hangman-4.svg';
        else if(correctcount==5)
        document.querySelector('.display img').src='hangman-5.svg';
        else 
        document.querySelector('.display img').src='hangman-6.svg';

    }


    function redirectToGames() {
        window.location.href = "/games";
    }