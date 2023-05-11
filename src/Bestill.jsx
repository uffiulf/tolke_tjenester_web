import React from "react";
import TuiCalendar from "tui-calendar";
import { Link } from "react-router-dom";
import "./calendar.css";

class Bestill extends React.Component {
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
  }

  componentDidMount() {
    this.calendar = new TuiCalendar(this.calendarRef.current, {
      defaultView: "month",
      useCreationPopup: true,
      useDetailPopup: true,
      height: "600px",
      isReadOnly: false,
      calendars: [
        {
          id: "1",
          name: "My Calendar",
          color: "#ffffff",
          bgColor: "#9e5fff",
          dragBgColor: "#9e5fff",
          borderColor: "#9e5fff",
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Hjem</Link>
              </li>
              <li>
                <Link to="/tjenester">Tjenester</Link>
              </li>
              <li>
                <Link to="/om-oss">Om Oss</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </nav>
          <h1>Tolk Margrit AS</h1>
        </header>
        <main>
          <div id="calendar" ref={this.calendarRef}></div>
        </main>
      </div>
    );
  }
}

export default Bestill;
