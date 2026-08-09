'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  HeartPulse,
  Building2,
  Sparkles,
  ArrowLeft,
  ArrowUpRight,
} from 'lucide-react';

// ─── بيانات مميزات التطبيقات (نسخة موجّهة للمستخدم النهائي) ─────────────────
interface AppFeatureSet {
  id: number;
  slug: string;
  name: string;
  category: 'Health' | 'Real Estate';
  tagline: string;
  icon: string;
  features: { title: string; description: string }[];
  caseStudySlug?: string;
}

const appFeatureSets: AppFeatureSet[] = [
  {
    id: 1,
    slug: 'health-dashboard',
    name: 'لوحة تحكم نظام صحي',
    category: 'Health',
     caseStudySlug: 'health-dashboard',
    tagline: 'إدارة كاملة للبرامج الصحية والمستخدمين من مكان واحد',
    icon: 'https://res.cloudinary.com/olhrhert/image/upload/v1783605586/%D9%84%D9%88%D8%BA%D9%88_%D9%84%D9%88%D8%AD%D8%A9_%D8%A7%D9%84%D8%AA%D8%AD%D9%83%D9%85_rkcky6.png',
    features: [
      { title: 'إدارة المستخدمين والبرامج الصحية', description: 'إضافة وتعديل ومتابعة كل مستخدم وبرنامج صحي بسهولة تامة.' },
      { title: 'طباعة تقارير مفصلة', description: 'استخراج تقارير جاهزة للطباعة بضغطة واحدة، مرتبة وواضحة.' },
      { title: 'لوحة إحصائيات متقدمة', description: 'رسوم بيانية تعرض الأداء والتقدّم لحظة بلحظة.' },
      { title: 'نظام صلاحيات متعدد المستويات', description: 'تحكم دقيق في من يرى ماذا، حسب دور كل مستخدم.' },
    ],
  },
  {
    id: 2,
    slug: 'clinic-app',
    
    name: 'تطبيق عيادتي',
    category: 'Health',
    tagline: 'إدارة العيادة الطبية وتسجيل المرضى بكل سهولة وسرعة',
    caseStudySlug: 'clinic-app',
    icon: 'https://res.cloudinary.com/olhrhert/image/upload/v1783594167/logo_mu_clinc_t74jo1.png',
    features: [
      { title: 'إضافة مرضى', description: 'تسجيل بيانات المريض في ثوانٍ دون تعقيد.' },
      { title: 'تسجيل مواعيد', description: 'حجز وتنظيم المواعيد اليومية لتجنّب أي تضارب.' },
      { title: 'ملف طبي شامل', description: 'كل تاريخ المريض الطبي محفوظ ومتاح عند الحاجة فورًا.' },
      { title: 'قائمة انتظار ذكية', description: 'ترتيب المرضى في العيادة تلقائيًا حسب الدور.' },
      { title: 'طباعة ملف طبي', description: 'إصدار تقرير أو وصفة طبية جاهزة للطباعة مباشرة.' },
      { title: 'اختصارات سريعة', description: 'إنجاز المهام المتكررة بأقل عدد من الضغطات.' },
    ],
  },
  {
    id: 3,
    slug: 'motaa-taghyeer',
    name: 'تطبيق متعة التغيير',
    category: 'Health',
     caseStudySlug: 'motaa-taghyeer',
    tagline: 'رفيقك اليومي لمتابعة وزنك والتزامك بأسلوب حياة صحي',
    icon: 'https://res.cloudinary.com/olhrhert/image/upload/v1783595785/photo_1_2026-07-08_11-51-05-removebg-preview_g3kb7j.png',
    features: [
      { title: 'متابعة الوزن', description: 'تسجيل وزنك بشكل دوري ومشاهدة تطوره على مخطط بياني.' },
      { title: 'أنظمة صحية مناسبة', description: 'خطط وأنظمة تتوافق مع هدفك واحتياجك الشخصي.' },
      { title: 'تخزين محلي سريع', description: 'بياناتك محفوظة على جهازك وتفتح فورًا دون انتظار.' },
      { title: 'متابعة الالتزام', description: 'تذكيرات ومؤشرات تساعدك على الاستمرار يومًا بيوم.' },
    ],
  },
  {
    id: 4,
    slug: 'akare-app',
    name: 'تطبيق عقار',
     caseStudySlug:'akare-app',
    category: 'Real Estate',
    tagline: 'تصفح وابحث عن عقار أحلامك بثقة، أينما كنت',
    icon: 'https://res.cloudinary.com/olhrhert/image/upload/v1784200252/app_icon1_j39mdp.png',
    features: [
      { title: 'بحث وفلترة متقدمة', description: 'اختر المدينة، النوع، السعر، وعدد الغرف للوصول لما تريد بدقة.' },
      { title: 'خريطة تفاعلية حقيقية', description: 'شاهد موقع كل عقار على الخريطة قبل زيارته.' },
      { title: 'مقارنة حتى 4 عقارات', description: 'قارن المواصفات والأسعار جنبًا إلى جنب لاتخاذ قرار أفضل.' },
      { title: 'تايم لاين لتغيّر الأسعار', description: 'تابع كيف تغيّر سعر العقار عبر الزمن.' },
      { title: 'تواصل مباشر مع الوكيل', description: 'اتصال أو واتساب بضغطة واحدة دون البحث عن رقم.' },
      { title: 'مشاركة احترافية بالـ QR', description: 'شارك أي عقار كبطاقة أنيقة أو رمز QR فوري.' },
      { title: 'قائمة المفضلة', description: 'احفظ العقارات التي أعجبتك وارجع إليها متى شئت.' },
      { title: 'يعمل بدون إنترنت', description: 'استمر بتصفح آخر البيانات حتى بدون اتصال.' },
    ],
  },
  {
    id: 5,
    slug: 'akare-admin',
    name: 'لوحة تحكم عقاري',
    category: 'Real Estate',
     caseStudySlug:'akare-admin',
    tagline: 'إدارة كاملة لمنصة العقارات من طرف الإدارة',
    icon: 'https://res.cloudinary.com/olhrhert/image/upload/v1784200252/app_icon1_j39mdp.png',
    features: [
      { title: 'إدارة العقارات', description: 'إضافة أو تعديل أو حذف أي عقار بسهولة تامة.' },
      { title: 'إدارة المستخدمين والوكلاء', description: 'متابعة كل حسابات المستخدمين والوكلاء العقاريين من مكان واحد.' },
      { title: 'متابعة الطلبات والحجوزات', description: 'رؤية شاملة لكل طلب حجز أو معاينة فور وصوله.' },
      { title: 'لوحة إحصائيات ورسوم بيانية', description: 'أرقام وأداء المنصة بشكل مرئي وسهل الفهم.' },
      { title: 'نظام صلاحيات متعدد المستويات', description: 'كل موظف يرى فقط ما يخصّ عمله.' },
      { title: 'بحث وفلترة متقدمة', description: 'الوصول لأي عقار أو مستخدم في ثوانٍ.' },
    ],
  },
  {
    id: 6,
    slug: 'akare-agent',
    name: 'تطبيق الوكيل العقاري',
    category: 'Real Estate',
     caseStudySlug:'akare-agent',
    tagline: 'كل أدوات الوكيل العقاري في جيبه',
    icon: 'https://res.cloudinary.com/olhrhert/image/upload/v1784384344/2_beefub.png',
    features: [
      { title: 'إدارة عقاراتك الخاصة', description: 'أضف وعدّل عقاراتك المعروضة بكل سهولة.' },
      { title: 'متابعة طلبات المعاينة والحجز', description: 'لا يفوتك أي طلب من عميل مهتم.' },
      { title: 'دردشة مباشرة مع العملاء', description: 'تواصل فوري داخل التطبيق دون الحاجة لتطبيقات خارجية.' },
      { title: 'إشعارات فورية', description: 'تنبيه لحظي بكل طلب أو رسالة جديدة.' },
      { title: 'ملف تعريفي احترافي', description: 'تقييمات وسجل مبيعات يعزز ثقة العملاء بك.' },
      { title: 'تقارير أداء العقارات', description: 'اعرف أي عقاراتك تحقق أفضل تفاعل.' },
    ],
  },

{
  id: 7,
  slug: 'salla-app',
  name: 'تطبيق دكان',
  category: 'E-Commerce',
  caseStudySlug: 'salla-app',
  tagline: 'متجرك الإلكتروني السوري بين يديك',
 icon: 'https://res.cloudinary.com/olhrhert/image/upload/v1786265830/logo_l1ajja.png',
  features: [
    { title: 'بحث ذكي يتحمل الأخطاء الإملائية', description: 'اعثر على ما تريد بسهولة حتى لو أخطأت في الكتابة.' },
    { title: 'كوبونات خصم فورية', description: 'استفد من كوبونات نسبة أو مبلغ ثابت عند الدفع.' },
    { title: 'إلغاء الطلب خلال 15 دقيقة', description: 'غيّرت رأيك؟ ألغِ طلبك بضغطة زر وسيُعاد المبلغ فورًا.' },
    { title: 'تسوّق كزائر أو كعضو', description: 'ابدأ التسوق فورًا، وسلتك تُدمج تلقائيًا عند تسجيل الدخول.' },
    { title: 'مفضلة وتقييمات', description: 'احفظ منتجاتك المفضلة وشارك تجربتك مع المنتجات.' },
    { title: 'تتبع حالة الطلب', description: 'تابع طلبك خطوة بخطوة من التأكيد حتى التوصيل.' },
  ],
},

{
  id: 8,
  slug: 'dukan-admin',
  name: 'تطبيق الأدمن — دكان',
  category: 'E-Commerce',
  caseStudySlug: 'salla-app',
  tagline: 'إدارة متجرك بالكامل من جيبك',
  icon: 'https://res.cloudinary.com/olhrhert/image/upload/v1786265830/logo_l1ajja.png',
  features: [
    { title: 'إدارة الطلبات وحالاتها', description: 'تابع كل طلب وحدّث حالته بالتسلسل الصحيح فقط.' },
    { title: 'إدارة المنتجات والتصنيفات', description: 'أضف وعدّل منتجاتك مع رفع صور مضغوطة تلقائيًا.' },
    { title: 'كوبونات خصم ذكية', description: 'أنشئ كوبونات بنسبة أو مبلغ ثابت مع حد استخدام وتاريخ انتهاء.' },
    { title: 'رسوم توصيل حسب المحافظة', description: 'اضبط رسوم توصيل مستقلة لكل محافظة سورية.' },
    { title: 'حماية أمنية متعددة الطبقات', description: 'تحقق من صلاحية الأدمن عند كل تسجيل دخول وفتح للتطبيق.' },
    { title: 'تفاصيل كاملة لكل طلب', description: 'اعرض بيانات الزبون والعنوان والمنتجات والمبالغ في نظرة واحدة.' },
  ],
},
];

