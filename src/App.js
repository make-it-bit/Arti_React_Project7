import { useMemo, useState } from 'react';
import classes from './App.module.scss';

function App() {
  const [ weight, setWeight ] = useState(60);
  const [ height, setHeight ] = useState(170);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const BMI = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  });

  return (
    <main className={classes.wholeAppComponent}>
      <section className={classes.calculatorSection}>
        <header>
          <h1>BMI Calculator</h1>
        </header>
        <div>
          <p>Weight: {weight}kg</p>
          <input
            type='range'
            step='1'
            min='40'
            max='220'
            onChange={handleWeightChange}
            value={weight}
          />
        </div>
        <div>
          <p>Height: {height}cm</p>
          <input
            type='range'
            step='1'
            min='140'
            max='220'
            onChange={handleHeightChange}
            value={height}
          />
        </div>
        <div>
          <h2>Your BMI is:</h2>
          <div className={classes.bmiSection}>
            <p>{BMI}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
