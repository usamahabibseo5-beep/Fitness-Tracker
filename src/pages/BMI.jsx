


import React, { useState } from 'react';

const BMI = () => {
  const [userHeight, setUserHeight] = useState('');
  const [userWeight, setUserWeight] = useState('');
  const [bmiScore, setBmiScore] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');

  const handleBMI = () => {
    const heightInMeter = parseFloat(userHeight) / 100;
    const weightInKg = parseFloat(userWeight);

    if (heightInMeter > 0 && weightInKg > 0) {
      const result = weightInKg / (heightInMeter * heightInMeter);
      const finalBMI = result.toFixed(1);

      setBmiScore(finalBMI);

      if (result < 18.5) {
        setBmiStatus('Underweight');
      } else if (result < 25) {
        setBmiStatus('Healthy');
      } else if (result < 30) {
        setBmiStatus('Overweight');
      } else {
        setBmiStatus('Obese');
      }
    }
  };

  return (
    <div className="fitzone-wrapper">
      <div className="fitzone-card">
        
        <div className="fitzone-header">
          <h1>BMI Calculator</h1>
          <p>Check your body mass index instantly</p>
        </div>

        <div className="fitzone-fields">
          
          <div className="fitzone-input-box">
            <label>Height (cm)</label>
            <input
              type="number"
              placeholder="Enter height"
              value={userHeight}
              onChange={(e) => setUserHeight(e.target.value)}
            />
          </div>

          <div className="fitzone-input-box">
            <label>Weight (kg)</label>
            <input
              type="number"
              placeholder="Enter weight"
              value={userWeight}
              onChange={(e) => setUserWeight(e.target.value)}
            />
          </div>

        </div>

        <button className="fitzone-btn" onClick={handleBMI}>
          Calculate Now
        </button>

        {bmiScore && (
          <div className="fitzone-result-card">
            
            <div className="fitzone-score">
              <span>Your BMI</span>
              <h2>{bmiScore}</h2>
            </div>

            <div className={`fitzone-status ${bmiStatus.toLowerCase()}`}>
              {bmiStatus}
            </div>

            <p className="fitzone-message">
              {bmiStatus === 'Healthy' &&
                'Great! Your body weight is in a healthy range.'}

              {bmiStatus === 'Underweight' &&
                'You should focus on healthy weight gain.'}

              {bmiStatus === 'Overweight' &&
                'Try regular exercise and healthy eating.'}

              {bmiStatus === 'Obese' &&
                'It is better to consult a healthcare expert.'}
            </p>

          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;