"use client";

import { Accordion } from "flowbite-react";

const Footer = () => {
	return (
		<div className="footer p-10 flex justify-between">
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
				<div>
					<p className="text-[#8C87A6] font-semibold">
						{" "}
						OUR BUSINESS AND OFFERINGS
					</p>
					<Accordion className="w-full border-none -mt-5">
						<Accordion.Panel>
							<Accordion.Title className="text-white text-xs -mb-10">
								Investment Management
							</Accordion.Title>
							<Accordion.Content></Accordion.Content>
						</Accordion.Panel>
					</Accordion>
					<Accordion className="border-none">
						<Accordion.Panel>
							<Accordion.Title className="text-white text-xs">
								Market Technologies
							</Accordion.Title>
							<Accordion.Content></Accordion.Content>
						</Accordion.Panel>
					</Accordion>
				</div>
			</div>
			{/* right side of the footer */}
			<div className="gap-5 grid grid-cols-1">
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
				<div>
					<p className="text-[#8C87A6] font-semibold">INVESTOR RELATIONS</p>
					<Accordion className="w-full border-none -mt-5">
						<Accordion.Panel>
							<Accordion.Title className="text-white text-xs -mb-10">
								Legal
							</Accordion.Title>
							<Accordion.Content></Accordion.Content>
						</Accordion.Panel>
					</Accordion>
					<Accordion className="border-none">
						<Accordion.Panel>
							<Accordion.Title className="text-white text-xs">
								Client Experience
							</Accordion.Title>
							<Accordion.Content></Accordion.Content>
						</Accordion.Panel>
					</Accordion>
					<Accordion className="border-none">
						<Accordion.Panel>
							<Accordion.Title className="text-white text-xs">
								Are You ...
							</Accordion.Title>
							<Accordion.Content></Accordion.Content>
						</Accordion.Panel>
					</Accordion>
					<a href="" className="text-xs">
						Financial Reports
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
