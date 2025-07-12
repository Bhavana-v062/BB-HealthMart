import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-4xl w-full">

        {/* Header */}
        <h1 className="text-4xl font-bold text-green-600 text-center mb-6">Contact Us</h1>
        
        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-2">📧 Email: <a href="mailto:support@appname.com" className="text-blue-500">support@BB HealthMart.com</a></p>
            <p className="text-gray-600 mb-2">📞 Phone: <a href="tel:+12345678900" className="text-blue-500">+1-234-567-8900</a></p>
            <p className="text-gray-600 mb-2">🏢 Address: 1234 Wellness Street, City, Country</p>
            <p className="text-gray-600">⏰ Business Hours: Mon – Fri, 9 AM – 6 PM</p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">🌐 Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-600">🐦 Twitter</a>
              <a href="#" className="text-pink-500 hover:text-pink-700">📸 Instagram</a>
              <a href="#" className="text-blue-700 hover:text-blue-900">🔗 LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" placeholder="Your Email" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Phone (Optional)</label>
            <input type="tel" placeholder="Your Phone" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500" />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea rows="4" placeholder="Write your message..." className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Send Message
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Contact;
