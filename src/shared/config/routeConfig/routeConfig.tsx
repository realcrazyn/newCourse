import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RutePath.about,
    element: <AboutPage />,
  },
}
