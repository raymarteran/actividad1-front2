const ColorTest = () => {
  return (
    <div className="p-4 space-y-2">
      <h3 className="text-lg font-bold mb-4">Prueba de Colores Personalizados</h3>
      
      <div className="bg-crema-suave p-4 rounded border">
        <p className="text-gray-800">Crema Suave (#FDF6F0)</p>
      </div>
      
      <div className="bg-rosa-empolvado p-4 rounded border">
        <p className="text-gray-800">Rosa Empolvado (#E1C4B8)</p>
      </div>
      
      <div className="bg-tierra-rosada p-4 rounded border">
        <p className="text-white">Tierra Rosada (#B99B91)</p>
      </div>
      
      <div className="bg-rosa-button p-4 rounded border">
        <p className="text-white">Rosa Button (#B88D88)</p>
      </div>
      
      <button className="bg-rosa-button text-white px-4 py-2 rounded hover:bg-tierra-rosada transition-colors">
        Botón con Rosa Button
      </button>
    </div>
  );
};

export default ColorTest;
