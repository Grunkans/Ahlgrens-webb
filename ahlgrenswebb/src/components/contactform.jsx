import { useState } from "react";
import working from "../assets/working.jpg";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.length >= 2;
      case "phone":
        return /^[0-9]{10,}$/.test(value); 
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); 
      case "message":
        return value.trim().length > 0; 
      default:
        return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    
    setErrors((prev) => ({
      ...prev,
      [name]: !validateField(name, value),
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: !validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const isValid = Object.values(errors).every((error) => !error);
    if (!isValid) {
      alert("Vänligen fyll i formuläret korrekt innan du skickar.");
      return;
    }

	setLoading(true);
    setIsSent(false);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
	  setLoading(false);

      if (result.success) {
        setIsSent(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({ name: false, phone: false, email: false, message: false });
      } else {
        alert("Något gick fel. Försök igen.");
      }
    } catch (error) {
      alert("Serverfel. Försök igen senare.");
    }
  };

  return (
    <div id="kontaktaOss" className="flex flex-col mt-30 md:flex-row items-center justify-between bg-white p-6 
      rounded-lg shadow-lg max-w-4xl mx-auto">

      <form onSubmit={handleSubmit} className="w-full md:w-1/3 min-w-[300px] bg-white p-6 rounded-lg shadow-lg text-center">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Kontakta oss
        </label>

        <div>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Namn"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`h-10 mt-1 block w-full rounded-md border-2 shadow-sm focus:border-indigo-300 
            focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              errors.name ? "border-[#B1403E]" : formData.name ? "border-[#C1C2BC]" : "border-[#C1C2BC]"
            }`}
          />
        </div>

        
        <div>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Telefonnummer"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`h-10 mt-1 block w-full rounded-md border-2 shadow-sm focus:border-indigo-300 
            focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              errors.phone ? "border-[#B1403E]" : formData.phone ? "border-[#C1C2BC]" : "border-[#C1C2BC]"
            }`}
          />
        </div>

        
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-post"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`h-10 mt-1 block w-full rounded-md border-2 shadow-sm focus:border-indigo-300 
            focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              errors.email ? "border-[#B1403E]" : formData.email ? "border-[#C1C2BC]" : "border-[#C1C2BC]"
            }`}
          />
        </div>

       
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="Meddelande"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`mt-1 block w-full rounded-md border-2 shadow-sm focus:border-indigo-300 
            focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
              errors.message ? "border-[#B1403E]" : formData.message ? "border-[#C1C2BC]" : "border-[#C1C2BC]"
            }`}
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-[#A4AC8F] hover:bg-[#717765] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
  		disabled={loading}>
  		{loading ? "Skickar..." : isSent ? "Skickat!" : "Skicka"}
		</button>
      </form>

      
      <div className="hidden md:block w-1/2 p-4">
        <img
          src={working}
          alt="Simon Ahlgren sätter upp tapet"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default ContactForm;
