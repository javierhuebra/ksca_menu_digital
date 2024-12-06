import { useState, useEffect } from 'react';
import './App.css';
import Inicio from './views/Inicio';
import Carta from './views/Carta';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  // Estado para almacenar el idioma seleccionado
  const [language, setLanguage] = useState(() => {
    // Obtener idioma guardado en localStorage, o español por defecto
    return localStorage.getItem('language') || 'es';
  });

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <>
      <div className="bg-red-500 min-h-[100vh] flex flex-col">
        <div className="bg-accent py-6 flex justify-between items-center px-4">
          <p className="text-4xl text-center font-marker text-white">Menú Digital</p>
          {/* Botón para cambiar de idioma */}
          <button
            className=" text-black px-4 py-2 rounded-lg shadow-md"
            onClick={toggleLanguage}
          >
            {language === 'es' ?
              <div className='flex items-end'>

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" className='w-[35px] h-[30px]' />
                <p className='text-white ml-1'>EN</p>
              </div>
              :
              <div className='flex items-end'>

                <img src="https://preview.redd.it/why-does-the-spanish-flag-emoji-use-the-governmental-flag-v0-zhpr6soz43ua1.png?width=525&format=png&auto=webp&s=2d7f319cc7f760fc8b4c5badfafb7be3c1e55aa8" alt="" className='w-[35px] h-[30px]' />               
                 <p className='text-white ml-1'>ES</p>
              </div>


            }
          </button>
        </div>
        <BrowserRouter basename="/ksca_menu_digital">
          <Routes>
            <Route path="*" element={<Inicio lang={language}/>} />
            <Route path="/" element={<Inicio lang={language}/>} />
            <Route path="/carta" element={<Carta />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
