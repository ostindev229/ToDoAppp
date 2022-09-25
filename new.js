const taskInputField = document.getElementById('taskInput');
const taskInput1Field = document.getElementById('taskInput1');
const taskAreaField = document.getElementById('taskArea');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
let taskCount = 0;

// Listen for a click on the Add Task button, call addTask()
addTaskBtn.addEventListener('click', addTask);
// Logic to add another task
function addTask(){
	let taskDescriptions = taskAreaField.value;
	let taskName = taskInputField.value;
	let taskTime = taskInput1Field.value;

	if ((taskDescriptions != '' && taskName != '') && taskTime != ''){

		let card = document.createElement("div");
	card.setAttribute("class","main_bloc bg-light");
	card.id = taskCount;
	/*	first child*/
	let cardElement = document.createElement("div");
	cardElement.setAttribute("class","all_content");
	/* firstchildprime*/
	let completeElement = document.createElement("input");
	completeElement.type = 'radio';
	completeElement.setAttribute("class","input");
	completeElement.value = 'complete';
	completeElement.className = 'edit'
	/*second childprime*/
	let cardElementb = document.createElement("p");
	cardElementb.setAttribute("class","main_text");
	cardElementb.textContent = taskName;
	/*third chidprime*/
	let cardElementc = document.createElement("p");
	cardElementc.setAttribute("class","main_text1");
	cardElementc.textContent = taskTime;
	/*second child*/
	let cardElement1 = document.createElement("div");
	cardElement1.setAttribute("class","all_content1");
	/*firstchildprime1*/
	let cardElement1a = document.createElement("p");
	cardElement1a.setAttribute("class","main_text2");
	cardElement1a.textContent = taskDescriptions;
	/*third child*/
	let cardElement2 = document.createElement("div");
	cardElement2.setAttribute("class","all_content2");
	/*firstchildprime2*/
	let cardElement2a = document.createElement("p");
	cardElement2a.setAttribute("class","main_text3");
	cardElement2a.innerHTML = "view detail"
	/*secondchildprime2*/
	let deleteElement = document.createElement('button');
		deleteElement.type = 'button';
		deleteElement.id = "picture";
		deleteElement.value = 'delete';
		deleteElement.className = ' edit'
		deleteElement.innerHTML = '<i class="fas fa-trash"></i>';

	taskList.appendChild(card);
	card.appendChild(cardElement); 
	card.appendChild(cardElement1);
	card.appendChild(cardElement2);
	cardElement.appendChild(completeElement);
	cardElement.appendChild(cardElementb);
	cardElement.appendChild(cardElementc);
	cardElement1.appendChild(cardElement1a);
	cardElement2.appendChild(cardElement2a)
	cardElement2.appendChild(deleteElement)


taskAreaField.value = '';
taskInputField.value = '';
taskInput1Field.value = '';
		console.log(card);
		taskCount++;

	} else {
		$('#inputErrorModal').modal();
	}



	const editElement = document.querySelectorAll('.edit');
	editElement.forEach((editElement) =>{
		if (editElement.value === 'delete'){
			editElement.addEventListener('click', removeTask);
		} else if (editElement.value === 'complete'){
			editElement.addEventListener('click', validTask);
		}

	});

}

	function validTask(){
	if (this.parentNode.parentNode.classList.contains('bg-light')){
		this.parentNode.parentNode.classList.replace('bg-light', 'border-success');	
		this.parentNode.parentNode.classList.add('lolol');
		this.parentNode.parentNode.classList.add('bg-white');
	} else {
		this.parentNode.parentNode.classList.replace('border-success', 'bg-light');
		this.parentNode.parentNode.classList.remove('lolol');
	}
}

function removeTask(){
	this.parentNode.parentNode.remove();
}

