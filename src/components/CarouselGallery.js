import React from "react";
function CarouselGallery(props) {
	return (
		<div className="carousel">
			<a className="carousel-item" href="#two!">
				<img
					alt=""
					className="materialboxed"
					src="https://lorempixel.com/250/250/nature/2"
				/>
			</a>
			<a className="carousel-item" href="#three!">
				<img
					alt=""
					src="https://lorempixel.com/250/250/nature/3"
					className="materialboxed"
				/>
			</a>
			<a className="carousel-item" href="#four!">
				<img
					alt=""
					src="https://lorempixel.com/250/250/nature/4"
					className="materialboxed"
				/>
			</a>
			<a className="carousel-item" href="#five!">
				<img
					alt=""
					src="https://lorempixel.com/250/250/nature/5"
					className="materialboxed"
				/>
			</a>
		</div>
	);
}
export default CarouselGallery;
