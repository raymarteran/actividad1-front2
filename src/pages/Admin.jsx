import { useState, useEffect } from 'react';
import { 
  Users, 
  FileText, 
  Package, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      console.log('Administrador autenticado');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log('Panel de admin visibility toggled:', !isVisible);
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleVisibility}
          className="bg-tierra-rosada text-white p-3 rounded-full shadow-lg hover:bg-rosa-empolvado transition-colors"
          title="Panel de Administración"
        >
          <Settings size={24} />
        </button>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Acceso de Administrador
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tierra-rosada"
                placeholder="Ingresa la contraseña"
                required
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-tierra-rosada text-white py-2 px-4 rounded-lg hover:bg-rosa-empolvado transition-colors"
              >
                Ingresar
              </button>
              <button
                type="button"
                onClick={toggleVisibility}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Contraseña: admin123
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
    { id: 'articles', name: 'Artículos', icon: FileText },
    { id: 'products', name: 'Productos', icon: Package },
    { id: 'recommendations', name: 'Recomendaciones', icon: MessageSquare },
    { id: 'users', name: 'Usuarios', icon: Users },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <FileText className="text-blue-500 mr-3" size={32} />
            <div>
              <p className="text-sm text-gray-600">Artículos</p>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Package className="text-green-500 mr-3" size={32} />
            <div>
              <p className="text-sm text-gray-600">Productos</p>
              <p className="text-2xl font-bold text-gray-800">156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <MessageSquare className="text-purple-500 mr-3" size={32} />
            <div>
              <p className="text-sm text-gray-600">Recomendaciones</p>
              <p className="text-2xl font-bold text-gray-800">89</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="text-orange-500 mr-3" size={32} />
            <div>
              <p className="text-sm text-gray-600">Usuarios</p>
              <p className="text-2xl font-bold text-gray-800">1,234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'articles':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Gestión de Artículos</h2>
              <button className="bg-tierra-rosada text-white px-4 py-2 rounded-lg hover:bg-rosa-empolvado transition-colors flex items-center">
                <Plus size={20} className="mr-2" />
                Nuevo Artículo
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Lista de artículos aquí...</p>
            </div>
          </div>
        );
      case 'products':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Gestión de Productos</h2>
              <button className="bg-tierra-rosada text-white px-4 py-2 rounded-lg hover:bg-rosa-empolvado transition-colors flex items-center">
                <Plus size={20} className="mr-2" />
                Nuevo Producto
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Lista de productos aquí...</p>
            </div>
          </div>
        );
      case 'recommendations':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Gestión de Recomendaciones</h2>
              <button className="bg-tierra-rosada text-white px-4 py-2 rounded-lg hover:bg-rosa-empolvado transition-colors flex items-center">
                <Plus size={20} className="mr-2" />
                Nueva Recomendación
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Lista de recomendaciones aquí...</p>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Lista de usuarios aquí...</p>
            </div>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-100 z-50">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-64 bg-tierra-rosada text-white">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-xl font-bold">Admin Panel</h1>
              <button
                onClick={toggleVisibility}
                className="text-white hover:text-gray-200"
              >
                <EyeOff size={20} />
              </button>
            </div>
            
            <nav className="space-y-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-rosa-empolvado text-white' 
                        : 'text-gray-200 hover:bg-rosa-empolvado hover:text-white'
                    }`}
                  >
                    <Icon size={20} className="mr-3" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
