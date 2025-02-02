import React, { useEffect, useRef, useState } from 'react'
import { CodeXml, MonitorSmartphone, Layers } from 'lucide-react'

const cardData = [
  {
    Icon: CodeXml,
    text: "Our website features a simple and secure file upload system. Users can easily share files, with data safely stored in firebase storage and managed by an Express backend.",
  },
  {
    Icon: MonitorSmartphone,
    text: "Our platform offers seamless file sharing across all devices, allowing you to upload and access files from smartphones, tablets or computers anytime anywhere.",
  },
  {
    Icon: Layers,
    text: "Our token-based system simplifies file sharing by generating a unique token for each file, allowing recipients to access it without needing an account.",
  },
]

export function AnimatedCards() {
  const [isVisible, setIsVisible] = useState(false)
  const cardsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    if (cardsRef.current) {
      observer.observe(cardsRef.current)
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current)
      }
    }
  }, [])

  return (
    <div ref={cardsRef} className="mt-10 px-5 md:px-0">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 lg:gap-8 justify-center align-middle">
        {cardData.map(({ Icon, text }, index) => (
          <li 
            key={index} 
            className={`flex transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: `${index * 250}ms` }}
          >
            <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg flex flex-col w-full transition-all duration-300 ease-in-out hover:bg-opacity-10 mx-10 my-20">
              <div className="p-6 flex items-center justify-center">
                <Icon className="w-16 h-16 text-[#FD914C]" />
              </div>
              <div className="px-6 pb-6">
                <p className="text-center text-sm">{text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
