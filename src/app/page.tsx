import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getMarkdownContent } from '@/lib/markdown';

export default async function Home() {
  const heroContent = await getMarkdownContent('hero.md');
  const aboutContent = await getMarkdownContent('about.md');
  const servicesContent = await getMarkdownContent('services.md');
  const galleryContent = await getMarkdownContent('gallery.md');
  const whyChooseUsContent = await getMarkdownContent('why-choose-us.md');
  const contactContent = await getMarkdownContent('contact.md');
  const footerContent = await getMarkdownContent('footer.md');

  return (
    <main>
      <Hero slides={heroContent.slides || []} />
      <About
        title={aboutContent.title || ''}
        subtitle={aboutContent.subtitle || ''}
        contentHtml={aboutContent.contentHtml || ''}
        phone_number={aboutContent.phone_number || ''}
        features={aboutContent.features || []}
      />
      <Services
        title={servicesContent.title || ''}
        subtitle={servicesContent.subtitle || ''}
        services={servicesContent.services || []}
      />
      <Gallery
        title={galleryContent.title || ''}
        subtitle={galleryContent.subtitle || ''}
        images={galleryContent.gallery_images || []}
      />
      <WhyChooseUs
        title={whyChooseUsContent.title || ''}
        points={whyChooseUsContent.points || []}
      />
      <Contact
        title={contactContent.title || ''}
        subtitle={contactContent.subtitle || ''}
        phone_number={contactContent.phone_number || ''}
        availability={contactContent.availability || ''}
        email_address={contactContent.email_address || ''}
        location={contactContent.location || ''}
      />
      <Footer
        company_name={footerContent.company_name || ''}
        slogan={footerContent.slogan || ''} 
        copyright_year={footerContent.copyright_year || ''}
        address={footerContent.address || ''}
        phone_number={footerContent.phone_number || ''}
        email_address={footerContent.email_address || ''}
        links={footerContent.links || []}
        services_links={footerContent.services_links || []}
        social_links={footerContent.social_links || []} 
      />
    </main>
  );
}
