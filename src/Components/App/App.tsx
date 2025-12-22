import { ReactNode } from 'react'
import { DateContextProvider } from '../../Context/DateContextProvider'
import { Calendar } from '../Calendar/Calendar'
import { CalendarHeader } from '../CalendarHeader/CalendarHeader'
import './App.css'
import { RealDayChangerWrapper } from '../RealDayChangerWrapper/RealDayChangerWrapper'


const App: React.FC = ():ReactNode => {

  return (
    <>
      <DateContextProvider>
        <CalendarHeader />
        <Calendar />
        <RealDayChangerWrapper />
      </DateContextProvider>
    </>
  )
}

export default App
