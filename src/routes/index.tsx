import { AppLayout } from "@/components/app-layout";
import { NotFound } from "@/pages/not-found";
import { DashboardPage } from "@/pages/dashboard";
import { GuestRoute } from "./guest-route";
import { ProtectedRoute } from "./protected-route";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { TermsOfServicePage } from "@/pages/terms-of-service-page";
import { PrivacyPolicyPage } from "@/pages/privacy-policy-page";
import { LoginPage } from "@/pages/login-page";
import { RegisterPage } from "@/pages/register-page";
import { ROUTES } from "./paths";
import { ForgotPasswordPage } from "@/pages/forgot-password-page";
import { UpdatePasswordPage } from "@/pages/update-password-page";
import { PaymentSuccessPage } from "@/pages/payment-success-page";
import { PaymentCancelledPage } from "@/pages/payment-cancelled-page";
import { AccountPage } from "@/pages/account/account-page";
import { BillingPage } from "@/pages/billing/billing-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <GuestRoute />,
        children: [
          {
            path: ROUTES.LOGIN,
            element: <LoginPage />,
          },
          {
            path: ROUTES.REGISTER,
            element: <RegisterPage />,
          },
          {
            path: ROUTES.FORGOT_PASSWORD,
            element: <ForgotPasswordPage />,
          },
          {
            path: ROUTES.UPDATE_PASSWORD,
            element: <UpdatePasswordPage />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              { index: true, element: <DashboardPage /> },
              {
                path: 'account',
                element: <AccountPage />,
              },
              {
                path: 'billing',
                element: <BillingPage />,
              },
              {
                path: 'payment-success',
                element: <PaymentSuccessPage />,
              },
              {
                path: 'payment-cancelled',
                element: <PaymentCancelledPage />,
              },
            ]
          },
        ],
      },
      {
        path: ROUTES.TERMS_OF_SERVICE,
        element: <TermsOfServicePage />,
      },
      {
        path: ROUTES.PRIVACY_POLICY,
        element: <PrivacyPolicyPage />,
      },
    ],
  },
]);
