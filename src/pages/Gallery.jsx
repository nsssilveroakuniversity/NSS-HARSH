import { useState, useEffect, useCallback } from 'react'
import Header from '../components/Header'

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedAlt, setSelectedAlt] = useState('')

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    setSelectedImage('')
    setSelectedAlt('')
    document.body.style.overflow = 'auto'
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox()
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [lightboxOpen, closeLightbox])

  const galleryItems = [
    {
      src: 'uploads/Blood_camp1.jpg',
      alt: 'Blood Donation Camp',
      caption: 'Blood Donation Camp'
    },
    {
      src: 'uploads/Narmda1.jpg',
      alt: 'Tree Plantation Drive',
      caption: 'Tree Plantation Drive'
    },
    {
      src: 'uploads/Narmda2.jpg',
      alt: 'Cleanliness Drive',
      caption: 'Cleanliness Drive'
    },
    {
      src: 'uploads/Yoga1.jpg',
      alt: 'Yoga Day Celebration',
      caption: 'Yoga Day Celebration'
    },
    {
      src: 'uploads/Narmda4.jpg',
      alt: 'NSS Volunteers',
      caption: 'NSS Volunteers'
    }
  ]

  const openLightbox = (src, alt) => {
    setSelectedImage(src)
    setSelectedAlt(alt)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-5 py-8 md:py-12 pt-24 md:pt-28">
        <h1 className="text-center mb-8 md:mb-12 text-primary-700 text-3xl md:text-4xl font-bold tracking-wide">
          NSS Activities Gallery
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2.5 hover:scale-105 hover:shadow-2xl relative group"
              onClick={() => openLightbox(item.src, item.alt)}
            >
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-90 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="px-4 py-4 text-center bg-primary-50/50">
                <p className="text-primary-800 font-semibold text-base">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary-900/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-10 text-white text-5xl font-bold z-[10001] hover:text-gold-500 transition-colors duration-200"
            aria-label="Close lightbox"
          >
            &times;
          </button>
          <div
            className="max-w-[90vw] max-h-[80vh] relative z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={selectedAlt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found'
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
