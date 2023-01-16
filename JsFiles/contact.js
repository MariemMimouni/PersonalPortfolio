document.getElementById("send").onclick = function(){
  alert("Thank  you for reaching out!");
  const inputs =document.getElementsByClassName("input");
  for (let i=0; i< inputs.length; i++){
    inputs[i].value="";
  }
}