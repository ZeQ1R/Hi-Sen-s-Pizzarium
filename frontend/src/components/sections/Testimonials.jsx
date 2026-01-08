import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = {
  en: [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Food Blogger',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      rating: 5,
      text: "The best pizza I've ever had! The crust is perfectly crispy, and the toppings are always fresh. Hi-Sen's has become my family's favorite spot.",
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Customer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      rating: 5,
      text: 'Great atmosphere for family dinners. The staff is incredibly friendly, and the delivery is always on time. Highly recommend!',
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Local Resident',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      rating: 5,
      text: 'Finally, a pizza place that gets it right! Fresh ingredients, generous portions, and amazing prices. We order here every week.',
    },
  ],
  sq: [
    {
      id: 1,
      name: 'Arta Hoxha',
      role: 'Blogere Gastronomie',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      rating: 5,
      text: "Pica më e mirë që kam ngrënë ndonjëherë! Brumi është perfekt i krokant, dhe përbërësit janë gjithmonë të freskët. Hi-Sen's ka bërë vendin favorit të familjes sime.",
    },
    {
      id: 2,
      name: 'Arben Krasniqi',
      role: 'Klient i Rregullt',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      rating: 5,
      text: 'Ambient i shkëlqyer për darka familjare. Stafi është jashtëzakonisht miqësor, dhe dërgesa është gjithmonë në kohë. E rekomandoj shumë!',
    },
    {
      id: 3,
      name: 'Elira Berisha',
      role: 'Banore Lokale',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      rating: 5,
      text: 'Më në fund, një vend pice që e bën si duhet! Përbërës të freskët, porcione bujare, dhe çmime të mahnitshme. Porositim këtu çdo javë.',
    },
  ],
  mk: [
    {
      id: 1,
      name: 'Ана Стојановска',
      role: 'Гастрономски Блогер',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      rating: 5,
      text: 'Најдобрата пица што сом ја јадела! Кората е совршено крцкава, а додатоците се секогаш свежи. Hi-Sen\'s стана омилено место на моето семејство.',
    },
    {
      id: 2,
      name: 'Марко Петровски',
      role: 'Редовен Клиент',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      rating: 5,
      text: 'Одлична атмосфера за семејни вечери. Персоналот е неверојатно пријателски, а доставата е секогаш навреме. Многу препорачувам!',
    },
    {
      id: 3,
      name: 'Елена Димитровска',
      role: 'Локален Жител',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      rating: 5,
      text: 'Конечно, пицерија што го прави како што треба! Свежи состојки, щедри порции, и неверојатни цени. Порачуваме тука секоја недела.',
    },
  ],
};

const Testimonials = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const currentTestimonials = testimonials[language] || testimonials.en;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % currentTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
  };

  return (
    <section className="py-24 bg-secondary/30">
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
            {t('testimonials.subtitle')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 lg:p-12 shadow-card relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-primary/10">
                <Quote className="w-20 h-20" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                  "{currentTestimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={currentTestimonials[currentIndex].avatar}
                    alt={currentTestimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-secondary"
                  />
                  <div>
                    <div className="font-heading font-bold text-foreground">
                      {currentTestimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-medium flex items-center justify-center transition-all hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-medium flex items-center justify-center transition-all hover:scale-105"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
