import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    caption: { en: 'Signature Pizza', sq: 'Pica Jonë Speciale', mk: 'Наша Специјална Пица' },
    size: 'large',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    caption: { en: 'Cozy Interior', sq: 'Ambient i Ngrohtë', mk: 'Пријатен Ентериер' },
    size: 'small',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    caption: { en: 'Fresh Ingredients', sq: 'Përbërës të Freskët', mk: 'Свежи Состојки' },
    size: 'small',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&q=80',
    caption: { en: 'Classic Pepperoni', sq: 'Pepperoni Klasike', mk: 'Класичен Пеперони' },
    size: 'small',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=80',
    caption: { en: 'Pizza Variety', sq: 'Shumëllojshmëri Picash', mk: 'Разновидност на Пици' },
    size: 'small',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1538333581680-29dd4752ddf2?w=800&q=80',
    caption: { en: 'Dining Area', sq: 'Zona e Ngrënies', mk: 'Зона за Јадење' },
    size: 'large',
  },
];

const Gallery = () => {
  const { language, t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t('gallery.subtitle')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t('gallery.title')}
          </h2>
        </motion.div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className={`gallery-item group relative cursor-pointer ${
                image.size === 'large' ? 'col-span-2 lg:col-span-1 row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl h-full min-h-[200px] lg:min-h-[250px]">
                <img
                  src={image.src}
                  alt={image.caption[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-black/70 via-warm-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-cream/90 flex items-center justify-center shadow-medium">
                    <ZoomIn className="w-6 h-6 text-warm-black" />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-cream font-medium text-sm">
                    {image.caption[language]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-warm-black/95 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src.replace('w=600', 'w=1200').replace('w=800', 'w=1200')}
                alt={selectedImage.caption[language]}
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-cream text-lg font-medium">
                  {selectedImage.caption[language]}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-cream/10 backdrop-blur-sm flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <X className="w-6 h-6 text-cream" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
