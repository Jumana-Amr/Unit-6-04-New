function calculateArea () {
  let area = 0;
  let base = document.getElementById("id-base").value;
  let height = document.getElementById("id-height").value
  area = base * height / 2;
  document.getElementById("id-output").innerHTML = "Area = " + area;
}
