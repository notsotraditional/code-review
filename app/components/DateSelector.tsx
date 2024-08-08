'use client'
import React, { useState } from 'react'
import { Datepicker } from 'flowbite-react'
import { Label } from 'flowbite-react'
import { addDays } from 'date-fns'

type DateSelectorProps = {
  fromDate: Date
  toDate: Date
  setFromDate: (date: Date) => void
  setToDate: (date: Date) => void
}

const DateSelector: React.FC<DateSelectorProps> = ({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}): React.ReactElement => {
  return (
    <div className='flex items-center justify-end gap-4'>
      <div className='flex flex-col'>
        <Label>From</Label>
        <Datepicker
          onSelectedDateChanged={(date: Date) => setFromDate(date)}
          defaultDate={fromDate}
        />
      </div>
      <div className='flex flex-col'>
        <Label>To</Label>
        <Datepicker
          onSelectedDateChanged={(date: Date) => setToDate(date)}
          minDate={addDays(fromDate, 1)}
          defaultDate={toDate}
        />
      </div>
    </div>
  )
}

export default DateSelector
