const sectionAButton = document.getElementById('secAbutton');
const sectionBButton = document.getElementById('secBbutton');
const sectionA = document.getElementById('sectionA');
const sectionB = document.getElementById('sectionB');

sectionB.style.display = 'none';

sectionAButton.addEventListener('click', () => {
    sectionA.style.display = 'flex';
    sectionB.style.display = 'none';
  });
  
  sectionBButton.addEventListener('click', () => {
    sectionA.style.display = 'none';
    sectionB.style.display = 'flex';
  });