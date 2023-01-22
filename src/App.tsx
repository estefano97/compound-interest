import { useState } from 'react';
import './App.css'
import ChartVisualizer from './ChartVisualizer'
import FormInteres from './FormInteres/FormInteres'
import { IFormInteres } from './FormInteres/IFormInteres';

function App() {

  const [FormInteresState, setFormInteresState] = useState<IFormInteres>();

  return (
    <div className="App">
      <FormInteres setFormInteresState={setFormInteresState} />
      <ChartVisualizer FormInteresState={FormInteresState} />
    </div>
  )
}

export default App
