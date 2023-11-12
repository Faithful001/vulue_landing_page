import mirror from "../assets/images/banners/mirror.png";
import stocks from "../assets/images/banners/stocks.png";
import mut from "../assets/images/banners/mut.png";
import abs from "../assets/images/banners/abs.png";
import alt from "../assets/images/banners/alt.png";
import rings from "../assets/images/icons/rings.svg";
import multi_currency_wallet from "../assets/images/icons/multi_currency_wallet.svg";
import mes1 from "../assets/images/sprites/mes1.png";

const Features = () => {
	return (
		<div className="features bg-[#000000]">
			<div>
				{/* card1 */}
				<div className="card1 m-10 px-10 rounded-lg flex justify-around items-center py-5 pt-7">
					<div>
						<img src={mirror} alt="" className="mirror h-[8rem]" />
					</div>
					<div className="mirror-texts">
						<div className="flex flex-col items-start">
							<p className="mb-7 text-xl text-[#afafaf] font-semibold">
								Tenor-Based Mirror
								<br />
								Trading Funds
							</p>
							<p className="max-w-xs font-extralight text-xs mb-5 px-10">
								These multi-retail financial market funds are the culmination of
								our team's best performing risk managed strategies developed
								through the symbiotic relationship we've created between our
								experienced strategy managers (inhouse institutional trades) and
								proprietary ML-embedded quantitative modeling software tools
							</p>
						</div>
						<div className="flex justify-between">
							<div>
								<p className="text-[10px]">Earn up to 40% APY</p>
								<p className="text-red-700 text-[8px]">
									See full risk disclosure
								</p>
							</div>
							<div>
								<p className="bg-transparent rounded-md border-slate-600 border font-xs text-[10px] p-1">
									See full disclosure
								</p>
							</div>
						</div>
						<div className="flex">
							<img src={stocks} alt="" className="h-[40px] ml-2" />
							<img src={mut} alt="" className="h-[40px] ml-2" />
							<img src={abs} alt="" className="h-[40px] ml-2" />
							<img src={alt} alt="" className="h-[40px] ml-2" />
						</div>
					</div>
				</div>

				{/* card2 */}
				<div className="card2 m-10 px-10 rounded-lg flex justify-around items-center pt-5">
					<div>
						<img src={rings} alt="" className="rings h-44 mt-10" />
					</div>
					<div>
						<p className="mb-7 text-xl text-[#afafaf] font-semibold">TRAILX™</p>
						<p className="max-w-xs font-extralight text-xs mb-5">
							Asides running trading analytics and modelling, this is embedded
							software engine powers your handy financial insights co-pilot
							providing you with answers to your questions on finance and
							bit-sized learning. It integrates behavioural finance principles
							to help investors like you understand our products as well as your
							financial biases so you can make more rational, informed
							decisions.
						</p>
					</div>
				</div>

				{/* card3 */}
				<div className="card3 m-10 px-10 rounded-lg flex justify-around items-center pt-5">
					<div>
						<p className="mb-7 text-xl text-[#afafaf] font-semibold">
							Multi-Currency Wallet
						</p>
						<p className="max-w-xs font-extralight text-xs mb-5">
							A multi-currency digital wallet to stash all your currencies, fund
							investments, withdraw returns and try group investing plans with
							friends and family.
						</p>
					</div>
					<div>
						<img
							src={multi_currency_wallet}
							alt=""
							className="mirror h-[24rem]"
						/>
					</div>
				</div>

				{/* card4 */}
				<div className="card4 m-10 px-10 rounded-lg flex justify-around items-center pt-5">
					<div>
						<img src={mes1} alt="" className="rings h-72 mt-10" />
					</div>
					<div>
						<p className="mb-7 text-xl text-[#afafaf] font-semibold">
							Group Investing
						</p>
						<p className="max-w-xs font-extralight text-xs mb-5">
							This feature allows multiple clients to transparently invest
							collaboratively, meaning clients can create, invite friends,
							family, associates and join group investing plans with out
							worrying about disputes. This strategy mitigates risks tied to
							concentrated investments and grants clients access to
							opportunities that might be overlooked individually due to capital
							constraints.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
