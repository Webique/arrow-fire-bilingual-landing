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

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      setMobileMenuOpen(false);
    }
  };

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
    '/lovable-uploads/2.png',
    '/lovable-uploads/1.png',
    '/lovable-uploads/3.png',
    '/lovable-uploads/4.png',
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
                src="/lovable-uploads/logo6.png" 
                alt="Arrow Fire Trading Logo"
                className="w-20 h-20 object-contain"
              />
              <div className="ml-4">
                <h1 className="text-xl font-bold text-white">Arrow Fire</h1>
                <p className="text-sm text-white/80 font-professional-ar">سهم الاطفاء</p>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-fire-orange transition-colors font-medium cursor-pointer">{t('home')}</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-fire-orange transition-colors font-medium cursor-pointer">{t('about')}</button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-fire-orange transition-colors font-medium cursor-pointer">{t('services')}</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-fire-orange transition-colors font-medium cursor-pointer">{t('contact')}</button>
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
                <button onClick={() => scrollToSection('home')} className="text-white hover:text-fire-orange transition-colors font-medium cursor-pointer text-left">{t('home')}</button>
                <button onClick={() => scrollToSection('about')} className="text-white hover:text-fire-orange transition-colors font-medium cursor-pointer text-left">{t('about')}</button>
                <button onClick={() => scrollToSection('services')} className="text-white hover:text-fire-orange transition-colors font-medium cursor-pointer text-left">{t('services')}</button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-fire-orange transition-colors font-medium cursor-pointer text-left">{t('contact')}</button>
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
            <h1 className={`text-4xl md:text-6xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-white mb-6 fade-in-up`}>
              {t('heroTitle')}
            </h1>

            <Button 
              className="btn-fire text-lg hover:scale-110 transform transition-all duration-500 hover:shadow-2xl" 
              style={{animationDelay: '0.4s'}}
              onClick={() => window.open('https://wa.me/966570707761', '_blank')}
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className={`text-4xl md:text-5xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-industrial-dark mb-6`}>
                  {t('aboutTitle')}
                </h2>
                <p className="text-lg text-safety-gray leading-relaxed">
                  {t('aboutText')}
                </p>
              </div>
              

            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/arrowfire.jpg" 
                alt="Arrow Fire Industrial Infrastructure"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-fire-red rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-industrial-dark">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-safety-gray/10 via-steel-gray/10 to-fire-orange/5">
          <div className="absolute top-0 left-0 w-72 h-72 bg-fire-red/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-fire-orange/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-safety-gray/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-industrial-dark mb-6`}>
              {t('servicesTitle')}
            </h2>
            <p className="text-xl font-professional-ar text-safety-gray max-w-3xl mx-auto">
              {language === 'en' ? 'Comprehensive fire safety solutions that protect what matters most. From advanced detection to emergency response, we deliver excellence in every project.' : 'حلول شاملة للسلامة من الحريق تحمي ما يهم أكثر. من الكشف المتقدم إلى الاستجابة للطوارئ، نحن نقدم التميز في كل مشروع.'}
            </p>
          </div>
          
          {/* Main Services Grid - Varied Sizes */}
          <div className="grid gap-8 mb-12">
            {/* Row 1 - Large Cards with Subpoints */}
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((serviceNum) => (
                <div key={serviceNum} className="group">
                  <div className="bg-gradient-to-br from-industrial-dark to-safety-gray p-8 rounded-3xl text-white hover-lift scale-in shadow-xl hover:shadow-2xl transition-all duration-500 h-72" style={{animationDelay: `${(serviceNum - 1) * 0.1}s`}}>
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-6">
                      <Shield className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className={`text-xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold mb-4 leading-tight`}>
                      {t(`service${serviceNum}`)}
                    </h3>
                    <div className="space-y-2 pb-8">
                      {serviceNum === 1 && (
                        <>
                          <p className="text-sm text-white/80">• {language === 'en' ? 'Installation of fire detection systems' : 'تركيب أنظمة كشف الحريق'}</p>
                          <p className="text-sm text-white/80">• {language === 'en' ? 'Automatic fire suppression systems' : 'أنظمة إطفاء تلقائية'}</p>
                          <p className="text-sm text-white/80">• {language === 'en' ? 'Audio alarm systems' : 'أنظمة إنذار صوتي'}</p>
                        </>
                      )}
                      {serviceNum === 2 && (
                        <>
                          <p className="text-sm text-white/80">• {language === 'en' ? 'Regular equipment inspection' : 'فحص دوري للأجهزة'}</p>
                          <p className="text-sm text-white/80">• {language === 'en' ? 'System testing' : 'اختبار الأنظمة'}</p>
                          <p className="text-sm text-white/80">• {language === 'en' ? 'Software updates' : 'تحديث البرامج'}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Row 2 - Medium Cards with Subpoints */}
            <div className="grid md:grid-cols-3 gap-6">
              {[3, 4, 5].map((serviceNum) => (
                <div key={serviceNum} className="group">
                  <div className="bg-gradient-to-br from-fire-red to-fire-orange p-6 rounded-2xl text-white hover-lift scale-in shadow-lg hover:shadow-xl transition-all duration-500 h-48" style={{animationDelay: `${(serviceNum - 1) * 0.1}s`}}>
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mb-4">
                      <Settings className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className={`text-lg ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold leading-tight mb-3`}>
                      {t(`service${serviceNum}`)}
                    </h3>
                    <div className="space-y-1 pb-3">
                      {serviceNum === 3 && (
                        <>
                          <p className="text-xs text-white/80">• {language === 'en' ? 'Design drawings' : 'تصميم المخططات'}</p>
                          <p className="text-xs text-white/80">• {language === 'en' ? 'Engineering approvals' : 'الموافقات الهندسية'}</p>
                        </>
                      )}
                      {serviceNum === 4 && (
                        <>
                          <p className="text-xs text-white/80">• {language === 'en' ? 'Evacuation plans' : 'خطط الإخلاء'}</p>
                          <p className="text-xs text-white/80">• {language === 'en' ? 'Safety protocols' : 'بروتوكولات السلامة'}</p>
                        </>
                      )}
                      {serviceNum === 5 && (
                        <>
                          <p className="text-xs text-white/80">• {language === 'en' ? 'Technical reports' : 'تقارير فنية'}</p>
                          <p className="text-xs text-white/80">• {language === 'en' ? 'Storage requirements' : 'متطلبات التخزين'}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Row 3 - Two Small Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="group">
                <div className="bg-gradient-to-br from-safety-gray to-steel-gray p-6 rounded-2xl text-white hover-lift scale-in shadow-lg hover:shadow-xl transition-all duration-500 h-44" style={{animationDelay: '0.5s'}}>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mb-4">
                    <Award className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className={`text-lg ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold leading-tight`}>
                    {t('service6')}
                  </h3>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-br from-fire-orange to-fire-red p-6 rounded-2xl text-white hover-lift scale-in shadow-lg hover:shadow-xl transition-all duration-500 h-44" style={{animationDelay: '0.6s'}}>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mb-4">
                    <Flame className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className={`text-lg ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold leading-tight`}>
                    {t('service7')}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Services Row - Theme Colors */}
          <div className="grid md:grid-cols-4 gap-6">
            {[7, 8, 9, 10].map((serviceNum, index) => {
              const colors = [
                'from-fire-red to-fire-orange',
                'from-industrial-dark to-safety-gray', 
                'from-safety-gray to-steel-gray',
                'from-fire-orange to-fire-red'
              ];
              const icons = [Shield, Settings, Flame, Award];
              const IconComponent = icons[index];
              
              return (
                <div key={serviceNum} className="group">
                  <div className={`bg-gradient-to-br ${colors[index]} p-6 rounded-2xl text-white hover-lift scale-in shadow-lg hover:shadow-xl transition-all duration-500 h-44`} style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className={`${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-semibold text-white mb-3 text-sm leading-tight`}>
                      {t(`service${serviceNum}`)}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button 
              className="btn-fire text-lg hover:scale-110 transform transition-all duration-500 hover:shadow-2xl" 
              onClick={() => window.open('https://wa.me/966570707761', '_blank')}
            >
              {language === 'en' ? 'Get a Quote' : 'اطلب عرض سعر'}
              <ArrowIcon className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </div>
        </div>
      </section>





      {/* Projects Showcase Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-industrial-dark via-safety-gray to-steel-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-white mb-6`}>
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
              <h3 className={`text-2xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-white mb-4`}>
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
              <h3 className={`text-2xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-white mb-4`}>
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
              <h3 className={`text-2xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-white mb-4`}>
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
              <h3 className={`text-2xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-white mb-4`}>
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
              onClick={() => window.open('https://wa.me/966570707761', '_blank')}
            >
              {language === 'en' ? 'Get a Quote' : 'اطلب عرض سعر'}
              <ArrowIcon className="w-5 h-5 ml-2 animate-pulse" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-center text-industrial-dark mb-12`}>
            {t('partnersTitle')}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              '/lovable-uploads/logo1.jpg',
              '/lovable-uploads/logo2.jpg',
              '/lovable-uploads/logo3.jpg',
              '/lovable-uploads/logo4.jpg'
            ].map((logo, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={logo} 
                  alt={`Partner Logo ${index + 1}`}
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-industrial-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl ${language === 'ar' ? 'font-professional-ar' : 'font-professional-en'} font-bold text-center mb-12`}>
            {t('contactTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover-lift scale-in" style={{animationDelay: '0.1s'}}>
              <Phone className="w-8 h-8 mx-auto mb-4 text-fire-orange float" />
              <h3 className="font-semibold mb-2">{t('phone')}</h3>
              <a href="tel:0570707761" className="block hover:text-fire-orange transition-colors">0570707761</a>
              <p className="text-sm text-gray-300 mt-1">{language === 'en' ? 'Call & WhatsApp' : 'اتصال وواتساب'}</p>
            </div>
            
            <div className="text-center hover-lift scale-in" style={{animationDelay: '0.2s'}}>
              <Phone className="w-8 h-8 mx-auto mb-4 text-fire-orange float" />
              <h3 className="font-semibold mb-2">{t('phone')}</h3>
              <a href="tel:0570707763" className="block hover:text-fire-orange transition-colors">0570707763</a>
              <p className="text-sm text-gray-300 mt-1">{language === 'en' ? 'Call Only' : 'اتصال فقط'}</p>
            </div>
            
            <div className="text-center hover-lift scale-in" style={{animationDelay: '0.3s'}}>
              <Phone className="w-8 h-8 mx-auto mb-4 text-fire-orange float" />
              <h3 className="font-semibold mb-2">{t('phone')}</h3>
              <a href="tel:0570707437" className="block hover:text-fire-orange transition-colors">0570707437</a>
              <p className="text-sm text-gray-300 mt-1">{language === 'en' ? 'Call Only' : 'اتصال فقط'}</p>
            </div>
            
            <div className="text-center hover-lift scale-in" style={{animationDelay: '0.4s'}}>
              <Mail className="w-8 h-8 mx-auto mb-4 text-fire-orange float" />
              <h3 className="font-semibold mb-2">{t('email')}</h3>
              <a href="mailto:info@arrowf.sa" className="hover:text-fire-orange transition-colors">info@arrowf.sa</a>
            </div>
          </div>
          
          {/* Location Information */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4">
              <MapPin className="w-6 h-6 text-fire-orange" />
              <div>
                <p className="font-semibold text-white">{language === 'en' ? 'Dammam, Saudi Arabia' : 'الدمام، المملكة العربية السعودية'}</p>
                <p className="text-sm text-gray-300">{language === 'en' ? 'Main Office Location' : 'الموقع الرئيسي'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <img 
                src="/lovable-uploads/logo6.png" 
                alt="Arrow Fire Trading Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            

            
            <p className="text-sm text-gray-400 text-center">
              © Arrow Fire. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}