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

  switch (window.location.pathname) {

    case Routes.Index:
    case Routes.Registration:
    // case Routes.Chat:
    // case Routes.ChangePassword:
    // case Routes.ChangeData:
    // case Routes.Error404:
    // case Routes.Error500:
      isProtectedRoute = false;
      break;
  }

  try {
    // debugger
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

// import { renderDOM } from './utils/renderDOM';
// import LoginPage from './pages/Login';
// import RegistrationPage from './pages/Registration';
// import Error404Page from './pages/Error/error404';
// import Error500Page from './pages/Error/error500';
// import ProfilePage from './pages/Profile';
// import ChatPage from './pages/Chat';
// import ChangePassword from './pages/ChangePassword';
// import ChangeData from './pages/ChangeData';
//
// window.addEventListener('DOMContentLoaded', () => {
//   const loginPage = new LoginPage();
//   const registrationPage = new RegistrationPage();
//   const error404Page = new Error404Page();
//   const error500Page = new Error500Page();
//   const profilePage = new ProfilePage();
//   const changePassword = new ChangePassword();
//   const changeData = new ChangeData();
//   const chatPage = new ChatPage();
//
//   renderDOM('#app', loginPage);
//
//   const path: string = document.location.pathname;
//
//   switch (path) {
//     case '/':
//       break;
//
//     case '/login':
//       renderDOM('#app', loginPage);
//       break;
//
//     case '/chat':
//       renderDOM('#app', chatPage);
//       break;
//
//     case '/profile':
//       renderDOM('#app', profilePage);
//       break;
//
//     case '/change-password':
//       renderDOM('#app', changePassword);
//       break;
//
//     case '/change-data':
//       renderDOM('#app', changeData);
//       break;
//
//     case '/registration':
//       renderDOM('#app', registrationPage);
//       break;
//
//     case '/error500':
//       renderDOM('#app', error500Page);
//       break;
//
//     case '/error404':
//       renderDOM('#app', error404Page);
//       break;
//
//     default:
//       renderDOM('#app', error404Page);
//       break;
//   }
//
//   loginPage.dispatchComponentDidMount();
//   registrationPage.dispatchComponentDidMount();
//   error404Page.dispatchComponentDidMount();
//   error500Page.dispatchComponentDidMount();
//   profilePage.dispatchComponentDidMount();
//   chatPage.dispatchComponentDidMount();
// });
