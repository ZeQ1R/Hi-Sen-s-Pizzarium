import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/button';
import { Flame, Leaf, Star } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: { en: 'Margherita', sq: 'Margherita', mk: 'Маргарита' },
    description: {
      en: 'Fresh tomato, mozzarella, basil',
      sq: 'Domate e freskët, mozzarella, borzilok',
      mk: 'Свеж домат, моцарела, босилек',
    },
    price: '€8.50',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80',
    badge: 'popular',
  },
  {
    id: 2,
    name: { en: 'Pepperoni', sq: 'Pepperoni', mk: 'Пеперони' },
    description: {
      en: 'Spicy pepperoni, mozzarella, tomato sauce',
      sq: 'Pepperoni pikante, mozzarella, salcë domatesh',
      mk: 'Лут пеперони, моцарела, сос од домат',
    },
    price: '€10.00',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&q=80',
    badge: 'spicy',
  },
  {
    id: 3,
    name: { en: 'Quattro Formaggi', sq: 'Quattro Formaggi', mk: 'Кватро Формаѓи' },
    description: {
      en: 'Four cheese blend with mozzarella',
      sq: 'Përzierje e katër djathërave me mozzarella',
      mk: 'Мешавина од четири сирења со моцарела',
    },
    price: '€11.50',
    image: 'https://images.unsplash.com/photo-1593504049359-74330189a345?w=400&q=80',
    badge: null,
  },
  {
    id: 4,
    name: { en: 'Vegetariana', sq: 'Vegjetariane', mk: 'Вегетаријанска' },
    description: {
      en: 'Fresh vegetables, olives, mushrooms',
      sq: 'Perime të freskëta, ullinj, kërpudha',
      mk: 'Свеж зеленчук, маслинки, печурки',
    },
    price: '€9.50',
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80',
    badge: 'vegan',
  },
  {
    id: 5,
    name: { en: 'Diavola', sq: 'Diavola', mk: 'Диавола' },
    description: {
      en: 'Spicy salami, chili, mozzarella',
      sq: 'Sallam pikant, spec djegës, mozzarella',
      mk: 'Лута салама, чили, моцарела',
    },
    price: '€10.50',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    badge: 'spicy',
  },
  {
    id: 6,
    name: { en: 'Capricciosa', sq: 'Kapriçoza', mk: 'Капричоза' },
    description: {
      en: 'Ham, mushrooms, artichokes, olives',
      sq: 'Proshutë, kërpudha, anginare, ullinj',
      mk: 'Шунка, печурки, артичоки, маслинки',
    },
    price: '€11.00',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&q=80',
    badge: 'popular',
  },
];

const Menu = () => {
  const { language, t } = useLanguage();
  const [hoveredItem, setHoveredItem] = useState(null);

  const getBadgeContent = (badge) => {
    if (!badge) return null;
    
    const badges = {
      popular: { icon: Star, label: 'Popular', bg: 'bg-accent', text: 'text-accent-foreground' },
      spicy: { icon: Flame, label: 'Spicy', bg: 'bg-primary', text: 'text-primary-foreground' },
      vegan: { icon: Leaf, label: 'Vegan', bg: 'bg-olive', text: 'text-cream' },
    };
    
    return badges[badge];
  };

  return (
    <section id="menu" className="py-24 bg-secondary/30">
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
            {language === 'en' ? 'Our Menu' : language === 'sq' ? 'Menuja Jonë' : 'Наше Мени'}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {language === 'en' ? 'Signature Pizzas' : language === 'sq' ? 'Picat Tona Speciale' : 'Наши Специјални Пици'}
          </h2>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => {
            const badge = getBadgeContent(item.badge);
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-medium transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name[language]}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredItem === item.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  {badge && (
                    <div
                      className={`absolute top-4 right-4 ${badge.bg} ${badge.text} px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5`}
                    >
                      <badge.icon className="w-3.5 h-3.5" />
                      {badge.label}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      {item.name[language]}
                    </h3>
                    <span className="text-xl font-bold text-primary">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description[language]}
                  </p>
                  <Button
                    variant="pizzaOutline"
                    size="sm"
                    className="w-full"
                  >
                    {t('nav.orderNow')}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="pizza" size="lg">
            {t('hero.viewMenu')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
