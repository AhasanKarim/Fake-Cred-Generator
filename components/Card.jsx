import React from "react"
import Image from "next/image"

const Card = ({ fullName, email, job, address, avatar }) => {
  return (
    <div className="mx-auto w-180 rounded-lg bg-gray-200 shadow-md">
      <div className="flex flex-col items-center  space-x-3 p-4 md:flex-row">
        <div className="md:w-1/3">
          <Image
            src={avatar}
            alt=""
            width={100}
            height={100}
            className="rounded-full"
            priority
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="font-bold">{fullName}</h2>
            <p>{email}</p>
          <p>{job}</p>
          <p>Address: {address}</p>
        </div>
      </div>
    </div>
  )
}

export default Card