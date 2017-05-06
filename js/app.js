'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Components/Logo';
import Excel from './Components/Excel';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if(!headers){
  headers = ['Title', 'Year', 'Rating', 'Comments'];
  data = [['Test', '2017', '3', 'meh']];
}

ReactDOM.render(
  <div>
    <h1>
      <Logo /> Welcom to Whinpad
    </h1>
    <Excel headers={headers} initialData={data} />
  </div>
  ,
  document.getElementById('pad')
);
