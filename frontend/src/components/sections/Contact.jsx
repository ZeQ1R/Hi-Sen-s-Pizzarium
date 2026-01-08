import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We will contact you soon.', {
      description: 'Thank you for reaching out to Hi-Sen\'s Pizzarium.',
    });
    
    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Rruga Kryesore 123, Gostivar',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+389 70 123 456',
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: t('contact.hoursValue'),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
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
            {t('contact.subtitle')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    <div className="font-medium text-foreground">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-card h-64 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80"
                alt="Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-warm-black/40 flex items-center justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-cream rounded-full font-semibold text-warm-black hover:bg-cream/90 transition-colors"
                >
                  <MapPin className="w-5 h-5 inline-block mr-2" />
                  Open in Maps
                </a>
              </div>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <a
                href="https://wa.me/38970123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-olive text-cream font-semibold hover:bg-olive/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    {t('contact.name')}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 h-12 rounded-xl"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    {t('contact.phone')}
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 h-12 rounded-xl"
                    placeholder="+389 70 123 456"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    {t('contact.message')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[140px] rounded-xl resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="pizza"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      {t('contact.send')}
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
