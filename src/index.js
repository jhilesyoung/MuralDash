import "./styles/index.scss";
import './scripts/chords.js'
import { puzzlePicture } from './scripts/harvard_pictures'


const background = new Image();
background.src = "src/images/marble_background.jpg";
window.puzzlePicture = puzzlePicture;

// document.body.style.backgroundImage = "url('./images/marble_background.jpg')";