import React from 'react';
import ReactDOM from 'react-dom';
import TuiCalendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

class Bestill extends React.Component {
  render() {
    return (
      <div>
        {/* Your existing HTML content, without the <script> tags for tui-calendar */}
        <TuiCalendar
          id="calendar"
          defaultView="week"
          useCreationPopup={true}
          useDetailPopup={true}
          height="600px"
        />
      </div>
    );
  }
}

export default Bestill;

ReactDOM.createRoot(document.getElementById('bestill-root')).render(<Bestill />);

