import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

/* ─── Hero Slider ─────────────────────────────────────────────────────────── */
const slideBgs = [
    '/assets/images/banner/banner-12.jpg',
    '/assets/images/banner/banner-11.jpg',
    '/assets/images/banner/banner-14.jpg',
];

function HeroSlider() {
    const { t } = useTranslation(['home']);
    const [cur, setCur] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setCur(c => (c + 1) % 3), 5500);
        return () => clearInterval(id);
    }, []);
    const slides = [
        { title: t('home:hero.slide1.title'), sub: t('home:hero.slide1.subtitle') },
        { title: t('home:hero.slide2.title'), sub: t('home:hero.slide2.subtitle') },
        { title: t('home:hero.slide3.title'), sub: t('home:hero.slide3.subtitle') },
    ];
    return (
        <section className="relative overflow-hidden" style={{ height: 650 }}>
            {slideBgs.map((bg, i) => (
                <div key={i} className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{ backgroundImage: `url('${bg}')`, opacity: i === cur ? 1 : 0 }} />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />
            <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-4">
                <div className="max-w-2xl text-white">
                    <h1 className="text-5xl font-bold leading-tight md:text-6xl" style={{ textShadow: '0 2px 20px rgba(0,0,0,.5)' }}>
                        {slides[cur].title}
                    </h1>
                    <p className="mt-5 text-xl leading-relaxed text-slate-200 whitespace-pre-line" style={{ textShadow: '0 1px 10px rgba(0,0,0,.4)' }}>
                        {slides[cur].sub}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link href="/register" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white transition-all hover:opacity-90" style={{ background: '#c52126' }}>
                            <i className="fas fa-chart-line" /> {t('home:hero.start_trading')}
                        </Link>
                        <Link href="/demo" className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                            <i className="fas fa-play-circle mr-2" />{t('home:hero.try_demo')}
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
                    {[0,1,2].map(i => (
                        <button key={i} onClick={() => setCur(i)}
                            className={`h-2 rounded-full transition-all ${i===cur ? 'w-8' : 'w-2 bg-white/40'}`}
                            style={i===cur ? {background:'#c52126'} : {}}
                            aria-label={`Slide ${i+1}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function Welcome() {
    const { t } = useTranslation(['home', 'common']);

    const processSteps = [
        { fa: 'fas fa-building',   title: t('home:process.step1.title'), desc: t('home:process.step1.desc') },
        { fa: 'fas fa-eye',        title: t('home:process.step2.title'), desc: t('home:process.step2.desc') },
        { fa: 'fas fa-bolt',       title: t('home:process.step3.title'), desc: t('home:process.step3.desc') },
        { fa: 'fas fa-microchip',  title: t('home:process.step4.title'), desc: t('home:process.step4.desc') },
    ];

    const productList = [
        { key: 'forex',       icon: '/assets/images/service/icon/25.svg', href: '/forex' },
        { key: 'indices',     icon: '/assets/images/service/icon/27.svg', href: '/indices' },
        { key: 'commodities', icon: '/assets/images/service/icon/26.svg', href: '/commodities' },
        { key: 'cfds',        icon: '/assets/images/service/icon/29.svg', href: '/cfds' },
        { key: 'futures',     icon: '/assets/images/service/icon/28.svg', href: '/futures' },
    ];

    const mt5Features = [
        { fa: 'fas fa-percent',     title: t('home:mt5.features.rates.title'),    desc: t('home:mt5.features.rates.desc') },
        { fa: 'fas fa-laptop-code', title: t('home:mt5.features.anywhere.title'), desc: t('home:mt5.features.anywhere.desc') },
        { fa: 'fas fa-chart-line',  title: t('home:mt5.features.analysis.title'), desc: t('home:mt5.features.analysis.desc') },
        { fa: 'fas fa-layer-group', title: t('home:mt5.features.multi.title'),    desc: t('home:mt5.features.multi.desc') },
    ];

    const whyItems = [
        { fa: 'fas fa-shield-alt',   text: t('home:why_choose.item1') },
        { fa: 'fas fa-headset',      text: t('home:why_choose.item2') },
        { fa: 'fas fa-chart-bar',    text: t('home:why_choose.item3') },
        { fa: 'fas fa-lock',         text: t('home:why_choose.item4') },
        { fa: 'fas fa-pencil-ruler', text: t('home:why_choose.item5') },
        { fa: 'fas fa-tag',          text: t('home:why_choose.item6') },
        { fa: 'fas fa-tachometer-alt', text: t('home:why_choose.item7') },
    ];

    return (
        <>
            <Head title="Wafra Capital | Home" />
            <HeroSlider />

            {/* ── Who We Are ─────────────────────────────────────────────── */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="mb-10 text-4xl font-bold text-slate-900">{t('home:who_we_are.title')}</h2>
                    <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
                        <div className="flex-1 space-y-6">
                            <p className="text-lg font-semibold" style={{ color: '#c52126' }}>{t('home:who_we_are.tagline')}</p>
                            <p className="text-slate-600 leading-relaxed">{t('home:who_we_are.description')}</p>
                            <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                <video src="/assets/images/gallery/Trading_Chart1.mp4" className="w-full rounded-2xl" autoPlay loop muted playsInline />
                            </div>
                            <Link href="/about-us" className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-white transition-all hover:opacity-90" style={{ background: '#c52126' }}>
                                {t('home:who_we_are.explore_more')} <i className="fas fa-arrow-right rtl:rotate-180" />
                            </Link>
                        </div>

                        <div className="flex-1">
                            {processSteps.map((step, i) => (
                                <div key={i} className="flex gap-6 pb-8 last:pb-0">
                                    <div className="flex flex-col items-center">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white text-xl" style={{ background: '#c52126' }}>
                                            <i className={step.fa} />
                                        </div>
                                        {i < processSteps.length - 1 && <div className="mt-2 w-0.5 flex-1" style={{ background: 'rgba(197,33,38,.2)' }} />}
                                    </div>
                                    <div className="pb-2">
                                        <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                                        <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Products ───────────────────────────────────────────── */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#c52126' }}>{t('home:products.title')}</span>
                        <p className="mt-4 text-lg text-slate-600">{t('home:products.subtitle')}</p>
                    </div>
                    <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {productList.map(p => (
                            <Link key={p.key} href={p.href}
                                className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-xl"
                                style={{ ['--tw-border-opacity' as string]: 1 }}
                            >
                                <img src={p.icon} alt={t(`home:product_list.${p.key}.title`)} className="mb-4 h-20 w-20 object-contain" />
                                <h5 className="mb-2 font-bold text-slate-900 transition-colors group-hover:text-[#c52126]">
                                    {t(`home:product_list.${p.key}.title`)}
                                </h5>
                                <p className="text-xs text-slate-500 leading-relaxed">{t(`home:product_list.${p.key}.desc`)}</p>
                                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold" style={{ color: '#c52126' }}>
                                    {t('home:products.read_more')} <i className="fas fa-arrow-right text-[10px] rtl:rotate-180" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MT5 Platform ───────────────────────────────────────────── */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <p className="text-lg font-semibold uppercase tracking-wide text-slate-500">{t('home:mt5.platform_label')}</p>
                        <h2 className="mt-2 text-6xl font-bold" style={{ color: '#c52126' }}>{t('home:mt5.heading')}</h2>
                        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">{t('home:mt5.description')}</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {mt5Features.map(f => (
                            <div key={f.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
                                style={{ borderTopWidth: 3, borderTopColor: '#c52126' }}>
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl text-white text-2xl" style={{ background: '#c52126' }}>
                                    <i className={f.fa} />
                                </div>
                                <h5 className="mb-3 font-bold text-slate-900">{f.title}</h5>
                                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link href="/platform" className="inline-flex items-center gap-2 rounded-full px-10 py-4 font-bold text-white transition-all hover:opacity-90" style={{ background: '#c52126' }}>
                            <i className="fas fa-desktop" /> {t('home:mt5.explore_btn')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Why Choose ─────────────────────────────────────────────── */}
            <section className="py-20 text-white" style={{ background: 'linear-gradient(264deg,#202020 0%,#505050 100%)' }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
                        <div className="flex flex-1 items-center justify-center">
                            <img src="/assets/images/business-goal/wc1.png" alt={t('home:why_choose.title')} className="max-h-[450px] w-full max-w-md object-contain" />
                        </div>
                        <div className="flex-1 space-y-8">
                            <h2 className="text-3xl font-bold md:text-4xl">{t('home:why_choose.title')}</h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {whyItems.map(item => (
                                    <div key={item.text} className="flex items-start gap-3">
                                        <i className={`${item.fa} mt-1 text-lg`} style={{ color: '#c52126' }} />
                                        <p className="text-sm text-slate-300">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <Link href="/register" className="inline-flex items-center gap-2 rounded-full px-10 py-4 font-bold text-white transition-all hover:opacity-90" style={{ background: '#c52126' }}>
                                <i className="fas fa-user-plus" /> {t('common:actions.register')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ────────────────────────────────────────────────────── */}
            <section className="relative bg-cover bg-center py-24 text-white" style={{ backgroundImage: "url('/assets/images/testimonials/bg-04.jpg')" }}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="container relative mx-auto px-4">
                    <div className="ml-auto max-w-xl space-y-6">
                        <h2 className="text-4xl font-bold md:text-5xl">{t('home:cta_section.title')}</h2>
                        <p className="text-lg text-slate-200">{t('home:cta_section.description')}</p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/register" className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white transition-all hover:opacity-90" style={{ background: '#c52126' }}>
                                <i className="fas fa-rocket" /> {t('home:cta_section.open_live')}
                            </Link>
                            <Link href="/demo" className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold backdrop-blur-sm transition-all hover:bg-white/20">
                                <i className="fas fa-play-circle mr-2" />{t('home:cta_section.try_demo')}
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white text-white text-xl">
                                <i className="fas fa-phone" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-300">{t('home:cta_section.help')}</p>
                                <a href="tel:+97143258155" className="text-lg font-bold text-white hover:opacity-80 transition-opacity">+(971) 043 258 155</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WhatsApp float */}
            <a href="https://wa.me/+971543088347" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
                className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white text-2xl shadow-lg transition-transform hover:scale-110"
                style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,.5)' }}>
                <i className="fab fa-whatsapp" />
            </a>
        </>
    );
}
