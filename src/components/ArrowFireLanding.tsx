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
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-fire-red to-fire-orange rounded-lg flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-industrial-dark">Arrow Fire Trading</h1>
                <p className="text-sm text-safety-gray">سهم الإطفاء التجارية</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-industrial-dark hover:text-fire-red transition-colors">{t('home')}</a>
              <a href="#about" className="text-industrial-dark hover:text-fire-red transition-colors">{t('about')}</a>
              <a href="#services" className="text-industrial-dark hover:text-fire-red transition-colors">{t('services')}</a>
              <a href="#gallery" className="text-industrial-dark hover:text-fire-red transition-colors">{t('gallery')}</a>
              <a href="#contact" className="text-industrial-dark hover:text-fire-red transition-colors">{t('contact')}</a>
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
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-industrial-dark hover:text-fire-red transition-colors">{t('home')}</a>
                <a href="#about" className="text-industrial-dark hover:text-fire-red transition-colors">{t('about')}</a>
                <a href="#services" className="text-industrial-dark hover:text-fire-red transition-colors">{t('services')}</a>
                <a href="#gallery" className="text-industrial-dark hover:text-fire-red transition-colors">{t('gallery')}</a>
                <a href="#contact" className="text-industrial-dark hover:text-fire-red transition-colors">{t('contact')}</a>
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in-up">
              {t('heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 fade-in-up" style={{animationDelay: '0.2s'}}>
              {t('heroSubtext')}
            </p>
            <Button className="btn-fire text-lg" style={{animationDelay: '0.4s'}}>
              {t('getQuote')}
              <ArrowIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-industrial-dark mb-6">
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
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-industrial-dark mb-12">
            {t('servicesTitle')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-fire-red to-fire-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-industrial-dark">
                    {t(service.key)}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-industrial-dark mb-12">
            {t('certificatesTitle')}
          </h2>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <Award className="w-16 h-16 text-fire-red mx-auto mb-6" />
              <div className="space-y-4">
                <p className="text-lg text-safety-gray">{t('activity')}</p>
                <p className="text-lg text-safety-gray">{t('crNumber')}</p>
                <p className="text-lg text-safety-gray">{t('validated')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-industrial-dark mb-12">
            {t('promoTitle')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {promoImages.map((promo, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={promo.src} 
                  alt={t(promo.key)}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-industrial-dark mb-12">
            {t('galleryTitle')}
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={image} 
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-industrial-dark mb-12">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('contactTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-fire-orange" />
              <h3 className="font-semibold mb-2">{t('phone')}</h3>
              <p>0570707763</p>
              <p>0570707761</p>
            </div>
            
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-fire-orange" />
              <h3 className="font-semibold mb-2">{t('email')}</h3>
              <p>info@arrowf.sa</p>
            </div>
            
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-fire-orange" />
              <h3 className="font-semibold mb-2">{t('location')}</h3>
              <p>Dammam, Saudi Arabia</p>
              <p>الدمام، المملكة العربية السعودية</p>
            </div>
            
            <div className="text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-4 text-fire-orange" />
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
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-fire-red to-fire-orange rounded-lg flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold">Arrow Fire Trading</h3>
                <p className="text-sm text-gray-400">سهم الإطفاء التجارية</p>
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