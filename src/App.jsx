import "./App.css";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import GetTheApp from "./pages/GetTheApp";
import Home from "./pages/Home";
import License from "./pages/License";
import WhyUs from "./pages/WhyUs";

function App() {
	return (
		<div className="">
			<Home />
			<Features />
			<WhyUs />
			<License />
			<GetTheApp />
			<Footer />
		</div>
	);
}

export default App;
