

export default function Header() {
	const scrollToSection = (id) => {
	  const section = document.getElementById(id);
	  if (section) {
		section.scrollIntoView({ behavior: "smooth" });
	  }
	};
  
	return (
	  <div className="w-full fixed top-0 left-0 p-4 flex justify-end space-x-4 z-50">
		<button
		  onClick={() => scrollToSection("omOss")}
		  className=" bg-[#A4AC8F] hover:bg-[#717765] text-white font-bold py-2 px-4 rounded"
		>
		  Om oss
		</button>
		<button
		  onClick={() => scrollToSection("kontaktaOss")}
		  className="bg-[#A4AC8F] hover:bg-[#717765] text-white font-bold py-2 px-4 rounded"
		>
		  Kontakta oss
		</button>
	  </div>
	);
  }
  