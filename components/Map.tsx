"use client"

import React, { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"

import Image from "next/image"
import "mapbox-gl/dist/mapbox-gl.css"

const Map: React.FC = () => {

  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState<boolean>(false)

  // 50.921918 lat, 6.930111 lon
  const lng = 6.930111
  const lat = 50.921918
  const zoom = 8

  

  useEffect(() => {
    // Provide Mapbox access token
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ""

    const map = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: 'mapbox://styles/mapbox/standard',
      center: [lng, lat],
      zoom,
      attributionControl: false,
      
    })

    map.on("load", () => {
      setMapLoaded(true)
    })

    return () => {
      map.remove() // Cleanup on unmount
    }
  }, [lat, lng, zoom])

  return (
    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
      {/* Fallback image while the map is loading */}
      {!mapLoaded && (
        <Image
          alt="Map Loading"
          src="/avatar.png"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      )}

      {/* Actual map container */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Absolute marker in the center */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   flex items-center justify-center w-14 h-14 md:w-20 md:h-20 
                   rounded-full shadow-lg cursor-pointer bg-blue-400 bg-opacity-40 
                   border-2 md:border-4 border-uk-grouped-primary-light border-opacity-80 hover:animate-pulse"
      >
        <Image 
            src="/avatar.png"
            alt="Map Marker"
            width={50}
            height={50}
            className="w-8 h-8 md:w-12 md:h-12"
          
        />
      </div>
    </div>
  )
}

export default Map