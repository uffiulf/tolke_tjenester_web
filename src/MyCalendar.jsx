// src/MyCalendar.jsx

import React, { useEffect, useRef } from 'react';
import Calendar from 'tui-calendar';

const MyCalendar = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current, {
      defaultView: 'month',
      taskView: true,
      template: {
        // Custom template options...
      },
    });

    return () => {
      calendar.destroy();
    };
  }, []);

  return <div ref={calendarRef} style={{ height: '500px' }}></div>;
};

export default MyCalendar;
