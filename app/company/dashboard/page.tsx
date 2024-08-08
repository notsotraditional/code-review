'use client'

import Container from '../../components/Container'
import DateSelector from '../../components/DateSelector'
import { useState } from 'react'
import { addDays } from 'date-fns'
import InfoCard from '../../components/InfoCard'
import ShipmentTable from '../../components/ShipmentTable'

const Page: React.FC = (): React.ReactElement => {
  const [fromDate, setFromDate] = useState<Date>(new Date())
  const [toDate, setToDate] = useState<Date>(addDays(new Date(), 7))

  return (
    <Container title='Dashboard'>
      <div className='mt-10 grid grid-cols-3 gap-4'>
        <InfoCard title='Total shipments' value='12' />
        <InfoCard title='Total in transit' value='45' />
        <InfoCard title='Total delivered' value='78' />
      </div>
      <div className='mt-10 flex w-full flex-col'>
        <div className='mb-5 w-full'>
          <h2 className='mb-1 text-xl'>Shipments</h2>
          <DateSelector
            fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
          />
        </div>
        <ShipmentTable />
      </div>
    </Container>
  )
}

export default Page
