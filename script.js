let input =
document.getElementById(
"taskInput"
);

input.addEventListener(
"keypress",
function(e){

if(e.key==="Enter"){

addTask();

}

}
);


function addTask(){

let task=
input.value.trim();

if(task===""){

alert(
"Enter task"
);

return;
}

let li=
document.createElement(
"li"
);

li.innerHTML=`

<span
onclick=
"toggleTask(this)">
${task}
</span>

<div>

<button
class="btn btn-warning btn-sm me-2"
onclick=
"editTask(this)">
✏️
</button>

<button
class="btn btn-danger btn-sm"
onclick=
"deleteTask(this)">
🗑
</button>

</div>
`;

document
.getElementById(
"taskList"
)
.appendChild(li);

input.value="";

updateCounter();
}


function deleteTask(btn){

btn
.parentElement
.parentElement
.remove();

updateCounter();
}


function toggleTask(task){

task.classList.toggle(
"completed"
);

}


function editTask(btn){

let task=

btn
.parentElement
.previousElementSibling;

let updated=

prompt(
"Edit task",
task.innerText
);

if(updated){

task.innerText=
updated;
}

}


function clearAll(){

document
.getElementById(
"taskList"
).innerHTML="";

updateCounter();
}


function updateCounter(){

let total=

document
.querySelectorAll(
"#taskList li"
).length;

document
.getElementById(
"counter"
).innerText=
total;

}


function showDate(){

let today=
new Date();

document
.getElementById(
"date"
).innerText=

today.toDateString()
+" | "+
today.toLocaleTimeString();

}

showDate();
setInterval(
showDate,
1000
);