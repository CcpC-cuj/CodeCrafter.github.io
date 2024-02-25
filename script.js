function printSentenceWithBlinking(sentences) {
  const output = document.getElementById("word");
  let sentenceIndex = 0;
  let index = 0;
  let printInterval;

  function printWithBlinkingUnderscore() {
    const currentSentence = sentences[sentenceIndex];
    printInterval = setInterval(() => {
      if (index <= currentSentence.length) {
        if (index < currentSentence.length) {
          output.innerHTML = currentSentence.substring(0, index) + '<span class="blink">_</span>';
        } else {
          output.innerHTML = currentSentence.substring(0, index); // Ensure the full sentence is displayed before backspacing
        }
        index++;
      } else {
        clearInterval(printInterval);
        setTimeout(() => {
          removeBackward(currentSentence);
        }, 500); // Delay before backspacing starts
      }
    }, 200); // Adjust interval for faster printing
  }

  function removeBackward(sentence) {
    printInterval = setInterval(() => {
      if (index >= 0) {
        output.innerHTML = sentence.substring(0, index) + '<span class="blink">_</span>';
        index--;
      } else {
        clearInterval(printInterval);
        // Move to the next sentence
        sentenceIndex++;
        if (sentenceIndex >= sentences.length) {
          sentenceIndex = 0; // Reset to the first sentence
        }
        setTimeout(() => {
          index = 0;
          printWithBlinkingUnderscore(); // Print the next sentence
        }, 1000); // Delay before printing the next sentence
      }
    }, 100); // Adjust interval for faster backspacing
  }

  printWithBlinkingUnderscore(); // Start the initial printing
}

const sentences = [
  "CU_Jharkhand",
  "We code to Craft!!",
  "We code to Learn!!",
  "We code to Grow!!"
  
  // Add more sentences as needed
];

printSentenceWithBlinking(sentences); // Call the function with the array of sentences


// Function to switch to Members content
document.getElementById('membersButton').addEventListener('click', function() {
  document.getElementById('alumniContent').classList.remove('active');
  document.getElementById('membersContent').classList.add('active');
});

// Function to switch to Alumni content
document.getElementById('alumniButton').addEventListener('click', function() {
  document.getElementById('membersContent').classList.remove('active');
  document.getElementById('alumniContent').classList.add('active');
});

// Set the Members content to be visible by default
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('membersContent').classList.add('active');
});
