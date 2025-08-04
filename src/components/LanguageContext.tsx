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
    service1: 'Fire Fighting System Installation',
    service2: 'Fire Alarm Annual Maintenance',
    service3: 'Evacuation & Life Safety Plan Design',
    service4: 'Chemical Storage Safety Reports',
    service5: 'Annual Maintenance Contracts',
    service6: 'PPE Equipment Supply',
    service7: 'Traffic Management Planning',
    service8: 'Fire Extinguisher Supply & Servicing',
    service9: 'Support for Legal Safety Compliance',
    
    // Certificates
    certificatesTitle: 'Certified & Licensed',
    activity: 'Activity: Installation and maintenance of firefighting equipment and devices',
    crNumber: 'CR Number: 2050160884',
    validated: 'Validated via: https://hcis.gov.sa',
    
    // Promotional
    promoTitle: 'Fire Safety Starts at Home',
    kitchen: 'Place in Your Kitchen',
    grill: 'Next to the Grill',
    garage: 'Keep in Your Garage',
    
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
    copyright: '© 2025 Arrow Fire Trading. All rights reserved.',
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
    getQuote: 'اطلب عرض سعر',
    
    // About Section
    aboutTitle: 'حول سهم الإطفاء التجارية',
    aboutText: 'تأسست سهم الإطفاء في الدمام، المملكة العربية السعودية، وتُعد من الشركات الرائدة في تقديم حلول السلامة الشاملة. نحن متخصصون في معدات مكافحة الحريق، أنظمة الحماية، أنظمة الإنذار والطوارئ، والحلول الأمنية — تحت سقف واحد.',
    
    // Services
    servicesTitle: 'خدماتنا',
    service1: 'تركيب أنظمة مكافحة الحريق',
    service2: 'الصيانة السنوية لأنظمة الإنذار',
    service3: 'تصميم خطط الإخلاء والسلامة',
    service4: 'تقارير سلامة تخزين المواد الكيميائية',
    service5: 'عقود الصيانة السنوية',
    service6: 'توريد معدات الحماية الشخصية',
    service7: 'تخطيط إدارة المرور',
    service8: 'توريد وصيانة طفايات الحريق',
    service9: 'الدعم في الامتثال القانوني للسلامة',
    
    // Certificates
    certificatesTitle: 'الشهادات والرخص الرسمية',
    activity: 'النشاط: تركيب وصيانة أجهزة ومعدات الإطفاء',
    crNumber: 'رقم السجل التجاري: 2050160884',
    validated: 'مُصدق عبر: https://hcis.gov.sa',
    
    // Promotional
    promoTitle: 'السلامة تبدأ من المنزل',
    kitchen: 'ضعها في مطبخك',
    grill: 'بجانب الشواية',
    garage: 'احتفظ بها في الجراج',
    
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
    copyright: '© 2025 سهم الإطفاء التجارية. جميع الحقوق محفوظة.',
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