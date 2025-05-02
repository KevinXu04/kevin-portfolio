import {
    Instagram,
    Linkedin,
    Mail,
    Phone,
  } from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        ).then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""})
        }).catch(() => alert("Oops! Something went wrong. Please try again."));
    }

    return (
        <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto text-center">
                        Whether it’s feedback, a project idea, or just a hello, I’m happy to connect! Drop me a message below
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                        <div className="p-6 rounded-xl w-100 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                            <h3 className="text-xl font-bold mb-2 text-center"> Contact Information </h3>
                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"></Mail>
                                    </div>
                                    <div>
                                        <h4 className="font-medium flex"> Email:</h4>
                                        <a 
                                            href="mailto:x.kevinxiu@hotmail.com"
                                            className="text-muted-foreground hover:text-blue-500 transition-colors"
                                        >
                                            x.kevinxiu@hotmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"></Phone>
                                    </div>
                                    <div>
                                        <h4 className="font-medium flex"> Phone:</h4>
                                        <a 
                                            href="tel:31642808888"
                                            className="text-muted-foreground hover:text-blue-500 transition-colors"
                                        >
                                            +31 6 42 80 88 88
                                        </a>
                                    </div>
                                </div>
                                {/* <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"></Mail>
                                    </div>
                                    <div>
                                        <h4 className="font-medium flex"> Email</h4>
                                        <a 
                                            href="mailto:x.kevinxiu@hotmail.com"
                                            className="text-muted-foreground hover:text-blue-500 transition-colors"
                                        >
                                            x.kevinxiu@hotmail.com
                                        </a>
                                    </div>
                                </div> */}
                                <div className="pt-8">
                                    <h4 className="font-medium mb-4"> Connect With Me</h4>
                                    <div className="flex space-x-4 justify-center">
                                        <a href="https://www.linkedin.com/in/kevin-xiu-a43471249/" target="_blank" className="hover:-translate-y-1 hover:text-blue-500 transition-colors transition">
                                        <Linkedin />
                                        </a>
                                        {/* <a href="#" target="_blank" className="hover:-translate-y-1 hover:text-blue-500 transition-colors transition">
                                        <Twitter />
                                        </a> */}
                                        <a href="https://www.instagram.com/realkevinxu/" target="_blank" className="hover:-translate-y-1 hover:text-blue-500 transition-colors transition">
                                        <Instagram />
                                        </a>
                                        {/* <a href="#" target="_blank" className="hover:-translate-y-1 hover:text-blue-500 transition-colors transition">
                                        <Twitch />
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form 
                        className="space-y-6 w-100 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition" 
                        onSubmit={handleSubmit}
                        >
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    value={formData.name}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white hover:border-blue-500/30 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Name"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white hover:border-blue-500/30 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="example@gmail.com"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <div className="relative">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    value={formData.message}
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white hover:border-blue-500/30 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                    placeholder="Your Message"
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};