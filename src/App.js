import React, { useState, createContext, useContext } from 'react';
import { ShoppingCart, User, Bell, Menu, LogOut, Trash2 } from 'lucide-react';

// Context for user authentication and cart
const AppContext = createContext();

// Mock data remains the same...
const mockProducts = [
  {
    id: 1,
    name: "Smartphone X",
    price: 599.99,
    image: "/api/placeholder/200/200",
    rating: 4.5,
    seller: "TechStore",
    sold: 1200,
    description: "Latest smartphone with advanced features and great camera.",
    specifications: {
      screen: "6.5 inch OLED",
      processor: "Snapdragon 888",
      ram: "8GB",
      storage: "128GB"
    }
  },
  // ... other products
];

const mockUsers = [
  { id: 1, email: 'user@example.com', password: 'password123', name: 'John Doe' }
];

// Components with simplified styling...
const AuthForm = ({ isLogin, onSubmit, onToggle }) => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isLogin ? 'Login' : 'Register'}
      </h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }} className="space-y-4">
        {/* Form fields remain the same... */}
      </form>
    </div>
  );
};

// Other components remain similar but with simplified styling...

const App = () => {
  // State management remains the same...
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  // Component logic remains the same...

  return (
    <AppContext.Provider value={{ user, cart, setCart, orders }}>
      <div className="min-h-screen bg-gray-100">
        {/* Rest of the component structure remains the same... */}
      </div>
    </AppContext.Provider>
  );
};

export default App;