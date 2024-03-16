// Fetch My Recordings
const fetchMyRecordings = async () => {
    try {
        const response = await fetch('{{baseURL}}/recordings/my-recordings');
        const data = await response.json();
        displayMyRecordings(data);
    } catch (error) {
        console.error('Error fetching my recordings:', error);
    }
};

// Delete Recording
const deleteRecording = (id) => {
    fetch(`{{baseURL}}/recordings/${id}/delete`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            // Update UI after successful deletion
            const recordingElement = document.getElementById(`recording_${id}`);
            if (recordingElement) {
                recordingElement.remove();
            }
        } else {
            throw new Error('Error deleting recording');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

// Display My Recordings
const displayMyRecordings = (recordings) => {
    const myRecordingsContainer = document.getElementById('myRecordingsContainer');
    recordings.forEach(recording => {
        const recordingElement = document.createElement('div');
        recordingElement.id = `recording_${recording.id}`;
        recordingElement.classList.add('record');
        recordingElement.innerHTML = `
            <img src="" alt="thumnail" style="width: 100px; height: 40px;">
            <div class='title'>
                <p>${recording.title}</p>
                <p>days recorded...</p>
            </div>
            <div class='btns'>
                <img src='assets/images/link.svg' alt='clip' style='width: 14px; cursor: pointer;'>
                <img src='assets/images/delete.svg' alt='delete' onclick='deleteRecording(${recording.id})' style='width: 14px; cursor: pointer;'>
            </div>
        `;
        myRecordingsContainer.appendChild(recordingElement);
    });
};

// Fetch My Recordings on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchMyRecordings();
});