
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO at TechGlobe',
    image: 'https://placehold.co/100x100/195190/FFFFFF/png?text=SJ',
    content: 'BLOCKSMITHS revolutionized our board voting process. The transparency and security provided by blockchain technology has increased trust among our stakeholders.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Governance Lead at DAO Collective',
    image: 'https://placehold.co/100x100/1D9EB4/FFFFFF/png?text=MC',
    content: 'As a decentralized organization, we needed a voting solution that mirrored our values. BLOCKSMITHS delivered with an immutable, transparent system that our members trust completely.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Director at InnovateX Foundation',
    image: 'https://placehold.co/100x100/51A7F9/FFFFFF/png?text=ER',
    content: 'The analytics and real-time results have been game-changing for our decision-making process. We can now get instant feedback from our global team within hours instead of days.',
    rating: 4,
  },
  {
    id: 4,
    name: 'David Kumar',
    role: 'CEO at Fintech Solutions',
    image: 'https://placehold.co/100x100/0E3B68/FFFFFF/png?text=DK',
    content: 'Security was our primary concern when looking for a voting platform. BLOCKSMITHS exceeded our expectations with their military-grade encryption and blockchain verification.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };
  
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Trusted by Innovators</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            See what industry leaders are saying about our blockchain voting platform
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="glass-card p-6 md:p-8 h-full"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-14 w-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-foreground/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors mr-4"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
