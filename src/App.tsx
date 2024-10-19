import { UseEffectExample } from './components/use-effect/UseEffectExample';
import { UseStateExample } from './components/use-state/UseStateExample';

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen m-0 p-0">
      <UseStateExample />
      <UseEffectExample />
    </div>
  );
}

export default App;
