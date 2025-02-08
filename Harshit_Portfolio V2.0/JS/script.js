// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // Function to create project cards dynamically
// function createProjectCard(title, description, githubLink) {
//     const projectsSection = document.getElementById('projects');
//     const projectCard = document.createElement('div');
//     projectCard.classList.add('project-card');

//     projectCard.innerHTML = `
//         <h3>${title}</h3>
//         <p>${description}</p>
//         <a href="${githubLink}" target="_blank">GitHub Repository</a>
//     `;

//     projectsSection.appendChild(projectCard);
// }

// // Function to display projects
// function displayProjects() {
//     createProjectCard(
//         "Crisis Management Platform",
//         "Led the Team of 6 members and made a Crisis Management Platform website for the Shankara Global Hackathon (SITE-2024). Integrated an AI model for fire detection using camera input, achieving over 95% detection accuracy.",
//         "https://github.com/Harshit-Soni78/Crisis-Management-Platform"
//     );

//     // Add more projects using createProjectCard function
// }

// // Call the function to display projects
// // displayProjects();

// // Function to display skills
// function displaySkills() {
//     const skillsSection = document.getElementById('skills');
//     const skillsList = document.createElement('ul');

//     const skills = [
//         "Computer Skills",
//         "Data Structures and Algorithm",
//         "Competitive Programming",
//         "Web Development",
//         "Data Visualization",
//         "Leadership",
//         "Prompt Engineering",
//         "Graphic Designing using Figma, Canva"
//     ];

//     skills.forEach(skill => {
//         const skillItem = document.createElement('li');
//         skillItem.textContent = skill;
//         skillsList.appendChild(skillItem);
//     });

//     skillsSection.appendChild(skillsList);
// }

// // Call the function to display skills
// // displaySkills();

// // Function to display languages and libraries
// function displayLanguagesLibraries() {
//     const languagesLibrariesSection = document.getElementById('languages-libraries');
//     const languagesLibrariesList = document.createElement('ul');

//     const languagesLibraries = [
//         "Python",
//         "C, C++",
//         "HTML5, CSS3, JavaScript",
//         "ReactJS, NodeJS, MongoDB",
//         "SQL",
//         "Matlab",
//         "Git/Github",
//         "PyTorch",
//         "TensorFlow",
//         "OpenCV",
//         "Scikit-Learn",
//         "NumPy",
//         "Pandas",
//         "Matplotlib",
//         "Seaborn",
//         "Flask"
//     ];

//     languagesLibraries.forEach(langLib => {
//         const langLibItem = document.createElement('li');
//         langLibItem.textContent = langLib;
//         languagesLibrariesList.appendChild(langLibItem);
//     });

//     languagesLibrariesSection.appendChild(languagesLibrariesList);
// }

// // Call the function to display languages and libraries
// // displayLanguagesLibraries();
