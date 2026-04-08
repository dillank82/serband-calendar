# Serband Calendar

[Читать на русском](README.ru.md)

## Description
A web application designed to accurately model and visualize a unique calendar system created for an author's fantasy setting.

## How to run
Commands:
1) Clone repository:
```git clone https://github.com/dillank82/serband-calendar.git```
2) Select directory:
```cd serband-calendar```
3) Install dependencies: 
```npm i```
4) Local run:
```npm run dev```

## Tech stack
HTML5, CSS3, JavaScript(ES6+), TypeScript, React, Vite, Vitest.

## Motivation
This application was created to automate calculations on the calendar from the D&D setting. The calendar contains non-constant days (analogous to a leap year), as well as moving holidays that are not taken into account in the numerical count of days within a month. The application automates the simulation, providing accurate data and visualization in a familiar and understandable style.

## Features
- The application is based on a custom class that implements the date abstraction. The timeline within the class is based on an absolute day counter;
- Using React Context to inject global date state, which avoids prop drilling and ensures reactive synchronization of components;
- An algorithmic visualization of a calendar grid includes adding empty cells to the month so that the days match the days of the week, and dynamically handles non-numeric days so that they do not increase the number of following days;
- The calendar form is adaptive due to the use of css grid;
- Critical calculation logic is covered by unit tests, which ensures high predictability of the system's operation and simplifies further support.

## Challenges
- Implementing a simulation approach through iterative modeling to calculate the dates of transitional holidays;
- Switches are complex reactive components that handle various mouse events and transform for easy navigation through the calendar.

## The calendar system used
### Basic principles
A year consists of 12 months of 30 days each, which are denoted by numerals.
A year begins with the first month of spring.
Months: Ngakuru, Ngawari, Ngaere, Raumati, Moana, Marae, Ngahuru, Rau, Vai, Puru, Tahou, Tangata.
There are 7 days in a week: Tai, Rua, Toru, Va, Rima, Ono, Vitu.
### Non-numeric days
The additional 5 days are the days of spring and autumn equinoxes, summer and winter solstices, as well as the day for celebrating the New Year (the first day of the year).
An analogue of a leap year: once every 4 years, there is an extra day, the day when the moon and the sun switch places (the last day of the year).
### Holiday transition cycles
The first spring equinox after 9 Ngakuru. Cycle: after 10 years - after 8 Ngakuru, after another 91 years again after 8 Ngakuru.
The first summer solstice after 10 Raumati. Cycle: after 53 years - after 9 Raumati, after another 60 years again after 9 Raumati.
The first autumn equinox after 2 Ngahuru. Cycle: after 19 years - after 3 Ngahuru, after another 9 years - after 1 Ngahuru, and after another 9 years - after 3 Ngahuru, and after 18 years more - after 1 Ngahuru.
The first winter solstice after 11 Puru. Cycle: after 16 years - after 12 Puru, after another 31 years again after 12 Puru.

## How-to
### Choose a month
You can switch the month using the arrow buttons or scroll the mouse wheel on the month name. Clicking on the month name expands the element, displaying the names of the neighboring months.
### Choose a year
You can switch the year using the arrow buttons. When you click on the year, you can scroll or use it to enter a number.

## Future
### Short-term
Planning to improve the date selection methods for convenience and visual stabilization (functionally and stylistically).
### Long-term
Planning to implement responsive layout; a backend that will help implement an interface for updating the current date, adding events directly to the calendar, and authorizing users to add their local events/notes to the calendar.