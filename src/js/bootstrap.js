var
   React = require('react')
   ,Colors = require('./Colors')
;

var swatches = [
   {
      code: '#1abc9c',
      name: 'torquoise'
   },
   {
      code: '#2ecc71',
      name: 'Emerald'
   },
   {
      code: '#607d8b',
      name: 'Blue Gray'
   },
   {
      code: '#ff5722',
      name: 'deep orange'
   },
   {
      code: '#cddc39',
      name: 'lime'
   },
   {
      code: '#a2c0cc',
      name: ''
   },
   {
      code: '#009688',
      name: 'Teal'
   },
   {
      code: '#bfbebe',
      name: ''
   },
   {
      code: '#fba4b4',
      name: ''
   },
   {
      code: '#ffd54f',
      name: ''
   },
   {
      code: '#ff5e00',
      name: ''
   },
   {
      code: '#ffeb3b',
      name: 'Yellow'
   },
   {
      code: '#ffc107',
      name: 'Amber'
   },
   {
      code: '#f0f0f0',
      name: ''
   },
   {
      code: '#f6f6f6',
      name: ''
   },
   {
      code: '#f9f9f9',
      name: ''
   },
   {
      code: '#808080',
      name: ''
   },
   {
      code: '#333',
      name: ''
   }
];

React.render(<Colors swatches={swatches} />, document.body);
