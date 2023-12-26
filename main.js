window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const listEl = document.querySelector("#tasks");
	let currentTime = 0;
  
	form.addEventListener('submit', (e) => {
	  e.preventDefault();
  
	  const song = input.value;
	  const duration = prompt("Enter the song duration (in seconds):");
	  const timeStamp = getTimeStamp();
  
	  const songEl = document.createElement('div');
	  songEl.classList.add('task');
  
	  const songContentEl = document.createElement('div');
	  songContentEl.classList.add('content');
  
	  songEl.appendChild(songContentEl);
  
	  const songInputEl = document.createElement('input');
	  songInputEl.classList.add('text');
	  songInputEl.type = 'text';
	  songInputEl.value = song;
	  songInputEl.setAttribute('readonly', 'readonly');
  
	  songContentEl.appendChild(songInputEl);
  
	  const songActionsEl = document.createElement('div');
	  songActionsEl.classList.add('actions');
  
	  const songEditEl = document.createElement('button');
	  songEditEl.classList.add('edit');
	  songEditEl.innerText = 'Edit';
  
	  const songDeleteEl = document.createElement('button');
	  songDeleteEl.classList.add('delete');
	  songDeleteEl.innerText = 'Delete';
  
	  songActionsEl.appendChild(songEditEl);
	  songActionsEl.appendChild(songDeleteEl);
  
	  songEl.appendChild(songActionsEl);
  
	  listEl.appendChild(songEl);
  
	  input.value = '';
  
	  songEditEl.addEventListener('click', (e) => {
		if (songEditEl.innerText.toLowerCase() == "edit") {
		  songEditEl.innerText = "Save";
		  songInputEl.removeAttribute("readonly");
		  songInputEl.focus();
		} else {
		  songEditEl.innerText = "Edit";
		  songInputEl.setAttribute("readonly", "readonly");
		  updateNotes(songEl, songNotesEl, songInputEl.value);
		}
	  });
  
	  songDeleteEl.addEventListener('click', (e) => {
		listEl.removeChild(songEl);
	  });
  
	  const songNotesEl = document.createElement('textarea');
	  songNotesEl.classList.add('notes');
	  songNotesEl.placeholder = 'Add your notes here';
  
	  songEl.appendChild(songNotesEl);
  
	  const songTimeStampEl = document.createElement('div');
	  songTimeStampEl.classList.add('timestamp');
	  songTimeStampEl.innerText = `Timestamp: ${timeStamp}, Duration: ${duration} seconds`;
  
	  songEl.appendChild(songTimeStampEl);
  
	  currentTime += parseInt(duration);
	});
  
	const getTimeStamp = () => {
	  const minutes = Math.floor(currentTime / 60).toString().padStart(2, '0');
	  const seconds = (currentTime % 60).toString().padStart(2, '0');
	  return `${minutes}:${seconds}`;
	};
  
	const updateNotes = (songEl, songNotesEl, newNotes) => {
	  const existingNotesEl = songEl.querySelector('.notes');
	  if (existingNotesEl) {
		existingNotesEl.innerText = `Notes: ${newNotes}`;
	  }
	};
  });
  