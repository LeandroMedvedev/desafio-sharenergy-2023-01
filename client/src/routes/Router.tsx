import { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Router = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  const { token } = useAuth();

  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? '/' : '/dashboard'} />
        );
      }}
    />
  );
};
