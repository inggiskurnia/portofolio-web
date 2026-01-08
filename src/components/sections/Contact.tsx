"use client";

import { toast } from "@/hooks/useToast";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { FC } from "react";
import * as Yup from "yup";

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
        title: "Configuration Error",
        description: "Email service is not configured properly.",
        duration: 5000,
        variant: "destructive",
      });
      setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(emailJsServiceId, emailJsTemplateId, values, emailJsUserId);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        duration: 5000,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mt-2 mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                    <a href="mailto:inggis.kurnia@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                            <Mail size={24}/>
                        </div>
                        <span className="text-lg">inggiskurnia@gmail.com</span>
                    </a>
                    
                    <div className="flex gap-4 pt-4">
                        <a href="https://github.com/inggiskurnia" target="_blank" className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                            <Github size={24}/>
                        </a>
                        <a href="https://linkedin.com/in/inggis-trisiawan" target="_blank" className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1">
                            <Linkedin size={24}/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-blue-600 p-8 rounded-2xl shadow-lg text-white">
                <h3 className="text-xl font-bold mb-4">Open for Opportunities</h3>
                <p className="opacity-90 leading-relaxed">
                    I am currently available for freelance projects and full-time opportunities. 
                    If you need a dedicated developer to bring your ideas to life, let's talk!
                </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6 bg-card border border-border/50 p-8 rounded-2xl shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name
                        </label>
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 border border-input rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                          placeholder="John Doe"
                        />
                        <ErrorMessage name="name" component="div" className="text-destructive text-sm" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border border-input rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                          placeholder="john@example.com"
                        />
                        <ErrorMessage name="email" component="div" className="text-destructive text-sm" />
                      </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Field
                      type="text"
                      id="title"
                      name="title"
                      className="w-full px-4 py-3 border border-input rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                      placeholder="Project Inquiry"
                    />
                    <ErrorMessage name="title" component="div" className="text-destructive text-sm" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-input rounded-xl bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                      placeholder="Tell me about your project..."
                    />
                    <ErrorMessage name="message" component="div" className="text-destructive text-sm" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed",
                    )}
                  >
                    {isSubmitting ? (
                        <>Sending...</>
                    ) : (
                        <>
                            Send Message <Send size={18}/>
                        </>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
