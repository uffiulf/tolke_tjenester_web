import React, { useRef, useEffect } from 'react';
import Calendar from 'tui-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import moment from 'moment';


const TuiCalendar = () => {
    const calendarRef = useRef(null);
  
    useEffect(() => {
      const calendar = new Calendar(calendarRef.current, {
        defaultView: 'month',
        taskView: true,
        scheduleView: true,
        useCreationPopup: true,
        useDetailPopup: true,
        template: {
          // Legg til tilpassede maler her om nødvendig
        },
        timezones: [
          {
            timezoneOffset: -480,
            displayLabel: 'GMT-08:00',
            tooltip: 'Los Angeles',
          },
        ],
        calendars: [
          {
            id: '1',
            name: 'Tolke Tjenester',
            color: '#ffffff',
            bgColor: '#9e5fff',
            dragBgColor: '#9e5fff',
            borderColor: '#9e5fff',
          },
        ],
      });
  
      // Legg til kode for å legge til og/eller hente avtaler her
  
      return () => {
        calendar.destroy();
      };
    }, []);
  
    return <div ref={calendarRef} style={{ height: '800px' }} />;
  };
  
  export default TuiCalendar;
  