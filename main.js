window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const artistInput = document.querySelector("#artist-name-input");
    const listEl = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const song = input.value.trim();
        const artist = artistInput.value.trim();
        const duration = prompt("Enter the song duration (in seconds):");
        const timeStamp = getTimeStamp();

        const taskEl = document.createElement('div');
        taskEl.classList.add('task');

        const taskContentEl = document.createElement('div');
        taskContentEl.classList.add('content');

        taskEl.appendChild(taskContentEl);

        const songInfoEl = document.createElement('p');
        songInfoEl.classList.add('song-info');

        const songText = artist !== "" ? `${song} - ${artist}` : song;
        songInfoEl.textContent = songText;

        taskContentEl.appendChild(songInfoEl);

        const taskActionsEl = document.createElement('div');
        taskActionsEl.classList.add('actions');

        const taskEditEl = document.createElement('button');
        taskEditEl.classList.add('edit');
        taskEditEl.innerText = 'Edit';

        const taskDeleteEl = document.createElement('button');
        taskDeleteEl.classList.add('delete');
        taskDeleteEl.innerText = 'Delete';

        taskActionsEl.appendChild(taskEditEl);
        taskActionsEl.appendChild(taskDeleteEl);

        taskEl.appendChild(taskActionsEl);

        listEl.appendChild(taskEl);

        input.value = '';
        artistInput.value = '';

        taskEditEl.addEventListener('click', (e) => {
            // Edit functionality
        });

        taskDeleteEl.addEventListener('click', (e) => {
            listEl.removeChild(taskEl);
        });

        const taskNotesEl = document.createElement('textarea');
        taskNotesEl.classList.add('notes');
        taskNotesEl.placeholder = 'Add your notes here';

        taskEl.appendChild(taskNotesEl);

        const taskTimeStampEl = document.createElement('div');
        taskTimeStampEl.classList.add('timestamp');
        taskTimeStampEl.innerText = `Timestamp: ${timeStamp}, Duration: ${duration} seconds`;

        taskEl.appendChild(taskTimeStampEl);
    });

    const getTimeStamp = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };
});
