"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Restaurant Chain Refrigeration",
      description:
        "Installed complete walk-in cooler and freezer systems for 5 locations, including emergency backup systems.",
      image: "/modern-commercial-restaurant-walk-in-cooler-instal.jpg",
      category: "Commercial",
      slug: "restaurant-chain-refrigeration",
    },
    {
      title: "Warehouse Cold Storage",
      description: "Designed and implemented a 10,000 sq ft cold storage facility with temperature monitoring systems.",
      image: "/large-industrial-warehouse-cold-storage-facility.jpg",
      category: "Industrial",
      slug: "warehouse-cold-storage",
    },
    {
      title: "Grocery Store HVAC",
      description: "Complete HVAC overhaul including display refrigeration units and store climate control systems.",
      image: "/modern-grocery-store-refrigeration-display-cases.jpg",
      category: "Retail",
      slug: "grocery-store-hvac",
    },
  ]

  return (
    null
  )
}
