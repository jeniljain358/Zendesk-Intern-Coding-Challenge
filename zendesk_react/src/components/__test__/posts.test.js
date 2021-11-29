import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './../Posts';
import  { isTSAnyKeyword } from '@babel/types';

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Posts></Posts>, div)

});


