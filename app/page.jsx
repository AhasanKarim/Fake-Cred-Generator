"use client"
import { useEffect, useState } from "react"
import { generateFakeUsers } from "@/utils/generateFakeUsers"

import Card from "@/components/Card"

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = generateFakeUsers(10)
    setData(loadData)
  }, [])

  return (
    <main className="mx-auto min-h-screen items-center justify-center ">
      <div className="p-12">
        <h1 className="text-center text-3xl font-bold">Fake Users</h1>
        <div className="flex flex-col space-y-4">
          {data.map((item, idx) => {
            return (
              <Card
                key={idx}
                fullName={item.fullName}
                email={item.email}
                job={item.job}
                address={item.address}
                avatar={item.avatar}
              />
            )
          })}
        </div>
      </div>
      <footer className="text-center p-4">
        
        
      </footer>
    </main>
  )
}