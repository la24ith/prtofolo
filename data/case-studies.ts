// data/case-studies.ts
// بيانات صفحات الـ Case Study التفصيلية. كل تطبيق له مدخل هنا، وكل قسم اختياري
// (لو ما وجد القسم بالبيانات، الصفحة تتجاهله تلقائيًا).

export interface CaseStudyStat {
  n: string;
  l: string;
}
const realEstateTheme: CaseStudyTheme = {
  primary: '#1D4E89',
  primaryDark: '#12335B',
  primaryMid: '#2E6FC0',
  primaryLight: '#E3ECF6',
  accent: '#C08A2E',
  accentLight: '#F3E4C4',
};
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
  {
    slug: 'health-dashboard',
    theme: healthTheme,
    hero: {
      badge: '💻 Flutter · Laravel · لوحة تحكم',
      title: 'لوحة تحكم نظام صحي',
      subtitle: 'لوحة تحكم شاملة لإدارة البرامج الصحية والمستخدمين، ومتابعة الأداء بالأرقام.',
      stats: [
        { n: '4', l: 'ميزات رئيسية' },
        { n: 'Laravel', l: 'API خلفي' },
        { n: 'BLoC', l: 'إدارة الحالة' },
        { n: 'PDF', l: 'تقارير قابلة للطباعة' },
      ],
    },
    overview: {
      label: 'نظرة عامة',
      title: 'ما هو التطبيق؟',
      desc:
        'لوحة تحكم مبنية بـ Flutter لإدارة البرامج والمستخدمين الصحيين من مكان واحد، مع نظام صلاحيات ' +
        'متعدد المستويات ولوحة إحصائيات تعرض الأداء لحظة بلحظة، وربط كامل مع API خلفي مبني بـ Laravel.',
      statCards: [
        { n: '4', l: 'ميزات رئيسية' },
        { n: 'Laravel', l: 'Backend' },
        { n: 'REST', l: 'API' },
        { n: 'BLoC', l: 'إدارة الحالة' },
      ],
    },
    apps: {
      label: 'التطبيق',
      title: 'لوحة تحكم متكاملة',
      items: [
        {
          icon: '📊',
          name: 'لوحة تحكم نظام صحي',
          sub: 'Flutter · لوحة تحكم إدارية',
          accent: 'jade',
          features: [
            { title: 'إدارة المستخدمين والبرامج الصحية', desc: 'إضافة وتعديل ومتابعة كل مستخدم وبرنامج صحي بسهولة تامة.' },
            { title: 'طباعة تقارير مفصلة', desc: 'استخراج تقارير جاهزة للطباعة بضغطة واحدة، مرتبة وواضحة.' },
            { title: 'لوحة إحصائيات متقدمة', desc: 'رسوم بيانية تعرض الأداء والتقدّم لحظة بلحظة.' },
            { title: 'نظام صلاحيات متعدد المستويات', desc: 'تحكم دقيق في من يرى ماذا، حسب دور كل مستخدم.' },
          ],
        },
      ],
    },
    techStack: {
      label: 'الستاك التقني',
      title: 'البنية والأدوات',
      items: [
        { name: 'Flutter + Dart', desc: 'واجهة موحّدة لكل المنصات', color: '#0E6F5C' },
        { name: 'Laravel', desc: 'API خلفي يدير البيانات والصلاحيات', color: '#FF2D20' },
        { name: 'flutter_bloc (Cubit)', desc: 'إدارة الحالة بدون boilerplate', color: '#C08A2E' },
        { name: 'REST API', desc: 'تواصل منظم بين التطبيق والخادم', color: '#2E6FC0' },
      ],
    },
    highlights: {
      label: 'أبرز الميزات',
      title: 'ليش هالتطبيق عملي؟',
      items: [
        { icon: '🔐', title: 'نظام صلاحيات متعدد المستويات', desc: 'كل مستخدم يشوف فقط الصلاحيات والبيانات المسموحة له حسب دوره.' },
        { icon: '📈', title: 'إحصائيات لحظية', desc: 'رسوم بيانية تعكس أداء البرامج والمستخدمين فور حدوث أي تغيير.' },
        { icon: '🖨️', title: 'تقارير جاهزة للطباعة', desc: 'استخراج تقرير منسق بضغطة واحدة دون الحاجة لتنسيق يدوي.' },
      ],
    },
    cta: {
      title: 'هل تحتاج لوحة تحكم مشابهة لمشروعك؟',
      desc: 'أبني لوحات تحكم إدارية متكاملة مع Backend حقيقي، تناسب فريقك ومستخدميك.',
      primaryHref: '/#contact',
      primaryLabel: 'تواصل معي',
      footnote: 'la24ithdev@gmail.com',
    },
  },
  {
    slug: 'motaa-taghyeer',
    theme: healthTheme,
    hero: {
      badge: '📱 Flutter · Hive · تطبيق موبايل',
      title: 'متعة التغيير — رفيقك اليومي لأسلوب حياة صحي',
      subtitle: 'تطبيق شخصي لمتابعة الوزن والالتزام بخطة صحية، يعمل بسرعة وبدون تعقيد.',
      stats: [
        { n: '4', l: 'ميزات رئيسية' },
        { n: 'Hive', l: 'تخزين محلي سريع' },
        { n: 'BLoC', l: 'إدارة الحالة' },
        { n: 'REST', l: 'API' },
      ],
    },
    overview: {
      label: 'نظرة عامة',
      title: 'ما هو التطبيق؟',
      desc:
        'متعة التغيير تطبيق يساعد المستخدم على متابعة وزنه والتزامه بخطة صحية يوميًا، مع تخزين محلي سريع ' +
        'عبر Hive يخلي التطبيق يفتح ويستجيب فورًا.',
      statCards: [
        { n: '4', l: 'ميزات رئيسية' },
        { n: 'Hive', l: 'تخزين محلي' },
        { n: 'REST', l: 'API' },
        { n: 'BLoC', l: 'إدارة الحالة' },
      ],
    },
    apps: {
      label: 'التطبيق',
      title: 'رفيقك اليومي في التغيير',
      items: [
        {
          icon: '⚖️',
          name: 'تطبيق متعة التغيير',
          sub: 'Flutter · Android + iOS',
          accent: 'jade',
          features: [
            { title: 'متابعة الوزن', desc: 'تسجيل وزنك بشكل دوري ومشاهدة تطوره على مخطط بياني.' },
            { title: 'أنظمة صحية مناسبة', desc: 'خطط وأنظمة تتوافق مع هدفك واحتياجك الشخصي.' },
            { title: 'تخزين محلي سريع', desc: 'بياناتك محفوظة على جهازك وتفتح فورًا دون انتظار.' },
            { title: 'متابعة الالتزام', desc: 'تذكيرات ومؤشرات تساعدك على الاستمرار يومًا بيوم.' },
          ],
        },
      ],
    },
    workflow: {
      title: 'رحلة المستخدم اليومية',
      desc: 'دورة بسيطة تتكرر يوميًا لمساعدتك على الاستمرار بالتزامك الصحي.',
      steps: ['📝 تسجيل الوزن', '📊 مشاهدة التطور', '🥗 اتباع النظام المناسب', '🔔 تذكير بالالتزام'],
    },
    techStack: {
      label: 'الستاك التقني',
      title: 'البنية والأدوات',
      items: [
        { name: 'Flutter + Dart', desc: 'Android + iOS من كودبيس واحد', color: '#0E6F5C' },
        { name: 'Hive', desc: 'تخزين محلي خفيف وسريع الاستجابة', color: '#E8A020' },
        { name: 'flutter_bloc (Cubit)', desc: 'إدارة الحالة بدون boilerplate', color: '#C08A2E' },
        { name: 'REST API', desc: 'مزامنة البيانات مع الخادم', color: '#2E6FC0' },
      ],
    },
    highlights: {
      label: 'أبرز الميزات',
      title: 'ليش هالتطبيق عملي؟',
      items: [
        { icon: '⚡', title: 'استجابة فورية', desc: 'بيانات الوزن والتقدم محفوظة محليًا عبر Hive، فالتطبيق يفتح ويعرض بياناتك مباشرة دون انتظار.' },
        { icon: '📉', title: 'مخطط تطور الوزن', desc: 'رسم بياني يوضح مسار وزنك عبر الوقت بدل الأرقام المجردة.' },
        { icon: '🎯', title: 'خطط مخصصة', desc: 'أنظمة صحية مقترحة تتناسب مع هدف كل مستخدم.' },
      ],
    },
    cta: {
      title: 'هل تريد تطبيقًا مشابهًا لمشروعك الصحي؟',
      desc: 'أبني تطبيقات متابعة صحية بسيطة وسريعة الاستجابة، مصممة حول احتياج المستخدم اليومي.',
      primaryHref: '/#contact',
      primaryLabel: 'تواصل معي',
      footnote: 'la24ithdev@gmail.com',
    },
  },
  {
    slug: 'akare-app',
    theme: realEstateTheme,
    hero: {
      badge: '📱 Flutter · Supabase · تطبيق موبايل',
      title: 'عقار — منصة البحث عن العقارات',
      subtitle: 'تصفح، قارن، وتواصل مع الوكلاء العقاريين مباشرة من تطبيق واحد.',
      stats: [
        { n: '8', l: 'ميزات رئيسية' },
        { n: '4', l: 'عقارات للمقارنة دفعة واحدة' },
        { n: 'Offline', l: 'يعمل بدون إنترنت' },
        { n: 'Supabase', l: 'Backend' },
      ],
    },
    overview: {
      label: 'نظرة عامة',
      title: 'ما هو التطبيق؟',
      desc:
        'عقار تطبيق للبحث عن العقارات وتصفحها بسهولة، مع خرائط تفاعلية، مقارنة بين العقارات، وتواصل مباشر ' +
        'مع الوكيل — كل هذا مبني على Supabase وPostgreSQL كخلفية بيانات.',
      statCards: [
        { n: '8', l: 'ميزات رئيسية' },
        { n: 'PostgreSQL', l: 'قاعدة بيانات' },
        { n: 'Supabase', l: 'Backend' },
        { n: 'BLoC', l: 'إدارة الحالة' },
      ],
    },
    apps: {
      label: 'التطبيق',
      title: 'كل أدوات البحث عن عقار في مكان واحد',
      items: [
        {
          icon: '🏠',
          name: 'تطبيق عقار',
          sub: 'Flutter · Android + iOS',
          accent: 'jade',
          features: [
            { title: 'بحث وفلترة متقدمة', desc: 'اختر المدينة، النوع، السعر، وعدد الغرف للوصول لما تريد بدقة.' },
            { title: 'خريطة تفاعلية حقيقية', desc: 'شاهد موقع كل عقار على الخريطة قبل زيارته.' },
            { title: 'مقارنة حتى 4 عقارات', desc: 'قارن المواصفات والأسعار جنبًا إلى جنب لاتخاذ قرار أفضل.' },
            { title: 'تايم لاين لتغيّر الأسعار', desc: 'تابع كيف تغيّر سعر العقار عبر الزمن.' },
            { title: 'تواصل مباشر مع الوكيل', desc: 'اتصال أو واتساب بضغطة واحدة دون البحث عن رقم.' },
            { title: 'مشاركة احترافية بالـ QR', desc: 'شارك أي عقار كبطاقة أنيقة أو رمز QR فوري.' },
            { title: 'قائمة المفضلة', desc: 'احفظ العقارات التي أعجبتك وارجع إليها متى شئت.' },
            { title: 'يعمل بدون إنترنت', desc: 'استمر بتصفح آخر البيانات حتى بدون اتصال.' },
          ],
        },
      ],
    },
    workflow: {
      title: 'رحلة الباحث عن عقار',
      desc: 'من البحث الأول وحتى التواصل مع الوكيل، كل خطوة مصممة لتكون سريعة وواضحة.',
      steps: ['🔍 بحث وفلترة', '🗺️ استعراض على الخريطة', '⚖️ مقارنة العقارات', '💬 تواصل مع الوكيل'],
    },
    techStack: {
      label: 'الستاك التقني',
      title: 'البنية والأدوات',
      items: [
        { name: 'Flutter + Dart', desc: 'Android + iOS من كودبيس واحد', color: '#1D4E89' },
        { name: 'Supabase', desc: 'Database + Auth + Storage', color: '#3ECF8E' },
        { name: 'PostgreSQL', desc: 'قاعدة بيانات علائقية قوية', color: '#336791' },
        { name: 'flutter_bloc (Cubit)', desc: 'إدارة الحالة بدون boilerplate', color: '#C08A2E' },
      ],
    },
    highlights: {
      label: 'أبرز الميزات',
      title: 'ليش هالتطبيق عملي؟',
      items: [
        { icon: '🗺️', title: 'خريطة تفاعلية حقيقية', desc: 'كل عقار يظهر على الخريطة بموقعه الفعلي، تقدر تستكشف المنطقة قبل ما تزور.' },
        { icon: '⚖️', title: 'مقارنة حتى 4 عقارات', desc: 'قارن المواصفات والأسعار جنبًا إلى جنب لاتخاذ قرار أوضح.' },
        { icon: '📶', title: 'يعمل بدون إنترنت', desc: 'آخر البيانات المحمّلة تبقى متاحة للتصفح حتى بدون اتصال.' },
        { icon: '🔗', title: 'مشاركة فورية بالـ QR', desc: 'شارك أي عقار كبطاقة أنيقة أو رمز QR بضغطة واحدة.' },
      ],
    },
    cta: {
      title: 'هل تريد منصة عقارية مشابهة؟',
      desc: 'أبني منصات عقارية متكاملة — تطبيق مستخدم، لوحة تحكم، وتطبيق وكيل — بخلفية بيانات حقيقية.',
      primaryHref: '/#contact',
      primaryLabel: 'تواصل معي',
      footnote: 'la24ithdev@gmail.com',
    },
  },
  {
    slug: 'akare-admin',
    theme: realEstateTheme,
    hero: {
      badge: '💻 Flutter · Supabase · لوحة تحكم',
      title: 'لوحة تحكم عقاري',
      subtitle: 'إدارة كاملة لمنصة العقارات — العقارات، المستخدمون، الوكلاء، والطلبات، من مكان واحد.',
      stats: [
        { n: '6', l: 'ميزات رئيسية' },
        { n: 'Supabase', l: 'Backend' },
        { n: 'RBAC', l: 'صلاحيات متعددة' },
        { n: 'BLoC', l: 'إدارة الحالة' },
      ],
    },
    overview: {
      label: 'نظرة عامة',
      title: 'ما هو التطبيق؟',
      desc:
        'لوحة تحكم إدارية لمنصة عقار، تدير من خلالها العقارات المعروضة، حسابات المستخدمين والوكلاء، ومتابعة ' +
        'الطلبات والحجوزات، مع إحصائيات تعكس أداء المنصة.',
      statCards: [
        { n: '6', l: 'ميزات رئيسية' },
        { n: 'PostgreSQL', l: 'قاعدة بيانات' },
        { n: 'Supabase', l: 'Backend' },
        { n: 'BLoC', l: 'إدارة الحالة' },
      ],
    },
    apps: {
      label: 'التطبيق',
      title: 'إدارة كاملة للمنصة',
      items: [
        {
          icon: '⚙️',
          name: 'لوحة تحكم عقاري',
          sub: 'Flutter · لوحة تحكم إدارية',
          accent: 'jade',
          features: [
            { title: 'إدارة العقارات', desc: 'إضافة أو تعديل أو حذف أي عقار بسهولة تامة.' },
            { title: 'إدارة المستخدمين والوكلاء', desc: 'متابعة كل حسابات المستخدمين والوكلاء العقاريين من مكان واحد.' },
            { title: 'متابعة الطلبات والحجوزات', desc: 'رؤية شاملة لكل طلب حجز أو معاينة فور وصوله.' },
            { title: 'لوحة إحصائيات ورسوم بيانية', desc: 'أرقام وأداء المنصة بشكل مرئي وسهل الفهم.' },
            { title: 'نظام صلاحيات متعدد المستويات', desc: 'كل موظف يرى فقط ما يخصّ عمله.' },
            { title: 'بحث وفلترة متقدمة', desc: 'الوصول لأي عقار أو مستخدم في ثوانٍ.' },
          ],
        },
      ],
    },
    techStack: {
      label: 'الستاك التقني',
      title: 'البنية والأدوات',
      items: [
        { name: 'Flutter + Dart', desc: 'Android + iOS من كودبيس واحد', color: '#1D4E89' },
        { name: 'Supabase', desc: 'Database + Auth + Storage', color: '#3ECF8E' },
        { name: 'PostgreSQL', desc: 'قاعدة بيانات علائقية قوية', color: '#336791' },
        { name: 'flutter_bloc (Cubit)', desc: 'إدارة الحالة بدون boilerplate', color: '#C08A2E' },
      ],
    },
    highlights: {
      label: 'أبرز الميزات',
      title: 'ليش هالتطبيق عملي؟',
      items: [
        { icon: '🏢', title: 'إدارة شاملة للعقارات', desc: 'إضافة، تعديل، وحذف أي عقار من مكان واحد بدون تعقيد.' },
        { icon: '🧑‍💼', title: 'إدارة المستخدمين والوكلاء', desc: 'متابعة كل الحسابات — من المستخدمين العاديين وحتى الوكلاء العقاريين.' },
        { icon: '🔐', title: 'صلاحيات متعددة المستويات', desc: 'كل موظف يشوف فقط ما يخص عمله.' },
        { icon: '📊', title: 'إحصائيات مرئية', desc: 'أرقام وأداء المنصة معروضة برسوم بيانية سهلة الفهم.' },
      ],
    },
    cta: {
      title: 'هل تحتاج لوحة تحكم عقارية مشابهة؟',
      desc: 'أبني لوحات تحكم إدارية متكاملة تدير عقاراتك ووكلاءك وطلباتك من مكان واحد.',
      primaryHref: '/#contact',
      primaryLabel: 'تواصل معي',
      footnote: 'la24ithdev@gmail.com',
    },
  },
  {
    slug: 'akare-agent',
    theme: realEstateTheme,
    hero: {
      badge: '📱 Flutter · SQL · تطبيق موبايل',
      title: 'تطبيق الوكيل العقاري',
      subtitle: 'كل أدوات الوكيل العقاري بجيبه — من إدارة عقاراته وحتى التواصل مع عملائه.',
      stats: [
        { n: '6', l: 'ميزات رئيسية' },
        { n: 'Chat', l: 'دردشة مباشرة' },
        { n: 'Push', l: 'إشعارات فورية' },
        { n: 'BLoC', l: 'إدارة الحالة' },
      ],
    },
    overview: {
      label: 'نظرة عامة',
      title: 'ما هو التطبيق؟',
      desc:
        'تطبيق مخصص للوكيل العقاري لإدارة عقاراته الخاصة، متابعة طلبات المعاينة والحجز، والتواصل المباشر ' +
        'مع العملاء داخل التطبيق دون حاجة لتطبيقات خارجية.',
      statCards: [
        { n: '6', l: 'ميزات رئيسية' },
        { n: 'SQL', l: 'قاعدة بيانات' },
        { n: 'REST', l: 'API' },
        { n: 'BLoC', l: 'إدارة الحالة' },
      ],
    },
    apps: {
      label: 'التطبيق',
      title: 'أدوات الوكيل كاملة بجيبه',
      items: [
        {
          icon: '🧳',
          name: 'تطبيق الوكيل العقاري',
          sub: 'Flutter · Android + iOS',
          accent: 'jade',
          features: [
            { title: 'إدارة عقاراتك الخاصة', desc: 'أضف وعدّل عقاراتك المعروضة بكل سهولة.' },
            { title: 'متابعة طلبات المعاينة والحجز', desc: 'لا يفوتك أي طلب من عميل مهتم.' },
            { title: 'دردشة مباشرة مع العملاء', desc: 'تواصل فوري داخل التطبيق دون الحاجة لتطبيقات خارجية.' },
            { title: 'إشعارات فورية', desc: 'تنبيه لحظي بكل طلب أو رسالة جديدة.' },
            { title: 'ملف تعريفي احترافي', desc: 'تقييمات وسجل مبيعات يعزز ثقة العملاء بك.' },
            { title: 'تقارير أداء العقارات', desc: 'اعرف أي عقاراتك تحقق أفضل تفاعل.' },
          ],
        },
      ],
    },
    workflow: {
      title: 'رحلة الوكيل مع كل طلب',
      desc: 'من لحظة وصول طلب المعاينة وحتى إتمام المتابعة مع العميل.',
      steps: ['📩 استلام طلب معاينة', '💬 دردشة مع العميل', '🔔 إشعار فوري', '📈 متابعة الأداء'],
    },
    techStack: {
      label: 'الستاك التقني',
      title: 'البنية والأدوات',
      items: [
        { name: 'Flutter + Dart', desc: 'Android + iOS من كودبيس واحد', color: '#1D4E89' },
        { name: 'SQL', desc: 'قاعدة بيانات علائقية للعقارات والطلبات', color: '#336791' },
        { name: 'flutter_bloc (Cubit)', desc: 'إدارة الحالة بدون boilerplate', color: '#C08A2E' },
        { name: 'REST API', desc: 'تواصل منظم بين التطبيق والخادم', color: '#2E6FC0' },
      ],
    },
    highlights: {
      label: 'أبرز الميزات',
      title: 'ليش هالتطبيق عملي؟',
      items: [
        { icon: '💬', title: 'دردشة مباشرة داخل التطبيق', desc: 'تواصل فوري مع العملاء المهتمين بدون اللجوء لتطبيقات خارجية.' },
        { icon: '🔔', title: 'إشعارات فورية', desc: 'تنبيه لحظي عند وصول أي طلب أو رسالة جديدة.' },
        { icon: '⭐', title: 'ملف تعريفي احترافي', desc: 'تقييمات وسجل مبيعات يعزز ثقة العملاء بالوكيل.' },
        { icon: '📈', title: 'تقارير أداء العقارات', desc: 'معرفة أي عقار يحقق أعلى تفاعل من العملاء.' },
      ],
    },
    cta: {
      title: 'هل تريد تطبيقًا مشابهًا لفريق مبيعاتك؟',
      desc: 'أبني تطبيقات ميدانية للوكلاء والمندوبين، مع دردشة وإشعارات فورية وتقارير أداء حقيقية.',
      primaryHref: '/#contact',
      primaryLabel: 'تواصل معي',
      footnote: 'la24ithdev@gmail.com',
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

