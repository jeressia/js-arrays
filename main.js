console.log('Hey there, Delilah!');

const dinosaurs=[
    {
        dinoType:'Megalosaurus',
        name: 'Manny',
    },
    {
        dinoType:'Diplodocus',
        name: 'Duece',
    },
    {
        dinoType:'Triceratops',
        name: 'Tasha'    
    },
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv=document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}
// loop over the dinosaurs
//build up a domstring
//print the domstring to the dom
const buildDinosaurs= () => {
    let domString='';
    for(let i=0; i < dinosaurs.length; i++){
        domString += `<div class="dinosaur">`
        domString +=    `<h3>${dinosaurs[i].dinoType}</h3>`
        domString +=    `<p>${dinosaurs[i].name}</p>`
        domString += `</div>`
    }
    printToDom('dino-barn',domString);
};

const assignments = [
    {
        title: 'Product Cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl:'google.com',
    },

    {
        title: 'Dinosaur Generator',
        dueDate: '03/11/2019',
        topic: 'HTML/CSS/Javascript',
        notes: 'Functions',
        assignmentUrl:'google.com',
    },

    {
        title: 'Natural Hair Inventory',
        dueDate: '03/13/2019',
        topic: 'React',
        notes: 'Use React',
        assignmentUrl:'google.com',
    },

    {
        title: 'Festival Tracker',
        dueDate: '03/19/2019',
        topic: 'HTML/CSS/Javascript',
        notes: 'Anything goes',
        assignmentUrl:'google.com',
    },

    {
        title: 'Turn Up Playlist',
        dueDate: '03/05/2019',
        topic: 'C#',
        notes: 'Use C#',
        assignmentUrl:'google.com',
    },
];

const buildAssignmentCards= () => {
    let domString1='';
    for(let i=0; i < assignments.length; i++){
        domString1 += `<div class="assignments">`
        domString1 +=    `<p class="title">${assignments[i].title}</p>`
        domString1 +=    `<strong><p class="dueDate">Due Date: <br>${assignments[i].dueDate}</p></strong>`
        domString1 +=    `<p class="assignmentUrl">Get the assignment <br><a href="${assignments[i].assignmentUrl}">HERE.</a></p>`
        domString1 +=    `<p class="topic">Topic: ${assignments[i].topic}</p>`
        domString1 +=    `<p class="notes">Notes: ${assignments[i].notes}</p>`
        domString1 += `</div>`
    }
    printToDom('assignments',domString1);
};
//total of five assignments
//make a function called buildAssignmentCards - loop over assignments and make a domString
//reuse printToDom to display the domString




const init = () => {
buildDinosaurs();
buildAssignmentCards();
};

init();