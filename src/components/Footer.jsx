import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tierra-rosada text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Get Up & Glow</h3>
            <p className="text-gray-200 mb-6 max-w-md">
              Tu destino para descubrir los mejores productos de belleza, 
              consejos de cuidado personal y recomendaciones que te harán brillar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-200 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#articles" className="text-gray-200 hover:text-white transition-colors">
                  Artículos
                </a>
              </li>
              <li>
                <a href="#recommendations" className="text-gray-200 hover:text-white transition-colors">
                  Recomendaciones
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-200 hover:text-white transition-colors">
                  Productos Top
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-200">hola@getupandglow.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-200">Ciudad, País</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm">
              © {currentYear} Get Up & Glow. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-1 mt-4 md:mt-0">
              <span className="text-gray-200 text-sm">Hecho con</span>
              <Heart size={16} className="text-red-400" />
              <span className="text-gray-200 text-sm">para ti</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
