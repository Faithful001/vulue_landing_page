import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GetTheApp from "./components/GetTheApp";
import Home from "./components/Home";
import License from "./components/License";
import WhyUs from "./components/WhyUs";

function App() {
	return (
		<div className="">
			<Home />
			<div className="flex items-center justify-center">
				<Features />
			</div>
			<WhyUs />
			<License />
			<GetTheApp />
			<Footer />
		</div>
	);
}

export default App;
