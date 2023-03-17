import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { routes } from "../routes";

//Компонент, где объявляются и определяются маршруты навигации
const AppRouter = () => {
    return ( 
        <Routes>
            {routes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component} exact/>
            )}

            <Route
                path="*"
                element={<Navigate to="/products" replace />}
            />

            <Route
                path="*"
                element={<Navigate to="/basket" replace />}
            />
        </Routes>
     );
}
 
export default AppRouter;