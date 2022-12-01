import { renderDOM } from './utils/renderDOM';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/Registration';
import Error404Page from './pages/Error/error404';
import Error500Page from './pages/Error/error500';
import ProfilePage from './pages/Profile';
import ChatPage from './pages/Chat';

window.addEventListener('DOMContentLoaded', () => {
  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();
  const error404Page = new Error404Page();
  const error500Page = new Error500Page();
  const profilePage = new ProfilePage();
  const chatPage = new ChatPage();

  renderDOM('#app', loginPage);

  const path: string = document.location.pathname;

  switch (path) {
    case '/':
      break;

    case '/login':
      renderDOM('#app', loginPage);
      break;

    case '/chat':
      renderDOM('#app', chatPage);
      break;

    case '/profile':
      renderDOM('#app', profilePage);
      break;

    case '/registration':
      renderDOM('#app', registrationPage);
      break;

    case '/error500':
      renderDOM('#app', error404Page);
      break;

    default:
      renderDOM('#app', error404Page);
      break;
  }

  loginPage.dispatchComponentDidMount();
  registrationPage.dispatchComponentDidMount();
  error404Page.dispatchComponentDidMount();
  error500Page.dispatchComponentDidMount();
  profilePage.dispatchComponentDidMount();
  chatPage.dispatchComponentDidMount();
});
