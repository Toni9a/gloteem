import Hero from '@/components/Hero';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      <Hero
        headline="Insights & Blog"
        subheadline="Leadership wisdom, organisational strategies, and care excellence"
      />

      <section className="section-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-cream rounded-lg p-12 border-l-4 border-gold">
            <h2 className="font-playfair text-3xl text-navy font-bold mb-4">
              Coming Soon
            </h2>
            <p className="text-dark-grey text-lg mb-8">
              We're preparing insightful articles and frameworks on leadership
              development, organisational change, and care excellence. Stay
              tuned for content designed to inspire and equip leaders.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded border border-dark-grey/20 focus:outline-none focus:border-gold flex-1 max-w-md"
              />
              <button
                type="submit"
                className="bg-orange text-white px-6 py-2 rounded font-semibold hover:bg-orange/90 transition-colors duration-300"
              >
                Notify Me
              </button>
            </form>
            <Link
              href="/"
              className="text-gold font-semibold hover:text-orange transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
