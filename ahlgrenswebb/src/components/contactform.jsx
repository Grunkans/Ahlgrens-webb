import { useState } from "react";
import working from "../assets/working.jpg";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
            alert("Meddelandet har skickats!");
            setFormData({ name: "", phone: "", email: "", message: "" });
        } else {
            alert("Något gick fel. Försök igen.");
        }
    } catch (error) {
        alert("Serverfel. Försök igen senare.");
    }
};

  return (
	<div id="kontaktaOss" className="flex flex-col mt-30 md:flex-row items-center justify-between bg-white p-6 
	rounded-lg shadow-lg  max-w-4xl mx-auto">

    <form onSubmit={handleSubmit} className="mt-30 bg-white p-6 rounded-lg shadow-lg text-center">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Kontakta oss
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Namn"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 
		  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
      </div>

      <div>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Telefonnummer"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 
		  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
      </div>

      <div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-post"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 
		  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
      </div>

      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Meddelande"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 
		  focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows="4"></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
		focus:shadow-outline">Skicka</button>
    </form>

	<div className="hidden md:block w-1/2 p-4">
        <img
          src={working}
          alt="Simon Ahlgren sätter upp tapet"
          className="w-full h-auto rounded-lg shadow-md"/>
      </div>
    </div>

	
  )
}

export default ContactForm