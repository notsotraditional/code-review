
"use client"

import { Sidebar } from "flowbite-react";
import { HiArrowSmLeft, HiChartPie, HiClock, HiShoppingBag, HiUser, HiTruck, HiPlus, HiCheckCircle } from "react-icons/hi";
import Logo from '../../public/logo.png'

const Navigation = () : React.ReactElement => {
  return (
    <Sidebar aria-label="Tunl Menu" className="h-screen">
     <Sidebar.Logo href="/" img={Logo.src} imgAlt="Tunl Logo"/>
      <Sidebar.Items className="mt-10">
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiTruck} label="Shipments">
            <Sidebar.Item href="/shipments/active" icon={HiPlus}>
              New Shipment
            </Sidebar.Item>
            <Sidebar.Item href="/products" icon={HiClock}>
              In Progress
            </Sidebar.Item>
            <Sidebar.Item href="/products" icon={HiCheckCircle}>
              Delivered
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Account
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmLeft}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Navigation
