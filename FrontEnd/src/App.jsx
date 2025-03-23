import { Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import Authlayout from "./components/auth/layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashboard from "./pages/admin-view/AdminDashboard";
import AdminProducts from "./pages/admin-view/AdminProducts";
import ShoopingLayout from "./components/shooping-view/ShoopingLayout";
import ShoopingHome from "./pages/shooping-view/ShoopingHome";
import ProductList from "./pages/shooping-view/ProductList";
import ShoopingCheckout from "./pages/shooping-view/ShoopingCheckout";
import ShoopingAccount from "./pages/shooping-view/ShoopingAccount";
import NotFOuntPage from "./pages/NotFOuntPage";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header components</h1>

      <Routes>
        <Route path="/auth" element={<Authlayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
        <Route path="/shop" element={<ShoopingLayout />}>
          <Route path="shopinghome" element={<ShoopingHome />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="shoopingcheckout" element={<ShoopingCheckout />} />
          <Route path="shoopingaccount" element={<ShoopingAccount />} />
        </Route>
        <Route path="*" element={<NotFOuntPage />} />
      </Routes>
    </div>
  );
}

export default App;
