import React, { useState, useEffect } from 'react';
import Calendar from 'tui-calendar';
import moment from 'moment';
import 'tui-calendar/dist/tui-calendar.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const CalendarComponent = () => {
  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    const calendar = new Calendar('#calendar', {
      defaultView: 'week',
      useCreationPopup: true,
      useDetailPopup: true,
      taskView: false,
      scheduleView: ['time'],
      template: {
        timegridDisplayPrimaryTime: function(time) {
          return moment(time.hourly).format('HH:mm');
        },
      },
    });

    setCalendar(calendar);
  }, []);

  const handleScheduleClick = (e) => {
    const schedule = e.schedule;
    const start = moment(schedule.start.getTime()).format('YYYY-MM-DDTHH:mm');
    const end = moment(schedule.end.getTime()).format('YYYY-MM-DDTHH:mm');
    openBookingPopup(schedule.id, start, end);
  };

  const openBookingPopup = (id, start, end) => {
    const popup = document.createElement('div');
    popup.classList.add('booking-popup');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Avtaletittel');
    popup.appendChild(titleInput);

    const startInput = document.createElement('input');
    startInput.setAttribute('type', 'datetime-local');
    startInput.setAttribute('value', start);
    popup.appendChild(startInput);

    const endInput = document.createElement('input');
    endInput.setAttribute('type', 'datetime-local');
    endInput.setAttribute('value', end);
    popup.appendChild(endInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Book time';
    submitButton.addEventListener('click', () => {
      const title = titleInput.value;
      const start = new Date(startInput.value);
      const end = new Date(endInput.value);
      const schedule = {
        id: id,
        calendarId: '1',
        title: title,
        category: 'time',
        dueDateClass: '',
        start: start,
        end: end,
      };
      calendar.createSchedules([schedule]);
      closePopup(popup);
    });
    popup.appendChild(submitButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
      closePopup(popup);
    });
    popup.appendChild(cancelButton);

    document.body.appendChild(popup);
  };

  const closePopup = (popup) => {
    popup.remove();
  };

  return <div id="calendar"></div>;
};

export default CalendarComponent;
