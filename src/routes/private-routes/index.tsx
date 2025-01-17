import RequireAuth from "@/auth/require-auth.tsx";
import { Route, Routes } from "react-router-dom";
import DashboardRoutes from "@/pages/dashboard/routes/dashboard-routes.tsx";

const PrivateRoutes = () => {
    return (
        <RequireAuth>
            <Routes>
                <Route index element={<DashboardRoutes />} />
            </Routes>
        </RequireAuth>
    );
};
export default PrivateRoutes;
