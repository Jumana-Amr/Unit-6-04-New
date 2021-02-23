function calculateArea () { // eslint-disable-line no-unused-vars
  let area = 0;
  const base = document.getElementById('id-base').value;
  const height = document.getElementById('id-height').value
  area = base * height / 2;
  document.getElementById('id-output').innerHTML = 'Area = ' + area;
}
