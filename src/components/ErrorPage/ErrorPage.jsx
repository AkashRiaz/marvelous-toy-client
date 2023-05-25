import React from "react";
import { useRouteError } from "react-router-dom";
import "./ErroorPage.css";
import useTitle from "../../hooks/useTitle";
const ErrorPage = () => {
  useTitle('error! page not found')
  const error = useRouteError();
  return (
    <div className="hero min-h-screen image-full bg-image">
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div id="error-page" className="space-y-2">
            <h1 className="font-semibold text-4xl">Oops!</h1>
            <div className="text-xl">
              <p>Sorry, an unexpected error has occurred.</p>
              <p>
                <i>Page {error.statusText || error.message}!!</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
