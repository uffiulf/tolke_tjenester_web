calendar.on('clickSchedule', function(e) {
    var schedule = e.schedule;
    var start = moment(schedule.start.getTime()).format('YYYY-MM-DDTHH:mm');
    var end = moment(schedule.end.getTime()).format('YYYY-MM-DDTHH:mm');
    openBookingPopup(schedule.id, start, end);
  });
  


  function openBookingPopup(id, start, end) {
    // Opprett popup-elementet
    var popup = document.createElement('div');
    popup.classList.add('booking-popup');
  
    // Opprett input-felt for avtaletittel
    var titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Avtaletittel');
    popup.appendChild(titleInput);
  
    // Opprett input-felt for starttid
    var startInput = document.createElement('input');
    startInput.setAttribute('type', 'datetime-local');
    startInput.setAttribute('value', start);
    popup.appendChild(startInput);
  
    // Opprett input-felt for sluttid
    var endInput = document.createElement('input');
    endInput.setAttribute('type', 'datetime-local');
    endInput.setAttribute('value', end);
    popup.appendChild(endInput);
  
    // Opprett knapp for å bekrefte bookingen
    var submitButton = document.createElement('button');
    submitButton.textContent = 'Book time';
    submitButton.addEventListener('click', function() {
      var title = titleInput.value;
      var start = new Date(startInput.value);
      var end = new Date(endInput.value);
      var schedule = {
        id: id,
        calendarId: '1',
        title: title,
        category: 'time',
        dueDateClass: '',
        start: start,
        end: end
      };
      calendar.updateSchedule(schedule);
      closePopup(popup);
    });
    popup.appendChild(submitButton);
  
    // Opprett knapp for å avbryte bookingen
    var cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', function() {
      closePopup(popup);
    });
    popup.appendChild(cancelButton);
  
    // Legg popupen til på siden
    document.body.appendChild(popup);
  }
  

  function closePopup(popup) {
    popup.remove();
  }
  