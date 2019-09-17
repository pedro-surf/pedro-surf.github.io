import React from "react";
function CarouselItem(props) {
	return (
		<a className="carousel-item" href="#carousel!" alt="">
			<img
				className="materialboxed"
				alt={props.imgAlt || ""}
				src={props.imgSrc}
			/>
		</a>
	);
}
export default CarouselItem;
