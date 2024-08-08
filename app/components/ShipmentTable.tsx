'use client'
import { useState, useEffect } from 'react'
import { Table } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { Badge } from 'flowbite-react'
import { getStatusColor } from '../lib/helpers'
import type { ShipmentData } from '../lib/types/Shipments.types'
import Loading from '../company/dashboard/loading'

//For review purposes, this component is only assumed to be used in the dashboard page
//For a more complex scenario the data fetching logic should be more dynamcic.
//The data fetching logic should be extracted to the parent and passed as a prop as a potential solution.
const ShipmentTable: React.FC = (): React.ReactElement => {
  const [shipments, setShipments] = useState<ShipmentData[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchShipments = async (): Promise<void> => {
      const res: Response = await fetch('/api/v1/shipments', {
        method: 'POST',
      })
      const { shipments }: { shipments: ShipmentData[] } = await res.json()
      setShipments(shipments)
      setIsLoading(false)
    }

    try {
      fetchShipments()
    } catch (error) {
      //Add additional error handling logic here to show failed state
      setIsLoading(false)
      console.error(error)
    }
  }, [shipments, setShipments])

  return (
    <div className='w-full'>
      {isLoading ? (
        <Loading text='Getting shipments...' />
      ) : (
        <Table className='w-full'>
          <Table.Head>
            <Table.HeadCell>Waybill Number</Table.HeadCell>
            <Table.HeadCell>Delivery Address</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Last Location</Table.HeadCell>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {shipments.map((item: ShipmentData) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.waybillNumber}</Table.Cell>
                <Table.Cell>{item.deliveryAddress}</Table.Cell>
                <Table.Cell>
                  <Badge color={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </Table.Cell>
                <Table.Cell>{item.lastLocation}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>
                  <Button
                    className='w-full min-w-28 bg-primary text-white'
                    href={`/shipment/${item.id}`}
                  >
                    View
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  )
}

export default ShipmentTable
