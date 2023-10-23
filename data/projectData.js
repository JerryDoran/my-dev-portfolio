import ecommerce1 from '../public/images/projects/ecommerce1.jpg';
import ecommerce2 from '../public/images/projects/ecommerce2.jpg';
import ui1 from '../public/images/projects/ui1.jpg';
import ui2 from '../public/images/projects/ui2.jpg';
import business1 from '../public/images/projects/business1.jpg';
import business2 from '../public/images/projects/business2.jpg';
import business3 from '../public/images/projects/business3.jpg';
import social1 from '../public/images/projects/social-twitter-app.png';
import business4 from '../public/images/projects/business4.jpg';
import admin1 from '../public/images/projects/admin-dash-one.png';
import metaverse2 from '../public/images/projects/metaverse-2.png';
import metaverse3 from '../public/images/projects/metaverse-3.png';
import metaverse1 from '../public/images/projects/metaverse-1.png';
import metaverse4 from '../public/images/projects/metaverse-5.png';
import gym2 from '../public/images/projects/business-gym-site.png';
import gym1 from '../public/images/projects/gym-site-2.png';
import gym3 from '../public/images/projects/gym-site-3.png';
import gym4 from '../public/images/projects/gym-site-4.png';
import thanos1 from '../public/images/projects/thanos-1.png';
import thanos2 from '../public/images/projects/thanos-2.png';
import thanos3 from '../public/images/projects/thanos-3.png';
import thanos4 from '../public/images/projects/thanos-4.png';
import apple1 from '../public/images/projects/ecommerce-apple-app.png';
import apple2 from '../public/images/projects/apple-2.png';
import apple3 from '../public/images/projects/apple-3.png';
import apple4 from '../public/images/projects/apple-4.png';
import entertainment1 from '../public/images/projects/entertainment-1.png';
import entertainment2 from '../public/images/projects/entertainment-2.png';
import entertainment3 from '../public/images/projects/entertainment-3.png';
import entertainment4 from '../public/images/projects/entertainment-4.png';
import realty1 from '../public/images/projects/realty-1.png';
import realty2 from '../public/images/projects/realty2.jpg';
import realty3 from '../public/images/projects/realty-3.png';
import realty4 from '../public/images/projects/realty-4.png';
import rosa1 from '../public/images/projects/rosa-1.png';
import rosa2 from '../public/images/projects/rosa-2.png';
import rosa3 from '../public/images/projects/rosa-3.png';
import rosa4 from '../public/images/projects/rosa-4.png';
import crypto1 from '../public/images/projects/crypto-1.png';
import crypto2 from '../public/images/projects/crypto-2.png';
import crypto3 from '../public/images/projects/crypto-3.png';
import crypto4 from '../public/images/projects/crypto-4.png';
import bank1 from '../public/images/projects/bank-1.png';
import bank2 from '../public/images/projects/bank-2.png';
import bank3 from '../public/images/projects/bank-3.png';
import bank4 from '../public/images/projects/bank-4.png';
import beach1 from '../public/images/projects/beach1.jpg';
import beach2 from '../public/images/projects/beach-2.png';
import beach3 from '../public/images/projects/beach-3.png';
import beach4 from '../public/images/projects/beach-4.png';

