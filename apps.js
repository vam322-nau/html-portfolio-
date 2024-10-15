console.log('Hello World!');

const name = 'Viviana Mendoza';
let hasDownloadedResume = false;

const resumeButton = document.querySelector('.btn-primary');
resumeButton.addEventListener('click', function() {
    if (!hasDownloadedResume) {
        alert('Your resume downloaded successfully!');
        hasDownloadedResume = true;
    }
});

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

window.onload = function() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = showGreeting(name);
};

function daysUntilDeadline(submissionDate) {
    const currentDate = new Date();
    const deadline = new Date(submissionDate);
    const timeDiff = deadline - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
}

const daysRemaining = daysUntilDeadline('2024-12-31');
console.log('Days until project deadline: ' + daysRemaining);