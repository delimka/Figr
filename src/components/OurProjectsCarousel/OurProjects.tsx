import CarouselContainer from "./CarouselContainer";
import { FaFacebook, FaTwitter, FaMailBulk } from "react-icons/fa";
import project1 from "./../../assets/ourProjects/project1.webp";
import project2 from "./../../assets/ourProjects/project2.webp";
import project3 from "./../../assets/ourProjects/project3.webp";
import project4 from "./../../assets/ourProjects/project4.webp";
import project5 from "./../../assets/ourProjects/project5.webp";

import smProject11 from "./../../assets/pages/consoleCranes/consoleCrane1.webp";
import smProject12 from "./../../assets/pages/consoleCranes/consoleCrane2.webp";
import smProject13 from "./../../assets/pages/consoleCranes/consoleCrane3.webp";
import smProject14 from "./../../assets/pages/gantryCranes/gantryCrane4.webp";

import smProject21 from "./../../assets/pages/gantryCranes/gantryCrane2.webp";
import smProject22 from "./../../assets/pages/gantryCranes/gantryCrane3.webp";
import smProject23 from "./../../assets/pages/gantryCranes/gantryCrane4.webp";
import smProject24 from "./../../assets/pages/gantryCranes/gantryCrane5.webp";

import smProject31 from "./../../assets/pages/installation/image1.webp";
import smProject32 from "./../../assets/pages/installation/image2.webp";
import smProject33 from "./../../assets/pages/installation/image3.webp";
import smProject34 from "./../../assets/pages/installation/installation.webp";

import smProject41 from "./../../assets/pages/overheadCranes/overheadCrane1.webp";
import smProject42 from "./../../assets/pages/overheadCranes/overheadCrane2.webp";
import smProject43 from "./../../assets/pages/overheadCranes/overheadCrane3.webp";
import smProject44 from "./../../assets/pages/overheadCranes/overheadCrane4.webp";

import smProject51 from "./../../assets/pages/production/image1.webp";
import smProject52 from "./../../assets/pages/production/image2.webp";
import smProject53 from "./../../assets/pages/production/image3.webp";
import smProject54 from "./../../assets/pages/production/production.webp";

const Services = () => {
  const projects = [
    {
      id: 1,
      topImage: project1,
      middleText:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
      bottomImages: [smProject11, smProject12, smProject13, smProject14],
      title: "Project Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      subHeading: "Project Overview",
      listItems: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
      socialLinks: [
        { icon: <FaFacebook />, url: "" },
        { icon: <FaTwitter />, url: "" },
        { icon: <FaMailBulk />, url: "" },
      ],
    },
    {
      id: 2,
      topImage: project2,
      middleText:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
      bottomImages: [smProject21, smProject22, smProject23, smProject24],
      title: "Project Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      subHeading: "Project Overview",
      listItems: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
      socialLinks: [
        { icon: <FaFacebook />, url: "" },
        { icon: <FaTwitter />, url: "" },
        { icon: <FaMailBulk />, url: "" },
      ],
    },
    {
      id: 3,
      topImage: project3,
      middleText:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
      bottomImages: [smProject31, smProject32, smProject33, smProject34],
      title: "Project Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      subHeading: "Project Overview",
      listItems: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
      socialLinks: [
        { icon: <FaFacebook />, url: "" },
        { icon: <FaTwitter />, url: "" },
        { icon: <FaMailBulk />, url: "" },
      ],
    },
    {
      id: 4,
      topImage: project4,
      middleText:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
      bottomImages: [smProject41, smProject42, smProject43, smProject44],
      title: "Project Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      subHeading: "Project Overview",
      listItems: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
      socialLinks: [
        { icon: <FaFacebook />, url: "" },
        { icon: <FaTwitter />, url: "" },
        { icon: <FaMailBulk />, url: "" },
      ],
    },
    {
      id: 5,
      topImage: project5,
      middleText:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
      bottomImages: [smProject51, smProject52, smProject53, smProject54],
      title: "Project Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      subHeading: "Project Overview",
      listItems: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
      socialLinks: [
        { icon: <FaFacebook />, url: "" },
        { icon: <FaTwitter />, url: "" },
        { icon: <FaMailBulk />, url: "" },
      ],
    },
  ];

  return <CarouselContainer projects={projects} />;
};

export default Services;
