import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    gallery: 'Gallery',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Safety Requires Reliable Partners',
    heroSubtext: 'Fire & Alarm – Monitoring – Air Conditioning',
    getQuote: 'Get a Quote',
    
    // About Section
    aboutTitle: 'About Arrow Fire Trading',
    aboutText: 'Founded in Dammam, Saudi Arabia, Arrow Fire is a leading provider of comprehensive life safety solutions. We specialize in firefighting equipment, protection systems, alarms, emergency services, and integrated security—all under one roof.',
    
    // Services
    servicesTitle: 'Our Services',
    service1: 'Supply and installation of fire fighting system',
    service2: 'Fire alarm system annual maintenance',
    service3: 'Prepare and design fire system drawings',
    service4: 'Prepare and design evacuation plan and life safety',
    service5: 'Plan, design and technical report for chemical storing',
    service6: 'Annual maintenance contract services',
    service7: 'Supply of safety personal protective equipment',
    service8: 'Traffic management plan from design and installation',
    service9: 'Supply and maintain all types of fire extinguishers',
    service10: 'Customer support for issuance of all legal requirements',
    
    // Certificates
    certificatesTitle: '',
    activity: '',
    crNumber: '',
    validated: '',
    
    // Promotional
    promoTitle: '',
    kitchen: '',
    grill: '',
    garage: '',
    
    // Gallery
    galleryTitle: 'On-site Safety in Action',
    
    // Partners
    partnersTitle: 'Our Success Partners',
    
    // Contact
    contactTitle: 'Contact Us',
    phone: 'Phone',
    email: 'Email',
    location: 'Location',
    whatsapp: 'WhatsApp',
    
    // Footer
    copyright: '© Arrow Fire. All rights reserved.',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    gallery: 'معرض الأعمال',
    contact: 'تواصل معنا',
    
    // Hero Section
    heroTitle: 'السلامة تحتاج إلى شركاء موثوق بهم',
    heroSubtext: 'الإطفاء والإنذار - المراقبة - التكييف',
    getQuote: 'احصل على استشارة مجانية',
    
    // About Section
    aboutTitle: 'حول سهم الإطفاء التجارية',
    aboutText: 'تأسست سهم الإطفاء في الدمام، المملكة العربية السعودية، وتُعد من الشركات الرائدة في تقديم حلول السلامة الشاملة. نحن متخصصون في معدات مكافحة الحريق، أنظمة الحماية، أنظمة الإنذار والطوارئ، والحلول الأمنية — تحت سقف واحد.',
    
    // Services
    servicesTitle: 'خدماتنا',
    service1: 'توريد وتركيب أنظمة مكافحة الحريق',
    service2: 'الصيانة السنوية لنظام إنذار الحريق',
    service3: 'إعداد وتصميم مخططات أنظمة الحريق',
    service4: 'إعداد وتصميم خطة الإخلاء والسلامة',
    service5: 'إعداد وتصميم وتقرير فني لتخزين المواد الكيميائية',
    service6: 'عقود خدمات الصيانة السنوية',
    service7: 'توريد معدات الحماية الشخصية',
    service8: 'خطة إدارة المرور من التصميم إلى التركيب',
    service9: 'توريد وصيانة جميع أنواع طفايات الحريق',
    service10: 'دعم العملاء لاستخراج جميع المتطلبات القانونية',
    
    // Certificates
    certificatesTitle: '',
    activity: '',
    crNumber: '',
    validated: '',
    
    // Promotional
    promoTitle: '',
    kitchen: '',
    grill: '',
    garage: '',
    
    // Gallery
    galleryTitle: 'السلامة في العمل الميداني',
    
    // Partners
    partnersTitle: 'شركاؤنا في النجاح',
    
    // Contact
    contactTitle: 'تواصل معنا',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    location: 'الموقع',
    whatsapp: 'واتساب',
    
    // Footer
    copyright: '© سهم الإطفاء. جميع الحقوق محفوظة.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
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