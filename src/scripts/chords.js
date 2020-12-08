import "../styles/index.scss";
import * as Tone from 'tone';
    
    const synth = new Tone.Synth().toDestination();

    function playC4() {
        synth.triggerAttackRelease("C4", 0.5).resume();
    }

    function playE4() {
        synth.triggerAttackRelease("E4", 0.5).resume();
    }

    function playG4() {
        synth.triggerAttackRelease("G4", 0.5).resume();
    }

    function playB4() {
        synth.triggerAttackRelease("B4", 0.5).resume();
    }

    document.querySelector("#synth-C4").addEventListener("click", playC4);
    document.querySelector("#synth-E4").addEventListener("click", playE4);
    document.querySelector("#synth-G4").addEventListener("click", playG4);
    document.querySelector("#synth-B4").addEventListener("click", playB4);


