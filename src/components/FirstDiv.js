import React from 'react'
import './FirstDiv.css'



function FirstDiv(){
	return(

		<div className="first-div">
			<menu className="menu">
				<ul>
					<li>About Me</li>
					<li>Gallery</li>
					<li>Media</li>
				</ul>
			</menu>

			<div className="content">
				<div className="text-section">
					<h1>Alice, AI Model Site and Stock</h1>
					<p className="description">
					Lorem ipsum
					</p>
				</div>
				<img src="https://static.wixstatic.com/media/9c3d09_e539c2468b43466c8c56373712ba7403~mv2.jpg" alt="Portrait 1" className="image" />
			</div>
		</div>

	)
}

export default FirstDiv;