const categoryMeta: Record<AppFeatureSet['category'], { label: string; icon: typeof HeartPulse; color: string }> = {
 ' Health': { label: 'صحة', icon: HeartPulse, color: '#27c6da' },
  'Real Estate: { label: 'عقارات', icon: Building2, color: '#7c5cfc' },
   'E-Commerce': { label: 'متاجر', icon: Building2, color: '#7c5cfc' },
};

// ─── بطاقة ميزة واحدة ────────────────────────────────────────────────────────
function FeatureCard({ title, description, index, accent }: { title: string; description: string; index: number; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: 0.04 * index }}
      className="glass glass-hover rounded-2xl p-5 flex items-start gap-3.5"
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: `${accent}1a`, color: accent }}
      >
        <CheckCircle2 className="w-4.5 h-4.5" />
      </div>
      <div>
        <h4 className="font-semibold text-sm text-white leading-snug mb-1">{title}</h4>
        <p className="text-xs text-[#9aa7b8] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// ─── قسم تطبيق واحد ──────────────────────────────────────────────────────────
function AppSection({ app, index }: { app: AppFeatureSet; index: number }) {
  const meta = categoryMeta[app.category];
  const CatIcon = meta.icon;

  return (
    <motion.section
      id={app.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-28"
    >
      <div className="glass rounded-3xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
        {/* توهج خلفي خفيف */}
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: meta.color }}
        />

        {/* رأس القسم */}
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#060b13] border border-white/10 shrink-0 relative">
            <Image src={app.icon} alt={app.name} fill className="object-contain p-2" unoptimized />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono border"
                style={{ color: meta.color, borderColor: `${meta.color}4d`, backgroundColor: `${meta.color}14` }}
              >
                <CatIcon className="w-3 h-3" />
                {meta.label}
              </span>
              <span className="text-[10px] font-mono text-[#5f6b7d]">{app.features.length} ميزات رئيسية</span>
            </div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-white">{app.name}</h2>
            <p className="text-[#9aa7b8] text-sm mt-1">{app.tagline}</p>
          </div>
          {app.caseStudySlug && (
            <Link
              href={`/case-studies/${app.caseStudySlug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border border-white/15 text-white hover:border-[#27c6da]/50 hover:text-[#27c6da] transition-all shrink-0 self-start sm:self-center"
            >
              التفاصيل الكاملة
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* شبكة المميزات */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {app.features.map((f, i) => (
            <FeatureCard key={f.title} title={f.title} description={f.description} index={i} accent={meta.color} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// ─── الصفحة ──────────────────────────────────────────────────────────────────
export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | AppFeatureSet['category']>('all');

  const filtered = useMemo(
    () => (activeCategory === 'all' ? appFeatureSets : appFeatureSets.filter(a => a.category === activeCategory)),
    [activeCategory]
  );

  const totalFeatures = useMemo(() => appFeatureSets.reduce((sum, a) => sum + a.features.length, 0), []);
  const categories: Array<'all' | AppFeatureSet['category']> = ['all', 'Health', 'Real Estate'];

  return (
    <section className="min-h-screen pt-32 pb-24" dir="rtl">
      <div className="container-custom">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#27c6da]/10 border border-[#27c6da]/30 text-[#27c6da] text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            دليل المستخدم
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            مميزات <span className="gradient-text">تطبيقاتنا</span>
          </h1>
          <p className="text-[#9aa7b8] text-lg mt-4 leading-relaxed">
            تعرّف على أهم ما يقدّمه كل تطبيق من إمكانيات عملية، مشروحة بشكل مبسّط وواضح — بدون أي تفاصيل تقنية معقّدة.
          </p>
          <p className="text-[#5f6b7d] text-sm mt-3 font-mono">
            {appFeatureSets.length} تطبيقات · {totalFeatures} ميزة موثّقة
          </p>
        </motion.div>

        {/* فلاتر الفئات */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#27c6da] text-[#04101f]'
                  : 'bg-white/5 border border-white/10 text-[#9aa7b8] hover:bg-white/10'
              }`}
            >
              {cat === 'all' ? 'الكل' : categoryMeta[cat].label}
            </button>
          ))}
        </div>

        {/* روابط تنقّل سريعة */}
        <div className="flex flex-wrap gap-2 mb-14">
          {filtered.map(app => (
            <a
              key={app.slug}
              href={`#${app.slug}`}
              className="group inline-flex items-center gap-2 pl-3 pr-1.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#27c6da]/40 transition-all"
            >
              <span className="w-6 h-6 rounded-full overflow-hidden bg-[#060b13] relative shrink-0">
                <Image src={app.icon} alt="" fill className="object-contain p-0.5" unoptimized />
              </span>
              <span className="text-xs text-[#9aa7b8] group-hover:text-white transition-colors">{app.name}</span>
              <ArrowLeft className="w-3 h-3 text-[#5f6b7d] group-hover:text-[#27c6da] group-hover:-translate-x-0.5 transition-all" />
            </a>
          ))}
        </div>

        {/* أقسام التطبيقات */}
        <div className="flex flex-col gap-10">
          {filtered.map((app, index) => (
            <AppSection key={app.slug} app={app} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#9aa7b8]">لا توجد تطبيقات ضمن هذه الفئة.</p>
          </div>
        )}
      </div>
    </section>
  );
}
