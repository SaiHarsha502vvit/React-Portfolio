import React, { useState } from 'react';
import InputField from '../../components/ui/InputField';

import Button from '../../components/ui/Button';
import Tag from '../../components/ui/Tag';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: 'Ala Sai Harsha',
    email: 'Example -alasaiharsha@gmail.com',
    message: 'I want to discuss you about .......',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <section className="py-16 border-t border-gray-200 bg-gradient-to-b from-lavender via-mint to-peach animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="mb-12 relative">
          <Tag variant="mint" className="mb-4">
            Contact Me
          </Tag>
          <img
            src="/images/img_arrow_84x88.svg"
            alt="Arrow"
            className="absolute left-32 top-6 w-20 h-20 animate-bounce-slow"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
          <div className="flex flex-col justify-center items-start md:col-span-3">
            <p className="text-2xl mb-8">
              Have a project idea?
              <br />
              Just say Hi or get in touch instantly!
            </p>
            <a href="https://www.linkedin.com/in/sai-harsha-ala-370773239/" className="mb-4">
              <Button
                variant="mint"
                size="large"
                className="text-xl font-semibold w-full md:w-auto"
              >
                DM on LinkedIn
              </Button>
            </a>
            <a href="mailto:alasaiharsha@gmail.com" className="mb-4">
              <Button
                variant="lavender"
                size="large"
                className="text-xl font-semibold w-full md:w-auto"
              >
                Send Email
              </Button>
            </a>
          </div>
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-8 animate-fade-in flex flex-col h-full"
            >
              <div className="mb-6 flex items-center">
                <div className="mr-4 border border-black bg-mint px-4 py-1 shadow-md rounded-lg">
                  <span className="font-handlee text-3xl">Name</span>
                </div>
                <InputField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1"
                  labelClassName="hidden"
                  inputClassName="border-none text-2xl font-handlee bg-lavender rounded-lg"
                />
              </div>
              <div className="mb-6 flex items-center">
                <div className="mr-4 border border-black bg-yellow px-4 py-1 shadow-md rounded-lg">
                  <span className="font-handlee text-3xl">Your email</span>
                </div>
                <InputField
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1"
                  labelClassName="hidden"
                  inputClassName="border-none text-2xl font-handlee bg-mint rounded-lg"
                />
              </div>
              <div className="mb-6 flex items-center">
                <div className="mr-4 border border-black bg-blue px-4 py-1 shadow-md rounded-lg">
                  <span className="font-handlee text-3xl">About Project</span>
                </div>
                <InputField
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex-1"
                  labelClassName="hidden"
                  inputClassName="border-none text-2xl font-handlee bg-peach rounded-lg"
                />
              </div>
              <div className="flex justify-end mt-8">
                <Button
                  type="submit"
                  variant="mint"
                  size="large"
                  className="text-xl font-semibold px-8"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
