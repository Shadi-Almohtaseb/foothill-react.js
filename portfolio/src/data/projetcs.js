// images
import projectImage1 from "../images/Projects/tw5.png";
import projectImage2 from "../images/Projects/darkom-image.png";
import projectImage3 from "../images/Projects/y2.png";
import projectImage4 from "../images/Projects/wiki1.png";
import projectImage5 from "../images/Projects/social-network-image.png";
import projectImage6 from "../images/Projects/wat8.png";

const projectDetails = [
  {
    image: projectImage1,
    title: "Twitter Clone",
    description: `A fully responsive Full stack application with Similar Twitter UI,
      and Google authentication, CRUD operations for tweets, likes,
      comments, likes on comments, personal pages, protected routes and
      permissions, two general API's and much more with the powerful of
      Firebase.`,
    stack: [
      "Firebase",
      "Next.js",
      "Tailwind CSS",
      "Ant Design",
      "State Management (recoil)",
    ],
  },
  {
    image: projectImage2,
    title: "E-commerce Store",
    description: `Full stack eCommerce application, with the ability to register(require an activation token) and login as a user or an admin, forget password, add to cart, add to wishlist, payment, user and admin dashboards, CURD operations, image uploading.
    Note: This app is in a private github repo because its for real customer, and its not completed yet.`,
    stack: [
      "React.js",
      "Mongodb",
      "Express.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Payment(Stripe)",
    ],
  },
  {
    image: projectImage3,
    title: "Youtube Clone",
    description: `Fully responsive youtube application built with React.js, Tailwind CSS, and a youtube API, the user simply can search for videos, watch and navigate between videos and channels.`,
    stack: ["React.js", "Tailwind CSS", "YouTube API"],
  },
  {
    image: projectImage4,
    title: "Wiki Characters",
    description: `This site is about the famous series wiki, where you can see all the characters and filter them by gender, species, etc., in addition to the ability to search and move between pages (pagination) all of that using Wiki API.`,
    stack: ["React.js", "Wiki API", "Bootstrap"],
  },
  {
    image: projectImage5,
    title: "Social Network",
    description: `A fully functional social network app with React.js and Firebase with beautiful UI and a dark mode option, Google authentication, CRUD operations, personal pages, protected routes, and News API.`,
    stack: [
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Material UI",
      "Custom Hooks",
    ],
  },
  {
    image: projectImage6,
    title: "WhatsApp Clone",
    description: `A simple chat application with the ability to open a new private chat room with anyone using his/her email, it's provide a Google authentication and realtime database`,
    stack: ["Next.js", "Tailwind CSS", "Firebase", "Real time Database"],
  },
];

export { projectDetails };
