import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ChefHat, Clock, Award, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const features = [
    { icon: ChefHat, label: 'Expert Chefs' },
    { icon: Clock, label: 'Fast Service' },
    { icon: Award, label: 'Quality First' },
    { icon: Heart, label: 'Made with Love' },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Restaurant Interior"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Overlapping Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-8 -right-8 w-2/3 rounded-2xl overflow-hidden shadow-medium border-4 border-background hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
                  alt="Fresh Pizza"
                  className="w-full h-[200px] object-cover"
                />
              </motion.div>
            </div>
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-glow"
            >
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">{t('about.yearsExperience')}</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t('about.subtitle')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
