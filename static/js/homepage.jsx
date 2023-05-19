'use strict';

function Homepage() {
  return (
  <React.Fragment>
    <p> Hello and welcome! This is a site for viewing trading cards.
    <a href="/cards">Click here to play</a>  
    </p>
    
    <img src="/static/img/balloonicorn.jpg"/>
  </React.Fragment>
)}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
