import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Shield,
  Flame,
  Settings,
  Users,
  Award,
  ArrowRight,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';

export default function ArrowFireLanding() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    { icon: Flame, key: 'service1' },
    { icon: Settings, key: 'service2' },
    { icon: Shield, key: 'service3' },
    { icon: Award, key: 'service4' },
    { icon: Users, key: 'service5' },
    { icon: Shield, key: 'service6' },
    { icon: Settings, key: 'service7' },
    { icon: Flame, key: 'service8' },
    { icon: Award, key: 'service9' },
  ];

  const galleryImages = [
    '/lovable-uploads/cd22de66-d791-4acf-9953-d0df8bb32d3e.png',
    '/lovable-uploads/05ff961a-35cb-4454-a78f-5588a7178dbc.png',
    '/lovable-uploads/fef6f4b2-acb8-44f7-ab48-084a69d31c38.png',
    '/lovable-uploads/44f5c3d2-6a74-4b3e-a6ce-88b7389daef8.png',
    '/lovable-uploads/65cc05b3-8b80-41f0-ab03-34fc8d7b5745.png',
    '/lovable-uploads/73cd4502-eabe-4c3a-a85e-1588b651b36d.png',
    '/lovable-uploads/2d6b3094-9c32-4f56-8097-2996410527f4.png',
  ];

  const promoImages = [
    { src: '/lovable-uploads/06c02ded-671d-4f2c-aa21-ca81a860bdfd.png', key: 'kitchen' },
    { src: '/lovable-uploads/a1f79f3e-b196-4925-8599-749d5e7e2245.png', key: 'grill' },
    { src: '/lovable-uploads/bd88be56-3252-46f8-aa10-ae64dc4ed5b4.png', key: 'garage' },
  ];

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-industrial-dark to-safety-gray text-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Arrow Fire Trading Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="#home" className="text-white hover:text-fire-orange transition-colors font-medium">{t('home')}</a>
              <a href="#about" className="text-white hover:text-fire-orange transition-colors font-medium">{t('about')}</a>
              <a href="#services" className="text-white hover:text-fire-orange transition-colors font-medium">{t('services')}</a>
              <a href="#gallery" className="text-white hover:text-fire-orange transition-colors font-medium">{t('gallery')}</a>
              <a href="#contact" className="text-white hover:text-fire-orange transition-colors font-medium">{t('contact')}</a>
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="lang-toggle"
              >
                {language === 'en' ? 'عربي' : 'EN'}
              </button>
              
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-white hover:text-fire-orange transition-colors font-medium">{t('home')}</a>
                <a href="#about" className="text-white hover:text-fire-orange transition-colors font-medium">{t('about')}</a>
                <a href="#services" className="text-white hover:text-fire-orange transition-colors font-medium">{t('services')}</a>
                <a href="#gallery" className="text-white hover:text-fire-orange transition-colors font-medium">{t('gallery')}</a>
                <a href="#contact" className="text-white hover:text-fire-orange transition-colors font-medium">{t('contact')}</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${galleryImages[0]}')` }}
        />
        <div className="hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-professional-en font-bold text-white mb-6 fade-in-up">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl font-professional-ar text-white/90 mb-8 fade-in-up" style={{animationDelay: '0.2s'}}>
              {t('heroSubtext')}
            </p>
            <Button 
              className="btn-fire text-lg hover:scale-110 transform transition-all duration-500 hover:shadow-2xl" 
              style={{animationDelay: '0.4s'}}
              onClick={() => window.open('https://wa.me/966561720820', '_blank')}
            >
              {t('getQuote')}
              <ArrowIcon className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-professional-en font-bold text-industrial-dark mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-lg text-safety-gray leading-relaxed">
                {t('aboutText')}
              </p>
            </div>
            <div className="slide-in-right">
              <img 
                src={galleryImages[6]} 
                alt="Arrow Fire Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-fire-red/10 via-fire-orange/5 to-safety-gray/10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-fire-red/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-fire-orange/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-safety-gray/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-professional-en font-bold text-industrial-dark mb-6">
              {t('servicesTitle')}
            </h2>
            <p className="text-xl font-professional-ar text-safety-gray max-w-3xl mx-auto">
              {language === 'en' ? 'Comprehensive fire safety solutions that protect what matters most. From advanced detection to emergency response, we deliver excellence in every project.' : 'حلول شاملة للسلامة من الحريق تحمي ما يهم أكثر. من الكشف المتقدم إلى الاستجابة للطوارئ، نحن نقدم التميز في كل مشروع.'}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Category 1: Detection & Monitoring */}
            <div className="group">
              <div className="bg-gradient-to-br from-fire-red to-fire-orange p-8 rounded-3xl text-white hover-lift scale-in" style={{animationDelay: '0.1s'}}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Shield className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">01</span>
                  </div>
                </div>
                <h3 className="text-2xl font-professional-en font-bold mb-4">
                  {language === 'en' ? 'Detection & Monitoring' : 'الكشف والمراقبة'}
                </h3>
                <p className="text-white/90 font-professional-ar mb-6">
                  {language === 'en' ? 'Advanced fire detection systems with real-time monitoring and smart alerts for immediate response.' : 'أنظمة كشف الحريق المتقدمة مع المراقبة في الوقت الفعلي والتنبيهات الذكية للاستجابة الفورية.'}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Smart Smoke Detection' : 'كشف الدخان الذكي'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Heat Sensing Technology' : 'تقنية استشعار الحرارة'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? '24/7 Monitoring' : 'مراقبة 24/7'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Category 2: Suppression & Control */}
            <div className="group">
              <div className="bg-gradient-to-br from-industrial-dark to-safety-gray p-8 rounded-3xl text-white hover-lift scale-in" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Flame className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">02</span>
                  </div>
                </div>
                <h3 className="text-2xl font-professional-en font-bold mb-4">
                  {language === 'en' ? 'Suppression & Control' : 'القمع والتحكم'}
                </h3>
                <p className="text-white/90 font-professional-ar mb-6">
                  {language === 'en' ? 'State-of-the-art fire suppression systems with automated control and rapid response capabilities.' : 'أنظمة قمع الحريق المتطورة مع التحكم الآلي وقدرات الاستجابة السريعة.'}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-fire-orange rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Automated Sprinklers' : 'رشاشات آلية'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-fire-orange rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Chemical Suppression' : 'القمع الكيميائي'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-fire-orange rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Instant Response' : 'استجابة فورية'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Category 3: Emergency & Safety */}
            <div className="group">
              <div className="bg-gradient-to-br from-fire-orange to-fire-red p-8 rounded-3xl text-white hover-lift scale-in" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Award className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">03</span>
                  </div>
                </div>
                <h3 className="text-2xl font-professional-en font-bold mb-4">
                  {language === 'en' ? 'Emergency & Safety' : 'الطوارئ والسلامة'}
                </h3>
                <p className="text-white/90 font-professional-ar mb-6">
                  {language === 'en' ? 'Comprehensive emergency response systems with evacuation planning and safety protocols.' : 'أنظمة الاستجابة للطوارئ الشاملة مع تخطيط الإخلاء وبروتوكولات السلامة.'}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Evacuation Planning' : 'تخطيط الإخلاء'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Safety Training' : 'تدريب السلامة'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Emergency Protocols' : 'بروتوكولات الطوارئ'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover-lift scale-in" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                <div className="w-12 h-12 bg-gradient-to-r from-fire-red to-fire-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-professional-en font-semibold text-industrial-dark mb-2">
                  {t(service.key)}
                </h4>
                <p className="text-sm text-safety-gray font-professional-ar">
                  {language === 'en' ? 'Professional fire safety solutions tailored to your specific needs.' : 'حلول السلامة من الحريق المهنية مصممة لاحتياجاتك المحددة.'}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button 
              className="btn-fire text-lg hover:scale-110 transform transition-all duration-500 hover:shadow-2xl" 
              onClick={() => window.open('https://wa.me/966561720820', '_blank')}
            >
              {language === 'en' ? 'Get Your Free Consultation' : 'احصل على استشارة مجانية'}
              <ArrowIcon className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-professional-en font-bold text-center text-industrial-dark mb-12">
            {t('certificatesTitle')}
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 hover-lift scale-in">
              <Award className="w-16 h-16 text-fire-red mx-auto mb-6 float" />
              <div className="space-y-4">
                <p className="text-lg text-safety-gray hover:text-fire-red transition-colors duration-300">{t('activity')}</p>
                <p className="text-lg text-safety-gray hover:text-fire-red transition-colors duration-300">{t('crNumber')}</p>
                <p className="text-lg text-safety-gray hover:text-fire-red transition-colors duration-300">{t('validated')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Safety at Home Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-fire-orange/5 via-fire-red/10 to-safety-gray/5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-fire-orange/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-fire-red/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-safety-gray/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-professional-en font-bold text-industrial-dark mb-6">
              {t('promoTitle')}
            </h2>
            <p className="text-xl font-professional-ar text-safety-gray max-w-4xl mx-auto">
              {language === 'en' ? 'Protect your family with professional fire safety solutions designed for every room in your home. From smart detection to emergency preparedness, we ensure your peace of mind.' : 'احمي عائلتك بحلول السلامة من الحريق المهنية المصممة لكل غرفة في منزلك. من الكشف الذكي إلى الاستعداد للطوارئ، نضمن راحة بالك.'}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Kitchen Safety */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-fire-red to-fire-orange rounded-3xl p-8 text-white hover-lift scale-in" style={{animationDelay: '0.1s'}}>
                <div className="relative mb-6">
                  <img 
                    src={promoImages[0].src} 
                    alt={t(promoImages[0].key)}
                    className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                      {language === 'en' ? 'Kitchen' : 'المطبخ'}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-professional-en font-bold mb-4">
                  {language === 'en' ? 'Kitchen Fire Safety' : 'السلامة من حريق المطبخ'}
                </h3>
                <p className="text-white/90 font-professional-ar mb-6">
                  {language === 'en' ? 'Advanced smoke detection and automatic suppression systems specifically designed for kitchen environments where most home fires start.' : 'أنظمة كشف الدخان المتقدمة والقمع التلقائي المصممة خصيصاً لبيئات المطبخ حيث تبدأ معظم حرائق المنازل.'}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Smart Smoke Alarms' : 'أجهزة إنذار الدخان الذكية'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Automatic Suppression' : 'القمع التلقائي'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Heat Monitoring' : 'مراقبة الحرارة'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Outdoor Safety */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-industrial-dark to-safety-gray rounded-3xl p-8 text-white hover-lift scale-in" style={{animationDelay: '0.2s'}}>
                <div className="relative mb-6">
                  <img 
                    src={promoImages[1].src} 
                    alt={t(promoImages[1].key)}
                    className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                      {language === 'en' ? 'Outdoor' : 'الخارج'}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-professional-en font-bold mb-4">
                  {language === 'en' ? 'Outdoor Fire Protection' : 'حماية الحريق الخارجية'}
                </h3>
                <p className="text-white/90 font-professional-ar mb-6">
                  {language === 'en' ? 'Comprehensive outdoor fire safety solutions including grill safety, garage protection, and emergency response systems for your property perimeter.' : 'حلول شاملة للسلامة من الحريق الخارجية تشمل سلامة الشواية وحماية الجراج وأنظمة الاستجابة للطوارئ لمحيط ممتلكاتك.'}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-fire-orange rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Grill Safety Systems' : 'أنظمة سلامة الشواية'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-fire-orange rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Garage Protection' : 'حماية الجراج'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-fire-orange rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Perimeter Monitoring' : 'مراقبة المحيط'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Garage Safety */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-fire-orange to-fire-red rounded-3xl p-8 text-white hover-lift scale-in" style={{animationDelay: '0.3s'}}>
                <div className="relative mb-6">
                  <img 
                    src={promoImages[2].src} 
                    alt={t(promoImages[2].key)}
                    className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                      {language === 'en' ? 'Garage' : 'الجراج'}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-professional-en font-bold mb-4">
                  {language === 'en' ? 'Garage Fire Safety' : 'السلامة من حريق الجراج'}
                </h3>
                <p className="text-white/90 font-professional-ar mb-6">
                  {language === 'en' ? 'Specialized fire detection and suppression systems for garage environments, protecting vehicles and stored items from fire hazards.' : 'أنظمة متخصصة للكشف عن الحريق وقمعه لبيئات الجراج، تحمي المركبات والعناصر المخزنة من مخاطر الحريق.'}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Vehicle Protection' : 'حماية المركبات'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Chemical Detection' : 'كشف المواد الكيميائية'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{language === 'en' ? 'Storage Safety' : 'سلامة التخزين'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Tips Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover-lift scale-in" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-fire-red to-fire-orange rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-professional-en font-semibold text-industrial-dark mb-2">
                {language === 'en' ? 'Install Smoke Alarms' : 'تركيب أجهزة إنذار الدخان'}
              </h4>
              <p className="text-sm text-safety-gray font-professional-ar">
                {language === 'en' ? 'Place smoke alarms in every bedroom and on every level of your home.' : 'ضع أجهزة إنذار الدخان في كل غرفة نوم وعلى كل مستوى من منزلك.'}
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover-lift scale-in" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-fire-red to-fire-orange rounded-xl flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-professional-en font-semibold text-industrial-dark mb-2">
                {language === 'en' ? 'Keep Fire Extinguishers' : 'احتفظ بطوافئ الحريق'}
              </h4>
              <p className="text-sm text-safety-gray font-professional-ar">
                {language === 'en' ? 'Have fire extinguishers in kitchen, garage, and near fireplaces.' : 'احتفظ بطوافئ الحريق في المطبخ والجراج وبالقرب من المواقد.'}
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover-lift scale-in" style={{animationDelay: '0.6s'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-fire-red to-fire-orange rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-professional-en font-semibold text-industrial-dark mb-2">
                {language === 'en' ? 'Create Escape Plan' : 'إنشاء خطة الهروب'}
              </h4>
              <p className="text-sm text-safety-gray font-professional-ar">
                {language === 'en' ? 'Develop and practice a fire escape plan with your family.' : 'طور ومارس خطة الهروب من الحريق مع عائلتك.'}
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover-lift scale-in" style={{animationDelay: '0.7s'}}>
              <div className="w-12 h-12 bg-gradient-to-r from-fire-red to-fire-orange rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-professional-en font-semibold text-industrial-dark mb-2">
                {language === 'en' ? 'Regular Maintenance' : 'الصيانة الدورية'}
              </h4>
              <p className="text-sm text-safety-gray font-professional-ar">
                {language === 'en' ? 'Schedule regular inspections and maintenance of all fire safety equipment.' : 'جدولة الفحوصات والصيانة الدورية لجميع معدات السلامة من الحريق.'}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button 
              className="btn-fire text-lg hover:scale-110 transform transition-all duration-500 hover:shadow-2xl" 
              onClick={() => window.open('https://wa.me/966561720820', '_blank')}
            >
              {language === 'en' ? 'Protect Your Home Today' : 'احمي منزلك اليوم'}
              <ArrowIcon className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-industrial-dark via-safety-gray to-steel-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-professional-en font-bold text-white mb-6">
              {t('galleryTitle')}
            </h2>
            <p className="text-xl font-professional-ar text-white/80 max-w-3xl mx-auto">
              {language === 'en' ? 'Discover our comprehensive fire safety solutions through real-world projects that demonstrate our commitment to excellence and innovation.' : 'اكتشف حلولنا الشاملة للسلامة من الحريق من خلال المشاريع الحقيقية التي تظهر التزامنا بالتميز والابتكار.'}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Project 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift scale-in" style={{animationDelay: '0.1s'}}>
              <div className="relative mb-6">
                <img 
                  src={galleryImages[0]} 
                  alt="Commercial Fire Safety System"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-fire-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {language === 'en' ? 'Commercial' : 'تجاري'}
                </div>
              </div>
              <h3 className="text-2xl font-professional-en font-bold text-white mb-4">
                {language === 'en' ? 'Commercial Fire Safety System' : 'نظام السلامة من الحريق التجاري'}
              </h3>
              <p className="text-white/80 font-professional-ar mb-6">
                {language === 'en' ? 'Complete fire detection and suppression system installation for a major commercial complex, ensuring maximum safety and compliance with international standards.' : 'تركيب نظام كامل للكشف عن الحريق وقمعه لمجمع تجاري كبير، مما يضمن أقصى درجات الأمان والامتثال للمعايير الدولية.'}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-fire-orange">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">{language === 'en' ? 'Fire Detection' : 'كشف الحريق'}</span>
                </div>
                <div className="flex items-center gap-2 text-fire-orange">
                  <Flame className="w-5 h-5" />
                  <span className="text-sm font-medium">{language === 'en' ? 'Suppression' : 'القمع'}</span>
                </div>
              </div>
            </div>

            {/* Featured Project 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift scale-in" style={{animationDelay: '0.2s'}}>
              <div className="relative mb-6">
                <img 
                  src={galleryImages[1]} 
                  alt="Industrial Safety Solutions"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-fire-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {language === 'en' ? 'Industrial' : 'صناعي'}
                </div>
              </div>
              <h3 className="text-2xl font-professional-en font-bold text-white mb-4">
                {language === 'en' ? 'Industrial Safety Solutions' : 'حلول السلامة الصناعية'}
              </h3>
              <p className="text-white/80 font-professional-ar mb-6">
                {language === 'en' ? 'Advanced fire protection systems for industrial facilities, including automated detection, emergency response, and comprehensive safety protocols.' : 'أنظمة حماية متقدمة من الحريق للمنشآت الصناعية، تشمل الكشف الآلي والاستجابة للطوارئ وبروتوكولات السلامة الشاملة.'}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-fire-orange">
                  <Settings className="w-5 h-5" />
                  <span className="text-sm font-medium">{language === 'en' ? 'Automated Systems' : 'أنظمة آلية'}</span>
                </div>
                <div className="flex items-center gap-2 text-fire-orange">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-medium">{language === 'en' ? 'Certified' : 'معتمد'}</span>
                </div>
              </div>
            </div>

            {/* Featured Project 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift scale-in" style={{animationDelay: '0.3s'}}>
              <div className="relative mb-6">
                <img 
                  src={galleryImages[2]} 
                  alt="Residential Fire Protection"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-safety-gray text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {language === 'en' ? 'Residential' : 'سكني'}
                </div>
              </div>
              <h3 className="text-2xl font-professional-en font-bold text-white mb-4">
                {language === 'en' ? 'Residential Fire Protection' : 'حماية الحريق السكنية'}
              </h3>
              <p className="text-white/80 font-professional-ar mb-6">
                {language === 'en' ? 'Comprehensive fire safety solutions for residential complexes, featuring smart detection systems and emergency evacuation planning.' : 'حلول شاملة للسلامة من الحريق للمجمعات السكنية، تتميز بأنظمة كشف ذكية وتخطيط إخلاء الطوارئ.'}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-fire-orange">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">{language === 'en' ? 'Smart Systems' : 'أنظمة ذكية'}</span>
                </div>
                <div className="flex items-center gap-2 text-fire-orange">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">{language === 'en' ? 'Protected' : 'محمي'}</span>
                </div>
              </div>
            </div>

            {/* Featured Project 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift scale-in" style={{animationDelay: '0.4s'}}>
              <div className="relative mb-6">
                <img 
                  src={galleryImages[3]} 
                  alt="Emergency Response Systems"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-fire-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {language === 'en' ? 'Emergency' : 'طوارئ'}
                </div>
              </div>
              <h3 className="text-2xl font-professional-en font-bold text-white mb-4">
                {language === 'en' ? 'Emergency Response Systems' : 'أنظمة الاستجابة للطوارئ'}
              </h3>
              <p className="text-white/80 font-professional-ar mb-6">
                {language === 'en' ? '24/7 emergency response systems with real-time monitoring, rapid deployment capabilities, and integrated communication networks.' : 'أنظمة استجابة للطوارئ على مدار الساعة مع مراقبة في الوقت الفعلي وقدرات النشر السريع وشبكات الاتصال المتكاملة.'}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-fire-orange">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{language === 'en' ? '24/7 Monitoring' : 'مراقبة 24/7'}</span>
                </div>
                <div className="flex items-center gap-2 text-fire-orange">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm font-medium">{language === 'en' ? 'Rapid Response' : 'استجابة سريعة'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button 
              className="btn-fire text-lg hover:scale-110 transform transition-all duration-500 hover:shadow-2xl" 
              onClick={() => window.open('https://wa.me/966561720820', '_blank')}
            >
              {language === 'en' ? 'View More Projects' : 'عرض المزيد من المشاريع'}
              <ArrowIcon className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-professional-en font-bold text-center text-industrial-dark mb-12">
            {t('partnersTitle')}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-steel-gray rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-safety-gray" />
                </div>
                <p className="text-safety-gray">Partner {partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-industrial-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-professional-en font-bold text-center mb-12">
            {t('contactTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover-lift scale-in" style={{animationDelay: '0.1s'}}>
              <Phone className="w-8 h-8 mx-auto mb-4 text-fire-orange float" />
              <h3 className="font-semibold mb-2">{t('phone')}</h3>
              <a href="tel:0570707763" className="block hover:text-fire-orange transition-colors">0570707763</a>
              <a href="tel:0570707761" className="block hover:text-fire-orange transition-colors">0570707761</a>
            </div>
            
            <div className="text-center hover-lift scale-in" style={{animationDelay: '0.2s'}}>
              <Mail className="w-8 h-8 mx-auto mb-4 text-fire-orange float" />
              <h3 className="font-semibold mb-2">{t('email')}</h3>
              <a href="mailto:info@arrowf.sa" className="hover:text-fire-orange transition-colors">info@arrowf.sa</a>
            </div>
            
            <div className="text-center hover-lift scale-in" style={{animationDelay: '0.3s'}}>
              <MapPin className="w-8 h-8 mx-auto mb-4 text-fire-orange float" />
              <h3 className="font-semibold mb-2">{t('location')}</h3>
              <p>Dammam, Saudi Arabia</p>
              <p>الدمام، المملكة العربية السعودية</p>
            </div>
            
            <div className="text-center hover-lift scale-in" style={{animationDelay: '0.4s'}}>
              <MessageCircle className="w-8 h-8 mx-auto mb-4 text-fire-orange float" />
              <h3 className="font-semibold mb-2">{t('whatsapp')}</h3>
              <a href="https://wa.me/966561720820" className="hover:text-fire-orange transition-colors">
                +966561720820
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="Arrow Fire Trading Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-professional-en font-bold text-lg">Arrow Fire Trading</h3>
                <p className="font-professional-ar text-sm text-gray-400">سهم الإطفاء التجارية</p>
              </div>
            </div>
            
            <nav className="flex gap-6 mb-4 md:mb-0">
              <a href="#home" className="hover:text-fire-orange transition-colors">{t('home')}</a>
              <a href="#about" className="hover:text-fire-orange transition-colors">{t('about')}</a>
              <a href="#services" className="hover:text-fire-orange transition-colors">{t('services')}</a>
              <a href="#gallery" className="hover:text-fire-orange transition-colors">{t('gallery')}</a>
              <a href="#contact" className="hover:text-fire-orange transition-colors">{t('contact')}</a>
            </nav>
            
            <p className="text-sm text-gray-400 text-center">
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}