// data/case-studies.ts
// بيانات صفحات الـ Case Study التفصيلية. كل تطبيق له مدخل هنا، وكل قسم اختياري
// (لو ما وجد القسم بالبيانات، الصفحة تتجاهله تلقائيًا).

export interface CaseStudyStat {
  n: string;
  l: string;
}

export interface CaseStudyFeature {
  title: string;
  desc: string;
}

export interface CaseStudyApp {
  icon: string;      // إيموجي أو رمز مختصر
  name: string;
  sub: string;
  accent?: 'jade' | 'brass';
  features: CaseStudyFeature[];
}

export interface CaseStudyWorkflow {
  title: string;
  desc: string;
  steps: string[];
  altPaths?: { from: string; to: string; note: string; danger?: boolean }[];
}

export interface CaseStudyTech {
  name: string;
  desc: string;
  color: string; // أي لون CSS صالح (hex)
}

export interface CaseStudyHighlight {
  icon: string;
  title: string;
  desc: string;
}

export interface CaseStudyPhase {
  phase: 'V0' | 'V1' | 'V2';
  title: string;
  desc: string;
  status: 'done' | 'soon';
}

export interface CaseStudyTheme {
  primary: string;      // --jade
  primaryDark: string;  // --jade-dk
  primaryMid: string;   // --jade-mid
  primaryLight: string; // --jade-lt
  accent: string;       // --brass
  accentLight: string;  // --brass-lt
}

export interface CaseStudy {
  slug: string;
  theme: CaseStudyTheme;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    stats: CaseStudyStat[];
  };
  overview: {
    label: string;
    title: string;
    desc: string;
    statCards: CaseStudyStat[];
  };
  apps?: {
    label: string;
    title: string;
    items: CaseStudyApp[];
  };
  workflow?: CaseStudyWorkflow;
  techStack?: {
    label: string;
    title: string;
    items: CaseStudyTech[];
  };
  highlights?: {
    label: string;
    title: string;
    items: CaseStudyHighlight[];
  };
  roadmap?: {
    label: string;
    title: string;
    desc: string;
    phases: CaseStudyPhase[];
  };
  cta: {
    title: string;
    desc: string;
    primaryHref: string;
    primaryLabel: string;
    footnote?: string;
  };
}

