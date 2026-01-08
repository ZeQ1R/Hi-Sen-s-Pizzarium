import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Truck, ShoppingBag, UtensilsCrossed, Users, Zap } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      key: 'delivery',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: ShoppingBag,
      key: 'takeaway',
      color: 'from-accent/20 to-accent/5',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
    },
    {
      icon: UtensilsCrossed,
      key: 'dineIn',
      color: 'from-olive/20 to-olive/5',
      iconBg: 'bg-olive/10',
      iconColor: 'text-olive',
    },
    {
      icon: Users,
      key: 'tableService',
      color: 'from-gold/20 to-gold/5',
      iconBg: 'bg-gold/10',
      iconColor: 'text-gold',
    },
    {
      icon: Zap,
      key: 'quickBite',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
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
            {t('services.subtitle')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t('services.title')}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-6 rounded-2xl bg-card shadow-card hover:shadow-medium transition-all cursor-pointer group overflow-hidden`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {t(`services.${service.key}`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`services.${service.key}Desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
