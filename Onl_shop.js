import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Bell, User, Star, ChevronDown, ChevronRight } from 'lucide-react';

const MainLayout = () => {
  const [categories] = useState([
    'Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports', 'Toys',
    'Automotive', 'Books', 'Health', 'Groceries'
  ]);
  
  const [featuredProducts] = useState([
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.8,
      sold: 1234,
      image: '/api/placeholder/200/200',
      mall: true,
    },
    // More products would be added here
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="container mx-auto px-4">
          {/* Upper Nav */}
          <div className="flex justify-between items-center py-1 text-white text-sm">
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">Seller Centre</a>
              <a href="#" className="hover:opacity-80">Download</a>
              <div className="flex items-center space-x-2">
                <span>Follow us on</span>
                <a href="#" className="hover:opacity-80">Facebook</a>
                <a href="#" className="hover:opacity-80">Instagram</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Bell size={16} />
                <span>Notifications</span>
              </div>
              <div className="flex items-center space-x-1">
                <User size={16} />
                <span>Account</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="py-4 flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold">ShopClone</h1>
            </div>
            <div className="flex-grow">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600">
                  <Search size={20} />
                </button>
              </div>
              <div className="flex space-x-4 mt-1">
                {['New Deals', 'Best Seller', 'Flash Sale', 'Free Shipping'].map((item, index) => (
                  <a key={index} href="#" className="text-white text-sm hover:opacity-80">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <button className="text-white p-2 relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-white text-orange-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-12 gap-4">
          {/* Categories Sidebar */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg p-4">
              <h2 className="font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-orange-500">
                      <span>{category}</span>
                      <ChevronRight size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-10">
            {/* Banner Carousel */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <img 
                src="/api/placeholder/800/300" 
                alt="Banner" 
                className="w-full rounded-lg"
              />
            </div>

            {/* Featured Categories */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h2 className="font-semibold mb-4">Featured Categories</h2>
              <div className="grid grid-cols-10 gap-4">
                {categories.map((category, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="flex flex-col items-center text-center hover:text-orange-500"
                  >
                    <img 
                      src={`/api/placeholder/80/80`} 
                      alt={category}
                      className="w-16 h-16 rounded-lg mb-2"
                    />
                    <span className="text-sm">{category}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Flash Sale */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-xl text-orange-500">FLASH SALE</h2>
                <button className="text-orange-500 hover:underline">See All {'>'}</button>
              </div>
              <div className="grid grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="border rounded-lg p-2 hover:shadow-lg transition-shadow">
                    <img 
                      src="/api/placeholder/200/200" 
                      alt="Product"
                      className="w-full rounded-lg mb-2"
                    />
                    <div className="p-2">
                      <h3 className="text-sm line-clamp-2 mb-1">Wireless Earbuds Pro with Noise Cancellation</h3>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-orange-500 text-lg font-semibold">$29.99</span>
                        <span className="text-gray-400 line-through text-sm">$49.99</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Star size={12} className="text-yellow-400 fill-current" />
                          <span>4.8</span>
                        </div>
                        <span>Sold 1.2k</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Products */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-xl">Popular Products</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-full bg-orange-500 text-white">Popular</button>
                  <button className="px-3 py-1 rounded-full bg-gray-100">New</button>
                  <button className="px-3 py-1 rounded-full bg-gray-100">Best Selling</button>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="border rounded-lg hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src="/api/placeholder/200/200" 
                        alt="Product"
                        className="w-full rounded-t-lg"
                      />
                      {index % 3 === 0 && (
                        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                          Mall
                        </div>
                      )}
                      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                        <Heart size={20} />
                      </button>
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm line-clamp-2 mb-2">Premium Product with Amazing Features</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-orange-500 text-lg font-semibold">$99.99</span>
                        <span className="text-gray-400 line-through text-sm">$149.99</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Star size={12} className="text-yellow-400 fill-current" />
                          <span>4.9</span>
                        </div>
                        <span>Sold 2.3k</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;