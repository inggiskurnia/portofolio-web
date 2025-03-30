import { FC } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 mb-8">
                I&#39;m always open to discussing new projects, creative ideas or opportunities to
                be part of your vision.
              </p>
              <div className="flex items-center space-x-4">
                <FaEnvelope size={24} className="text-gray-700" />
                <a
                  href="mailto:inggiskurnia32@gmail.com"
                  className="text-gray-700 hover:text-gray-900"
                >
                  inggiskurnia32@gmail.com
                </a>
              </div>
              <div className="flex space-x-6 mt-6">
                <a
                  href="https://github.com/inggiskurnia"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/inggis-trisiawan"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
