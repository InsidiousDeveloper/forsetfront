import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Navbar from './elements/navbar'
import { AdminAuthPage } from './pages/adminauthpage'
import { AuthPage } from './pages/authpage'
import { CarsList } from './pages/carslist'
import {ClientsList} from "./pages/clientslist";
import {Orders} from "./pages/orders";

export const useRoutes = (isAuthenticated) => {

    if (isAuthenticated) {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route path="/authorization" exact>
                        <AuthPage />
                    </Route>
                    <Route path="/carslist" exact>
                        <CarsList />
                    </Route>
                    <Route path="/clientslist" exact>
                        <ClientsList />
                    </Route>
                    <Route path="/orders" exact>
                        <Orders />
                    </Route>
                </Switch>
            </>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AdminAuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}