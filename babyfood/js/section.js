const sectionAButton = document.getElementById('secAbutton');
const sectionBButton = document.getElementById('secBbutton');
const sectionA = document.getElementById('sectionA');
const sectionB = document.getElementById('sectionB');

sectionAButton.addEventListener('click', () => {
    sectionA.style.display = 'block';
    sectionB.style.display = 'none';
  });
  
  sectionBButton.addEventListener('click', () => {
    sectionA.style.display = 'none';
    sectionB.style.display = 'block';
  });