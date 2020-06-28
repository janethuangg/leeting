import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Problem from "./Problem";
import firebase from "../firebase.js";

import { useHistory } from "react-router-dom";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    // const currentUser = firebase.auth().currentUser;
    const currentUser = {
      uid: "2FWlZ47LDNYdthWMdUdmh0xNNCx2",
    };

    if (currentUser) {
      setUser(currentUser);
      axios
        .get(`http://localhost:5000/problems/user/${currentUser.uid}`)
        .then((res) => {
          const problems = res.data;
          setEvents(
            problems.map((problem) => ({
              start: problem.date.slice(0, 10),
              end: problem.date.slice(0, 10),
              display: "background",
            }))
          );
        });
    } else {
      history.push("/signup");
    }
  }, []);
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        themeSystem="bootstrap"
        eventColor=""
        events={events}
      />
    </div>
  );
};

export default Calendar;
