import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";
import { Dashboard } from "@/pages/app/dashboard/dashboard";
import { SignIn } from "@/pages/auth/sign-in";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/sign-in", element: <SignIn /> }],
  },
]);
