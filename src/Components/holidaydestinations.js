import "../Styles/holidaypagestyles.css"
import React from 'react';
import { useState } from 'react';

function HolidayDestinations() {


  const HolidaysFromDatabase = [

    {id:1,destination:"Spain"},
    {id:2,destination:"Portugal"},
    {id:3,destination:"Argentina"},
    {id:4,destination:"Tunisia"},
    {id:5,destination:"Malaysia"},
    {id:6,destination:"Seychelles"},
    {id:7,destination:"Jamaica"},
    {id:8,destination:"Zanzibar"},
    {id:9,destination:"England"},
    {id:10,destination:"France"},
    {id:11,destination:"Germany"},
    {id:12,destination:"Italy"},
    {id:13,destination:"Vatican City"},
    {id:14,destination:"Greece"},
    {id:15,destination:"Turkey"},
    {id:16,destination:"Lithuania"},
    {id:17,destination:"Estonia"},
    {id:18,destination:"Poland"},
    {id:19,destination:"Russia"},
    {id:20,destination:"Latvia"},
    {id:21,destination:"Netherlands"},
    {id:22,destination:"Switzerland"},
    {id:23,destination:"Luxembourg"},
    {id:24,destination:"Bulgaria"},
    {id:25,destination:"Romania"},
    {id:26,destination:"Serbia"},
    {id:27,destination:"Albania"},
    {id:28,destination:"Kosovo"},
    {id:29,destination:"Madagascar"},
    {id:30,destination:"Qatar"},
    {id:31,destination:"Dubai"},
    {id:32,destination:"Saudi Arabia"},
  ]

  const[holidays ,setHolidays] = useState(HolidaysFromDatabase)

  const filterHolidays = e => {
    const search = e.target.value.toLowerCase()
    const filterHolidays = HolidaysFromDatabase.filter(holidays =>holidays.destination.toLowerCase().includes(search))
    setHolidays(filterHolidays)
  }

  return (
    
    <div className='HolidayDestinationList'>

        <h2><b>Our Holiday Destinations</b></h2>
        <hr/>
        <input className="HolidaySearchBox" type="text" onChange={(e)=> filterHolidays(e)}/>
        <button className="HolidaySearchButton">Search</button>
        <ul>
          {holidays.map(holidays => {
            return <li key={holidays.id}>{holidays.destination}</li>
          })}
        </ul>
    

    </div>



  );
}

export default HolidayDestinations;