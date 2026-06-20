import Link from "next/link";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import SectionIntro from "@/components/SectionIntro";
import { GridList, GridListItem } from "@/components/GridList";
import AutoWabaForm from "@/components/AutoWabaForm";
import LanguageToggle from "@/components/LanguageToggle";
import { BsWhatsapp } from "react-icons/bs";

const pageUrl = "https://autotechify.com/ar/whatsapp-crm-qatar";

const description =
  "AutoWaba نظام واتساب CRM مجاني للشركات في قطر، مبني على الواجهة السحابية الرسمية (Meta Cloud API). أرسل حملات جماعية، وابنِ روبوتات محادثة، ووفّر صندوق بريد وارد مشتركًا لفريقك، ودع الذكاء الاصطناعي المدرّب على نشاطك التجاري يجيب عملاءك بالعربية والإنجليزية تلقائيًا. مجاني تمامًا للبدء خلال فترة الإصدار التجريبي.";

// hreflang: both language versions must reference each other (and an x-default).
const languageAlternates = {
  en: "/whatsapp-crm-qatar",
  ar: "/ar/whatsapp-crm-qatar",
  "x-default": "/whatsapp-crm-qatar",
};

export const metadata = {
  title: "واتساب CRM مجاني في قطر — AutoWaba",
  description,
  keywords: [
    "واتساب CRM قطر",
    "واتساب CRM مجاني",
    "واجهة واتساب للأعمال قطر",
    "برنامج تسويق واتساب قطر",
    "روبوت واتساب قطر",
    "بديل Wati قطر",
    "AutoWaba",
  ],
  alternates: {
    canonical: "/ar/whatsapp-crm-qatar",
    languages: languageAlternates,
  },
  openGraph: {
    title: "واتساب CRM مجاني في قطر — AutoWaba | AutoTechify",
    description,
    url: "/ar/whatsapp-crm-qatar",
    locale: "ar_QA",
  },
};

// Features — true to what AutoWaba actually does. Note: the "official API"
// claim is worded as "less prone to banning than unofficial tools" rather than
// "guaranteed against ban", which would be an overpromise (Meta can still
// restrict numbers for policy violations even on the official Cloud API).
const features = [
  {
    title: "ذكاء اصطناعي مُدرّب على نشاطك التجاري",
    description:
      "ارفع دليل منتجاتك، أو قائمة أسعارك، أو الأسئلة الشائعة، وسيتولى الذكاء الاصطناعي الإجابة على استفسارات عملائك عبر واتساب تلقائيًا — بأسلوب يعكس هوية شركتك، وباللغتين العربية والإنجليزية.",
  },
  {
    title: "حملات المراسلة الجماعية",
    description:
      "أرسل قوالب رسائل معتمدة إلى قائمة عملائك (عروض، وتذكيرات، وتحديثات)، وتابع تحليلات التفاعل بدقة لمعرفة من فتح الرسالة ومن ردّ عليها.",
  },
  {
    title: "أتمتة المحادثات (شات بوت)",
    description:
      "ابْنِ مسارات محادثة تفاعلية وذكية لتأهيل العملاء المحتملين، والإجابة عن الاستفسارات المتكررة، وتحويل المحادثات المعقدة تلقائيًا إلى موظف خدمة العملاء المختص.",
  },
  {
    title: "صندوق بريد وارد مشترك للفريق",
    description:
      "يمكن لفريقك بالكامل إدارة المحادثات والتعاون عبر رقم واتساب واحد، مع خاصية التوجيه الذكي للمحادثات بناءً على المُرسِل، أو الكلمات المفتاحية، أو القواعد التي تحدّدها.",
  },
  {
    title: "الواجهة السحابية الرسمية من Meta",
    description:
      "نظام مستقر وآمن ومتوافق مع سياسات واتساب — أقل عرضة للحظر بكثير من الأدوات غير الرسمية. مبني بالكامل على واجهة واتساب الرسمية للأعمال، ومرتبط مباشرة بحساب Meta Business ورقمك الموثّق.",
  },
  {
    title: "تطوير ودعم محلي في قطر",
    description:
      "صُمم بأيدي مطورين يفهمون احتياجات السوق القطرية والخليجية — احصل على دعم فني حقيقي ومباشر في نفس منطقتك الزمنية، وودّع طوابير الانتظار الطويلة لخدمة العملاء الخارجية.",
  },
];

