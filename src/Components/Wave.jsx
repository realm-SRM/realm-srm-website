import React from 'react';
import './Wave.css';

function Wave() {
  return (
    <div>
      <section className="absolute bottom-0 w-full">
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
        <div className="air air5"></div>
        <div className="air air6"></div>
      </section>
    </div>
  );
}

export default Wave;
