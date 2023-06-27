function calculateAge() {
  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;

  var today = new Date();
  var birthDate = new Date(year, month - 1, day);

  var age = today.getFullYear() - birthDate.getFullYear();
  var monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  document.getElementById('result1').innerHTML = "당신의 만 나이는 <span class='green bold'>" + age + "</span>살입니다.";
  ageyear = age + 1
  document.getElementById('result2').innerHTML = "당신의 연 나이는 <span class='green bold'>" + ageyear + "</span>살입니다.";

}

function handleKeyPress(event) {
  if (event.keyCode === 13) { // Enter key code
      calculateAge();
      event.preventDefault(); // Prevent form submission
  }
}