// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();
  const { language, setLanguage, t, dir } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // تحديد السكشن النشط
      const sections = ['about', 'skills', 'experience', 'projects', 'services', 'content', 'contact'];
      let currentSection = '';
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  setIsOpen(false);

  if (href.startsWith('/#')) {
    if (pathname !== '/') {
      window.location.href = href;
      return;
    }
    const sectionId = href.replace('/#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  } else {
    router.push(href);
  }
};

  const navLinks = [
    { href: '/#about', label: t('nav.about'), id: 'about' },
    { href: '/#skills', label: t('nav.skills'), id: 'skills' },
    { href: '/#experience', label: t('nav.experience'), id: 'experience' },
    { href: '/projects', label: t('nav.projects'), id: 'projects' },
    { href: '/#services', label: t('nav.services'), id: 'services' },
    { href: '/#content', label: t('nav.content'), id: 'content' },
    { href: '/blog', label: t('nav.blog'), id: 'blog' },
    { href: '/#contact', label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e14]/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0468d7] to-[#7c5cfc] flex items-center justify-center text-white font-mono text-sm font-bold">
              LK
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              ليث كلش
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.id === activeSection || pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-white relative ${
                    isActive ? 'text-[#27c6da]' : 'text-[#9aa7b8]'
                  }`}
                >
                  {link.label}
                  {isActive && link.id !== 'projects' && link.id !== 'blog' && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#27c6da] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:border-[#27c6da]/40 transition-colors text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'EN' : 'AR'}</span>
            </button>

            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="hidden md:inline-flex px-5 py-2.5 rounded-lg bg-[#27c6da] text-[#04101f] font-semibold text-sm transition-all hover:shadow-[0_8px_20px_rgba(39,198,218,0.25)] hover:-translate-y-0.5"
            >
              {t('nav.hire')}
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-white/10 space-y-1">
            {navLinks.map((link) => {
              const isActive = link.id === activeSection || pathname === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5 ${
                    isActive ? 'text-[#27c6da]' : 'text-[#9aa7b8]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="block px-4 py-3 mt-2 rounded-lg bg-[#27c6da] text-[#04101f] font-semibold text-center"
            >
              {t('nav.hire')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
