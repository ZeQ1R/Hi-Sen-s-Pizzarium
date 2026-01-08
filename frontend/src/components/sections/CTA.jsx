import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=1920&q=80"
          alt="Pizza Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-black/90 via-warm-black/85 to-warm-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6"
          >
            {t('cta.headline')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="pizza"
              size="xl"
              className="group"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('cta.orderNow')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="pizzaOutline"
              size="xl"
              className="bg-cream/10 backdrop-blur-sm border-cream/30 text-cream hover:bg-cream hover:text-warm-black"
            >
              <MapPin className="w-5 h-5" />
              {t('cta.visitUs')}
            </Button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: '🍕', text: 'Fresh Daily' },
              { icon: '❤️', text: 'Made with Love' },
              { icon: '🚚', text: 'Fast Delivery' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-cream font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
