import './App.css';
import Heatmap from './components/heatmap';
import Clock from './components/clock'
import Linechart from './components/linechart';
import Table1 from './components/table1';


function App() {
  return (
    <div className='h-screen'>
      <header className='h-16 bg-gradient-to-r from-blue-800 to-sky-300 flex flex-col justify-center'>
        <div className='flex justify-between'>
          <div className='text-2xl font-bold text-white px-4'>
            Operational health
          </div>
          <div className='flex mx-4'>
            <button className='border-2 rounded-lg bg-blue-900 text-white px-8 font-bold mx-1 hover:bg-blue-700 active:bg-blue-500'>Japan</button>
            <button className='border-2 rounded-lg bg-green-500 text-white px-8 font-bold mx-1 hover:bg-green-400 active:bg-green-300'>World</button>
            <button className='border-2 rounded-lg bg-orange-500 text-white px-8 font-bold mx-1 hover:bg-orange-400 active:bg-orange-300'>xx Pay</button>
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
          <div className='w-[40%]'>
            <div className='h-32'>表</div>
            <div className='h-8'>パネル</div>
	    <div className='h-56'>
              <Linechart />
	    </div>
	  </div>
          <div className='w-[20%]'>
	    <div className='h-32'>
              <Clock />
	    </div>
          </div>
        </div>

        {/* 2段目 */}
        <div className='relative flex w-full'>
          <div className='w-1/5 mx-1'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 my-1'>
	      <p className='text-white text-center text-xl'>
	        No problem
	      </p>
	    </div>
            <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
	      <p className='text-white text-2xl text-bold'>
	        Service integration trend
	      </p>
	    </div>
	    <div>
	      <Table1 />
	    </div>
          </div>
          <div className='w-1/5 mx-1'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 my-1'>
	      <p className='text-white text-center text-xl'>
	        No problem
	      </p>
	    </div>
            <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
	      <p className='text-white text-2xl text-bold'>
	        Area trend
	      </p>
	    </div>
	    <div>
	      <Table1 />
	    </div>
          </div>
          <div className='w-1/5 mx-1'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 my-1'>
	      <p className='text-white text-center text-xl'>
	        No problem
	      </p>
	    </div>
            <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
	      <p className='text-white text-2xl text-bold'>
	        Service trend
	      </p>
	    </div>
	    <div>
	      <Table1 />
	    </div>
          </div>
          <div className='w-1/5 mx-1'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 my-1'>
	      <p className='text-white text-center text-xl'>
	        No problem
	      </p>
	    </div>
            <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
	      <p className='text-white text-2xl text-bold'>
	        Phenomenon trend
	      </p>
	    </div>
	    <div>
	      <Table1 />
	    </div>
          </div>
          <div className='w-1/5 mx-1'>
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 my-1'>
	      <p className='text-white text-center text-xl'>
	        No problem
	      </p>
	    </div>
            <div className='h-12 bg-gradient-to-r from-blue-800 to-sky-300 flex items-center justify-center'>
	      <p className='text-white text-2xl text-bold'>
	        Cause trend
	      </p>
	    </div>
	    <div>
	      <Table1 />
	    </div>
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
