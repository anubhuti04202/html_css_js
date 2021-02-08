function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];

    if (toggleVariable.style.display === 'none') {
        toggleVariable.style.display = 'block';
    } else {
        toggleVariable.style.display = 'none'
    }
}

var projectListObject = [{
        name: 'Project One'
    },
    {
        name: 'Project Two'
    }
];

showProjects()

function showProjects() {
    projectListObject.forEach((value, index) => {
        var template = `
            <div class="project-card">
                <span>${value.name}</span>
                <ul>
                    <li>Task One</li>
                    <li>Task Two</li>
                </ul>
            </div>
        `
        document.getElementById('projectList').innerHTML += template;
    });
}

function removeCards() {
    document.getElementById('projectList').innerHTML = '';
}