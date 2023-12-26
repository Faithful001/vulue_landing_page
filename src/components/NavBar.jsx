import vulue_logo from "../assets/images/logo/logo.png";
import uk from "../assets/images/flags/uk.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);
	function handleNavBar() {
		setIsOpen(!isOpen);
	}
	return (
		<div className="navbar px-10 pt-[85px] pb-5 z-20 fixed w-screen">
			<div className="section flex justify-between">
				<div className="flex items-center z-10">
					<img src={vulue_logo} alt="" className="h-7 mr-1" />
					<p className="font-semibold">VULUE</p>
				</div>
				<div
					className={`nav-text flex transition-all duration-300 ease-in ${
						!isOpen ? "-right-[300px]" : "right-0"
					}`}
				>
					<a href="" className="text-xs ml-5" onClick={() => setIsOpen(false)}>
						Account Settings
					</a>
					<a href="" className="text-xs ml-5" onClick={() => setIsOpen(false)}>
						Dashboard
					</a>
					<a href="" className="text-xs ml-5" onClick={() => setIsOpen(false)}>
						Our Offering
					</a>
					<a href="" className="text-xs ml-5" onClick={() => setIsOpen(false)}>
						Investor Relations
					</a>
					<a href="" className="text-xs ml-5" onClick={() => setIsOpen(false)}>
						Contact Us
					</a>
					<img
						src={uk}
						alt=""
						className="rounded-[50%] w-7 h-7 ml-5 -mr-2 -mt-1"
					/>
				</div>
				<span
					className="material-symbols-outlined cursor-pointer md:hidden block z-10 text-[#455A64]"
					onClick={handleNavBar}
				>
					menu
				</span>
			</div>
			<div></div>
		</div>
	);
};

export default NavBar;
