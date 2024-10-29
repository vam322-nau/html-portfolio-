const name = 'Viviana Mendoza';
let hasDownloadedResume = false;
let skillsArray = ['HTML', 'CSS', 'JavaScript', 'Python'];
// script.js

// Projects Section ------------->
const projects = [
    {
        title: 'Expense Tracking',
        description: 'An app to track personl expenses',
        deadline: new Date("09/14/2025"),
        imageURL: 'expense_tracking.png'
    },
    {
        title: 'Personal Portfolio',
        description: 'A personal webiste to showcase',
        deadline: new Date("11/10/2025"),
        imageURL: 'personal_portfolio.jpeg'
    },
    {
        title: 'Weather App',
        description: 'An app to show real-time weather information.',
        deadline: new Date("02/25/2026"),
        imageURL: 'weather_app.jpeg'
    }
];
function renderProjects(projectArray) {
    $('#project-container').empty();
    projectArray.forEach(project => {
        const projectCard = `
            <div class="project-card">
                <img src="${project.imageURL}" alt="${project.title}">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <p>Deadline: ${project.deadline.toLocaleDateString()}</p>
            </div>
        `;
        $('#project-container').append(projectCard);
    });
}

// Define the function at the top of your script
function sortProjectsByDeadline() {
    console.log("Sorting projects by deadline");
    // Add actual sorting logic here
}

// Document Ready Function
$(document).ready(function() {
    // Render Navigation Menu
    renderNavigation();

    // Render Skills on Page Load
    renderSkills();

    // Display Greeting
    $('#greeting').text(showGreeting(name));

    // Sort Projects by Deadline
    sortProjectsByDeadline(); // Ensure this is called after defining the function
});


renderProjects(projects);

$('#sort-asc').click(function() {
    const sortedProjects = [...projects].sort((a, b) => a.deadline - b.deadline);
    renderProjects(sortedProjects);
});

$('#sort-desc').click(function() {
    const sortedProjects = [...projects].sort((a, b) => b.deadline - a.deadline);
    renderProjects(sortedProjects);
});

const navItems = ["Summary", "Education", "Skills", "Projects", "Contact Information"];

// Education Section -------------->
// Sample education data
const educationData = [
    { institution: "Northern Arizona University", degree: "Bachelor's", field: "Software Engineering", year: "2030" },
    { institution: "University of Califonia, Los Angeles", degree: "Associate's", field: "Information Technology & CyberSecuirty", year: "2036" }
];

// Function to add rows to the education table
function populateEducationTable() {
    const tableBody = document.getElementById("educationTable").getElementsByTagName("tbody")[0];

    for (let i = 0; i < educationData.length; i++) {
        const row = document.createElement("tr");

        const cellInstitution = document.createElement("td");
        cellInstitution.textContent = educationData[i].institution;
        row.appendChild(cellInstitution);

        const cellDegree = document.createElement("td");
        cellDegree.textContent = educationData[i].degree;
        row.appendChild(cellDegree);

        const cellField = document.createElement("td");
        cellField.textContent = educationData[i].field;
        row.appendChild(cellField);

        const cellYear = document.createElement("td");
        cellYear.textContent = educationData[i].year;
        row.appendChild(cellYear);

        tableBody.appendChild(row);
    }
}

window.onload = populateEducationTable;



// Download Resume Event
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

// Skills Section --------->
function renderSkills(){
    const skillsList = $('#skills-list'); // Make sure there's a <ul> or <div> with id="skills-list"
    skillsList.empty(); // Clear the current list

    skillsArray.forEach((skill, index) => {
        skillsList.append(`<li data-index="${index}">${skill} <button class="delete-btn">Delete</button></li>`);
    });
}

// Render Navigation (placeholder function)
function renderNavigation() {
    // Placeholder content if needed
    console.log("Navigation rendered"); // Add actual code if needed
}

// Greeting Function
function showGreeting(name) {
    const hour = new Date().getHours();
    if (hour < 12) return `Good Morning, ${name}!`;
    else if (hour < 18) return `Good Afternoon, ${name}!`;
    else return `Good Evening, ${name}!`;
}

// Document Ready Function
$(document).ready(function() {
    // Render Navigation Menu
    renderNavigation();
    
    // Render Skills on Page Load
    renderSkills(); // Ensure skills are displayed

    // Display Greeting
    $('#greeting').text(showGreeting(name)); // Show greeting on the page

    // Add Skill: Validate, add to array, and render the list
    $('#add-skill-btn').click(function() {
        const newSkill = $('#skill-input').val().trim();

        if (newSkill === "") {
            alert("Please enter a skill.");
            return;
        }

        if (skillsArray.includes(newSkill)) {
            alert("Skill already exists!");
            return;
        }

        skillsArray.push(newSkill);
        renderSkills(); // Re-render the skills list
        $('#skill-input').val(''); // Clear input
    });

    // Bind delete events for skills
    $('#skills-list').on('click', '.delete-btn', function(event) {
        event.stopPropagation(); // Prevent triggering edit on delete
        const index = $(this).parent().data('index');
        skillsArray.splice(index, 1); // Remove skill from array
        renderSkills(); // Re-render the skills list
    });
});

    // Keyboard Event Listener for input
    $('#skill-input').on('keydown', function(event) {
        if (event.key === 'Enter') {
            $('#add-skill-btn').click(); // Trigger add skill button click
        } else if (event.key === 'Escape') {
            $(this).val(''); // Clear input
        }
    });

//     // Display Projects on load
// function sortProjectsByDeadline() {
//     sortProjectsByDeadline(); // Sort projects first
//     displayProjects(); // Then display them
// }
//     // Populate table function (if defined)...
// //});


// Helper Functions
let downloadCount = 0;
function incrementDownloadCount() {
    downloadCount++;
    $('#download-count').text(downloadCount);
}

function renderNavigation() {
    const $navMenu = $('#nav-menu');
    $navMenu.empty();
    navItems.forEach(item => {
        const $navItem = $('<li>').addClass('nav-item');
        const $navLink = $('<a>').addClass('nav-link').attr('href', `#${item.toLowerCase().replace(/ /g, '-')}`).text(item);
        $navItem.append($navLink);
        $navMenu.append($navItem);
    });
}

// script.js


// Projects section
// function displayProjects() {
//     const $projectsSection = $('#projects-section');
//     $projectsSection.empty();
//     projects.forEach(project => {
//         const status = new Date(project.deadline) > new Date() ? "Ongoing" : "Completed";
//         const $projectCard = $(`
//             <div class="card mb-4">
//                 <div class="card-body">
//                     <h5 class="card-title">${project.title}</h5>
//                     <p class="card-text">${project.description}</p>
//                     <p>Deadline: ${project.deadline.toLocaleDateString()}</p>
//                     <p>Status: <strong>${status}</strong></p>
//                 </div>
//             </div>
//         `);
//         $projectsSection.append($projectCard);
//     });
// }

// function sortProjectsByDeadline() {
//     projects.sort((a, b) => a.deadline - b.deadline);
//     displayProjects();
// }


