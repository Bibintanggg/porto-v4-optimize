"use client"

import Image from "next/image"
import { useParams } from "next/navigation"

export default function CertificatePage() {
  const params = useParams()
  const image = decodeURIComponent(params.image as string)

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt="Background Certificate"
          fill
          className="object-cover blur-2xl brightness-50"
          priority
        />
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-white/20">
        <Image
          src={image}
          alt="Certificate"
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>
    </div>
  )
}
