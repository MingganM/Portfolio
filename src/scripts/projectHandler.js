import projects from "./projectsList";

const learnMoreButtons = Array.from(document.getElementsByClassName('project__learnmore'));
const singleProject = document.querySelector('.singleProject');

function updateSingleProject(projectname){
    
    let selectedProject = projects.find(project => project.name === projectname);
    
    let singleProjectHtml = `
        <div class="singleProject__content">
            <button class="singleProject__btn">
                <i class="fas fa-times"></i>
            </button>
            
            <h2 class="singleProject__name">${selectedProject.name}</h2>
            <h3 class="singleProject__category">${selectedProject.category}</h3>
            <p class="singleProject__about">${selectedProject.about}</p>

            <div class="singleProject__links">
                <a href="${selectedProject.liveDemo}" target="_blank" class="singleProject__link">Live Demo</a>
                <a href="${selectedProject.projectCode}" target="_blank" class="singleProject__link">Project Code</a>
            </div>

            <ul class="singleProject__ul">
                <h2 class="singleProject__ul--heading">Tools used in this project: </h2>
                ${
                    selectedProject.toolsUsed.map(toolName => `<li class="singleProject__li">${toolName}</li>`).join('')
                }
            </ul>
        </div>`;

    singleProject.innerHTML = singleProjectHtml;
}

learnMoreButtons.forEach(btn => {
    btn.addEventListener('click', handleLearnMoreBtn);
});

function handleLearnMoreBtn(e){
    const {target: { dataset: { projectname } }, target} = e;
    updateSingleProject(projectname);

    const targetRect = target.getBoundingClientRect();
    singleProject.style.top = targetRect.top + "px";
    singleProject.style.left = targetRect.left + "px";
    
    singleProject.classList.add('showProjectDetail');
    setTimeout(setSingleProject, 500);
}
function setSingleProject(){
    const singleProjectContent = document.querySelector('.singleProject__content');
    const singleProjectBtn = document.querySelector('.singleProject__btn');

    singleProject.style = "";
    singleProject.classList.add('initialTransform');
    singleProjectContent.classList.add('initialOpacity');

    singleProjectBtn.addEventListener('click', function(){
        singleProject.className = "singleProject";
        singleProjectContent.className = "singleProject__content";
    })
}