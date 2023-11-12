import mgt from "../assets/images/icons/mgt.svg";
import clients from "../assets/images/icons/clients.svg";
import strategy from "../assets/images/icons/strategy.svg";
import custody from "../assets/images/icons/custody.svg";
import offices from "../assets/images/icons/offices.svg";
import market from "../assets/images/icons/market.svg";

const WhyUs = () => {
	return (
		<div className="whyus flex flex-col items-center bg-[#000000]">
			<h1 className="text-2xl font-bold mb-10">Why Us</h1>
			<div className="whyuscards flex m-3">
				<div className="cd1 rounded-lg border-t-2 border-white p-5 mx-1 flex flex-col items-center">
					<div>
						<img src={mgt} alt="" className="h-7" />
					</div>
					<div className="text-sm text-center">Over 18.5BN already managed</div>
				</div>
				<div className="cd2 rounded-lg border-t-2 border-white p-5 mx-1 flex flex-col items-center">
					<div>
						<img src={clients} alt="" className="h-6" />
					</div>
					<div className="text-sm text-center">Over 10,000 clients</div>
					<div className="text-[10px] text-center">
						From students to affluents and HNWIs to businesses
					</div>
				</div>
				<div className="cd3 rounded-lg border-b-2 border-white p-5 mx-1 flex flex-col items-center">
					<div>
						<img src={strategy} alt="" className="h-7" />
					</div>
					<div className="text-sm text-center">Multi-Strategy Driven </div>
				</div>
				<div className="cd4 rounded-lg border-t-2 border-white p-5 mx-1 flex flex-col items-center">
					<div>
						<img src={custody} alt="" className="h-7" />
					</div>
					<div className="text-sm text-center">Institutional-Grade Custody</div>
				</div>
				<div className="cd5 rounded-lg border-t-2 border-white p-5 mx-1 flex flex-col items-center">
					<div>
						<img src={offices} alt="" className="h-6" />
					</div>
					<div className="text-sm text-center">
						Over 7 provisional offices across Nigeria
					</div>
				</div>
				<div className="cd6 rounded-lg border-b-2 border-white p-5 mx-5 flex flex-col items-center">
					<div>
						<img src={market} alt="" className="h-6" />
					</div>
					<div className="text-sm text-center">
						AI embedded market technologies
					</div>
				</div>
			</div>
			<div className="mt-32">
				<button className="bg-[#0170E3] rounded-md p-3 px-10 text-sm">
					Start Investing
				</button>
			</div>
		</div>
	);
};

export default WhyUs;
