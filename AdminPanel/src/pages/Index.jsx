import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import HomePage from "./HomePage";
import VaccinePage from "./VaccinePage";
import ChildrenTablePage from "./ChildrenTablePage";
import ReportsPage from "./ReportsPage";
import AddChildPage from "./AddChildPage";
import SignUpPage from "./SignUpPage";
import RegisterHealthWorkerPage from "./RegisterHealthWorkerPage";
import LoginPage from "./LoginPage";
import VaccineTablePage from "./VaccineTablePage";
import LogoutPage from "./LogoutPage";
import SettingsPage from "./SettingsPage";
import UpdateChildPage from "./UpdateChildPage";
import UpdateVaccinePage from "./UpdateVaccinePage";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/",
      element: <LoginPage />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
        {
            path: "/children_table",
            element: <ChildrenTablePage />,
          },
          {
            path: "/vaccine_table",
            element: <VaccineTablePage />,
          },
          {
            path: "/report",
            element: <ReportsPage />,
          },
          {
            path: "/add_child",
            element: <AddChildPage />,
          },
          {
            path: "/add_vaccine",
            element: <VaccinePage />,
          },
          {
            path: "/update_child/:childId",
            element: <UpdateChildPage />,
          },
          {
            path: "/update_vaccine/:vaccineId",
            element: <UpdateVaccinePage />,
          },
          {
            path: "/settings",
            element: <SettingsPage />,
          },
        {
          path: "/healthworker",
          element: <RegisterHealthWorkerPage />,
        },
        {
          path: "/logout",
          element: <LogoutPage/>,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
        path: "/signup",
        element: <SignUpPage/>,
      },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;