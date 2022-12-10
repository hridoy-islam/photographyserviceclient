import router from './Router/Router'
import {
  RouterProvider,
} from "react-router-dom";

import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
       <Toaster></Toaster>
    </div>
  );
}

export default App;
