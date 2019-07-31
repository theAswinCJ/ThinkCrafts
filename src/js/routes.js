import HomePage from "../pages/home.jsx";
import SettingsPage from "../pages/settings.jsx";
import FavoritesPage from "../pages/favorites.jsx";

var routes = [
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/settings/",
    component: SettingsPage
  },
  {
    path: "/favorites/",
    component: FavoritesPage
  }
];

export default routes;
