import React, { useState } from 'react';
import { Trash2, ChevronRight } from 'lucide-react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Wireless Earbuds',
      price: 99.99,
      quantity: 2,
      variant: 'Black',
      image: '/api/placeholder/100/100',
      seller: 'Official Store',
      selected: true,
    },
    {
      id: 2,
      name: 'Smartphone Case',
      price: 19.99,
      quantity: 1,
      variant: 'Clear',
      image: '/api/placeholder/100/100',
      seller: 'Accessories Shop',
      selected: true,
    },
  ]);

  const [vouchers] = useState([
    { id: 1, code: 'SAVE10', discount: 10, type: 'percentage' },
    { id: 2, code: 'FREESHIP', discount: 5, type: 'fixed' },
  ]);

  const toggleSelect = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems
      .filter((item) => item.selected)
      .reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex space-x-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h2 className="text-xl font-medium">Shopping Cart</h2>
            </div>

            {/* Cart Header */}
            <div className="grid grid-cols-12 gap-4 p-4 text-sm text-gray-500 border-b">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Unit Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total Price</div>
            </div>

            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 border-b">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6">
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        checked={item.selected}
                        onChange={() => toggleSelect(item.id)}
                        className="rounded text-orange-500 focus:ring-orange-500"
                      />
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          Variant: {item.variant}
                        </p>
                        <p className="text-sm text-gray-500">
                          Seller: {item.seller}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="col-span-2">
                    <div className="flex justify-center items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 border rounded"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 1)
                        }
                        className="w-16 px-2 py-1 border rounded text-center"
                      />
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-orange-500">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-96">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>

            {/* Voucher Section */}
            <div className="mb-6">
              <h3 className="text-gray-500 mb-2">Vouchers</h3>
              <div className="space-y-2">
                {vouchers.map((voucher) => (
                  <div
                    key={voucher.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div>
                      <span className="font-medium text-orange-500">
                        {voucher.code}
                      </span>
                      <p className="text-sm text-gray-500">
                        {voucher.type === 'percentage'
                          ? `${voucher.discount}% off`
                          : `$${voucher.discount} off`}
                      </p>
                    </div>
                    <button className="text-orange-500 hover:text-orange-600">
                      Use
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping Fee</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Voucher Discount</span>
                <span>-$0.00</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-3 border-t">
                <span>Total</span>
                <span className="text-orange-500">
                  ${(calculateSubtotal() + 5).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center justify-center space-x-2">
              <span>Proceed to Checkout</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;