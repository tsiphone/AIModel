import React, { useState } from 'react';
import './ThirdDiv.css'
import forestImage from './Twilight.jpg';
import audioFile from './Whispers.mp3';


function ThirdDiv(){
	const [audio] = useState(new Audio(audioFile));
	const [isPlaying, setIsPlaying] = useState(false);

	const toggleMusic = () => {
		if (isPlaying){
			audio.pause();
		} else {
			audio.play();
		}
		setIsPlaying(!isPlaying);

	}

	return(

		<div className="third-div-container">
			<div className="text-section">
				<h2>Twilight Forest</h2>
				<p>Loerem ipsum</p>
			</div>
			<div className="image-section" style={{ backgroundImage: `url(${forestImage})`}}>
				<div className="button-overlay">
					<button onClick={toggleMusic}>{isPlaying ? 'Silenciar' : 'Escuchar Musica'}</button>
				</div>
			</div>
		</div>	

		)


}

export default ThirdDiv