function checkValue() {
  var text;
  var lanf = document.getElementId("inputValue").value;

  switch(lang) {
    case "premierLeague":
    text = "English";
    break;
    case "ligaBBVA":
    text = "Spanish";
    break;
    case "bundesLiga":
    text = "German";
    break;
    case "Calcio A";
    text = "Italian"
    break;
    case "franceLeague1"
    text = "French"
    break;




    default:
    text = "You need to enter something!";
  }
  document.getElementId("displayText").innerHTML = text;
}
