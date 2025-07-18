import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { MainLayout } from "@/widgets/MainLayout";
import { QuestionsPage } from "@/pages/QuestionsPage/QuestionsPage";
import { QuestionsDetailsPage } from "@/pages/QuestionsDetailsPage/QuestionsDetailsPage";

const router = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "/",
        element: <QuestionsPage />,
      },
      {
        path: "/questions/:id",
        element: <QuestionsDetailsPage />,
      },
    ],
  },
]);

export const AppRouterProvider = () => <RouterProvider router={router} />;
