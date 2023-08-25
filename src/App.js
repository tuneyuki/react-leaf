import './App.css';
import Heatmap from './components/heatmap';


function App() {
  return (
    <div className='bg-gray-500 w-screen h-screen'>
      <header className='h-16 bg-cyan-100 border-4'>
        <div className='text-2xl bold'>
          Title
        </div>
      </header>
      <div id='Main'>
        <div className='h-96 bg-emerald-200 flex w-full'>
          <div className='w-[40%]'>
            <div className='h-8'>ボタン</div>
            <div className='h-auto'>
              <Heatmap />
            </div>
          </div>
          <div className='w-[40%] border-2'>表</div>
          <div className='w-[20%] border-2'>時計</div>
        </div>
        <div></div>
      </div>

    </div>
      
  );
}

export default App;
