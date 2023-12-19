import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Layout } from "../../components/Layout";
import { Layout } from "../../components/layout";
// import { api_access_token_key, user_role_key } from "../../utils/constants";
// import { getItem } from "../../utils/utils";
// import { routes } from "../../utils/routes";

const Private = ({ component: Component, ...props }) => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   if (!getItem(api_access_token_key)) {
  //     navigate(routes.login.path, { state: { from: location.pathname } });
  //   } else {
  //     const userRole = getItem(user_role_key);
  //     if (userRole) {
  //       const permissions = Object.values(routes).find(
  //         (item) => item.path === location.pathname
  //       )?.permission;

  //       if (!permissions.includes(userRole)) {
  //         alert("You are not authorized");
  //         // navigate(routes.page_not_found.path);
  //         navigate("/");
  //       }
  //     }
  //   }
  // }, []);

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default Private;
