import { useState } from 'react'
import { CalendarStep } from './calendar-step'
import { ConfirmStep } from './confirm-step'

export function ScheduleForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  function handleClearSelectedDate() {
    setSelectedDate(null)
  }

  if (selectedDate) {
    return (
      <ConfirmStep
        onCancelSelectedDate={handleClearSelectedDate}
        selectedDate={selectedDate}
      />
    )
  }
  return <CalendarStep onSelectedDate={setSelectedDate} />
}
