score = 0

document.getElementById("submit").onclick = function(){
  if (document.getElementById("correct1").checked) {
    score = score + 1
  }
  if (document.getElementById("correct2").checked) {
    score = score + 1
  }
  if (document.getElementById("correct3").checked) {
    score = score + 1
  }
  if (document.getElementById("correct4").checked) {
    score = score + 1
  }
  if (document.getElementById("correct5").checked) {
    score = score + 1
  }
  if (document.getElementById("correct6").checked) {
    score = score + 1
  }
  if (document.getElementById("correct7").checked) {
    score = score + 1
  }
  if (document.getElementById("correct8").checked) {
    score = score + 1
  }
  if (document.getElementById("correct9").checked) {
    score = score + 1
  }
  if (document.getElementById("correct10").checked) {
    score = score + 1
  }
  // document.write(score)
  document.getElementById("Result").innerHTML = "Your score is " +score +" / 10";
  const answers =document.getElementsByClassName("answer");
  for (let i=0; i< answers.length; i++){
    answers[i].style.color = "green";
  }
  document.getElementById("submit").disabled = true;
}