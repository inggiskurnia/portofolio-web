"use client";

import { FC } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import MailIcon from "@/components/icons/MailIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import emailjs from "emailjs-com";
import { toast } from "@/hooks/useToast";
import { cn } from "@/lib/utils";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  title: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

type ContactFormValues = {
  name: string;
  email: string;
  title: string;
  message: string;
  time: string;
};

const Contact: FC = () => {
  const initialValues = {
    name: "",
    email: "",
    title: "",
    message: "",
    time: new Date().toString(),
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailJsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsUserId) {
      toast({
        title: "Error",
        description: "EmailJS configuration is missing.",
        duration: 5000,
        variant: "destructive",
      });
      setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(emailJsServiceId, emailJsTemplateId, values, emailJsUserId);
      toast({
        title: "Success",
        description: "Message sent successfully!",
        duration: 5000,
      });
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        duration: 5000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                      placeholder="Your Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                      placeholder="your.email@example.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                      placeholder="Your Subject"
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                      placeholder="Your Message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      isSubmitting ? "bg-gray-700" : "bg-gray-800",
                      "w-full px-6 py-3 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          <div className="flex flex-col justify-center ">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 mb-8">
                I always open to discuss new projects, creative ideas or opportunities to be part of
                your vision.
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
