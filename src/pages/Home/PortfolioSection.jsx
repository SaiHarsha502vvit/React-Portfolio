import React, { useEffect, useRef } from 'react';
import Card from '../../components/common/Card';
import Tag from '../../components/ui/Tag';

const PortfolioSection = () => {
  const parallaxRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY;
        parallaxRef.current.style.transform = `translateX(${y * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      image: '/images/img_rectangle_42.jpg',
      title: 'Flavour Finder\nApp',
      tagText: 'UI Design',
      tagVariant: 'blue',
      description:
        'A smart recipe explorer with optimized API integration, caching, and accessibility. Features debounced search, auto-suggestions, and step-by-step guides.',
      githubLink: 'https://github.com/SaiHarsha502vvit/recipe-finder',
      liveDemoLink: 'https://recipe.alasaiharsha.me/',
    },
    {
      id: 2,
      image: '/images/img_rectangle_39.jpg',
      title: 'Live Url Shortener',
      tagText: 'UX Design',
      tagVariant: 'yellow',
      description:
        'A modern onboarding flow with animated UI, user guidance, and seamless experience. Built for scalability and maintainability.',
      githubLink: 'https://github.com/SaiHarsha502vvit/url-shortner-Api',
      liveDemoLink: 'https://urlshortner.alasaiharsha.me/',
    },
    {
      id: 3,
      image: '/images/img_rectangle_40.png',
      title: 'EduCampus ',
      tagText: 'UI Design',
      tagVariant: 'green',
      description:
        'Designed and developed a responsive front-end campus portal, improving accessibility',
      githubLink: 'https://github.com/SaiHarsha502vvit/College-Web',
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="mb-12 relative flex items-center">
          <Tag variant="lavender" className="mb-4 animate-fade-in">
            Featured Projects
          </Tag>
          <img
            src="/images/img_arrow_84x88.svg"
            alt="Arrow"
            className="absolute left-32 top-12 w-20 h-20 animate-bounce-slow"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioItems.map((item, idx) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              tagText={item.tagText}
              tagVariant={['lavender', 'mint', 'peach', 'blue', 'green', 'yellow'][idx % 6]}
              description={item.description}
              githubLink={item.githubLink}
              liveDemoLink={item.liveDemoLink}
              className={`h-full animate-staggered-fade-in pastel-glow-hover`}
              style={{ animationDelay: `${idx * 0.12 + 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
