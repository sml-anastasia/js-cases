let habitBox = document.querySelector("#habit-box");
let habitName = document.querySelector('#habit-name');
let allHabits = [];

document.addEventListener("DOMContentLoaded", function (event) {
    allHabits = JSON.parse(localStorage.getItem('habits'));
        if (allHabits != null) {
        appendHabit();
    }
});

function addHabit() {
    let newHabit = {};
    if (habitName.value == ""){
        return alert("Please enter your habit");
    } else {
        newHabit.name = habitName.value;
    }
    allHabits.push(newHabit);
    habitName.value = '';
    appendHabit();
}

function appendHabit(){
    let habits = document.querySelectorAll(".habit-item");
    if (habits.length > 0) {
            habits.forEach(habit => {
            habit.remove();
        })
    }

allHabits.map(habit => {
    let habitItem = document.createElement('div');
    habitItem.classList = 'habit-item';
    let habitTitle = document.createElement('span');
    habitTitle.innerText = habit.name;
    habitTitle.classList = 'habit-title';
    let habitForm = document.createElement('form');
    habitForm.classList = 'habit-form';
    let habitCheck;
    for (i=0; i<21; i++){
        habitCheck = document.createElement('input');
        habitCheck.setAttribute("type", "checkbox");
        habitCheck.setAttribute("name",`checkbox-${habit.name}`);
        habitForm.appendChild(habitCheck);
    }
    let habitDelete = document.createElement('img');
    habitDelete.src = 'assets/images/icon-delete.svg';
    habitDelete.classList.add('habit-delete');

    habitItem.appendChild(habitTitle);
    habitItem.appendChild(habitForm);
    habitItem.appendChild(habitDelete);
    habitBox.appendChild(habitItem);

    getDeleteButtons();
    localStorage.setItem('habits', JSON.stringify(allHabits));
    });
}

function getDeleteButtons() {
    habitDeleteButtons = Array.from(document.querySelectorAll('.habit-delete'));
    habitDeleteButtons.forEach(button => {
        let habitToDelete = button.previousSibling.previousSibling.innerText;
        button.addEventListener('click', () => {
            deleteHabit(habitToDelete);
        })
    })
}

function deleteHabit(habitToDelete) {
    for(let i = 0; i < allHabits.length; i++) {
        if(allHabits[i].name == habitToDelete) {
            allHabits.splice(i, 1);
        }
    }
    localStorage.setItem('habits', JSON.stringify(allHabits));
    appendHabit();
}