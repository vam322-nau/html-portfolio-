console.log('Hello World!');

const name = 'Viviana Mendoza';
let hasDownloadedResume = false;

const resumeButton = document.querySelector('.btn-primary');
resumeButton.addEventListener('click', function() {
    if (!hasDownloadedResume) {
        alert('Your resume downloaded successfully!');
        hasDownloadedResume = true;
        incrementDownloadCount();
    }
});

function showGreeting(name) {
    return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

window.onload = function() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = showGreeting(name);
    displayProjects(); 
    populateTable(education, "education-table");  
};

function addSkill() {
    const skillInput = document.getElementById("skill-input");
    const skillList = document.getElementById("skill-list");

    if (skillInput.value.trim() !== "") {
        const newSkill = document.createElement("li");
        newSkill.textContent = skillInput.value;
        skillList.appendChild(newSkill);
        skillInput.value = "";  
    }
}

const projects = [
    { title: "Expense Tracking App", description: "An app to track personal expenses.", deadline: "2024-12-31" },
    { title: "Personal Portfolio", description: "A personal website to showcase projects.", deadline: "2023-11-15" },
    { title: "Weather App", description: "An app to show real-time weather information.", deadline: "2023-10-01" }
];

function displayProjects() {
    const projectsList = document.getElementById("projects-list");
    const currentDate = new Date();

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("card", "mb-4");
        
        const status = new Date(project.deadline) > currentDate ? "Ongoing" : "Completed";

        projectElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <p>Deadline: ${project.deadline}</p>
                <p>Status: <strong>${status}</strong></p>
            </div>
        `;
        
        projectsList.appendChild(projectElement);
    });
}

// window.onload = function() {
//     displayProjects();
// };


function daysUntilDeadline(submissionDate) {
    const currentDate = new Date();
    const deadline = new Date(submissionDate);
    const timeDiff = deadline - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
}

const daysRemaining = daysUntilDeadline('2024-12-31');
console.log('Days until project deadline: ' + daysRemaining);

let downloadCount = 0;

function incrementDownloadCount() {
    downloadCount++;
    document.getElementById("download-count").textContent = downloadCount;
}

const education = [
    { institution: "Northern Arizona University", degree: "Bachelor of Science", year: "2018-2022" },
    { institution: "Microsoft Inc", degree: "Certification", year: "2024" }
];

function populateTable(data, tableId) {
    const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];

    data.forEach(item => {
        const row = document.createElement("tr");
        Object.values(item).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}
