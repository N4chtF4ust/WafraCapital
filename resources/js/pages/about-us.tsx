import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function BarRow({ label, pct }: { label: string; pct: number }) {
    return (
        <div className="grid gap-1">
            <span className="text-sm font-semibold text-slate-900">{label}</span>
            <div className="relative h-3 overflow-hidden rounded-full" style={{ background: 'rgba(197,33,38,.1)' }}>
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg,rgba(197,33,38,.9),rgba(56,0,0,.8))' }} />
            </div>
        </div>
    );
}

function MiniBar({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="w-32 shrink-0 text-xs font-semibold text-slate-700">{label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: 'rgba(197,33,38,.1)' }}>
                <div className="h-full w-full rounded-full" style={{ background: 'linear-gradient(90deg,#c52126,#8b1519)' }} />
            </div>
        </div>
    );
}

function FaqItem({ num, question, answer }: { num: number; question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-md" style={{ borderColor: open ? '#c52126' : '#e2e8f0' }}>
            <button className="flex w-full items-center gap-4 p-5 text-start" onClick={() => setOpen(!open)}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white" style={{ background: '#c52126' }}>
                    {num}
                </span>
                <span className="flex-1 font-bold text-slate-900 text-sm leading-snug">{question}</span>
                <i className={`fas fa-chevron-down text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            {open && (
                <div className="px-5 pb-5 ms-[52px]">
                    <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function AboutUs() {
    const { t } = useTranslation(['about', 'common']);

    const faqs = Array.from({ length: 14 }, (_, i) => ({
        q: t(`about:faq.q${i + 1}`),
        a: t(`about:faq.a${i + 1}`),
    }));

    return (
        <>
            <Head title={`Wafra Capital | ${t('about:title')}`} />

            {/* ── Breadcrumb Hero ─────────────────────────────────────────── */}
            <section className="relative bg-cover bg-center py-20 text-white" style={{ backgroundImage: "url('/assets/images/breadcrumb/03.jpg')" }}>
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,.55)' }} />
                <div className="container relative mx-auto px-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h1 className="text-4xl font-bold md:text-5xl">{t('about:title')}</h1>
                        <p className="mt-2 text-sm font-medium" style={{ color: '#e6c4c4' }}>{t('about:breadcrumb_desc')}</p>
                    </div>
                    <nav className="flex items-center gap-2 text-sm text-slate-300">
                        <Link href="/" className="hover:text-white transition-colors">{t('common:nav.home')}</Link>
                        <span>/</span>
                        <span className="text-white font-medium">{t('about:title')}</span>
                    </nav>
                </div>
            </section>

            {/* ── Main About Section ──────────────────────────────────────── */}
            <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('/assets/images/bg/w6.jpg')" }}>
                <div className="absolute inset-0 backdrop-blur-[1px]" style={{ background: 'rgba(255,255,255,.72)' }} />
                <div className="container relative mx-auto px-4 space-y-10">

                    {/* Full-width image */}
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                        <img src="/assets/images/meeting/5.jpg" alt="Wafra Capital office" className="w-full h-64 object-cover md:h-80 lg:h-96" />
                    </div>

                    {/* Two-column */}
                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* Left */}
                        <div className="space-y-6">
                            <h2 className="text-lg font-bold text-slate-900 leading-relaxed">{t('about:main.heading')}</h2>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">{t('about:main.desc1')}</p>
                            <div className="flex flex-wrap gap-6 py-2">
                                {[
                                    { fa: 'fas fa-shield-alt', label: t('about:main.badge1') },
                                    { fa: 'fas fa-desktop',    label: t('about:main.badge2') },
                                    { fa: 'fas fa-layer-group',label: t('about:main.badge3') },
                                ].map(b => (
                                    <div key={b.label} className="flex flex-1 min-w-[100px] flex-col items-center gap-3 text-center">
                                        <i className={`${b.fa} text-5xl`} style={{ background:'linear-gradient(135deg,#c52126,#000)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }} />
                                        <span className="text-sm font-semibold text-slate-800">{b.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right */}
                        <div className="space-y-6">
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">{t('about:main.desc2')}</p>
                            {/* Performance chart */}
                            <div className="rounded-2xl border p-5 shadow-xl backdrop-blur-md" style={{ background:'rgba(255,255,255,.5)', borderColor:'rgba(255,255,255,.6)' }}>
                                <div className="flex items-center gap-3 border-b pb-3 mb-4" style={{ borderColor:'rgba(255,255,255,.5)' }}>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-lg" style={{ background:'linear-gradient(135deg,#c52126,#000)' }}>
                                        <i className="fas fa-chart-line" />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold text-slate-900">{t('about:main.chart_title')}</h5>
                                        <p className="text-xs text-slate-500">{t('about:main.chart_subtitle')}</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <BarRow label={t('about:main.chart_speed')}    pct={92} />
                                    <BarRow label={t('about:main.chart_liquidity')} pct={88} />
                                    <BarRow label={t('about:main.chart_support')}  pct={94} />
                                </div>
                            </div>
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-bold text-white transition-all hover:opacity-90" style={{ background:'#c52126' }}>
                                <i className="fas fa-envelope" /> {t('about:main.contact_btn')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Vision, Mission, Principles & Goals ─────────────────────── */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="mb-12 text-3xl font-bold text-slate-900 md:text-4xl">{t('about:vmg.title')}</h2>
                    <div className="space-y-8">
                        {/* Vision + Mission */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {[
                                { fa: 'fas fa-eye',      title: t('about:vmg.vision_title'),  desc: t('about:vmg.vision_desc') },
                                { fa: 'fas fa-bullseye', title: t('about:vmg.mission_title'), desc: t('about:vmg.mission_desc') },
                            ].map(card => (
                                <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white text-2xl" style={{ background: '#c52126' }}>
                                        <i className={card.fa} />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-slate-900">{card.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="h-px" style={{ background: 'linear-gradient(90deg,transparent,rgba(197,33,38,.3),transparent)' }} />

                        {/* Principles + Goals */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Principles */}
                            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white text-2xl" style={{ background: '#c52126' }}>
                                    <i className="fas fa-handshake" />
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-slate-900">{t('about:vmg.principles_title')}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{t('about:vmg.principles_desc')}</p>
                                <div className="mt-5 space-y-3 rounded-xl p-4" style={{ background: 'rgba(197,33,38,.04)' }}>
                                    <MiniBar label={t('about:vmg.principles_clarity')} />
                                    <MiniBar label={t('about:vmg.principles_integrity')} />
                                    <MiniBar label={t('about:vmg.principles_accountability')} />
                                </div>
                                <p className="mt-5 text-slate-600 text-sm leading-relaxed">{t('about:vmg.principles_desc2')}</p>
                            </div>

                            {/* Goals */}
                            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white text-2xl" style={{ background: '#c52126' }}>
                                    <i className="fas fa-flag-checkered" />
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-slate-900">{t('about:vmg.goals_title')}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{t('about:vmg.goals_desc')}</p>
                                <div className="mt-6 flex gap-4">
                                    {[
                                        { fa: 'fas fa-microchip',  label: t('about:vmg.goals_tech') },
                                        { fa: 'fas fa-shield-alt', label: t('about:vmg.goals_compliance') },
                                        { fa: 'fas fa-user-check', label: t('about:vmg.goals_empowerment') },
                                    ].map(item => (
                                        <div key={item.label} className="flex flex-1 flex-col items-center gap-2 text-center">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white text-xl" style={{ background: '#c52126' }}>
                                                <i className={item.fa} />
                                            </div>
                                            <span className="text-xs font-semibold text-slate-700">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Journey (video bg) ──────────────────────────────────────── */}
            <section className="relative overflow-hidden py-24 text-white">
                <video className="absolute inset-0 h-full w-full object-cover" src="/assets/vid/v1.mp4" autoPlay loop muted playsInline />
                <div className="absolute inset-0 bg-black/65" />
                <div className="container relative mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold md:text-4xl">{t('about:journey.title')}</h2>
                        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">{t('about:journey.subtitle')}</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto">
                        {[
                            { num: '01', fa: 'fas fa-user-plus',    title: t('about:journey.step1_title'), desc: t('about:journey.step1_desc') },
                            { num: '02', fa: 'fas fa-wallet',       title: t('about:journey.step2_title'), desc: t('about:journey.step2_desc') },
                            { num: '03', fa: 'fas fa-chart-line',   title: t('about:journey.step3_title'), desc: t('about:journey.step3_desc') },
                        ].map(step => (
                            <div key={step.num} className="rounded-2xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-sm transition-all hover:border-[#c52126]/60 hover:bg-white/15">
                                <div className="mb-4 text-4xl font-bold" style={{ color: '#c52126' }}>{step.num}</div>
                                <i className={`${step.fa} mb-3 text-2xl`} style={{ color: '#c52126' }} />
                                <h4 className="mb-2 font-bold">{step.title}</h4>
                                <p className="text-sm text-slate-300">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/register" className="inline-flex items-center gap-2 rounded-full px-10 py-4 font-bold text-white transition-all hover:opacity-90" style={{ background: '#c52126' }}>
                            <i className="fas fa-rocket" /> {t('about:journey.cta')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── FAQs ────────────────────────────────────────────────────── */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="mb-14 text-center">
                        <h2 className="text-4xl font-bold md:text-5xl" style={{ color: '#c52126' }}>{t('about:faq.title')}</h2>
                        <p className="mt-4 text-slate-500">{t('about:faq.subtitle')}</p>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <FaqItem key={i} num={i + 1} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                    <div className="mt-14 rounded-3xl p-10 text-center" style={{ background: 'rgba(197,33,38,.04)', border: '1px solid rgba(197,33,38,.15)' }}>
                        <p className="text-slate-600 mb-6">{t('about:faq.footer_text')}</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full px-10 py-4 font-bold text-white transition-all hover:opacity-90" style={{ background: '#c52126' }}>
                            <i className="fas fa-envelope" /> {t('about:faq.footer_btn')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
