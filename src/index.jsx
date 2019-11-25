import ReactDOM from 'react-dom';
import React from 'react';

// Constants
import { IS_DEVELOPMENT } from './constants/environment';

// Components
import App, { HotApp } from './components/App';

const tappElement = document.querySelector('.tapp');

const render = () => {
    ReactDOM.render(
        IS_DEVELOPMENT ? <HotApp/> : <App/>,
        tappElement,
    );
};

chayns.ready.then(render).catch((error) => {
    // eslint-disable-next-line no-console
    console.warn('No chayns environment found.', error);
});
