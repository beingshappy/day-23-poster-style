import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-16 text-center">
            LET'S
            <span className="text-blue-400"> CONNECT</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Ready to bring your next project to life? I'd love to hear about your ideas 
                and discuss how we can work together to create something amazing.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href="mailto:hello@example.com" className="text-white font-semibold hover:text-blue-400 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-white font-semibold hover:text-blue-400 transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white font-semibold">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors duration-300"
                >
                  <Twitter size={20} className="text-white" />
                </a>
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Project discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;