import phone from "../assets/images/flags/phone.svg";
import appstore from "../assets/images/flags/appstore.svg";
import playstore from "../assets/images/flags/playstore.svg";

const GetTheApp = () => {
	return (
		<div className="gettheapp flex items-center px-10 -mt-14">
			<div>
				<img src={phone} alt="" className="phone max-h-[40rem]" />
			</div>
			<div className="phone-texts pr-5">
				<p className="phone-text font-bold text-3xl leading-10 mb-5">
					You Can Get The Vulue App On These Platforms{" "}
				</p>
				<img
					src={appstore}
					alt=""
					className="phone-button cursor-pointer mb-3 h-14"
				/>
				<img
					src={playstore}
					alt=""
					className="phone-button cursor-pointer h-14"
				/>
			</div>
		</div>
	);
};

export default GetTheApp;
