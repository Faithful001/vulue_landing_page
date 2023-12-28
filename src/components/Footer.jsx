"use client";
import vulue_logo from "../assets/images/logo/logo.png";
import { useState } from "react";
import twitter from "../assets/images/icons/twitter.svg";
import linkedin from "../assets/images/icons/linkedin.svg";
import telegram from "../assets/images/icons/telegram.svg";
import youtube from "../assets/images/icons/youtube.svg";
import discord from "../assets/images/icons/discord.svg";

const Footer = () => {
	const [investmentIsOpen, setInvestmentIsOpen] = useState(false);
	const [legalIsOpen, setLegalIsOpen] = useState(false);
	const [clientIsOpen, setClientIsOpen] = useState(false);
	const [areYouIsOpen, setAreYouIsOpen] = useState(false);
	const [financialIsOpen, setFinancialIsOpen] = useState(false);

	function handleInvestment() {
		setInvestmentIsOpen(!investmentIsOpen);
		setLegalIsOpen(false);
		setClientIsOpen(false);
		setAreYouIsOpen(false);
		setFinancialIsOpen(false);
	}

	function handleLegal() {
		setInvestmentIsOpen(false);
		setLegalIsOpen(!legalIsOpen);
		setClientIsOpen(false);
		setAreYouIsOpen(false);
		setFinancialIsOpen(false);
	}
	function handleClient() {
		setInvestmentIsOpen(false);
		setLegalIsOpen(false);
		setClientIsOpen(!clientIsOpen);
		setAreYouIsOpen(false);
		setFinancialIsOpen(false);
	}
	function handleAreYou() {
		setInvestmentIsOpen(false);
		setLegalIsOpen(false);
		setClientIsOpen(false);
		setAreYouIsOpen(!areYouIsOpen);
		setFinancialIsOpen(false);
	}
	function handleFinancial() {
		setInvestmentIsOpen(false);
		setLegalIsOpen(false);
		setClientIsOpen(false);
		setAreYouIsOpen(false);
		setFinancialIsOpen(!financialIsOpen);
	}
	return (
		<div className="p-10">
			<div className="footer relative mb-[13rem] md:mb-0 flex justify-between ">
				{/* logo side of the footer */}
				<div className="absolute flex flex-col gap-3 bottom-[-170px] left-0 md:static">
					<div className="flex items-end">
						<img src={vulue_logo} alt="" className="h-10" />
						<p className="font-semibold text-[20px]">VULUE</p>
					</div>

					<div>
						<p className="text-[#8C87A6] font-semibold">
							BE PART OF OUR COMMUNITY
						</p>
					</div>
					<div className="flex gap-2">
						<img src={twitter} alt="" className="h-8 cursor-pointer" />
						<img src={linkedin} alt="" className="h-8 cursor-pointer" />
						<img src={telegram} alt="" className="h-8 cursor-pointer" />
						<img src={youtube} alt="" className="h-8 cursor-pointer" />
						<img src={discord} alt="" className="h-8 cursor-pointer" />
					</div>
				</div>
				{/* left side of the footer */}
				<div className="gap-5 grid grid-cols-1">
					<div>
						<p className="text-[#8C87A6] pb-2 font-semibold">GET TO KNOW US</p>
						<div className="flex flex-col gap-2">
							<a href="" className="text-xs font-light">
								About Us
							</a>
							<a href="" className="text-xs font-light">
								Corporate Governance
							</a>
							<a href="" className="text-xs font-light">
								Sustainability & Corporate Social Responsibility
							</a>
							<a href="" className="text-xs font-light">
								Board & Management Team
							</a>
						</div>
					</div>
					<div className="pb-5">
						<p className="text-[#8C87A6] pb-2 font-semibold">
							OUR BUSINESS AND OFFERINGS
						</p>
						<div className="flex flex-col items-start gap-2">
							<div>
								<div
									className="flex items-center justify-between w-full cursor-pointer"
									onClick={handleInvestment}
								>
									<p className="text-xs font-light">Investment Management</p>
									{!investmentIsOpen ? (
										<span className="material-symbols-outlined">
											expand_more
										</span>
									) : (
										<span className="material-symbols-outlined">
											expand_less
										</span>
									)}
								</div>
								<p
									className={`${
										investmentIsOpen ? "block" : "hidden"
									} text-xs font-light`}
								>
									Hello
								</p>
							</div>
							<p className="text-xs font-light">Market Technologies</p>
						</div>
					</div>
				</div>
				{/* right side of the footer */}
				<div className="gap-5 grid grid-cols-1">
					<div>
						<p className="text-[#8C87A6] pb-2 font-semibold">
							INVESTOR RELATIONS
						</p>
						<div className="flex flex-col items-start gap-2">
							<div>
								<div
									className="flex items-center justify-between w-full cursor-pointer"
									onClick={handleLegal}
								>
									<p className="text-xs font-light">Legal</p>
									{!legalIsOpen ? (
										<span className="material-symbols-outlined">
											expand_more
										</span>
									) : (
										<span className="material-symbols-outlined">
											expand_less
										</span>
									)}
								</div>
								<p
									className={`${
										legalIsOpen ? "block" : "hidden"
									} text-xs font-light`}
								>
									Hello
								</p>
							</div>
							<div>
								<div
									className="flex items-center justify-between w-full cursor-pointer"
									onClick={handleClient}
								>
									<p className="text-xs font-light">Client Experience</p>
									{!clientIsOpen ? (
										<span className="material-symbols-outlined">
											expand_more
										</span>
									) : (
										<span className="material-symbols-outlined">
											expand_less
										</span>
									)}
								</div>
								<p
									className={`${
										clientIsOpen ? "block" : "hidden"
									} text-xs font-light`}
								>
									Hello
								</p>
							</div>
							<div>
								<div
									className="flex items-center justify-between w-full cursor-pointer"
									onClick={handleAreYou}
								>
									<p className="text-xs font-light">Are You...</p>
									{!areYouIsOpen ? (
										<span className="material-symbols-outlined">
											expand_more
										</span>
									) : (
										<span className="material-symbols-outlined">
											expand_less
										</span>
									)}
								</div>
								<p
									className={`${
										areYouIsOpen ? "block" : "hidden"
									} text-xs font-light`}
								>
									Hello
								</p>
							</div>
							<div>
								<div
									className="flex items-center justify-between w-full cursor-pointer"
									onClick={handleFinancial}
								>
									<p className="text-xs font-light">Financial Reports</p>
									{!financialIsOpen ? (
										<span className="material-symbols-outlined">
											expand_more
										</span>
									) : (
										<span className="material-symbols-outlined">
											expand_less
										</span>
									)}
								</div>
								<p
									className={`${
										financialIsOpen ? "block" : "hidden"
									} text-xs font-light`}
								>
									Hello
								</p>
							</div>
						</div>
					</div>
					<div>
						<p className="text-[#8C87A6] pb-2 font-semibold">CONTACT US</p>
						<div className="flex flex-col gap-2">
							<a href="" className="text-xs font-light">
								Locate Provisional/Branch Offices
							</a>
							<a href="" className="text-xs font-light">
								Support Center
							</a>
							<a href="" className="text-xs font-light">
								Download Center
							</a>
							<a href="" className="text-xs font-light">
								Whistleblowing
							</a>
							<a href="" className="text-xs font-light">
								Become a Partner
							</a>
						</div>
					</div>
				</div>
			</div>
			<p className="text-sm  text-center font-light mt-8">{`©${new Date().getFullYear()} Vulue Technologies`}</p>
		</div>
	);
};

export default Footer;
