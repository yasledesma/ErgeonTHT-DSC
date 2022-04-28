import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { startOfWeek, endOfWeek, getDate } from "date-fns";
import { Paper, Box, Typography } from "@mui/material";

const StripeCalendar = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const currentWeek = (date: any) => {
    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const weekStart = getDate(startOfWeek(date));
    const weekEnd = getDate(endOfWeek(date));

    const week = [];

    let a = weekStart;
    let b = 0;
    let c = 1;

    if (a < weekEnd) {
      while (a <= weekEnd && b < 7) {
        week.push({
          date: a,
          day: daysOfTheWeek[b],
        });
        a++;
        b++;
      }
    }

    if (a > weekEnd) {
      while (a > weekEnd && b < 7) {
        week.push({
          date: a,
          day: daysOfTheWeek[b],
        });
        a++;
        b++;
        if (a === 31 || a === 30) {
          week.push({
            date: a,
            day: daysOfTheWeek[b],
          });
          b++;
          while (c <= weekEnd) {
            week.push({
              date: c,
              day: daysOfTheWeek[b],
            });
            c++;
            b++;
          }
        }
      }
    }

    return week;
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <KeyboardDatePicker
          value={selectedDate}
          placeholder={new Date().toUTCString()}
          // @ts-ignore
          onChange={(date) => handleDateChange(date)}
          format="MM/dd/yyyy"
        />
      </Box>
      <Box
        sx={{
          width: "80vw",
          overflow: "hidden",
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 150,
            height: 150,
          },
        }}
      >
        {currentWeek(selectedDate).map((day: any, i: number) => (
          <Paper
            key={i}
            elevation={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontWeight: "bold", color: "green" }}>
              {day.day} {day.date}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default StripeCalendar;
