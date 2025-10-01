import { Calendar, User, ArrowRight } from 'lucide-react';

const ArticleCard = ({ article, featured = false }) => {
  const handleReadMore = () => {
    console.log('Leyendo artículo:', article.title);
  };

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
      featured ? 'md:col-span-2' : ''
    }`}>
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className={`w-full object-cover ${
            featured ? 'h-64 md:h-80' : 'h-48'
          }`}
        />
        {article.category && (
          <span className="absolute top-4 left-4 bg-tierra-rosada text-white px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <User size={16} className="mr-1" />
          <span className="mr-4">{article.author}</span>
          <Calendar size={16} className="mr-1" />
          <span>{article.date}</span>
        </div>
        
        <h3 className={`font-bold text-gray-800 mb-3 ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <button
          onClick={handleReadMore}
          className="inline-flex items-center text-tierra-rosada hover:text-rosa-empolvado font-medium transition-colors"
        >
          Leer más
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;
