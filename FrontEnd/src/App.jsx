import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CheckAuth from "./components/common/CheckAuth";
import Authlayout from "./components/auth/layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminDashboard from "./pages/admin-view/AdminDashboard";
import AdminProducts from "./pages/admin-view/AdminProducts";
import ShoopingLayout from "./components/shooping-view/ShoopingLayout";
import AdminLayout from "./components/admin-view/AdminLayout";
import ShoopingHome from "./pages/shooping-view/ShoopingHome";
import ProductList from "./pages/shooping-view/ProductList";
import ShoopingCheckout from "./pages/shooping-view/ShoopingCheckout";
import ShoopingAccount from "./pages/shooping-view/ShoopingAccount";
import Unauthpage from "./pages/Unauth-page";
import NotFOuntPage from "./pages/NotFOuntPage";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  // console.log(isLoading, user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={isAuthenticated}
              user={user}
            ></CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Authlayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          {/* <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} /> */}
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoopingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoopingHome />} />
          <Route path="listing" element={<ProductList />} />
          <Route path="checkout" element={<ShoopingCheckout />} />
          <Route path="account" element={<ShoopingAccount />} />
          {/* <Route path="paypal-return" element={<PaypalReturnPage />} />
          <Route path="payment-success" element={<PaymentSuccessPage />} />
          <Route path="search" element={<SearchProducts />} /> */}
        </Route>
        <Route path="/unauth-page" element={<Unauthpage />} />
        <Route path="*" element={<NotFOuntPage />} />
      </Routes>
    </div>
  );
}

export default App;
