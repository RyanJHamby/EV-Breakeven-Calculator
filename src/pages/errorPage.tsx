import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import React from "react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
}