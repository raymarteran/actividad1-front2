import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import ProductCard from '../components/ProductCard';
import RecommendationCard from '../components/RecommendationCard';
import { mockArticles, mockProducts, mockRecommendations } from '../data/mockData';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [products, setProducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Cargar datos mock
    setArticles(mockArticles);
    setProducts(mockProducts);
    setRecommendations(mockRecommendations);
    console.log('Datos cargados en Home:', { articles: mockArticles.length, products: mockProducts.length, recommendations: mockRecommendations.length });
  }, []);

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);
  const topProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rosa-empolvado to-tierra-rosada text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Descubre tu Belleza Natural
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Encuentra los mejores productos, consejos y recomendaciones 
            para realzar tu belleza y sentirte radiante cada día.
          </p>
          <button className="bg-white text-tierra-rosada px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Explorar Artículos
          </button>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articles" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Artículos Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los mejores consejos y tendencias de belleza seleccionados especialmente para ti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} featured={true} />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-tierra-rosada text-white px-6 py-3 rounded-lg hover:bg-rosa-empolvado transition-colors">
              Ver Todos los Artículos
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Personal Recommendations */}
      <section id="recommendations" className="py-16 bg-crema-suave">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recomendaciones Personales
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lo que dicen nuestras usuarias sobre sus productos favoritos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.map(recommendation => (
              <RecommendationCard key={recommendation.id} recommendation={recommendation} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Products */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="text-tierra-rosada mr-2" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Productos Top
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los productos más valorados y recomendados por nuestra comunidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-tierra-rosada text-white px-6 py-3 rounded-lg hover:bg-rosa-empolvado transition-colors">
              Ver Todos los Productos
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-tierra-rosada text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mantente Actualizada
          </h2>
          <p className="text-xl mb-8">
            Recibe los mejores consejos de belleza y ofertas exclusivas en tu correo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="ring-1 ring-white flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-tierra-rosada px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:cursor-pointer">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
