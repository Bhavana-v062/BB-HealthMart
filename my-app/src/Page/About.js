import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center p-8">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-10">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">About Us</h1>
        
        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Welcome to <span className="font-semibold">BB HealthMart</span>, your ultimate destination for a 
          <span className="text-green-500"> healthier and happier lifestyle</span>. 
          We are committed to helping you make informed choices by offering a 
          <span className="text-green-500"> diverse range of health-boosting products</span> – all in one convenient platform.
        </p>

        {/* Collection Section */}
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Carefully Curated Collection:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-sm">
            <span className="text-3xl mr-4">🍎</span>
            <p className="text-lg"><strong>Fresh Fruits:</strong> Packed with essential vitamins and antioxidants to keep you energized.</p>
          </div>

          <div className="flex items-center bg-yellow-50 p-4 rounded-lg shadow-sm">
            <span className="text-3xl mr-4">🥕</span>
            <p className="text-lg"><strong>Nutritious Vegetables:</strong> A rich source of fiber, minerals, and nutrients for overall well-being.</p>
          </div>

          <div className="flex items-center bg-green-50 p-4 rounded-lg shadow-sm">
            <span className="text-3xl mr-4">🌾</span>
            <p className="text-lg"><strong>Wholesome Cereals:</strong> Power-packed with energy and nutrients to fuel your day.</p>
          </div>

          <div className="flex items-center bg-pink-50 p-4 rounded-lg shadow-sm">
            <span className="text-3xl mr-4">🥜</span>
            <p className="text-lg"><strong>Dry Fruits & Nuts:</strong> Healthy snacks loaded with protein, fiber, and essential fats.</p>
          </div>

          <div className="flex items-center bg-purple-50 p-4 rounded-lg shadow-sm">
            <span className="text-3xl mr-4">🥛</span>
            <p className="text-lg"><strong>Dairy Products:</strong> Fresh milk, yogurt, cheese, and more for strong bones and immunity.</p>
          </div>

          <div className="flex items-center bg-red-50 p-4 rounded-lg shadow-sm">
            <span className="text-3xl mr-4">🌿</span>
            <p className="text-lg"><strong>Herbs & Spices:</strong> Flavorful and medicinal, promoting wellness naturally.</p>
          </div>

          <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
            <span className="text-3xl mr-4">💊</span>
            <p className="text-lg"><strong>Basic Medicines:</strong> Essential remedies for minor health concerns, ensuring you stay prepared.</p>
          </div>
        </div>

        {/* Mission Section */}
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At <span className="font-semibold">BB HealthMart</span>, we believe that 
          <span className="text-green-500"> health is the foundation of happiness</span>. 
          Our mission is to make nutritious food, natural remedies, and essential healthcare products 
          <span className="text-green-500"> easily accessible to everyone</span>.
        </p>

        {/* Why Choose Us Section */}
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Choose Us?</h2>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <span className="text-2xl mr-3">✅</span>
            <p className="text-lg"><strong>Quality You Can Trust:</strong> We source only the freshest, high-quality products, ensuring you get the best for your health.</p>
          </li>
          <li className="flex items-center">
            <span className="text-2xl mr-3">✅</span>
            <p className="text-lg"><strong>Convenience at Your Fingertips:</strong> Enjoy the ease of shopping for all your health essentials in one place, with seamless delivery to your doorstep.</p>
          </li>
          <li className="flex items-center">
            <span className="text-2xl mr-3">✅</span>
            <p className="text-lg"><strong>Promoting Wellness:</strong> From nature's goodness to essential medicines, we are dedicated to helping you live a healthier, more balanced life.</p>
          </li>
        </ul>

        {/* Commitment Section */}
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Commitment:</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          We are more than just a shopping platform – we are your <span className="font-semibold">partner in health and wellness</span>.  
          Whether you're looking to improve your diet, boost immunity, or stay prepared with basic medicines,  
          <span className="text-green-500">BB HealthMart</span> is here to support you every step of the way.
        </p>

        {/* Closing Statement */}
        <p className="text-2xl text-green-600 font-bold text-center mt-8">🌿 Stay healthy, stay happy with BB HealthMart! 🌿</p>
      
      </div>
    </div>
  );
}

export default About;
