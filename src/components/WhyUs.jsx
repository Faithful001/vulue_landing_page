import { WhyusCardsData } from "../data/WhyusCardsData";

const WhyUs = () => {
	return (
		<div className="whyus flex flex-col items-center bg-[#000000]">
			<h1 className="text-2xl font-bold mb-10">Why Us</h1>
			<div className="whyuscards grid grid-cols-2 gap-5 m-3">
				{WhyusCardsData.map((data, index) => (
					<div
						key={index}
						className="whycards rounded-[40px] p-5 mx-1 min-h-[10rem] flex flex-col items-center"
					>
						<div>
							<img src={data.image} alt="" className="h-7 mb-2" />
						</div>
						<div className="text-lg text-center">{data.main}</div>
						<div className="text-sm text-center">{data.main2}</div>
					</div>
				))}
			</div>
			<div className="mt-10">
				<button className="bg-[#0170E3] rounded-md p-3 px-10 text-sm">
					Start Investing
				</button>
			</div>
		</div>
	);
};

export default WhyUs;
