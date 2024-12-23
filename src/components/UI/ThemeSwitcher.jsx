import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

function ThemeSwitcher({ className }){
  const [isLightMode, setisLightMode] = useState(true);

  const toggleMode = () => setisLightMode(!isLightMode);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLightMode]);

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <SunIcon className={`small-icon ${isLightMode ? 'text-[var(--primary-color)]' : 'text-gray-500'}`} />
  
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer focus:outline-none" 
          checked={isLightMode}
          onChange={toggleMode}
        />
        <div className="relative w-[45px] h-[26px] bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:-translate-x-full
         rtl:peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px]
         after:start-[23px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all 
         dark:border-gray-600 peer-checked:bg-[var(--primary-color)]"></div>
      </label>
      
      <MoonIcon className={`small-icon ${isLightMode ? 'text-gray-500' : 'text-[var(--primary-color)]' }`} />
    </div>
  );
}

export default ThemeSwitcher;
