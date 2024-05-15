import React from 'react'
import { Image, Shimmer } from "react-shimmer";


export default function ShimmerLoad() {
  return (
    <>
           <Image
              src="https://source.unsplash.com/random/800x600"
              fallback={<Shimmer width={425} height={400} />}
            />
           
    </>
  )
}
