import "../src/App.css";
import JumboTron from "./components/JumboTron";
import Datas from './components/Datas';


function App() {
  const backgroundColor = ['bg-red', 'bg-darkred', 'bg-blue'];
  return (
    <>
    <div className='HeaderTitle'> ANil </div>
    <div className="App">
      <header className="App-header">
        {Datas.map((value, index) => (
          <JumboTron
            title={value.text}
            descriptionn={value.description}
            background={backgroundColor[index]}
          />
        ))}
      </header>
    </div>
    </>
  );
}

export default App;