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

		<div className="hidden md:flex w-full bg-white justify-center">
			<img src={Logga} alt="Företagslogga" className="w-1/2 h-auto" />
		</div>
		<div className="md:hidden w-full flex justify-center">
    		<img src={Logga} alt="Företagslogga" className="w-full h-auto" />
  		</div>

		<div id="omOss" className="mt-30 w-full text-2l max-w-4xl min-h-90 bg-white p-6 rounded-lg shadow-lg text-center]">
			<h2 className="text-2xl mb-4">Om oss</h2>

			<p className="mb-2">Ahlgrens Måleri grundades 2017 av Simon Ahlgren, som efter tio år som målare kände att det var dags att ta klivet och dra det första penseldraget i egen regi.</p> 

			<p className="mb-2"> Hösten 2022 anställde vi ytterligare en målare, med över 30 års erfarenhet, och idag är vi totalt tre anställda i företaget, två målare och en ekonomi- och marknadsansvarig.</p>

 			<p className="mb-8 ">Vi på Ahlgrens Måleri utför det mesta som har med in- och utvändigt måleri att göra och tar oss an såväl stora som små uppdrag, alltid med samma höga kvalitet.</p>

			<p>Välkommen att ringa eller mejla oss för en kostnadsfri offert!</p>
		</div>

		<div>
			<ContactForm/>
		</div>

		<div className="mt-30 w-full bg-white p-6 rounded-lg shadow-lg text-center">
            <p>Ahlgrens Måleri Väst AB</p>
			<p>Hjortvägen 4, 512 77 Sexdrega</p>
            <p>Telefon: 070-593 90 01</p>
            <p>E-post: info@ahlgrensmaleri.se</p>
        </div>
	</div>
				
	)
	
}