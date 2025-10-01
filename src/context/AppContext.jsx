import { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  articles: [],
  products: [],
  recommendations: [],
  user: null,
  isAdmin: false,
  loading: false,
  error: null
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    
    case 'SET_ARTICLES':
      return { ...state, articles: action.payload, loading: false };
    
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, loading: false };
    
    case 'SET_RECOMMENDATIONS':
      return { ...state, recommendations: action.payload, loading: false };
    
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'SET_ADMIN':
      return { ...state, isAdmin: action.payload };
    
    case 'ADD_ARTICLE':
      return { ...state, articles: [...state.articles, action.payload] };
    
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    
    case 'ADD_RECOMMENDATION':
      return { ...state, recommendations: [...state.recommendations, action.payload] };
    
    case 'UPDATE_ARTICLE':
      return {
        ...state,
        articles: state.articles.map(article =>
          article.id === action.payload.id ? action.payload : article
        )
      };
    
    case 'DELETE_ARTICLE':
      return {
        ...state,
        articles: state.articles.filter(article => article.id !== action.payload)
      };
    
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Simular carga de datos inicial
    const loadInitialData = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      try {
        // Aquí normalmente harías llamadas a una API
        // Por ahora usamos datos mock
        console.log('Cargando datos iniciales...');
        
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        dispatch({ type: 'SET_LOADING', payload: false });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    };

    loadInitialData();
  }, []);

  const value = {
    ...state,
    dispatch
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de AppProvider');
  }
  return context;
};
