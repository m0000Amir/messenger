import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import ProfilePage from './pages/Profile';
import Error404Page from './pages/Error/error404';
import Error500Page from './pages/Error/error500';
import MessengerPage from './pages/Messenger';
import ChangePasswordPage from './pages/ChangePassword';
import ChangeDataPage from './pages/ChangeData';
import Router from './utils/Router';
import AuthController from './controllers/AuthControllers';
import { Routes } from './types/types';

window.addEventListener('DOMContentLoaded', async () => {
  Router
    .use(Routes.Index, LoginPage)
    .use(Routes.Registration, RegistrationPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Chat, MessengerPage)
    .use(Routes.ChangePassword, ChangePasswordPage)
    .use(Routes.ChangeData, ChangeDataPage)
    .use(Routes.Error404, Error404Page)
    .use(Routes.Error500, Error500Page);

  let isProtectedRoute = true;

  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Registration:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Chat);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
