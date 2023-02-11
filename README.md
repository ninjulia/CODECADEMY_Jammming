# Codecademy - Create a Playlist App with the Spotify API project solution

This is a solution to the ["Jammming" Playlist App with Spotify API from Codecademy](https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-22-react-part-ii/modules/wdcp-22-jammming/projects/jammming-prj). This project is part of their Front-End Engineer Training Course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Running Notes](#running-notes)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

[screenshot](https://ninjulia.github.io/jammming/screenshot.png)

### Links

- Solution URL: [https://github.com/ninjulia/jammming](https://github.com/ninjulia/jammming/)
- Live Site URL: [https://ninjulia.github.io/jammming](https://ninjulia.github.io/jammming/)

## My process

### Built with

- create-react-app
- node.js
- VS Code

### What I learned

This is my first time working with REACT technologies.

### Continued development

When working with new technologies, it's important to continue practicing to solidify concepts. This project was a great introduction to the build processes involved in creating with React. Codecademy provided the HTML, CSS, and a step-by-step breakdown of tasks to turn the snippets into a fully functioning app. In the future, I'll need to practice taking projects from start to finish on my own.

### Useful resources

- Create React App documentation [https://create-react-app.dev/](https://create-react-app.dev/)
- Project Walkthrough [https://www.youtube.com/watch?v=DH991Dzb9iE](https://www.youtube.com/watch?v=DH991Dzb9iE)

## Author

- Website - [Julia](https://www.becausejulia.com)

## Running Notes

### 2/10/23

- Started project
- Paused at Pass Down Search Result and Render Result List #29
- Need to set up Stylelint + Prettier (or switch to eslint if needed)
- Verifying GitHub link still works

### 2/11/23 (29-35)

- Project clean up
- Fixed syntax issues
- Stuck at #34 - Use the .map() method to render each track in the tracks property. Keep getting the following error: 'Uncaught TypeError: Cannot read properties of undefined (reading 'map')' ** [Solution](https://discuss.codecademy.com/t/passed-state-is-undefined-in-child-component/456755) was to comment out reference to <TrackList /> in <PlayList /> for now? **
- Skipped ahead to #35 to Render track name, artist and album in Track.js file

### 2/11/23 (36-73)

- Allow songs to be add/removed from playlist from search results
- Allow user to change name of playlist
- Placeholder functionality to add playist to user's account
- Placeholder functionality to search Spotify
