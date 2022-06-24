import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
   return (
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
         <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
               <p className="text-2xl flex dark:text-white font-bold py-1 px-2">
                  Goggle   <img src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128287.png?token=exp=1655840028~hmac=7616c60a2b4ea470c72a18270127dec1"
                     style={{ "width": "30px", "height": "30px", "display": "flex" }} />
               </p>
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-gray-900 text-gray-50 border rounded-full px-2 py-1 hover:shadow-lg">
               { darkTheme? 'Light 💡' : 'Dark 🌙' }
            </button>
         </div>
         <Search />
      </div>
   );
}
