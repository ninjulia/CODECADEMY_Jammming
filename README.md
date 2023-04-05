# Codecademy - Create a Playlist App with the Spotify API project solution

This is a solution to the ["Jammming" Playlist App with Spotify API from Codecademy](https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-22-react-part-ii/modules/wdcp-22-jammming/projects/jammming-prj). This project is part of their Front-End Engineer Training Course.

## Installing / Getting started

Spotify API Key is defined in Netlify Environmental Variable. You MUST use Netlify to access the project in development. Using the `npm start` command will throw errors since `create-react-app` doesn't have access to the variable.

```shell
npx netlify dev # spins up Server on http://localhost:8888
```

The Spotify [learnReact-jammming](https://developer.spotify.com/dashboard/f8e592bcf7574f50979cfcde18fa1d9d) app only accepts traffic from two domains:

- http://localhost:8888/
- https://candid-wisp-e78ad8.netlify.app/

This is set using the NODE_ENV variable in `src\util\Spotify.js`.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Project ](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Running Notes](#running-notes)

## Overview

### The challenge

Build a React web application using provided HTML & CSS. Users should be able to:

- Search Spotify for artist, song, or album
- Create a playlist from search results
- Save playlist to their Spotify account

### Screenshot

![screenshot](./screenshot.PNG?raw=true)

### Links

- Solution URL: [https://github.com/ninjulia/CODECADEMY_Jammming/](https://github.com/ninjulia/CODECADEMY_Jammming/)
- Live Site URL: [https://candid-wisp-e78ad8.netlify.app/](https://candid-wisp-e78ad8.netlify.app/)
- Hosting via Netlify: [![Netlify Status](https://api.netlify.com/api/v1/badges/46d8e6e3-9422-49f3-99de-1594f29bfce7/deploy-status)](https://app.netlify.com/sites/candid-wisp-e78ad8/deploys)

## My process

### Built with

- create-react-app
- node.js
- VS Code

### What I learned

This is my first time working with REACT technologies. While I felt confident going through the Codecademy lessons, I got stuck several times doing the actual work. I found a walk through video which I used to verify code I had already written and help to understand the _why_ behind the solutions.

### Continued development

When working with new technologies, it's important to continue practicing to solidify concepts. There were several steps I would have been completely lost on if it weren't for the walk-through video. In the future, I'll look for simple projects I can undertake to boost my confidence in completing a project 100% on my own.

### Useful resources

- Create React App documentation [https://create-react-app.dev/](https://create-react-app.dev/)
- Project Walk-through [https://www.youtube.com/watch?v=DH991Dzb9iE](https://www.youtube.com/watch?v=DH991Dzb9iE)
- Using Enter Key Event in React [Singhal,Gaurav (May 28, 2020). How to Use the Enter Key Event Handler on a React-Bootstrap Input Component. Pluralsight](https://www.pluralsight.com/guides/how-to-enter-key-event-handler-on-a-react-bootstrap-input-component)

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
- Placeholder functionality to add playlist to user's account
- Placeholder functionality to search Spotify

### 2/12/23 (74-88)

- Get a Spotify user’s access token
- Send a search request to the Spotify API
- Set logic on the search field and button to submit search term either via clicking the button or pressing "ENTER" key (with help from [Pluralsite.com](https://www.pluralsight.com/guides/how-to-enter-key-event-handler-on-a-react-bootstrap-input-component).)

### 2/12/23 (89-96)

- Save playlist to user's account
- Send a search request to the Spotify API
- Fixed issue with Playlist name resetting. Updated to <input value={this.state.playlistName} />

### 2/13/23 (96-99)

- Deployed via Netlify CLI since I already use their hosting services (Codecademy provided instructions for surge).
- Leveraged Environmental Variables for storing Spotify API key, linked via netlify-cli package

### 2/13/23 Part 2 - Potential Playlist Enhancements

- Require login before interacting with app
- Only display songs not currently present in the playlist in the search results
- Add song back to search results if removed from Playlist
- Update the access token logic to expire at exactly the right time, instead of setting expiration from when the user initiates their next search
