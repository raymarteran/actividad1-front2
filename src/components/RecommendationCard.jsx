import { Quote, User, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

const RecommendationCard = ({ recommendation }) => {
  const [likes, setLikes] = useState(recommendation.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
    console.log('Recomendación likeada:', recommendation.title, !isLiked);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-rosa-empolvado rounded-full flex items-center justify-center">
            <User size={24} className="text-tierra-rosada" />
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-800">{recommendation.user}</h4>
            <span className="text-sm text-gray-500">{recommendation.date}</span>
          </div>
          
          <div className="relative mb-4">
            <Quote size={20} className="absolute -top-2 -left-2 text-rosa-empolvado" />
            <p className="text-gray-700 italic pl-6">
              "{recommendation.content}"
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {recommendation.product}
              </span>
              <div className="flex items-center space-x-1">
                <span className="text-sm text-gray-500">⭐</span>
                <span className="text-sm text-gray-500">{recommendation.rating}/5</span>
              </div>
            </div>
            
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-colors ${
                isLiked 
                  ? 'bg-tierra-rosada text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-rosa-empolvado hover:text-white'
              }`}
            >
              <ThumbsUp size={16} />
              <span className="text-sm">{likes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
