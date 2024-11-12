import React, { useEffect, useState } from 'react';
import './SecondDiv.css'

const images = [
	'https://static.wixstatic.com/media/9c3d09_1018efd133d44da49be73191ea538e82~mv2.jpg',
	'https://static.wixstatic.com/media/9c3d09_574ad01602a140c7aef6011d36d6cb07~mv2.jpg',
	'https://static.wixstatic.com/media/9c3d09_d41508cace9c457f9b109b05b1f2144a~mv2.jpg',
	'https://static.wixstatic.com/media/9c3d09_ae062fd6a4564affabf3e921e715af2b~mv2.jpg',
	'https://static.wixstatic.com/media/9c3d09_7d6d9dc3fae24ee89a9d8d4b29ecc51a~mv2.jpg',
	];

function SecondDiv(){
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);


	useEffect(() => {
		if(!isHovered){
			const interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

			}, 3000);
			return() => clearInterval(interval)
		}
	}, [isHovered]);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	}

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
			}

return(

		<div className="second-div">
			<div className="text-section">
				<h2>Portafolio de Imagenes</h2>
				<p>Este es mi portafolio online de modelaje</p>
			</div>

			<div className="carousel"
			onMouseEnter = {()=> setIsHovered(true)}
			onMouseLeave = {()=> setIsHovered(false)}
			>

			<button className="arrow left-arrow" onClick={handlePrev}>&lt;</button>
			<img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
			<button className="arrow right-arrow" onClick={handleNext}>&gt;</button>
			</div>
		</div>
	);

}

export default SecondDiv