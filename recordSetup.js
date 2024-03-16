// JavaScript logic
document.addEventListener('DOMContentLoaded', function () {
    const switches = document.querySelectorAll('.SwitchRoot, .SwitchThumb');

    switches.forEach(switchEl => {
      switchEl.addEventListener('click', function () {
        const currentState = switchEl.getAttribute('data-state');
        const newState = currentState === 'checked' ? 'unchecked' : 'checked';
        switchEl.setAttribute('data-state', newState);

        // Synchronize state between root and thumb
        const associatedThumb = switchEl.querySelector('.SwitchThumb');
        associatedThumb.setAttribute('data-state', newState);
      });
    });
  });