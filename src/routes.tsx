import React, { Suspense } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
// import PageHome from './pages/home'
const PageHome = React.lazy(() => import("./pages/home"))
const PagePlan = React.lazy(() => import("./pages/plan"))
const App = React.lazy(() => import("./App"))

const RoutesApp = () => {
    return useRoutes([
        {
            path: '',
            element: (
                <Suspense fallback={<p>Loading...</p>}>
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
                }
            ]
        }
    ])
}

export default RoutesApp