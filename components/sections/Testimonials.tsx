// components/sections/Testimonials.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'علي الشيخ',
      role: 'مدير مشروع',
      company: 'TechVentures',
      image: 'AH',
      rating: 5,
      review: 'كل مرحلة بالمشروع كانت واضحة، وكان يعطينا تحديثات بشكل مستمر. هيك بيكون التعامل الاحترافي',
    },
    {
      name: 'سارة',
      role: 'مدير مشروع',
      company: 'InnovateX',
      image: 'SK',
      rating: 5,
      review: 'ساعدنا نحول فكرتنا لتطبيق جاهز للاستخدام باحترافية عالية. النتيجة كانت أكثر من ممتازة..',
    },
    {
      name: 'محمد الحسن',
      role: 'مدير مشروع',
      company: '....',
      image: 'MH',
      rating: 5,
      review: 'أكتر شي ميّزه إنه ما بيكتفي بتنفيذ الطلب، بيقترح حلول بتخلي المنتج يطلع بأفضل صورة ممكنة.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white/[0.02]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c6da] shadow-[0_0_12px_#27c6da]" />
            <span className="text-sm font-mono text-[#27c6da] tracking-widest uppercase">
              {t('testimonials.title')}
            </span>
          </div>
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle mx-auto">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="glass rounded-xl p-6 hover:border-[#27c6da]/30 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-sm text-[#9aa7b8] leading-relaxed mb-6">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0468d7] to-[#7c5cfc] flex items-center justify-center text-white font-display font-semibold text-sm">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-[#5f6b7d]">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
