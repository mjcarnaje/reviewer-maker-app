import React from 'react';

import './Choice.scss';

const choice = (props) => <h3 className="choice__text">- {props.children}</h3>;

export default choice;
