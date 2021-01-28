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

    // document.querySelector("#synth-C4").addEventListener("click", playC4);
    // document.querySelector("#synth-E4").addEventListener("click", playE4);
    // document.querySelector("#synth-G4").addEventListener("click", playG4);
    // document.querySelector("#synth-B4").addEventListener("click", playB4);

    function fullSong() {
        const synth = new Tone.MonoSynth().toDestination();
        const seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, 1, time);
            // subdivisions are given as subarrays
        }, ["E5", "F5", "A5", "C5", "E5", "F5", "A5", "C5", "E5", "F5", "A5", "C5", "A5", "F5", "E5", "C5",
            "B4", "C5", "E5", "G5", "B4", "C5", "E5", "G5", "B4", "C5", "E5", "G5", "E5", "C5", "B4", "G4",
            ["A4", "Bb4"], "D5", "F5", ["A4", "Bb4"], "D5", "F5", ["A4", "Bb4"], "D5", "F5", ["A4", "Bb4"], "F5", ["Bb4"],
            "A4", "C#5", "F5", "G5", "C#5", "Bb5", "F5", "C#5", "Bb5", "G5", "F5",
            "E5", "F#5", "A5", "C#5", "E5", "F#5", "A5", "C#5", "E5", "F#5", "A5", "C#5", "E5", "F#5", ["A4"], "C#5",
            "E5", "G5", "B5", "D6","E5", "G5", "B5", "D6","E5", "G5", "B5", "D6", "B5", "G5", "E5", "D5",
            "D5", "F5", "A5", "C5", "D5", "F5", "A5", "C5", "D5", "F5", "A5", "C5", "Bb5", "A5", "F5", "D5", "C5", ["Bb4"],
            "A4", "C#5", "F5", "G5", "C5", ["Bb5"], "F5", "C5", ["Bb4"], "G5", "F5", "E5"
            ]).start(1);
        Tone.Transport.start();
    }

    function MediumSong() {
        
        const synth = new Tone.PolySynth().toDestination();
        const seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, 1, time);
            // subdivisions are given as subarrays
        }, ["E5", "F5", "A5", "C5", "E5", "F5", "A5", "C5", "E5", "F5", "A5", "C5", "A5", "F5", "E5", "C5",
            "B4", "C5", "E5", "G5", "B4", "C5", "E5", "G5", "B4", "C5", "E5", "G5", "E5", "C5", "B4", "G4",
            ["A4", "Bb4"], "D5", "F5", ["A4", "Bb4"], "D5", "F5", ["A4", "Bb4"], "D5", "F5", ["A4", "Bb4"], "F5", ["Bb4"],
            "A4", "C#5", "F5", "G5", "C#5", "Bb5", "F5", "C#5", "Bb5", "G5", "F5",
            "E5", "F#5", "A5", "C#5", "E5", "F#5", "A5", "C#5", "E5", "F#5", "A5", "C#5", "E5", "F#5", ["A4"], "C#5",
            "E5", "G5", "B5", "D6","E5", "G5", "B5", "D6","E5", "G5", "B5", "D6", "B5", "G5", "E5", "D5",
            "D5", "F5", "A5", "C5", "D5", "F5", "A5", "C5", "D5", "F5", "A5", "C5", "Bb5", "A5", "F5", "D5", "C5", ["Bb4"],
            "A4", "C#5", "F5", "G5", "C5", ["Bb5"], "F5", "C5", ["Bb4"], "G5", "F5", "E5"
            ]).start(1);
        Tone.Transport.start();

        let counter = 1
        if (seq) {
            counter ++
        }

        if (counter == 5) {
            Tone.Transport.stop()
        }
        
    }

    function HardSong() {
        const synth = new Tone.MembraneSynth().toDestination();
        const seq = new Tone.Sequence((time, note) => {
            synth.triggerAttackRelease(note, 1, time);
            // subdivisions are given as subarrays
        }, ["E5", "F5", "A5", "C5", "E5", "F5", "A5", "C5", "E5", "F5", "A5", "C5", "A5", "F5", "E5", "C5",
            "B4", "C5", "E5", "G5", "B4", "C5", "E5", "G5", "B4", "C5", "E5", "G5", "E5", "C5", "B4", "G4",
            ["A4", "Bb4"], "D5", "F5", ["A4", "Bb4"], "D5", "F5", ["A4", "Bb4"], "D5", "F5", ["A4", "Bb4"], "F5", ["Bb4"],
            "A4", "C#5", "F5", "G5", "C#5", "Bb5", "F5", "C#5", "Bb5", "G5", "F5",
            "E5", "F#5", "A5", "C#5", "E5", "F#5", "A5", "C#5", "E5", "F#5", "A5", "C#5", "E5", "F#5", ["A4"], "C#5",
            "E5", "G5", "B5", "D6","E5", "G5", "B5", "D6","E5", "G5", "B5", "D6", "B5", "G5", "E5", "D5",
            "D5", "F5", "A5", "C5", "D5", "F5", "A5", "C5", "D5", "F5", "A5", "C5", "Bb5", "A5", "F5", "D5", "C5", ["Bb4"],
            "A4", "C#5", "F5", "G5", "C5", ["Bb5"], "F5", "C5", ["Bb4"], "G5", "F5", "E5"
            ]).start(1);
        Tone.Transport.start();
    }


    function stopFullSong() {
        Tone.Transport.stop();
    }

    //PolySynth = cute?
    //MonoSynth = 

    // function stopFullSong() {
    //     //get the current time
    //     var now = Tone.now();
    //     //schedule relative to 'now'
    //     fullSong.start(now);
    //     fullSong.stop(now + 2);
    // }

    document.querySelector("#easy").addEventListener("click", fullSong);
    document.querySelector("#stop-full-song").addEventListener("click", stopFullSong)
    document.querySelector("#medium").addEventListener("click", MediumSong);
    document.querySelector("#hard").addEventListener("click", HardSong);






