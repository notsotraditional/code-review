import type { ShipmentData } from "../../../lib/types/Shipments.types";

export const POST = async (req : Request) : Promise<Response> => {
    //RETRIEVE DATA FROM MONGODB

    //MOCK DATA for review purposes
    const shipments : ShipmentData[] = [{
        id: "1",
        waybillNumber: "123456789",
        deliveryAddress: "1234 Elm Street, Apt 56B, New York, NY 10001, USA",
        status: "In Transit",
        lastLocation: "Heathrow Airport warehouse",
        date: "2023-01-01"
    },
    {
        id: "2",
        waybillNumber: "123456789",
        deliveryAddress: "N1234 5th Ave, Apt 98B, New York, NY 10001, USA",
        status: "Requires attention",
        lastLocation: "Tunl warehouse",
        date: "2023-01-01"
    },
    {
        id: "3",
        waybillNumber: "123456789",
        deliveryAddress: "5678 Queen’s Road, Flat 3A,London, SW1A 1AA, UK",
        status: "Delivered",
        lastLocation: "5678 Queen’s Road, Flat 3A,London, SW1A 1AA, UK",
        date: "2023-02-01"
    },
    {
        id: "4",
        waybillNumber: "123456789",
        deliveryAddress: "5678 Queen’s Road, Flat 3A,London, SW1A 1AA, UK",
        status: "Delivered",
        lastLocation: "5678 Queen’s Road, Flat 3A,London, SW1A 1AA, UK",
        date: "2023-02-01"
    },
    {
        id: "5",
        waybillNumber: "123456789",
        deliveryAddress: "5678 Queen’s Road, Flat 3A,London, SW1A 1AA, UK",
        status: "Delivered",
        lastLocation: "5678 Queen’s Road, Flat 3A,London, SW1A 1AA, UK",
        date: "2023-02-01"
    }]


    return Response.json({ shipments }, { status: 200 })
}