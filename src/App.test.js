import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IntlProvider } from "react-intl";


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<IntlProvider locale="en" timeZone="Asia/Tokyo">
<App /></IntlProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
