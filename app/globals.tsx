// contexts/LanguageContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<string, string>> = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.content': 'Content',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',

    // Hero
    'hero.badge': 'Available for Flutter projects',
    'hero.title': 'Flutter Developer Crafting',
    'hero.title.gradient': 'High-Performance Mobile Experiences',
    'hero.subtitle': 'Building modern, scalable, and beautiful mobile applications using Flutter, helping businesses transform ideas into successful digital products.',
    'hero.projects': 'View My Projects →',
    'hero.hire': 'Hire Me',
    'hero.stats.projects': 'Flutter Projects Completed',
    'hero.stats.apps': 'Mobile Apps Published',
    'hero.stats.experience': 'Years of Experience',
    'hero.stats.clients': 'Happy Clients',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Passionate about building exceptional mobile experiences',
    'about.role': 'Senior Flutter Developer & Mobile Engineer',
    'about.location': 'Syria',
    'about.availability': 'Available for freelance & full-time',
    'about.experience': '4+ years of experience',
    'about.description': "I'm a passionate Senior Flutter Developer with over 4 years of experience building high-performance cross-platform mobile applications. I specialize in Clean Architecture, state management, and creating delightful user experiences.",
    'about.focus.title': 'My Focus Areas',
    'about.focus.architecture': 'Clean Architecture',
    'about.focus.state': 'State Management',
    'about.focus.api': 'REST APIs & GraphQL',
    'about.focus.firebase': 'Firebase Integration',
    'about.focus.performance': 'Performance Optimization',
    'about.focus.animation': 'Custom Animations',
    'about.support.title': 'Supporting Experience',
    'about.support.qa': 'QA Engineering',
    'about.support.it': 'IT Support',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I work with',
    'skills.primary': 'Core Technologies',
    'skills.primary.tag': 'Expert Level',
    'skills.state': 'State Management',
    'skills.backend': 'Backend & Services',
    'skills.tools': 'Tools & Platforms',

    // Experience
    'experience.title': 'Experience',
    'experience.subtitle': 'My professional journey',
    'experience.current': 'Current Role',
    'experience.octo': 'Flutter Developer at OCTO Tech',
    'experience.octo.desc': 'Building cross-platform mobile applications with Flutter and Dart.',
    'experience.octo.responsibilities': [
      'Developing scalable Flutter applications with Clean Architecture',
      'Implementing complex state management solutions',
      'Integrating REST APIs and Firebase services',
      'Optimizing app performance and user experience'
    ],
    'experience.qa': 'QA Engineer Experience',
    'experience.it': 'IT Support Experience',
    'experience.education': 'Bachelor of Computer Engineering',
    'experience.university': 'University of Aleppo – 2024',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of my recent Flutter work',
    'projects.viewAll': 'View All Projects →',
    'projects.demo': 'Live Demo',
    'projects.source': 'Source Code',

    // Services
    'services.title': 'Services',
    'services.subtitle': 'What I can do for you',
    'services.app': 'Full App Development',
    'services.app.desc': 'End-to-end mobile app development from concept to deployment.',
    'services.consulting': 'Flutter Consulting',
    'services.consulting.desc': 'Expert guidance on architecture, performance, and best practices.',
    'services.migration': 'Migration & Porting',
    'services.migration.desc': 'Port existing apps to Flutter with minimal downtime.',
    'services.optimization': 'Performance Optimization',
    'services.optimization.desc': 'Identify and fix performance bottlenecks in Flutter apps.',
    'services.maintenance': 'Maintenance & Support',
    'services.maintenance.desc': 'Ongoing support and updates for your Flutter applications.',
    'services.team': 'Team Training',
    'services.team.desc': 'Train your team on Flutter best practices and advanced concepts.',

    // Testimonials
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What clients say about my work',

    // CTA
    'cta.title': 'Need a Flutter Developer for Your Next App?',
    'cta.subtitle': "Let's transform your idea into a scalable and high-performance mobile application.",
    'cta.consult': 'Book a Free Consultation',
    'cta.contact': 'Contact Me',

    // Contact
    'contact.title': "Let's Build Something Amazing",
    'contact.subtitle': 'Have a project in mind? Let\'s discuss how I can help bring your ideas to life.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.instagram': 'Instagram',
    'contact.tiktok': 'TikTok',
    'contact.name': 'Your Name',
    'contact.email.label': 'Your Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.note': "I'll respond within 24 hours",

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.about': 'About',
    'footer.skills': 'Skills',
    'footer.experience': 'Experience',
    'footer.projects': 'Projects',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',

    // Achievements
    'achievements.title': 'Achievements & Timeline',
    'achievements.subtitle': 'My journey in mobile development',
    'achievements.education': 'Bachelor of Computer Engineering',
    'achievements.university': 'University of Aleppo – 2024',
    'achievements.octo': 'Flutter Developer at OCTO Tech',
    'achievements.qa': 'QA Engineer Experience',
    'achievements.it': 'IT Support Experience',
    'achievements.content': 'Flutter Content Creator',

    // GitHub
    'github.title': 'GitHub',
    'github.subtitle': 'Open source contributions and projects',
    'github.repos': 'Repositories',
    'github.contributions': 'Contributions',
    'github.featured': 'Featured Repositories',
    'github.view': 'View GitHub Profile →',

    // LinkedIn
    'linkedin.title': 'LinkedIn',
    'linkedin.subtitle': 'Professional network and experience',
    'linkedin.summary': 'Senior Flutter Developer with 4+ years of experience building high-performance mobile applications.',
    'linkedin.connect': 'Connect on LinkedIn →'
  },
  ar: {
    // Navbar
    'nav.about': 'عني',
    'nav.skills': 'المهارات',
    'nav.experience': 'الخبرات',
    'nav.projects': 'المشاريع',
    'nav.services': 'الخدمات',
    'nav.content': 'المحتوى',
    'nav.blog': 'المدونة',
    'nav.contact': 'تواصل',
    'nav.hire': 'توظيفي',

    // Hero
    'hero.badge': 'متاح لمشاريع فلاتر',
    'hero.title': 'مطور فلاتر يصنع',
    'hero.title.gradient': 'تجارب محمولة عالية الأداء',
    'hero.subtitle': 'أبني تطبيقات محمولة حديثة وقابلة للتطوير وجميلة باستخدام فلاتر، أساعد الشركات على تحويل أفكارها إلى منتجات رقمية ناجحة.',
    'hero.projects': 'عرض مشاريعي ←',
    'hero.hire': 'توظيفي',
    'hero.stats.projects': 'مشروع فلاتر مكتمل',
    'hero.stats.apps': 'تطبيق منشور',
    'hero.stats.experience': 'سنوات من الخبرة',
    'hero.stats.clients': 'عميل سعيد',

    // About
    'about.title': 'عني',
    'about.subtitle': 'شغوف ببناء تجارب محمولة استثنائية',
    'about.role': 'مطور فلاتر أول ومهندس تطبيقات محمولة',
    'about.location': 'سوريا',
    'about.availability': 'متاح للعمل الحر والدوام الكامل',
    'about.experience': 'أكثر من 4 سنوات من الخبرة',
    'about.description': 'أنا مطور فلاتر أول شغوف مع أكثر من 4 سنوات من الخبرة في بناء تطبيقات محمولة عالية الأداء ومتعددة المنصات. أتخصص في الهندسة النظيفة وإدارة الحالة وإنشاء تجارب مستخدم رائعة.',
    'about.focus.title': 'مجالات تركيزي',
    'about.focus.architecture': 'الهندسة النظيفة',
    'about.focus.state': 'إدارة الحالة',
    'about.focus.api': 'REST APIs و GraphQL',
    'about.focus.firebase': 'تكامل Firebase',
    'about.focus.performance': 'تحسين الأداء',
    'about.focus.animation': 'الرسوم المتحركة المخصصة',
    'about.support.title': 'خبرات داعمة',
    'about.support.qa': 'هندسة ضمان الجودة',
    'about.support.it': 'الدعم التقني',

    // Skills
    'skills.title': 'المهارات التقنية',
    'skills.subtitle': 'التقنيات والأدوات التي أعمل بها',
    'skills.primary': 'التقنيات الأساسية',
    'skills.primary.tag': 'مستوى خبير',
    'skills.state': 'إدارة الحالة',
    'skills.backend': 'الخلفية والخدمات',
    'skills.tools': 'الأدوات والمنصات',

    // Experience
    'experience.title': 'الخبرات',
    'experience.subtitle': 'رحلتي المهنية',
    'experience.current': 'المنصب الحالي',
    'experience.octo': 'مطور فلاتر في OCTO Tech',
    'experience.octo.desc': 'بناء تطبيقات محمولة متعددة المنصات باستخدام فلاتر ودارت.',
    'experience.octo.responsibilities': [
      'تطوير تطبيقات فلاتر قابلة للتطوير باستخدام الهندسة النظيفة',
      'تنفيذ حلول متقدمة لإدارة الحالة',
      'تكامل REST APIs وخدمات Firebase',
      'تحسين أداء التطبيق وتجربة المستخدم'
    ],
    'experience.qa': 'خبرة في هندسة ضمان الجودة',
    'experience.it': 'خبرة في الدعم التقني',
    'experience.education': 'بكالوريوس هندسة حاسوب',
    'experience.university': 'جامعة حلب – 2024',

    // Projects
    'projects.title': 'المشاريع المميزة',
    'projects.subtitle': 'بعض من أعمالي الأخيرة في فلاتر',
    'projects.viewAll': 'عرض جميع المشاريع ←',
    'projects.demo': 'عرض حي',
    'projects.source': 'الكود المصدري',

    // Services
    'services.title': 'الخدمات',
    'services.subtitle': 'ماذا يمكنني أن أقدم لك',
    'services.app': 'تطوير تطبيقات متكاملة',
    'services.app.desc': 'تطوير تطبيقات محمولة من البداية إلى النشر.',
    'services.consulting': 'استشارات فلاتر',
    'services.consulting.desc': 'إرشاد خبير في الهندسة والأداء وأفضل الممارسات.',
    'services.migration': 'الهجرة والتحويل',
    'services.migration.desc': 'تحويل التطبيقات الحالية إلى فلاتر بأقل وقت تعطل.',
    'services.optimization': 'تحسين الأداء',
    'services.optimization.desc': 'تحديد وإصلاح اختناقات الأداء في تطبيقات فلاتر.',
    'services.maintenance': 'الصيانة والدعم',
    'services.maintenance.desc': 'دعم مستمر وتحديثات لتطبيقات فلاتر الخاصة بك.',
    'services.team': 'تدريب الفريق',
    'services.team.desc': 'تدريب فريقك على أفضل ممارسات فلاتر والمفاهيم المتقدمة.',

    // Testimonials
    'testimonials.title': 'التوصيات',
    'testimonials.subtitle': 'ماذا يقول العملاء عن عملي',

    // CTA
    'cta.title': 'هل تحتاج مطور فلاتر لتطبيقك القادم؟',
    'cta.subtitle': 'دعنا نحول فكرتك إلى تطبيق محمول قابل للتطوير وعالي الأداء.',
    'cta.consult': 'احجز استشارة مجانية',
    'cta.contact': 'تواصل معي',

    // Contact
    'contact.title': 'لنبني شيئاً مذهلاً',
    'contact.subtitle': 'هل لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكنني المساعدة في تحقيق أفكارك.',
    'contact.email': 'البريد الإلكتروني',
    'contact.linkedin': 'لينكد إن',
    'contact.github': 'جيت هاب',
    'contact.instagram': 'إنستغرام',
    'contact.tiktok': 'تيك توك',
    'contact.name': 'اسمك',
    'contact.email.label': 'بريدك الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.note': 'سأرد في غضون 24 ساعة',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.home': 'الرئيسية',
    'footer.about': 'عني',
    'footer.skills': 'المهارات',
    'footer.experience': 'الخبرات',
    'footer.projects': 'المشاريع',
    'footer.blog': 'المدونة',
    'footer.contact': 'تواصل',

    // Achievements
    'achievements.title': 'الإنجازات والجدول الزمني',
    'achievements.subtitle': 'رحلتي في تطوير التطبيقات المحمولة',
    'achievements.education': 'بكالوريوس هندسة حاسوب',
    'achievements.university': 'جامعة حلب – 2024',
    'achievements.octo': 'مطور فلاتر في OCTO Tech',
    'achievements.qa': 'خبرة في هندسة ضمان الجودة',
    'achievements.it': 'خبرة في الدعم التقني',
    'achievements.content': 'صانع محتوى فلاتر',

    // GitHub
    'github.title': 'جيت هاب',
    'github.subtitle': 'المساهمات مفتوحة المصدر والمشاريع',
    'github.repos': 'المستودعات',
    'github.contributions': 'المساهمات',
    'github.featured': 'المستودعات المميزة',
    'github.view': 'عرض ملف جيت هاب ←',

    // LinkedIn
    'linkedin.title': 'لينكد إن',
    'linkedin.subtitle': 'الشبكة المهنية والخبرات',
    'linkedin.summary': 'مطور فلاتر أول مع أكثر من 4 سنوات من الخبرة في بناء تطبيقات محمولة عالية الأداء.',
    'linkedin.connect': 'تواصل على لينكد إن ←'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'ar')) {
      setLanguage(saved);
      setDir(saved === 'ar' ? 'rtl' : 'ltr');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
      setDir(language === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}