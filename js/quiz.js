const questions = [
    {
        question: "What two poisons are presented within tobacco products that severely affect people's health?",
        options: ["Arsenic and Cyanide", "Methanol and Ammonia", "Carbon Dioxide and Carbon monoxide", "Carbon monoxide and Tar"],
        answer: "Carbon monoxide and Tar"
    },
    {
        question: "What are some of the ways to reduce the demand for tobacco?",
        options: ["Offering help to tobacco users to quit", "Adding images and health warnings onto packages", "Taxing tobacco", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "There is no scientific evidence that e-cigarette products are less harmful than traditional cigarettes.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What body fluid is NOT listed as a means of transmitting HIV according to the latest guidelines?",
        options: ["Saliva", "Semen", "Blood", "Breast milk"],
        answer: "Saliva"
    },
    {
        question: "Birth control implant is 99% effective at preventing pregnancy and takes low maintenance.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Condoms help protect against all sexually transmitted infections, though they provide more protection from some STIs than others.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "How long should women try to get pregnant before calling their doctors for infertility concerns?",
        options: ["At least 3 months", "At least 6 months", "At least 1 year", "At least 2 years"],
        answer: "At least 1 year"
    },
    {
        question: "What of the following are symptoms of compulsive sexual behavior?",
        options: ["You have repeated and intense sexual fantasies, urges, and behaviors that take up a lot of your time and feel as if they're beyond your control.", "You've tried without success to reduce or control your sexual fantasies, urges or behavior.", "You use compulsive sexual behavior as an escape from other problems, such as loneliness, depression, anxiety or stress.", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What of the following are factors that contribute to sexual health and well-being",
        options: ["access to comprehensive, good-quality information about sex and sexuality;", "knowledge about the risks they may face and their vulnerability to adverse consequences of unprotected sexual activity;", "ability to access sexual health care;", "living in an environment that affirms and promotes sexual health.", "All of the above"],
        answer: "All of the above"
    }
];


let currentQuestion = 0;
const questionElement = document.getElementById('question');
const optionsForm = document.getElementById('options');
const resultElement = document.getElementById('result');
const submitBtn = document.getElementById('submitBtn');
const selfDisclosureBtn = document.getElementById('selfDisclosureBtn');
let correctSelections = [];
let incorrectSelections = [];

selfDisclosureBtn.style.display = 'none';

function displayQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  optionsForm.innerHTML = '';

  question.options.forEach((option, index) => {
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'option';
    radioInput.id = `option${index}`;
    radioInput.value = option;

    const label = document.createElement('label');
    label.textContent = option;
    label.htmlFor = `option${index}`;

    const optionDiv = document.createElement('div');
    optionDiv.appendChild(radioInput);
    optionDiv.appendChild(label);

    optionsForm.appendChild(optionDiv);
  });

  submitBtn.disabled = true; // Disable Submit button initially
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    resultElement.textContent = "Please select an option!";
    return;
  }
  const selectedValue = selectedOption.value;
  const correctAnswer = questions[currentQuestion].answer;
  if (selectedValue === correctAnswer) {
    resultElement.textContent = "Correct!";
    correctSelections.push({ question: questions[currentQuestion].question, answer: selectedValue });
  } else {
    resultElement.textContent = "Incorrect!";
    incorrectSelections.push({ question: questions[currentQuestion].question, selected: selectedValue, correct: correctAnswer });
  }
}

submitBtn.addEventListener('click', () => {
  checkAnswer();
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    resultElement.textContent = '';
  } else {
    questionElement.textContent = `Correct answers: ${correctSelections.length}`;
    optionsForm.style.display = 'none';
    resultElement.textContent = 'Test completed!';
    console.log("Correct Selections:", correctSelections);
    console.log("Incorrect Selections:", incorrectSelections);
    submitBtn.style.display = 'none'; // Disable submit button after completing the test
    selfDisclosureBtn.style.display = 'block';
  }
});

optionsForm.addEventListener('change', () => {
    submitBtn.disabled = false; // Enable Submit button when an option is selected
  });

selfDisclosureBtn.addEventListener('click', () => {
  window.location.href = './selfDisclosure.html'; // Redirect to the self disclosure page
});

displayQuestion();

// let currentQuestion = 0;
// const questionElement = document.getElementById('question');
// const optionsElement = document.getElementById('options');
// const resultElement = document.getElementById('result');
// const selfDisclosureBtn = document.getElementById('selfDisclosureBtn');
// let correctSelections = [];
// let incorrectSelections = [];

// selfDisclosureBtn.style.display = 'none';

// function displayQuestion() {
//     const question = questions[currentQuestion];
//     questionElement.textContent = question.question;
//     optionsElement.innerHTML = '';

//     question.options.forEach(option => {
//         const button = document.createElement('button');
//         button.textContent = option;
//         button.addEventListener('click', () => {
//             checkAnswer(option);
//             disableOptions(); // Disable option buttons after one is selected
//             document.getElementById('submitBtn').disabled = false; // Enable submit button after an option is selected
//         });
//         optionsElement.appendChild(button);
//     });
// }

// function disableOptions() {
//     const optionButtons = document.querySelectorAll('#options button');
//     optionButtons.forEach(button => {
//         button.disabled = true;
//     });
// }

// function checkAnswer(option) {
//     const correctAnswer = questions[currentQuestion].answer;
//     if (option === correctAnswer) {
//         resultElement.textContent = "Correct!";
//         correctSelections.push({ question: questions[currentQuestion].question, answer: option });
//     } else {
//         resultElement.textContent = "Incorrect!";
//         incorrectSelections.push({ question: questions[currentQuestion].question, selected: option, correct: correctAnswer });
//     }
// }

// document.getElementById('submitBtn').addEventListener('click', () => {
//     currentQuestion++;
//     if (currentQuestion < questions.length) {
//         displayQuestion();
//         resultElement.textContent = '';
//         document.getElementById('submitBtn').disabled = true; // Disable submit button after submitting
//     } else {
//         questionElement.textContent = `Correct answers: ${correctSelections.length}`;
//         optionsElement.textContent = `Incorrect answers: ${incorrectSelections.length}`;
//         resultElement.textContent = 'Test completed!';
//         console.log("Correct Selections:", correctSelections);
//         console.log("Incorrect Selections:", incorrectSelections);
//         submitBtn.style.display = 'none'; // Disable submit button after completing the test
//         selfDisclosureBtn.style.display = 'block';
//     }
// });

// selfDisclosureBtn.addEventListener('click', () => {
//     window.location.href = './selfDisclosure.html'; // Redirect to the self disclosure page
// });

// displayQuestion();
// document.getElementById('submitBtn').disabled = true;