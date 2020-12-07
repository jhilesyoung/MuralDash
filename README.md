<body>
  <h1>Jigsaw Rhapsody</h1>

  <br/>

  <h2>Background & Overview</h2>
  <p> 
    Jigsaw Rhapsody is an interactive artwork puzzle game that plays a complete set of chords when the puzzle is complete. Each puzzle piece will hold a note that completes the chord for that particular puzzle. When a piece is placed on the board, the note will play. The user will have a choice to play the set of notes that they have placed at anytime and incorrect positions will have a note that does not fit. Particularly some sort of jarring distortion effect that signals that it is obvious something is wrong.
  </p>
  
  <h2>Functionality & MVP</h2>
  <p>
    <h3>Jigsaw Rhapsody will have the following core functionality for a minimum viable product:</h3>
    <ul>
      <li> Users can play the finished audio of the puzzle before beginning the puzzle.</li>
      <li> Users can play each note on the puzzle piece when clicking.</li>
      <li> Users will have the option to mute audio and play without sound.</li>
      <li> Users can download the picture and audio of finished puzzles.</li>
     </ul>
  </p>
  
  <p>
    <h3>In addition to these features, the application will feature:</h3>
    <ul>
      <li> An About modal describing the background and rules of the game. </li>
      <li> A production ReadME </li>
    </ul>
   </p>
  
  <h2>Wireframes</h2>
  <p>
    This is a single paged app that will feature a main board with puzzle pieces on the outside of the main square. The puzzle pieces surrounding the game board will be drag and drop elements that will populate the board to create the final image. The controls on the left-side will feature a mute, volume handle, and play/pause button to play the current notes that they have placed. The nav links will feature the relevant links to my github, linkedin, and portfolio site. The title will be placed atop the board(bonus features may include rotating or animated puzzle pieces that move when the music is played and controls may feature themed puzzles with associated music themes)
  <br/>
    <img src="src/images/jigsaw_rhapsody_wireframe.png" width="700px">
  </p>
  
  <h2>Architecture and Technologies</h2>
  
  <p>
    <h3> This project will implement the following technologies:</h3>
      <ul>
        <li>tone.js for notes on the puzzle board</li>
        <li>tone.draw for visual element when music is played </li>
        <li>harvard art museum for used images(im not sure yet!)</li>
      </ul>
 
  </p>
  
  <h2>Implementation Timeline</h2>
  <p>THERE IS SOME CRAZY HTML ERROR I CANT FIND IN THE READ ME BELOW THIS POINT(I WILL FIX IT LATER) 😢 </p>
    <h3> Day 1: </h3>
      <p>
        Become one with tone.js and decide which instruments and chord I will choose for my puzzle. Learn how to display and render the main chord or sample track I          will be using. Configure the absolute miniimum I need for music to display on the page.
       </p>
    <h3> Day 2: </h3>
      <p> Research puzzle logic for randomizing and breaking up images into pieces to form a puzzle board. Solidify my knowledge in connected image api used for p          puzzle board. I should be able to successfully render a random artwork by E.O.D.
      </p>
     <h3> Day 3: </h3>
     <p> Start to connect puzzle piece elements to individual notes and have notes play when user clicks a puzzle piece. Allow user to place puzzle pieces on the           board.</p>
     <h3> Day 4: </h3>
     <p> Design game board and figure out music controls on the panel to allow user to adjust volume, play/pause/mute.  </p>
     
  <h2> Bonus Features </h2>
    Ideally, I want this to be a real musical and interactive experience that is visually captivating, but provides the user with some sort of challenge. 
    <p>
      <ul>
        <li>Make puzzle pieces constantly rotate around in place, then make them rotate around the board. </li>
        <li>Allow user to toggle different amount of puzzle pieces and different artwork categories.</li>
        <li>Allow user to choose theme of music played.</li>
      </ul>
    </p>
</body>
