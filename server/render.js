import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

import Routes from '../src/router/Routes';

export default (pathname, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={pathname} context={context}>
          <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
  	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<title>Title</title>
		</head>
		<body>
			<div id="app">
				${content}
			</div>
			<script>
				window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(/</g,'\\u003c')}
			</script
			<script src="dist/bundle.js"></script>
		</body>
	</html>
  `;

};