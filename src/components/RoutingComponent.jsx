import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const Login = lazy(() => import("../pages/Auth/Login"));
const Private = lazy(() => import("../pages/Auth/Private"));
const FlightList = lazy(() => import("../pages/FlightList"));
const SearchFlight = lazy(() => import("../pages/SearchFlight"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// import SearchFlight from "../pages/SearchFlight";

const RoutingComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route
          path={ROUTES.SEARCH_FLIGHT}
          element={<Private component={SearchFlight} />}
        />
        <Route
          path={ROUTES.FLIGHT_LIST}
          element={<Private component={FlightList} />}
        />

        {/* <Route path={ROUTES.page_not_found} element={<PageNotFound />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutingComponent;
