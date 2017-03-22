var Alldays = document.getElementsByClassName('weekday');
console.log(Alldays);
var selectAllDays = document.querySelectorAll('.weekday')

function Datefunction(){
  for(var i=0; i < Alldays.length; i++){
    selectAllDays[i].classList.remove('colour1')
    selectAllDays[i].classList.remove('colour2')
    selectAllDays[i].classList.remove('sameDay')

  var selectedDate = document.getElementById('fstDate').value;
  var inputval = new Date(selectedDate)
  var newDate = inputval.getDay()

  var secondSelection = document.getElementById('sndDate').value;
  var inputTwo = new Date(secondSelection)
  var newDate2 = inputTwo.getDay()


if(newDate === newDate2){
  selectAllDays[newDate2].classList.add('sameDay')
}
else {
  selectAllDays[newDate].classList.add('colour1')
  selectAllDays[newDate2].classList.add('colour2')
}
}
}
