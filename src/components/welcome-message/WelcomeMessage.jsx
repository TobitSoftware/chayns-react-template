import PropTypes from 'prop-types';
import React from 'react';

const WelcomeMessage = ({ message }) => {
    return <h1>{message}</h1>;
};

WelcomeMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

WelcomeMessage.displayName = 'WelcomeMessage';

export default WelcomeMessage;
