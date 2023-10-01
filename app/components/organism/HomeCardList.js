import React from "react"
import Card from "../molekul/Card"
import Image from "next/image"

const HomeCardList = () => {
  return (
    <div className="flex justify-between">
      <Card title={"SERVICES"}>
        <div className="flex justify-between p-5 space-x-4 border rounded-full border-six">
          <Image
            src={"nodejs.svg"}
            width={80}
            height={50}
            alt="Lintang Dandung Prakoso"
          />
          <Image
            src={"nodejs.svg"}
            width={80}
            height={50}
            alt="Lintang Dandung Prakoso"
          />
        </div>
      </Card>
      <Card title={"PROJECT"}>
        <div className="flex justify-between p-5 space-x-4 border rounded-full border-six"></div>
      </Card>
      <Card title={"ABOUT"}>
        <div className="flex justify-between p-5 space-x-4 border rounded-full border-six"></div>
      </Card>
    </div>
  )
}

export default HomeCardList
