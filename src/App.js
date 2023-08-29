import './App.css';
import Heatmap from './components/heatmap';
import Clock from './components/clock'
import Linechart from './components/linechart';


function App() {
  return (
    <div className='bg-gray-500 w-screen h-screen'>
      <header className='h-16 border-4 bg-gradient-to-r from-blue-800 to-sky-300 flex flex-col justify-center'>
        <div className='flex justify-between'>
          <div className='text-2xl font-bold text-white px-4'>
            Operational health
          </div>
          <div className='flex mx-4'>
            <button className='border-2 rounded-lg bg-blue-900 text-white px-8 font-bold mx-1'>Japan</button>
            <button className='border-2 rounded-lg bg-green-500 text-white px-8 font-bold mx-1'>World</button>
            <button className='border-2 rounded-lg bg-orange-500 text-white px-8 font-bold mx-1'>xx Pay</button>
          </div>
        </div>
      </header>
      <div id='Main'>

        {/* 1段目 */}
        <div className='h-96 bg-emerald-200 flex w-full'>
          <div className='w-[40%]'>
            <div className='h-8'>ボタン</div>
            <div className='h-auto'>
              <Heatmap />
            </div>
          </div>
          <div className='w-[40%] border-2'>
            <div className='h-32 border-1'>表</div>
            <div className='h-8  border-1'>パネル</div>
	    <div className='h-56 border-1'>
              <Linechart />
	    </div>
	  </div>
          <div className='w-[20%] border-2'>
	    <div className='h-32'>
              <Clock />
	    </div>
          </div>
        </div>

        {/* 2段目 */}
        <div className='h-72 bg-amber-200 flex w-full'>
          <div className='w-1/5'>
            <div className='h-8'>表1タイトル</div>
            <div className='h-64 bg-gray-400'>表1ボディ</div>
          </div>
          <div className='w-1/5 border-2'>
            <div className='h-8'>表2タイトル</div>
            <div className='h-64 bg-white'>
            </div>
          </div>
          <div className='w-1/5 border-2'>
            <div>表3タイトル</div>
            <div>表3ボディ</div>
          </div>
          <div className='w-1/5 border-2'>
            <div>表4タイトル</div>
            <div>表4ボディ</div>
          </div>
          <div className='w-1/5 border-2'>
            <div>表5タイトル</div>
            <div>表5ボディ</div>
          </div>
        </div>

        {/* 3段目 */}
        <div className='h-72 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
          表
        </div>

        {/* 4段目パネル */}
        <div className='h-32 bg-gradient-to-r from-cyan-500 to-blue-500'>
          パネル
        </div>
      </div>

    </div>
      
  );
}

export default App;