// One source of truth for the FAQ: rendered visibly AND emitted as FAQPage
// structured data so Google and AI search engines can quote the answers.
const faqs = [
  {
    q: "ما هو نظام واتساب CRM؟",
    a: "هو برنامج يتيح للشركات إدارة جميع محادثات عملائها عبر واتساب من منصة مركزية واحدة — يشمل المراسلات الجماعية، وأتمتة الردود، وصندوق البريد المشترك، والتحليلات — باستخدام واجهة واتساب للأعمال الرسمية (API) بدلًا من الاعتماد على الهواتف الشخصية.",
  },
  {
    q: "هل يعمل AutoWaba للشركات في قطر؟",
    a: "نعم. AutoWaba مُطوّر ومدعوم من داخل قطر، ويعمل بكفاءة مع أي شركة تمتلك حساب Meta Business ورقم هاتف، بما في ذلك الشركات في الدوحة، وجميع أنحاء دولة قطر ومنطقة الخليج.",
  },
  {
    q: "هل يمكن للذكاء الاصطناعي الرد على العملاء بالعربية؟",
    a: "بكل تأكيد. يتم تدريب الذكاء الاصطناعي على ملفات ومستندات نشاطك التجاري ليتمكن من الإجابة على استفسارات العملاء بطلاقة باللغتين العربية والإنجليزية، وبذات الطابع والأسلوب الخاص بشركتك.",
  },
  {
    q: "هل يستخدم AutoWaba واجهة واتساب للأعمال الرسمية؟",
    a: "نعم. يعمل AutoWaba عبر الواجهة السحابية الرسمية (Meta Cloud API)، ويرتبط بحساب Meta للأعمال ورقمك الموثّق — وهو ليس من الأدوات أو البرامج غير الرسمية التي قد تعرّض رقمك للحظر.",
  },
  {
    q: "ما الفرق بين AutoWaba و Wati؟",
    a: "كلاهما يعتمد على واجهة واتساب السحابية الرسمية. تعتبر Wati منصة عالمية، بينما يُعد AutoWaba خيارًا أسرع يركّز بشكل أساسي على الذكاء الاصطناعي المدمج والمُدرّب على تفاصيل نشاطك التجاري للإجابة التلقائية، بالإضافة إلى تميّزه بتقديم دعم فني مباشر وميداني داخل قطر والخليج.",
  },
  {
    q: "هل AutoWaba مجاني فعلًا؟",
    a: "نعم — AutoWaba مجاني بالكامل للبدء خلال فترة الإصدار التجريبي (Beta). يمكنك التسجيل الآن والبدء في استخدامه دون أي رسوم. سجّل في القائمة أدناه وسنساعدك في كافة خطوات الإعداد.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AutoWaba — واتساب CRM",
      serviceType: "نظام واتساب CRM وأتمتة الأعمال",
      description,
      url: pageUrl,
      inLanguage: "ar",
      provider: { "@id": "https://autotechify.com/#organization" },
      areaServed: [
        { "@type": "Country", name: "Qatar" },
        { "@type": "City", name: "Doha" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      inLanguage: "ar",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: "https://autotechify.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "واتساب CRM في قطر",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function WhatsAppCrmQatarArabicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div lang="ar" dir="rtl">
        {/* Hero (inline so the language toggle sits cleanly above it) */}
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <LanguageToggle href="/whatsapp-crm-qatar" label="English" />
            <h1 className="mt-8">
              <span className="block font-display text-base font-semibold text-neutral-950">
                واتساب CRM مجاني · قطر
              </span>
              <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                نظام واتساب CRM المجاني المصمَّم للشركات في قطر.
              </span>
            </h1>
            <div className="mt-6 max-w-3xl text-xl text-neutral-600">
              <p>
                يحوّل AutoWaba رقم واتساب الخاص بنشاطك التجاري إلى منصة متكاملة
                لإدارة وعلاقات العملاء — تتيح لك إرسال حملات جماعية، وبناء روبوتات
                محادثة (شات بوت)، وتوفير صندوق بريد مشترك لفريقك، بالإضافة إلى
                ذكاء اصطناعي يرد على عملائك تلقائيًا باللغتين العربية والإنجليزية.
                النظام مبني بالكامل على الواجهة السحابية الرسمية (Meta Cloud
                API)، ومطوّر ومدعوم محليًا من داخل قطر — ومجاني تمامًا للبدء خلال
                فترة الإصدار التجريبي.
              </p>
            </div>
            <div className="mt-8">
              <AutoWabaForm cta="ابدأ مجانًا" source="whatsapp-crm-qatar-ar" />
            </div>
          </FadeIn>
        </Container>

        <SectionIntro
          eyebrow="ماذا يقدّم AutoWaba؟"
          title="كل ما تحتاجه لإدارة علاقات العملاء عبر واتساب."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            أداة واحدة تغنيك عن قضاء ساعات أسبوعيًا في الردود اليدوية — دون
            الحاجة لزيادة عدد موظفيك.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            {features.map((feature) => (
              <GridListItem key={feature.title} title={feature.title}>
                {feature.description}
              </GridListItem>
            ))}
          </GridList>
        </Container>

        <SectionIntro
          eyebrow="لماذا تختار الشركات في قطر AutoWaba؟"
          title="دعم محلي، أولوية للذكاء الاصطناعي، وربط رسمي مع Meta."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            معظم أنظمة إدارة علاقات العملاء (CRM) عبر واتساب مُطوَّرة في الخارج
            وتقدّم دعمًا فنيًا في مناطق زمنية مختلفة. AutoWaba صُنع في قطر،
            ويتفاعل مع عملائك باحترافية باللغتين العربية والإنجليزية، ويعمل عبر
            واجهة واتساب السحابية الرسمية — ليمنحك منصة حديثة ترتكز على الذكاء
            الاصطناعي مع دعم محلي حقيقي ومباشر.
          </p>
        </SectionIntro>

        <Container className="mt-24 sm:mt-32">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-neutral-950">
              الأسئلة الشائعة
            </h2>
            <dl className="mt-10 max-w-3xl space-y-8">
              {faqs.map((item) => (
                <div key={item.q}>
                  <dt className="font-display text-lg font-semibold text-neutral-950">
                    {item.q}
                  </dt>
                  <dd className="mt-3 text-base text-neutral-600">{item.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-base text-neutral-600">
              هل تريد الاطلاع على قائمة الميزات الكاملة؟{" "}
              <Link
                href="/apps"
                className="font-semibold text-neutral-950 underline"
              >
                تعرّف على المزيد حول AutoWaba في صفحة التطبيقات
              </Link>
            </p>
          </FadeIn>
        </Container>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                جاهز للبدء مع AutoWaba؟
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                ابدأ مجانًا خلال فترة الإصدار التجريبي، أو تواصل معنا عبر واتساب
                وسنقوم بمساعدتك في إعداد النظام خطوة بخطوة.
              </p>
              <div className="mt-6 flex">
                <a
                  href="https://wa.me/97471427415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                >
                  <BsWhatsapp className="h-5 w-5 text-[#25D366]" />
                  تواصل معنا عبر واتساب
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  );
}
