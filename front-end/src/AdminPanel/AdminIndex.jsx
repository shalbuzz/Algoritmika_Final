
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import CoinsManagePage from "../AdminPanel/Coins/CoinsEditPage";
import CoinEditPage from "../AdminPanel/EditPanel/EditCoins";

const AdminPanel = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn); 

    return isLoggedIn ? (
        <Routes>
            <Route path='/' element={<CoinsManagePage />} />
            <Route path='edit/:id' element={<CoinEditPage />} />
            <Route path='add' element={<CoinEditPage />} />
        </Routes>
    ) : (
        <Navigate to='/login' />
    );
};

export default AdminPanel;
