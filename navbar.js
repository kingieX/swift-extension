// Function to update menu icon based on current page
function updateMenuIcon() {
    var pathname = window.location.pathname;
    var setupLink = document.getElementById('setup-link');
    var videolabelLink = document.getElementById('videolabel-link');
    var myrecordingLink = document.getElementById('myrecording-link');
    var preferencesLink = document.getElementById('preferences-link');

    if (pathname === '/recordSetup.html') {
      setupLink.innerHTML = '<img src="assets/images/blue_video.png" alt="Menu Icon" style="width: 20px;">';
      videolabelLink.innerHTML = '<img src="assets/images/add.png" alt="Menu Icon" style="width: 20px;">';
      myrecordingLink.innerHTML = '<img src="assets/images/film.png" alt="Menu Icon" style="width: 20px;">';
      preferencesLink.innerHTML = '<img src="assets/images/settings.svg" alt="Menu Icon" style="width: 20px;">';
    } else if (pathname === '/videoLabel.html') {
      setupLink.innerHTML = '<img src="assets/images/video.svg" alt="Menu Icon" style="width: 20px;">';
      videolabelLink.innerHTML = '<img src="assets/images/blue_add.png" alt="Menu Icon" style="width: 20px;">';
      myrecordingLink.innerHTML = '<img src="assets/images/film.png" alt="Menu Icon" style="width: 20px;">';
      preferencesLink.innerHTML = '<img src="assets/images/settings.svg" alt="Menu Icon" style="width: 20px;">';
    } else if (pathname === '/myRecordings.html') {
      setupLink.innerHTML = '<img src="assets/images/video.svg" alt="Menu Icon" style="width: 20px;">';
      videolabelLink.innerHTML = '<img src="assets/images/add.png" alt="Menu Icon" style="width: 20px;">';
      myrecordingLink.innerHTML = '<img src="assets/images/blue_film.png" alt="Menu Icon" style="width: 20px;">';
      preferencesLink.innerHTML = '<img src="assets/images/settings.svg" alt="Menu Icon" style="width: 20px;">';
    } else if (pathname === '/recordingPreferences.html') {
      setupLink.innerHTML = '<img src="assets/images/video.svg" alt="Menu Icon" style="width: 20px;">';
      videolabelLink.innerHTML = '<img src="assets/images/add.png" alt="Menu Icon" style="width: 20px;">';
      myrecordingLink.innerHTML = '<img src="assets/images/film.png" alt="Menu Icon" style="width: 20px;">';
      preferencesLink.innerHTML = '<img src="assets/images/blue_settings.png" alt="Menu Icon" style="width: 20px;">';
    }
  }

  // Call the function on page load
  window.onload = updateMenuIcon;