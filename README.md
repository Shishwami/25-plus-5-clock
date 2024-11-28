## 25 + 5 Clock

This project implements a Pomodoro Clock that meets all the specified user stories and passes the provided FreeCodeCamp test suite. The Pomodoro Clock features customizable session and break lengths, a timer with pause/resume functionality, and a transition between work and break periods.

## Features

- Adjustable Session Length and Break Length.
- Timer displays the countdown in mm:ss format.
- Start/Stop button to toggle the timer's state.
- Reset button to reset the timer and lengths to their defaults.
- Alternating session and break periods with appropriate labels.
- Audio notification when the timer reaches zero.
- User-friendly interface with all interactions fully responsive.
- Error-proof length adjustment:
- Minimum value: 1 minute.
- Maximum value: 60 minutes.

## Technologies Used
- **HTML5**: Structure of the application.
- **CSS3** / Sass: Styling and layout of the clock.
- **JavaScript (ES6)**: Functionality, timer logic, and user interactions.
- **React**: Frontend framework for building the user interface.

## Getting Started

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the app locally.
4. Alternatively, you can view the live version of the project at this link: [Live Demo](https://shishwami.github.io/25-plus-5-clock/).

## How to Use

1. Adjust the **Break Length** and **Session Length** using the increment (`+`) and decrement (`-`) buttons. The default values are:
   - **Break Length:** 5 minutes.
   - **Session Length:** 25 minutes.
2. Click the **Start/Stop** button to begin or pause the timer.
3. When the timer reaches **00:00**:
   - If it was a session, the **Break** timer starts.
   - If it was a break, the **Session** timer restarts.
4. Click **Reset** to restore default values and stop the timer.
5. An audio notification will play at the end of each timer period.

## User Stories

The application fulfills the following user stories as required by FreeCodeCamp:

- Adjustable session and break lengths (`session-increment`, `session-decrement`, `break-increment`, `break-decrement`).
- Timer display in `mm:ss` format (`time-left`).
- Pause/resume timer functionality (`start_stop`).
- Reset button to restore defaults and stop the timer (`reset`).
- Alternating session and break periods with labels (`timer-label`).
- Audio notification at the end of each timer (`beep`).

## Credits

This Drum Machine project is part of the FreeCodeCamp Frontend Certification course. It was completed as one of the required projects in the curriculum.

- **FreeCodeCamp (FCC)**: This project uses sound files sourced from FreeCodeCamp's public repository. Learn more about FreeCodeCamp and their educational programs on their official website: [FreeCodeCamp](https://www.freecodecamp.org/).