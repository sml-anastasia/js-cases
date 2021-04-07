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
    habitItem.appendChild(habitTitle);
    habitItem.appendChild(habitForm);
    habitBox.appendChild(habitItem);
    localStorage.setItem('habits', JSON.stringify(allHabits));
    });
}