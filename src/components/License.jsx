import cbn from "../assets/images/icons/cbn.svg";
import sec from "../assets/images/icons/sec.svg";
import fintech from "../assets/images/icons/fintech.svg";
import neff from "../assets/images/icons/neff.svg";
import cisi from "../assets/images/icons/cisi.svg";
import frc from "../assets/images/icons/frc.svg";
import firs from "../assets/images/icons/firs.svg";
import cis from "../assets/images/icons/cis.svg";

const License = () => {
	return (
		<div className="license flex flex-col items-center mt-32 p-10">
			<div className="rounded-[50%] h-[25rem] w-[25rem] bg-[#10101f] -z-10 blur-3xl absolute right-0" />
			<div>
				<p className="text-[30px] font-semibold max-w-[30rem] text-center">
					Duly Regulate By CBN, Licensed By SECs
				</p>
			</div>
			<div className="grid grid-cols-2 gap-20 py-10">
				<img src={cbn} alt="" className="h-[65px]" />
				<img src={sec} alt="" className="h-[65px]" />
			</div>
			<div>
				<p className="text-[30px] font-semibold max-w-[30rem] text-center py-8">
					And Affiliated To
				</p>
			</div>
			<div className="grid md:grid-cols-3 grid-cols-2 gap-10 justify-center">
				<img src={fintech} alt="" className="h-20" />
				<img src={neff} alt="" className="h-16" />
				<img src={cisi} alt="" className="h-20" />
				<img src={frc} alt="" className="h-20" />
				<img src={firs} alt="" className="h-20" />
				<img src={cis} alt="" className="h-[120px]" />
			</div>
			{/* <div className="rounded-[50%] h-[25rem] w-[25rem] bg-[#10101f] -z-10 blur-3xl absolute top-32 left-0" /> */}
		</div>
	);
};

export default License;
