import CarouselContainer from "./CarouselContainer";
import { useLocation } from "react-router-dom";

const Services = () => {


  const { pathname } = useLocation();
  const services = [
    { id: 1, intro: "Explore Service", title: "Производство", slug: "production", readMore: "Read" },
    { id: 2, intro: "Explore Service", title: "Монтаж", slug: "installation", readMore: "Read" },
    { id: 3, intro: "Explore Service", title: "Обслуживание", slug: "maintenance", readMore: "Read" },
    { id: 4, intro: "Explore Service", title: "Металлообработка", slug: "metalworking", readMore: "Read" },
    { id: 5, intro: "Explore Service", title: "Консольные краны", slug: "consoleCranes", readMore: "Read" },
    { id: 6, intro: "Explore Service", title: "Навесные краны", slug: "overheadCranes", readMore: "Read" },
    { id: 7, intro: "Explore Service", title: "Козловые краны", slug: "gantryCranes", readMore: "Read" },
    { id: 8, intro: "Explore Service", title: "Проекты", slug: "ourProjects", readMore: "Read" },
    { id: 9, intro: "Explore Service", title: "Галерея", slug: "gallery", readMore: "Read" },
  ];

  const activeServiceSlug = pathname.split('/').pop(); 
  const activeServiceId = services.find(service => service.slug === activeServiceSlug)?.id;

  return <CarouselContainer services={services} activeServiceId={activeServiceId} />;
};

export default Services;