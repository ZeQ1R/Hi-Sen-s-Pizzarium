import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {
  Accessibility,
  Wifi,
  Bath,
  Car,
  Dog,
  CreditCard,
  Baby,
  Moon,
  User,
  Users,
  Heart,
} from 'lucide-react';

const Amenities = () => {
  const { t } = useLanguage();

  const amenities = [
    { icon: Accessibility, key: 'wheelchair' },
    { icon: Wifi, key: 'wifi' },
    { icon: Bath, key: 'toilet' },
    { icon: Car, key: 'parking' },
    { icon: Dog, key: 'dogs' },
    { icon: CreditCard, key: 'cards' },
    { icon: Baby, key: 'kids' },
  ];

  const popularFor = [
    { icon: Moon, key: 'dinner' },
    { icon: User, key: 'solo' },
    { icon: Users, key: 'groups' },
    { icon: Heart, key: 'families' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t('amenities.subtitle')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-8">
              {t('amenities.title')}
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={amenity.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center group-hover:bg-olive/20 transition-colors">
                    <amenity.icon className="w-5 h-5 text-olive" />
                  </div>
                  <span className="font-medium text-foreground">
                    {t(`amenities.${amenity.key}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Popular For */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              {t('popularFor.title')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-8">
              {t('popularFor.title')}
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {popularFor.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 rounded-2xl bg-card shadow-card hover:shadow-medium transition-all text-center cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {t(`popularFor.${item.key}`)}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Decorative Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 rounded-2xl overflow-hidden shadow-soft"
            >
              <img
                src="https://images.unsplash.com/photo-1538333581680-29dd4752ddf2?w=800&q=80"
                alt="Restaurant Interior"
                className="w-full h-48 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
