import morris from "./assets/morris.jpeg";
import Logga from "./assets/Logga.jpg";
import ContactForm from "./components/contactform";
import Header from "./components/header";

export default function Homepage() {
	return(

	<div 
		className="w-screen min-h-screen flex flex-col justify-center items-center bg-auto bg-center bg-repeat"
		style={{ backgroundImage: `url(${morris})` }}>
		<div className="w-screen"style={{ backgroundImage: `url(${morris})` }}></div>

		<Header/>

		<div className="w-full h-[10vh]"></div>

		<div className="w-full bg-white flex justify-center">
			<img src={Logga} alt="Företagslogga" className="w-1/2 h-auto" />
		</div>

		<div id="omOss" className="mt-30 w-full text-2xl max-w-4xl min-h-90 bg-white p-6 rounded-lg shadow-lg text-center]">
			<h2>Om oss</h2>
		</div>

		<div>
			<ContactForm/>
		</div>

		<div className="mt-30 w-full bg-white p-6 rounded-lg shadow-lg text-center">
            <p>Ahlgrens Måleri Väst AB</p>
            <p>Telefon: 070-123 45 67</p>
            <p>E-post: info@ahlgrensmaleri.se</p>
            <p>123 45 Göteborg</p>
        </div>
	</div>
				
	)
	
}