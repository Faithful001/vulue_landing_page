import { Link, Element, scroller } from "react-scroll";
import { FeaturesCarouselData } from "../data/FeaturesCarouselData";
import { useState, useEffect, createRef } from "react";

const FeaturesCarousel = () => {
	const [scrollIndex, setScrollIndex] = useState(0);
	const featuresCarouselRef = createRef();

	const handleScroll = (index) => {
		setScrollIndex(index);

		// Scroll to the corresponding Element along the X-coordinate
		const elementName = `section-${index}`;
		const element = document.getElementById(elementName);

		if (element) {
			const container = featuresCarouselRef.current;
			const scrollLeft = element.offsetLeft - container.offsetLeft;
			container.scrollTo({
				left: scrollLeft,
				behavior: "smooth",
			});
		}
	};

	const changeCard = () => {
		if (featuresCarouselRef.current) {
			const scrollX = featuresCarouselRef.current.scrollLeft;

			switch (true) {
				case scrollX <= 0:
					setScrollIndex(0);
					break;
				case scrollX <= 550:
					setScrollIndex(1);
					break;
				case scrollX <= 1100:
					setScrollIndex(2);
					break;
				case scrollX <= 1650:
					setScrollIndex(3);
					break;
				default:
					break;
			}
		}
	};

	useEffect(() => {
		const featuresCarouselDiv = featuresCarouselRef.current;
		featuresCarouselDiv.addEventListener("scroll", changeCard);

		return () => {
			featuresCarouselDiv.removeEventListener("scroll", changeCard);
		};
	}, [changeCard]);

	return (
		<div className="flex flex-col items-center justify-center">
			<div
				ref={featuresCarouselRef}
				className="features-carousel flex items-center justify-between overflow-x-auto"
			>
				{/* cards */}
				{FeaturesCarouselData.map((data, index) => (
					<Element
						id={`section-${index}`}
						key={index}
						className={`cards ${data.link} relative px-8 py-20 mr-10 md:h-[25rem] h-[30rem] rounded-[40px] flex flex-col md:flex-row min-w-full  justify-around items-center pt-7`}
					>
						<div>
							<img
								src={data.image}
								alt=""
								className="mirror my-3 max-w-[200px]"
							/>
						</div>
						<div className="mirror-texts flex flex-col justify-around">
							<div className="full-disclosure absolute top-2 md:static flex justify-between">
								<div>
									<p className="text-[10px]">{data.asideTopLeft}</p>
									<p className="text-red-700 text-[8px]">
										{data.asideTopLeftB}
									</p>
								</div>
								<div>
									<p
										className={`bg-transparent rounded-md ${
											data.asideTopRight.length === 0
												? "border-none"
												: "border-slate-600"
										} border font-xs text-[13px] p-1`}
									>
										{data.asideTopRight}
									</p>
								</div>
							</div>
							<div className="flex flex-col items-start">
								<p className="mb-5 text-xl text-[#afafaf] font-semibold">
									{data.titleTop}
									<br />
									{data.titleBottom}
								</p>
								<p className="max-w-xs font-extralight text-xs mb-5">
									{data.writeUp}
								</p>
							</div>
						</div>
					</Element>
				))}
			</div>

			<div className="flex gap-2">
				{FeaturesCarouselData.map((data, index) => (
					<div
						key={index}
						onClick={() => handleScroll(index)}
						className={`${
							scrollIndex === index
								? "w-[40px] bg-white"
								: "w-[15px] border-[1px] border-white bg-transparent"
						} h-[5px] rounded-lg cursor-pointer`}
					/>
				))}
			</div>
		</div>
	);
};

export default FeaturesCarousel;
