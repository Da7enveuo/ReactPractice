import React from 'react'  
import { endOfToday, set } from 'date-fns' 
import TimeRange from 'react-timeline-range-slider'  
import "./TagMenu.css"

const now = new Date()
const getTodayAtSpecificHour = (hour = 12) =>
	set(now, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 })

const selectedStart = getTodayAtSpecificHour()
const selectedEnd = getTodayAtSpecificHour(14)

const startTime = getTodayAtSpecificHour(7)
const endTime = endOfToday()

const disabledIntervals = [
  { start: getTodayAtSpecificHour(16), end: getTodayAtSpecificHour(17) },
  { start: getTodayAtSpecificHour(7), end: getTodayAtSpecificHour(12) },
  { start: getTodayAtSpecificHour(20), end: getTodayAtSpecificHour(24) }
]

function TimeSlider() {  
  const state = {  
    error: false,  
    selectedInterval: [selectedStart, selectedEnd],  
  }
	
  const errorHandler = ({ error }) => this.setState({ error })  

  const onChangeCallback = selectedInterval => this.setState({ selectedInterval })  
 
    const { selectedInterval, error } = state  
      return (  
        <TimeRange
          error={error}  
          ticksNumber={36}  
          selectedInterval={selectedInterval}  
          timelineInterval={[startTime, endTime]}  
          onUpdateCallback={errorHandler}  
          onChangeCallback={onChangeCallback}
          disabledIntervals={disabledIntervals}  
        />
      )  
  }  


export default TimeSlider