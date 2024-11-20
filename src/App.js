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

const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
    <p className="text-gray-600">${product.price}</p>
    <button
      className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      onClick={() => onAddToCart(product)}
    >
      Add to Cart
    </button>
  </div>
);

const ProductList = ({ products, onAddToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

const Cart = ({ cart, onRemoveFromCart }) => (
  <div className="p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center py-2">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button
              className="text-red-600 hover:underline"
              onClick={() => onRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);


const mockUsers = [
  { id: 1, email: 'user@example.com', password: 'password123', name: 'John Doe' }
];

// Components with simplified styling...
const AuthForm = ({ isLogin, onSubmit, onToggle }) => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(formData);
    }} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      {!isLogin && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        {isLogin ? 'Login' : 'Register'}
      </button>
    </form>    
  );
};


const handleAuthSubmit = (data) => {
  if (isLogin) {
    const user = mockUsers.find(
      (u) => u.email === data.email && u.password === data.password
    );
    if (user) setUser(user);
    else alert("Invalid credentials");
  } else {
    mockUsers.push({
      id: mockUsers.length + 1,
      ...data,
    });
    alert("User registered successfully!");
    setIsLogin(true);
  }
  setIsAuthOpen(false);
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
        {isAuthOpen && (
          <AuthForm
            isLogin={isLogin}
            onSubmit={handleAuthSubmit}
            onToggle={() => setIsLogin(!isLogin)}
          />
        )}
        <header className="bg-indigo-600 text-white p-4">
          <h1 className="text-2xl font-bold">Online Shop</h1>
          <button onClick={() => setIsAuthOpen(true)}>Login/Register</button>
        </header>
        <main>
          <ProductList
            products={mockProducts}
            onAddToCart={(product) => setCart([...cart, product])}
          />
          {isCartOpen && (
            <Cart
              cart={cart}
              onRemoveFromCart={(id) =>
                setCart(cart.filter((item) => item.id !== id))
              }
            />
          )}
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;