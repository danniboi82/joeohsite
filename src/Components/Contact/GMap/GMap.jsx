import React from 'react';

const GMap = (props) => {
  return (
    <div>
      <iframe style={{width:"90%", height:"450px", frameborder:"0", border:"0"}}
        src="https://www.google.com/maps/embed/v1/place?q=36.417259,+127.393200&key=AIzaSyB4Gae_gW6rhT4AKAxkr13R-4uolR1kZD8" allowFullScreen></iframe>
    </div>
  )
}

export default GMap;