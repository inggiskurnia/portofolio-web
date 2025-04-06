"use client";

import { FC, useState } from "react";
import MailIcon from "@/components/icons/MailIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import emailjs from "emailjs-com";
import { toast } from "@/hooks/useToast";
import { cn } from "@/lib/utils";

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    time: new Date().toString(),
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailJsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    if (!emailJsServiceId || !emailJsTemplateId || !emailJsUserId) {
      console.error("EmailJS configuration is missing.");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(emailJsServiceId, emailJsTemplateId, formData, emailJsUserId);

      toast({
        title: "Success",
        description: "Message sent successfully!",
        duration: 5000,
      });

      setFormData({ title: "", time: "", name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="title"
                  id="title"
                  name="title"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                  placeholder="Your Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  isSubmitting ? "bg-gray-700" : "bg-gray-800",
                  "w-full px-6 py-3  text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center ">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 mb-8">
                I&#39;m always open to discussing new projects, creative ideas or opportunities to
                be part of your vision.
              </p>
              <span className={"flex gap-4"}>
                <MailIcon />
                inggiskurnia32@gmail.com
              </span>
              <div className="flex space-x-6 mt-6">
                <GitHubIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
