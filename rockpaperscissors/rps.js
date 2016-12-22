// 0 -> rock
// 1 -> paper
// 2 -> scissors
function getRandomChoice()
{
  min = 0;
  max = 3;
  return Math.floor(Math.random() * (max - min)) + min;
}
function chooseRock(
{
  cpuChoice = getRandomChoice()
  if(cpuChoice = 0)
  {
    console.log("Rock!\nIt's a tie!");
  }
  if(cpuChoice = 1)
  {
    console.log("Paper!\nYou lost!");
  }
  if(cpuChoice = 2)
  {
    console.log(Scissors!\nYou won!)
  }
}
function choosePaper(
{
  cpuChoice = getRandomChoice()
  if(cpuChoice = 0)
  {
    console.log("Rock!\nYou won!");
  }
  if(cpuChoice = 1)
  {
    console.log("Paper!\nIt's a tie!");
  }
  if(cpuChoice = 2)
  {
    console.log(Scissors!\nYou lost!)
  }
}
function chooseScissors(
{
  cpuChoice = getRandomChoice()
  if(cpuChoice = 0)
  {
    console.log("Rock!\nYou lost!");
  }
  if(cpuChoice = 1)
  {
    console.log("Paper!\nYou won!");
  }
  if(cpuChoice = 2)
  {
    console.log(Scissors!\nIt's a tie!)
  }
}
