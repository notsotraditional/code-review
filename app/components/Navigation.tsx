
"use client"

import { Sidebar } from "flowbite-react";
import { HiArrowSmLeft, HiChartPie, HiInbox, HiShoppingBag, HiUser, HiTruck } from "react-icons/hi";
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
          <Sidebar.Item href="#" icon={HiTruck}>
            Shipments
          </Sidebar.Item>
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
