import { Badge } from 'chayns-components';
import PropTypes from 'prop-types';
import React from 'react';
import './welcomeMessage.css';

const WelcomeMessage = ({ message }) => {
    return (
        <div className="welcome">
            <h1>{message}</h1>
            <Badge>New Project!</Badge>
        </div>
    );
};

WelcomeMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

WelcomeMessage.displayName = 'WelcomeMessage';

export default WelcomeMessage;
