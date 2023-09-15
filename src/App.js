import './App.css';
import Heatmap from './components/heatmap';
import Clock from './components/clock'
import Linechart from './components/linechart';
import Table1 from './components/table1';


function App() {
  return (
    <div>
      <header className='h-16 bg-gradient-to-r from-blue-800 to-sky-300 flex flex-col justify-center'>
        <div className='flex justify-between'>
          <div className='text-2xl font-bold text-white px-8'>
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
        <div className='h-relative bg-white flex w-full'>
          <div className='w-[40%]'>
            <div className='relative mt-1 flex justify-center'>
	      <div className='flex flex-col items-center gap-1 pr-1'>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-20'>Easy</button>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-20'>Reset</button>
	      </div>
	      <div className='flex flex-col items-center gap-1 pr-1'>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-20'>Translate</button>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-20'>Reload</button>
	      </div>
	      <div className='flex flex-col items-center gap-1 pr-1'>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-20'>Heatmap</button>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-20'>Update</button>
	      </div>
	      <div className='flex flex-col items-center gap-1 pr-1'>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-20'>Simple</button>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-20'>Ticket</button>
	      </div>
	      <div className='flex flex-col items-center gap-1 pr-1'>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-24'>Normal</button>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-24'>No mosaic</button>
	      </div>
	      <div className='flex flex-col items-center gap-1 pr-1'>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-28'>Connection</button>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-28'>Light mode</button>
	      </div>
	      <div className='flex flex-col items-center gap-1 pr-1'>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-28'>Output</button>
                <button className='border-2 rounded-md bg-white text-gray-700 text-base hover:bg-gray-50 w-28'>Dark mode</button>
	      </div>
	    </div>
            <div className='h-128 m-1'>
              <Heatmap />
            </div>
          </div>
          <div className='w-[40%]'>
            <div className='h-32'>表</div>
            <div className='h-8'>パネル</div>
	    <div className='h-96'>
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
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 mb-1'>
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
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 mb-1'>
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
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 mb-1'>
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
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 mb-1'>
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
            <div className='h-8 rounded-lg bg-green-600 border-green-600 flex items-center justify-center px-8 mb-1'>
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
