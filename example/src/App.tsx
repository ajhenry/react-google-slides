import React from 'react';
import ReactGoogleSlides from 'react-google-slides';

const App = () => {
  return (
    <div className="container">
      <h1>100% Width + 5 second duration</h1>
      <div style={{ padding: 20 }}>
        <ReactGoogleSlides
          width="100%"
          slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
          slideDuration={5}
        />
      </div>
      <h1>50% Width + Showing controls</h1>
      <div style={{ padding: 20 }}>
        <ReactGoogleSlides
          width="50%"
          slidesLink="https://docs.google.com/presentation/d/1_f7J6Mu4wAy5TOkcgQREekvGvGd3V_Tt09nMmKb6T0I/edit?usp=sharing"
          showControls
        />
      </div>
      <h1>75% Width + Showing controls + 10 second duration</h1>
      <div style={{ padding: 20 }}>
        <ReactGoogleSlides
          slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
          width="75%"
          slideDuration={10}
          showControls
        />
      </div>
      <h1>300 px Width/Height + Looping</h1>
      <div style={{ padding: 20 }}>
        <ReactGoogleSlides
          slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
          width={300}
          height={300}
          loop
        />
      </div>
    </div>
  );
};

export default App;
