'use client'

import Container from "../../components/Container"
import DateSelector from "../../components/DateSelector";
import { useState } from "react";
import { addDays } from "date-fns";
import InfoCard from "../../components/InfoCard";
import ShipmentTable from "../../components/ShipmentTable";
import { ShipmentData } from "../../lib/types/Shipments.types";

const Page: React.FC = () : React.ReactElement => {
  const [fromDate, setFromDate] = useState<Date>(new Date())
  const [toDate, setToDate] = useState<Date>(addDays(new Date(), 7))

  return <Container title="Dashboard">
    <div className="mt-10 grid grid-cols-3 gap-4">
      <InfoCard title="Total shipments" value="12" />
      <InfoCard title="Total in transit" value="45" />
      <InfoCard title="Total delivered" value="78" />
    </div>
    <div className="mt-10 flex flex-col w-full">
      <div className="w-full mb-5">
        <h2 className="text-xl mb-1">Shipments</h2>
        <DateSelector fromDate={fromDate} toDate={toDate} setFromDate={setFromDate} setToDate={setToDate} />
      </div>
      <ShipmentTable />
    </div>
  </Container>
}

export default Page