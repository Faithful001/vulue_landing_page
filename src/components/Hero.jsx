import earn_icon from "../assets/images/icons/earn_icon.svg";
import digital_wallet from "../assets/images/icons/digital_wallet.svg";
import cards_icon from "../assets/images/icons/cards_icon.svg";
import girl_with_phone from "../assets/images/sprites/girl_with_phone.svg";

const Hero = () => {
	return (
		<div className="hero flex justify-between items-center bg-black h-screen">
			<div className="flex flex-col justify-between py-20 mx-10">
				{/* <div className="rounded-[50%] h-[25rem] w-[25rem] bg-[#85BBFF] blur-3xl absolute left-0 top-0 opacity-20" /> */}
				{/* <div className="rounded-[50%] h-[10rem] w-[10rem] bg-[#FFE9C559] blur-3xl absolute left-20 top-32 opacity-70" /> */}
				<div className="mb-10 z-10">
					<h1 className="text-3xl md:text-4xl text-[#0170E3] font-semibold max-w-lg">
						Innovative Products And Expert Ingenuity At Your FingerTips
					</h1>
					<p className="text-sm max-w-sm mt-5 font-light z-10">
						Vulue investments. From students, affluents, to entities. Investing
						made easier flavoued and safer with our ecosystem of offerings
						covering the whole spectrum from tradition to alternative
						investments for diverse risk appetites. See our featured products
						below
					</p>
				</div>
				<div>
					<button className="bg-[#0170E3] rounded-md p-3 mb-2 px-7">
						Start investing
					</button>
					<p className="text-xs font-light">
						Are you an institution or a business?
					</p>
				</div>
			</div>
			<div className="hero-picture">
				<img
					src={earn_icon}
					alt=""
					className="absolute top-[20rem] right-[18rem] shadow-lg"
				/>
				<img
					src={digital_wallet}
					alt=""
					className="absolute top-[25rem] right-[20rem] shadow-lg"
				/>
				<img
					src={cards_icon}
					alt=""
					className="absolute top-[30rem] right-[22rem] shadow-lg"
				/>
				<img src={girl_with_phone} alt="" className="h-[35rem]" />
				<div className="rounded-[50%] h-[10rem] w-[10rem] bg-[#FA919159] blur-3xl absolute left-0 -bottom-10 opacity-60" />
				<div className="rounded-[50%] h-[10rem] w-[10rem] bg-[#FFE9C559] blur-3xl absolute right-0 bottom-14 opacity-100" />
			</div>
		</div>
	);
};

export default Hero;
