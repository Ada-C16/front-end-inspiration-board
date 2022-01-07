import React from "react";
import "./Congrats.css";
// import useSound from 'use-sound';
// import woohoo from '../assets/woohoo.mp3';

const Congrats = (props) => {

    alert()
    // const audioURL = '/assets/woohoo.mp3';
    
    // const [play] = useSound(audioURL);

    // const playSound = () => {
    //     play()
    //     console.log("ummm too loud!")
    //     const audioDogBark = new Audio(audioURL);  
    //     audioDogBark.play();
    // }


    // const handleOnClickNiceButton = () => {
    //     console.log("play congrats audio bark");
    //     const [play] = useSound(boopSfx);

        // const playPromise = document.querySelector('audio').play();
        // if (playPromise !== undefined) {
        //     playPromise.then(playSound() {
        //       // Automatic playback started!
        //     }).catch(playSound(error) {
        //       // Automatic playback failed.
        //       // Show a UI element to let the user manually start playback.
        //     });
        // }
        // playSound();
    // }

    return <section className="congratsZone">
        {/* <button onClick= { playSound } >
            Nice!
        </button> */}
        <audio ref="audio_tag” src=”./assets/woohoo.mp3" controls autoPlay/>
    </section>
}

export default Congrats