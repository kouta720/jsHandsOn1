 function gradeMe()
 {

    var numOfTest = document.getElementsByName("numGrade"),
        result = document.getElementById('total'),
        //avgResult = document.getElementById('totalScore'),

        score01 = document.getElementById('score1'),
        score02 = document.getElementById('score2'),
        score03 = document.getElementById('score3'),

        sum = 0;

    for(var i=0; i<numOfTest.length; i++)
    {
        var x = numOfTest[i];
        if (x.name && x.name.indexOf("total") < 0)
        {sum += parseInt(x.value) || 0;}
    }


    result.value = sum / numOfTest.length;


document.getElementById("letterGrade1").innerHTML = getGrade(score01.value);
document.getElementById("letterGrade2").innerHTML = getGrade(score02.value); document.getElementById("letterGrade3").innerHTML = getGrade(score03.value);

document.getElementById("finalLetter").innerHTML = getGrade(result.value);

}

function getGrade(z)
{
  if (1 <= z && z <= 100) { // making sure in range 1..11
      if (z <= 59)
      {return "F";}
      else if (z <= 69)
      {return "D";}
      else if (z <= 79)
      {return "C";}
      else if (z <= 89)
      {return "B";}
      else
      {return "A";}
  } else {return "NaN";}
}


/*
let score = 0;
let avg = 0;
let scoreList = [];
let testList = [];
let gradeList =[];
let grade;
let tName;


//let userInput = new RegExp('^[0-9]+$');
let scoreInput = new RegExp('^[1-9][0-9]?$|^100$');


//Gets number of tests taken
let numOfTest = prompt("How many tests were taken? ");
while(userInput.test(numOfTest) == false)
{
  numOfTest = prompt("Invalid response. Enter number of tests taken. ")
  userInput.test(numOfTest);
}

//Display for number of tests
$(document).ready(function(){
   for(var i = 0; i< numOfTest; i++)
     $("#testTaken").append("Test Subject:<input id='tName'> Test Score: <input id='score'>");
});



for(let i = 0; i < numOfTest; i++)
{
  tName = prompt("Test Subject");
  score = prompt("Test Score");
  while(scoreInput.test(score) == false)
  {
    score = prompt("Invalid response. Enter test score.")
    scoreInput.test(score);
  }
  grade = getGrade(score);

  testList.push(tName);
  scoreList.push(score);
  gradeList.push(grade);

  avg += score;
}

for(let j = 0; j < numOfTest; j++)
{
  alert("Test Subject: " + testList[j] + " | Score: " + scoreList[j] + " | Grade: " + gradeList[j]);
}

alert("Average is: " + avg);
function addScore(x)
{
  scoreList.push(x);
}

function addTest(y)
{
  testList.push(y);
}

function getGrade(z)
{
  if (1 <= z && z <= 100) { // making sure in range 1..11
      if (z <= 59)
      {
        alert("F"); return "F";
      }
      else if (z <= 69)
      {
        alert("D"); return "D";
      }
      else if (z <= 79)
      {
        alert("C"); return "C";
      }
      else if (z <= 89)
      {
        alert("B"); return "B";
      }
      else
      {
        alert("A"); return "A";
      }
  } else {
      alert("not in range");
  }
}
*/
