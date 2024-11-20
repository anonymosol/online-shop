import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Shield, TruckFast, Clock, ThumbsUp } from 'lucide-react';

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: 'Premium Wireless Earbuds with Active Noise Cancellation',
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.8,
    reviews: 1234,
    sold: 5000,
    images: ['/api/placeholder/500/500', '/api/placeholder/500/500', '/api/placeholder/500/500', '/api/placeholder/500/500'],
    variants: [
      { id: 1, name: 'Black', stock: 50 },
      { id: 2, name: 'White', stock: 30 },
      { id: 3, name: 'Blue', stock: 20 },
    ],
    description: 'High-quality wireless earbuds with premium features...',
    specifications: {
      'Battery Life': 'Up to 24 hours',
      'Bluetooth': '5.0',
      'Noise Cancellation': 'Active',
      'Water Resistance': 'IPX4',
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Product Images */}
          <div className="col-span-5">
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-orange-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`Product ${index + 1}`} className="w-full" />
                </button>
              ))}
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500">
                <Heart size={20} />
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="col-span-7">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded mr-2">Mall</span>
                <h1 className="text-xl font-medium">{product.name}</h1>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="text-orange-500 font-medium mr-1">{product.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span>{product.reviews} Reviews</span>
                <span>{product.sold} Sold</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-baseline">
                <span className="text-gray-500 text-lg line-through mr-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-orange-500 text-3xl font-medium">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">33% OFF</span>
                <span className="text-orange-500 text-sm">Flash Deal</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-gray-500 mb-2">Variant</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedVariant === variant.id
                        ? 'border-orange-500 text-orange-500'
                        : 'border-gray-200 hover:border-orange-500'
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-gray-500 mb-2">Quantity</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border rounded-lg"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 px-3 py-1 border rounded-lg text-center"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border rounded-lg"
                >
                  +
                </button>
                <span className="text-gray-500 text-sm">
                  {selectedVariant
                    ? `${product.variants.find((v) => v.id === selectedVariant)?.stock} pieces available`
                    : 'Select a variant'}
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50">
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
              <button className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                Buy Now
              </button>
            </div>

            <div className="border-t mt-6 pt-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Shield size={20} />
                  <span>Shopee Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <TruckFast size={20} />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock size={20} />
                  <span>7 Days Return</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="bg-white rounded-lg shadow-sm mt-6 p-6">
        <div className="border-b mb-6">
          <div className="flex space-x-8">
            <button className="px-4 py-2 border-b-2 border-orange-500 text-orange-500">
              Product Details
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-orange-500">
              Reviews (1234)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-4">Specifications</h3>
            <div className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 text-sm">
                  <span className="text-gray-500">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4">Description</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;