export const projects = [
  {
    slug: 'thanos-music',
    img: ecommerce1,
    category: 'web',
    title: 'Thanos Music',
    description:
      'An easy to use ecommerce site to take care of all your electronic and music needs.',
    image1: thanos1,
    image2: thanos2,
    image3: thanos3,
    image4: thanos4,
    summary:
      'This Ecommerce App is a web application that allows users to browse, search, and purchase electronic products. The application provides features for users to explore different products, view product details, add items to their cart, and complete the checkout process. Users can also manage their cart page by adjusting quantities and removing items.  It is built using React and integrates with a backend API to fetch and manage product data.',
    technologies: [
      'NextJS',
      'Sanity CMS',
      'Stripe API',
      'Tailwind CSS',
      'Javascript',
    ],
    demoLink: 'https://music-ecommerce-app-stripe.vercel.app/',
    codeLink: 'https://github.com/JerryDoran/music-ecommerce-app',
  },
  {
    slug: 'metaverse',
    img: ui1,
    category: 'ui/ux',
    title: 'Explore the Metaverse',
    description:
      'Enjoy the virtual world of the metaverse through the use of state of the art VR devices.',
    image1: metaverse1,
    image2: metaverse2,
    image3: metaverse3,
    image4: metaverse4,
    summary:
      'Next Metaverse is a web application design that is written using NextJS.  It provides information for how users can explore interactive environments, customize avatars, interact with other users, and personalize their experience with customizable objects. The project leverages the power of Next.js for server-side rendering and is styled with utility class framework of tailwind css for providing dynamic features of this site.',
    technologies: [
      'React',
      'Tailwind CSS',
      'Javascript',
      'Framer Motion',
      'Three JS',
    ],
    demoLink: 'https://doran-metaverse.vercel.app/',
    codeLink: 'https://github.com/JerryDoran/next-metaverse',
  },
  {
    slug: 'entertainment-hub',
    img: business4,
    category: 'app',
    title: 'Entertainment Hub',
    description:
      'Explore and browse your favorite movies and television shows in all in one place.',
    image1: entertainment1,
    image2: entertainment2,
    image3: entertainment3,
    image4: entertainment4,
    summary:
      'Entertainment DB is a web application that serves as a database for various entertainment media such as movies and TV shows. It provides a platform for users to explore, search, and discover information about their favorite entertainment titles. The application is built using React and leverages a backend API to fetch and manage the media data.',
    technologies: ['React', 'Material UI', 'Movie DB API'],
    demoLink: 'https://my-entertainment-hub.netlify.app/',
    codeLink: 'https://github.com/JerryDoran/entertainment-db',
  },
  {
    slug: 'next-properties',
    img: realty2,
    category: 'web',
    title: 'Next Gen Realty',
    description:
      'Explore and browse your favorite properties and locations in all in one place.',
    image1: realty2,
    image2: realty1,
    image3: realty3,
    image4: realty4,
    summary:
      "This is a realestate design site that showcases some of the features of a realty application.  Functionality for real estate property search can be added upon request to this application.  View detailed information about each property, including images, description, price, and contact information.  Save functionality can be implemented upon request to save favorite listings by clicking the 'Save' button, allowing you to revisit them later.  Customization of your search preferences and filter results based on various criteria can also be added to this application upon request.",
    technologies: ['NextJS', 'Chakra UI', 'React', 'Javascript'],
    demoLink: 'https://next-realestate-app-ten.vercel.app/',
    codeLink: 'https://github.com/JerryDoran/next-realestate-app',
  },
  {
    slug: 'apple-commerce',
    img: ecommerce2,
    category: 'web',
    title: 'Apple Commerce',
    description:
      'Order new state of the art devices or browse for your favorite apple products.',
    image1: apple1,
    image2: apple2,
    image3: apple3,
    image4: apple4,
    summary:
      'Browse through different Apple product categories such as iPhones, MacBooks, and AirPods. Click on a product to view its details, including specifications and price. Add products to your cart by clicking the "Add to Cart" button. Manage your cart by viewing the cart page, adjusting quantities, and removing items. Proceed to the checkout page to complete your purchase. View your order history and track the status of your orders.',
    technologies: [
      'NextJS',
      'Javascript',
      'Redux Toolkit',
      'Stripe API',
      'Sanity CMS',
      'Tailwind CSS',
    ],
    demoLink: 'https://apple-commerce-psi.vercel.app/',
    codeLink: 'https://github.com/JerryDoran/apple-commerce',
  },
  {
    slug: 'fit-club',
    img: business1,
    category: 'ui/ux',
    title: 'Fit Club Gym',
    description:
      'Feel your best and perform at the level you want in our all inclusive fit club.',
    image1: gym1,
    image2: gym2,
    image3: gym3,
    image4: gym4,
    summary:
      'The FitClub Gym website is designed as a web application for managing gym memberships and workout schedules. It provides features for users to register, view classes, book sessions, and track fitness progress. The site is built using React for the frontend and utilizes CSS Modules for styling. It integrates with a backend API, which could be built using technologies like Node.js, Express, and MongoDB, to handle data storage and retrieval. The use of React allows for a dynamic and responsive user interface, while the backend API ensures efficient data management.',
    technologies: ['React', 'Chakra UI', 'Framer Motion', 'Javascript'],
    demoLink: 'https://react-fitclub-gym.vercel.app/',
    codeLink: 'https://github.com/JerryDoran/react-fitclub-gym',
  },
  {
    slug: 'rosa-restaurant',
    img: business2,
    category: 'web',
    title: 'The Rosa Restaurant',
    description:
      'Enjoy fun times and delicious authentic food in a wonderful family environment.',
    image1: rosa1,
    image2: rosa2,
    image3: rosa3,
    image4: rosa4,
    summary:
      'The Rosa is a website template designed for restaurant or food-related businesses. It features a modern and responsive design, allowing the site to adapt to different devices and screen sizes. The template includes sections for showcasing menu items, customer testimonials, and contact information. It is built using HTML, CSS, and JavaScript, making it highly customizable and easy to deploy. The responsive design ensures a seamless browsing experience on various devices, while the use of HTML, CSS, and JavaScript provides flexibility for customization and interactive functionality.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    demoLink: 'https://rosa-dining.netlify.app/',
    codeLink: 'https://github.com/JerryDoran/rosa-responsive-site',
  },
  {
    slug: 'next-gen-banking',
    img: ui2,
    category: 'ui/ux',
    title: 'Next Gen Banking',
    description:
      'Next generation banking is here in this easy to use new banking site of the future.',
    image1: bank1,
    image2: bank2,
    image3: bank3,
    image4: bank4,
    summary:
      'Next Gen Banking is a web application that simulates a banking system. The site is designed using the Next.js framework, which enables server-side rendering and provides a smooth user experience. It utilizes CSS Modules for modular and scoped styling. The application is intended to show off a modern design scheme that can be applied across many various business applications.',
    technologies: ['Next JS', 'Tailwind CSS', 'Javascript'],
    demoLink: 'https://next-hoobank.vercel.app/',
    codeLink: 'https://github.com/JerryDoran/next-hoobank',
  },
  {
    slug: 'crypto-tracker',
    img: business3,
    category: 'app',
    title: 'Crypto Tracker',
    description:
      'Track your favorite crypto currencies and save them to your user profile.',
    image1: crypto1,
    image2: crypto2,
    image3: crypto3,
    image4: crypto4,
    summary:
      'Crypto Tracker is a web application designed to track cryptocurrency prices and manage portfolios. The site is built using React, a JavaScript library for building user interfaces. It utilizes external APIs, such as CoinGecko, to fetch real-time data for various cryptocurrencies, including prices, market cap, and trading volume. Users can create accounts, add cryptocurrencies to their portfolios, and monitor their performance over time. The application employs React Router for handling routing and CSS Modules for modular and scoped styling. The combination of React, CoinGecko API, and supporting libraries enables an interactive and informative cryptocurrency tracking experience.',
    technologies: ['React', 'CoinGecko API', 'CSS Modules', 'Javascript'],
    demoLink: 'https://crytpotracker.netlify.app/',
    codeLink: 'https://github.com/JerryDoran/crypto-tracker',
  },
  {
    slug: 'beach-resort',
    img: beach1,
    category: 'ui/ux',
    title: 'Beach Resort',
    description:
      'A popular beach resort design app that showcases beautiful rooms while staying at the beach.',
    image1: beach1,
    image2: beach2,
    image3: beach3,
    image4: beach4,
    summary:
      'This website template designed for tourist or travel-related businesses. It features a modern and responsive design, allowing the site to adapt to different devices and screen sizes. The template includes sections for showcasing rooms, exploring features, and search capability for selecting the room for you budget and requirements. It is built using React, making it highly customizable and easy to deploy. The responsive design ensures a seamless browsing experience on various devices, while the use of the React library provides flexibility for customization and interactive functionality.',
    technologies: ['React', 'CSS Modules', 'Javascript'],
    demoLink: 'https://react-beach-resourt.netlify.app/',
    codeLink: 'https://github.com/JerryDoran/react_beach_resort',
  },
  // {
  //   slug: 'admin-dashboard-one',
  //   img: admin1,
  //   category: 'analytics',
  //   title: 'Admin Dashbord One',
  //   description:
  //     'Coming soon an admin dashboard tracking app for analyzing your business performance',
  //   image1: metaverse1,
  //   image2: metaverse2,
  //   image3: metaverse3,
  //   image4: metaverse4,
  //   summary: 'Summary of Admin Dashboard',
  //   technologies: ['', '', '', ''],
  //   demoLink: '',
  //   codeLink: '',
  // },
];
