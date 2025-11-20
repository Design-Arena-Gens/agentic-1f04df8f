export const dynamic = 'force-static';

export default function Page() {
  return (
    <main>
      <header className="container-xl py-6 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight">Acme <span className="text-brand-600">AI</span></a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
          <a href="#contact" className="btn-secondary">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="container-xl pt-10 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
          Now in public beta
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
          Ship smarter with AI autopilot for your team
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-slate-600 text-lg">
          Automate the busywork and focus on building. Acme AI helps your team plan, execute, and learn?10x faster.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a className="btn-primary" href="#pricing">Get started</a>
          <a className="btn-secondary" href="#features">See features</a>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-500">
          {['Stripe','Vercel','Notion','GitHub'].map((name) => (
            <div key={name} className="rounded-lg bg-white border border-slate-200 py-4 shadow-soft">{name}</div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-xl py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 text-center">Everything you need to move faster</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Autoplan',
              desc: 'Turn ideas into prioritized roadmaps with one prompt.',
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-600" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z"/></svg>
              )
            },
            {
              title: 'Co-pilot',
              desc: 'Automate repetitive tasks across your stack.',
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-600" fill="currentColor"><path d="M12 3l2.12 4.29 4.73.69-3.42 3.33.81 4.72L12 14.77 7.76 16.03l.81-4.72L5.15 8l4.73-.69L12 3z"/></svg>
              )
            },
            {
              title: 'Insights',
              desc: 'Measure impact, not output, with clear analytics.',
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-600" fill="currentColor"><path d="M3 13h4v8H3zm7-6h4v14h-4zM17 9h4v18h-4z"/></svg>
              )
            }
          ].map(({ title, desc, icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50">{icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-xl py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote: 'Acme AI cut our cycle time in half.',
              author: 'Alex, CTO at Nimbus'
            },
            {
              quote: 'It?s like adding a world-class PM to every squad.',
              author: 'Priya, VP Product at Orbit'
            },
            {
              quote: 'We ship more. Stress less. Customers happier.',
              author: 'Sam, CEO at Lumen'
            }
          ].map(({ quote, author }) => (
            <figure key={author} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <blockquote className="text-slate-800">?{quote}?</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600">{author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container-xl py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 text-center">Simple, transparent pricing</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { name: 'Starter', price: '$0', features: ['3 projects', 'Community support', 'Basic automations'] },
            { name: 'Pro', price: '$29', features: ['Unlimited projects', 'Priority support', 'Advanced automations'] },
            { name: 'Scale', price: '$99', features: ['Everything in Pro', 'SAML SSO', 'Dedicated success manager'] },
          ].map(({ name, price, features }) => (
            <div key={name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="mt-2 text-3xl font-bold">{price}<span className="text-base font-normal text-slate-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary mt-6 w-full">Choose {name}</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-xl py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 text-center">Frequently asked questions</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              q: 'How does billing work?',
              a: 'Monthly subscription billed on your signup date. Cancel anytime.'
            },
            {
              q: 'Do you offer trials?',
              a: 'Yes, the Starter plan is free. Upgrade when you are ready.'
            },
            {
              q: 'Is my data secure?',
              a: 'We follow industry best practices, including encryption in transit and at rest.'
            },
            {
              q: 'Can I change plans later?',
              a: 'Absolutely. You can upgrade or downgrade at any time.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="font-semibold text-slate-900">{q}</h3>
              <p className="mt-2 text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="container-xl py-20">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-600 to-brand-700 p-8 sm:p-12 text-white shadow-soft">
          <h2 className="text-3xl sm:text-4xl font-semibold">Ready to ship smarter?</h2>
          <p className="mt-2 text-white/80 max-w-2xl">Join teams who automate planning and execution with Acme AI. Get started in minutes.</p>
          <div className="mt-6 flex gap-3">
            <a className="btn-secondary bg-white text-slate-900" href="mailto:hello@example.com">Contact sales</a>
            <a className="btn-primary bg-white/10 hover:bg-white/20 border border-white/20" href="#pricing">View pricing</a>
          </div>
        </div>
      </section>

      <footer className="container-xl py-12 border-t border-slate-200 text-sm text-slate-600 flex items-center justify-between">
        <span>? {new Date().getFullYear()} Acme AI</span>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </main>
  );
}
