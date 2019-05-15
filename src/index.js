import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import chromeBoi from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={chromeBoi} />, document.getElementById('root'));

// Uses a subsection of the chromeBoi matrix for performance
// ReactDOM.render(
//     <Matrix values={chromeBoi.slice(0, 10)} />,
//     document.getElementById('root')
// );
