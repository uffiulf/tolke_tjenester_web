import React from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/tui-calendar/dist/tui-calendar.css';
import Calendar from 'tui-calendar';

class Bestill extends React.Component {
  componentDidMount() {
    // Initialize tui-calendar here
    var calendarEl = document.getElementById('calendar');
    var calendar = new Calendar(calendarEl, {
      defaultView: 'week',
      useCreationPopup: true,
      useDetailPopup: true
    });
    // Rest of the calendar code
  }

  render() {
    return (
      <div>
        {/* Your existing HTML content, without the <script> tags for tui-calendar */}
        <div id="calendar" style={{ width: "100%", height: "600px" }}></div>
      </div>
    );
  }
}

ReactDOM.render(<Bestill />, document.getElementById('bestill-root'));
