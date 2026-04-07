import { Suspense } from 'react';
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav';
import NavBar from './components/NavBar/NavBar';
import PricingOptions from './components/PricingOptions/PricingOptions';
import ResultChart from './components/ResultsChart/ResultChart';
import { LineChart } from 'recharts';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

const pricingPromise = fetch("pricingData.json")
  .then(res => res.json())
  .then(data => data.pricingPlans);

const marksPromise = axios.get("marksData.json");

function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App
