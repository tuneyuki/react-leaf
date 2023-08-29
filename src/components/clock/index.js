import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    setInterval(() => {
      let nowTime = new Date();
      let timeStr =  ( '00' + nowTime.getHours()).slice( -2 ) + ":" + ( '00' + nowTime.getMinutes()).slice( -2 ) + ":" + ( '00' + nowTime.getSeconds()).slice( -2 )
      setTime(timeStr)
    }, 1000)
  },[])

  useEffect(() => {
    setInterval(() => {
      let nowDate = new Date();
      let dateStr =  ( '00' + nowDate.getHours()).slice( -2 ) + ":" + ( '00' + nowDate.getMinutes()).slice( -2 ) + ":" + ( '00' + nowDate.getSeconds()).slice( -2 )
      setDate(dateStr)
    }, 60000)
  },[])


  return (
    <div className="h-32 w-full bg-white flex flex-col justify-center">
      <div>
        <h2 className="text-md text-center font-bold">{date}</h2>
        <h1 className="text-4xl text-center text-blue-800 font-bold">{time}</h1>
      </div>
    </div>
  );
}

export default Clock;