// ─── لون طبي هادئ (تيل/أخضر مزرقّ) لعائلة تطبيقات الصحة ───────────────────
const healthTheme: CaseStudyTheme = {
  primary: '#0E6F5C',
  primaryDark: '#0A4F41',
  primaryMid: '#1a8f76',
  primaryLight: '#E3EFEC',
  accent: '#2E6FC0',
  accentLight: '#DCE9F8',
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'clinic-app',
    theme: healthTheme,
    hero: {
      badge: '📱 Flutter · SQLite · تطبيق موبايل',
      title: 'عيادتي — نظام إدارة العيادة الطبية',
      subtitle: 'تطبيق واحد يرافق العيادة من لحظة دخول المريض وحتى تسليمه ملفه الطبي مطبوعًا.',
      stats: [
        { n: '6', l: 'ميزات رئيسية' },
        { n: 'Offline', l: 'يعمل بدون إنترنت' },
        { n: 'BLoC', l: 'إدارة الحالة' },
        { n: '1', l: 'تطبيق متكامل' },
      ],
    },
    overview: {
      label: 'نظرة عامة',
      title: 'ما هو التطبيق؟',
      desc:
        'عيادتي تطبيق مصمم لتبسيط العمل اليومي داخل العيادات الطبية الصغيرة والمتوسطة — تسجيل المريض، حجز الموعد، ' +
        'إدارة قائمة الانتظار، وحفظ الملف الطبي الكامل لكل مريض، مع إمكانية طباعة التقارير والوصفات مباشرة من داخل التطبيق.',
      statCards: [
        { n: '6', l: 'ميزات رئيسية' },
        { n: 'SQLite', l: 'قاعدة بيانات محلية' },
        { n: 'Clean', l: 'Architecture' },
        { n: 'BLoC', l: 'إدارة الحالة' },
      ],
    },
    apps: {
      label: 'التطبيق',
      title: 'كل أدوات العيادة في مكان واحد',
      items: [
        {
          icon: '🩺',
          name: 'تطبيق عيادتي',
          sub: 'Flutter · Android + iOS',
          accent: 'jade',
          features: [
            { title: 'إضافة مرضى', desc: 'تسجيل بيانات المريض في ثوانٍ دون تعقيد.' },
            { title: 'تسجيل مواعيد', desc: 'حجز وتنظيم المواعيد اليومية لتجنّب أي تضارب.' },
            { title: 'ملف طبي شامل', desc: 'كل تاريخ المريض الطبي محفوظ ومتاح عند الحاجة فورًا.' },
            { title: 'قائمة انتظار ذكية', desc: 'ترتيب المرضى في العيادة تلقائيًا حسب الدور.' },
            { title: 'طباعة ملف طبي', desc: 'إصدار تقرير أو وصفة طبية جاهزة للطباعة مباشرة.' },
            { title: 'اختصارات سريعة', desc: 'إنجاز المهام المتكررة بأقل عدد من الضغطات.' },
          ],
        },
      ],
    },
    workflow: {
      title: 'رحلة المريض داخل العيادة',
      desc: 'من لحظة الوصول وحتى الخروج، كل خطوة منظّمة وواضحة لصاحب العيادة وللمريض على حدّ سواء.',
      steps: ['📝 تسجيل المريض', '⏳ قائمة الانتظار', '🩺 الكشف الطبي', '📋 تحديث الملف الطبي', '🖨️ طباعة التقرير/الوصفة'],
    },
    techStack: {
      label: 'الستاك التقني',
      title: 'البنية والأدوات',
      items: [
        { name: 'Flutter + Dart', desc: 'Android + iOS من كودبيس واحد', color: '#0E6F5C' },
        { name: 'SQLite', desc: 'تخزين محلي — يعمل بدون إنترنت بالكامل', color: '#2E6FC0' },
        { name: 'flutter_bloc (Cubit)', desc: 'إدارة الحالة بدون boilerplate', color: '#C08A2E' },
        { name: 'Clean Architecture', desc: 'Data / Domain / Presentation', color: '#6B2C43' },
      ],
    },
    highlights: {
      label: 'أبرز الميزات التقنية',
      title: 'ليش هالتطبيق عملي؟',
      items: [
        {
          icon: '💾',
          title: 'تخزين محلي أولاً',
          desc: 'البيانات تُقرأ وتُكتب فورًا من قاعدة بيانات محلية (SQLite) — لا حاجة لاتصال إنترنت دائم داخل العيادة.',
        },
        {
          icon: '🗂️',
          title: 'ملف طبي دائم لكل مريض',
          desc: 'كل زيارة وتشخيص يُحفظ ضمن ملف المريض ويبقى متاحًا للرجوع إليه في أي وقت.',
        },
        {
          icon: '⏳',
          title: 'قائمة انتظار تلقائية',
          desc: 'ترتيب المرضى حسب وقت الوصول تلقائيًا، بدون الحاجة لتنظيم يدوي من الاستقبال.',
        },
        {
          icon: '🖨️',
          title: 'طباعة مباشرة',
          desc: 'إصدار وصفة أو تقرير طبي جاهز للطباعة من داخل ملف المريض مباشرة، بدون خطوات إضافية.',
        },
      ],
    },
    cta: {
      title: 'هل تريد نظامًا مشابهًا لعيادتك؟',
      desc: 'أبني تطبيقات Flutter عملية لإدارة العيادات والمراكز الطبية — من الفكرة وحتى التشغيل الفعلي.',
      primaryHref: '/#contact',
      primaryLabel: 'تواصل معي',
      footnote: 'la24ithdev@gmail.com',
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
