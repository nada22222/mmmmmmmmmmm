import { createBrowserRouter } from "react-router-dom";
import App from './App.js';
import StudentGrade from './Pages/StudentGrade.js'
 

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
           
            
            {
                path: '/course',
                element: <StudentGrade />
            },
           
            {
                path: '/Grade',
                element: < StudentGrade />,
            },
           
        ]
    },
   

]);