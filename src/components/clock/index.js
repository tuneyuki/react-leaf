import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    setInterval(() => {
      let nowDate = new Date();
      let dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ]
      let dateStr =  ( '0000' + nowDate.getFullYear()).slice( -4 ) + "/" + ( '00' + nowDate.getMonth()).slice( -2 ) + "/" + ( '00' + nowDate.getDate()).slice( -2 ) + "(" + dayOfWeekStr[nowDate.getDay()] + ")"
      setDate(dateStr)
    }, 1000)
  },[])

  useEffect(() => {
    setInterval(() => {
      let nowTime = new Date();
      let timeStr =  ( '00' + nowTime.getHours()).slice( -2 ) + ":" + ( '00' + nowTime.getMinutes()).slice( -2 ) + ":" + ( '00' + nowTime.getSeconds()).slice( -2 )
      setTime(timeStr)
    }, 1000)
  },[])


  return (
    <div className="w-full flex flex-col justify-center">
      <div>
        <h2 className="text-2xl text-center font-bold">{date}</h2>
        <h1 className="text-5xl text-center text-blue-800 font-bold">{time}</h1>
      </div>
    </div>
  );
}

export default Clock;
