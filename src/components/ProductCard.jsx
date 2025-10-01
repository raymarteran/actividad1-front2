import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log('Producto likeado:', product.name, !isLiked);
  };

  const handleAddToCart = () => {
    console.log('Producto agregado al carrito:', product.name);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleLike}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isLiked 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-600 hover:text-red-500'
          }`}
        >
          <Heart size={18} className={isLiked ? 'fill-current' : ''} />
        </button>
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            -{product.discount}%
          </span>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-tierra-rosada">
              ${product.price}
            </span>
          </div>
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-tierra-rosada text-white py-2 px-4 rounded-lg hover:bg-rosa-empolvado transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart size={18} />
          <span>Agregar al carrito</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
