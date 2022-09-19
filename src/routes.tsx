import React, { Suspense } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import FallBackRoute from './components/FallBackRoute'
// import PageHome from './pages/home'
const PageHome = React.lazy(() => import("./pages/home"))
const PagePlan = React.lazy(() => import("./pages/plan"))
const PageFinish = React.lazy(() => import("./pages/finish"))
const App = React.lazy(() => import("./App"))

const RoutesApp = () => {
    return useRoutes([
        {
            path: '',
            element: (
                <Suspense fallback={<FallBackRoute />}>
                    <App />
                </Suspense>
            ),
            children: [
                {
                    path: '',
                    element: <Navigate to="home" />
                },
                {
                    path: "home",
                    element: <PageHome />
                },
                {
                    path: "plan",
                    element: <PagePlan />
                },
                {
                    path: "gracias",
                    element: <PageFinish />
                }
            ]
        }
    ])
}

export default RoutesApp