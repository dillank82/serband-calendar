import { ReactNode } from 'react'
import { DateContextProvider } from '../../Context/DateContextProvider'
import { Calendar } from '../Calendar/Calendar'
import { CalendarHeader } from '../CalendarHeader/CalendarHeader'
import './App.css'


const App: React.FC = ():ReactNode => {

  return (
    <>
      <DateContextProvider>
        <CalendarHeader />
        <Calendar />
      </DateContextProvider>
    </>
  )
}

export default App
