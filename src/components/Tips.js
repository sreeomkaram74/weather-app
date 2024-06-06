import React from 'react';
//to display Tips in the bottom  section
// improvement:currently these tips are hard coded considering sunny weather condition.more tips need to be conditionalized based on the weather
const Tips = () => {
  return (
    <div className="tips">
      <h2>Personalized Tips</h2>
      <ul>
        <li>It’s a sunny day! Enjoy the outdoors and stay hydrated.</li>
        <li>UV index is moderate, so apply sunscreen if you’re outside.</li>
        <li>No rain expected, but keep an eye on the weather updates.</li>
      </ul>
    </div>
  );
};

export default Tips;
