function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("anh1").style.display="none";
      document.getElementById("anh2").style.display="block";
      document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    
    showConfetti()
}

var circle=document.getElementById("animatedButton")
function initCircle() {
  spaceWidth = screen.height - circle.height;
  spaceHeight = screen.width - circle.width;

  // circle.addEventListener('click', moveCircle)
}
initCircle()

function answerNo() {
    circle.style.position = 'absolute';
    console.log(spaceWidth)
    circle.style.top = Math.round(Math.random() * 500) + 'px';
    circle.style.left = Math.round(Math.random() * 1000) + 'px';
    // circle.style.left = '100px'
    console.log(circle.style.left)
}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }
  
