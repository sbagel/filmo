import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404/Index'));
const SigninScreen = lazy(() => import('~/components/screens/landing/signin/Index'));
const SignupScreen = lazy(() => import('~/components/screens/landing/signup/Index'));
const LoggedInScreen = lazy(() => import('~/components/screens/loggedin/main/Index'));
const UserScreen = lazy(() => import('~/components/screens/loggedin/userprofile/UserProfile'));
const PhotosScreen = lazy(() => import ('~/components/screens/loggedin/photos/Photos'))
const UploadScreen = lazy(() => import ('~/components/screens/loggedin/upload/Upload'))
const TestScreen = lazy(() => import('~/components/screens/Test'));


export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '/test',
          element: <TestScreen />,
        },
        {
          path: '/signin',
          element: <SigninScreen />,
        },
        {
          path: '/signup',
          element: <SignupScreen />,
        },
        {
          path: '/loggedin',
          element: <LoggedInScreen />,
        },
        {
          path: '/username',
          element: <UserScreen />,
        },
        {
          path: '/photos',
          element: <PhotosScreen/>,
        },
        {
          path: '/upload',
          element: <UploadScreen/>,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
