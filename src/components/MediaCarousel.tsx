
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MediaCarousel = () => {
  const images = [
    'https://img.gg.deals/90/fd/c75e595f97ba1aef204702f572f270a5d102_912cr476.jpg',
    'https://static-www.adweek.com/wp-content/uploads/2017/10/hotlist-print-PAGE-2017.jpg?w=1240',
    'https://english.mathrubhumi.com/image/contentid/policy:1.9854700:1724938201/English%20Desktop%20Banner%20-%202024-08-29T190030.748.jpg?$p=6835ebc&f=16x10&w=852&q=0.8',
    'https://pranshulcartoons.wordpress.com/wp-content/uploads/2012/11/blogs.jpg',
    'https://i.ytimg.com/vi/Z9MZiNp3TKs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCFHwHgZUW7QMRgDJs5x-fWs7NJQw',
    'https://static1.cbrimages.com/wordpress/wp-content/uploads/2025/01/top-comic-book-runs-master-list-1.jpg'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={`Media content ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default MediaCarousel;
