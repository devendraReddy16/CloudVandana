//

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const answers = {};

  const questions = document.querySelectorAll('input[name^="q"]');
  const questionLabels = {
    q1: "Is This first time You are using our products & services?",
    q2: "Would you suggest to your friends and colleague?",
    q3: "How satisfied are you with our company overall?",
    q4: "Do you have suggestions to improve our services?",
  };

  questions.forEach((question) => {
    if (question.checked) {
      const questionName = question.getAttribute("name");
      const questionLabel = questionLabels[questionName];
      answers[questionLabel] = question.value;
    }
  });

  const additionalComments = document.getElementById(
    "additional-comments"
  ).value;

  if (!name || !email) {
    alert("Name and Email are required. Please fill them out.");
  } else if (Object.keys(answers).length === 0) {
    alert("Please answer at least one question.");
  } else {
    let popupMessage = "Survey Results:<br>";
    popupMessage += `<strong>Name:</strong> ${name}<br>`;
    popupMessage += `<strong>Email:</strong> ${email}<br>`;
    popupMessage += "<strong>Selected Questions and Answers:</strong><br>";

    for (const question in answers) {
      popupMessage += ` ${question}: ${answers[question]}<br>`;
    }

    if (additionalComments) {
      popupMessage += `<strong>Additional Comments:</strong> ${additionalComments}<br>`;
    }

    document.getElementById("popup-message").innerHTML = popupMessage;

    const popup = document.getElementById("popup");
    popup.style.display = "block";
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  document.getElementById("survey-form").reset();
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  document.getElementById("survey-form").reset();
}
