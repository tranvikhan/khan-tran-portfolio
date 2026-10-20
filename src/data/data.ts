import { Project } from "@/models/Project";

export const projects: {
  [key in string]: Project;
} = {
  // ["vgo"]: {
  //   id: "vgo",
  //   name: "VGO",
  //   overview: `VGO not only simplifies the process of ordering Vietnamese cuisine for users residing overseas but also offers a diverse menu selection, ensuring an authentic taste of Vietnam delivered right to their doorstep. The user-friendly interface, coupled with secure payment options, enhances the overall experience, making it a convenient and delightful way for individuals abroad to savor the flavors of Vietnamese food from the comfort of their homes. Whether it's traditional pho, banh mi, or other Vietnamese delicacies, VGO brings the richness of Vietnamese culinary culture closer to those who miss the taste of home.`,
  //   thumbnail: "/images/projects/vgo/banner.png",
  //   images: [
  //     {
  //       src: "/images/projects/vgo/login.jpg",
  //       alt: "Login screen",
  //     },
  //     {
  //       src: "/images/projects/vgo/shop-list.jpg",
  //       alt: "Shop list",
  //     },
  //     {
  //       src: "/images/projects/vgo/foods.jpg",
  //       alt: "Foods list",
  //     },
  //     {
  //       src: "/images/projects/vgo/order.jpg",
  //       alt: "Order",
  //     },
  //     {
  //       src: "/images/projects/vgo/card.jpg",
  //       alt: "Cart",
  //     },
  //     {
  //       src: "/images/projects/vgo/checkout.jpg",
  //       alt: "Checkout",
  //     },
  //     {
  //       src: "/images/projects/vgo/profile.jpg",
  //       alt: "View profile",
  //     },
  //     {
  //       src: "/images/projects/vgo/address.jpg",
  //       alt: "Edit address",
  //     },
  //   ],
  //   platforms: ["Android", "IOS"],
  //   keyFeatures: [
  //     `Search foods`,
  //     `Order & payment`,
  //     `Register/Login`,
  //     `Manage profile`,
  //   ],
  //   technologies: [`Figma`, `React Native`, `Expo`],
  //   roles: [`Product designer`, `UI/UX designer`, `Developer`],
  // },
  ["lensan"]: {
    id: "lensan",
    name: "Lensan",
    overview: "Lensan connects people looking for a sports court with the venues that run them. The live website supports court discovery and booking, while companion app experiences help players and venue owners manage the game around it.",
    thumbnail: "/images/projects/lensan/web-home.png",
    cardImage: "/images/projects/lensan/court-city.png",
    images: [
      { src: "/images/projects/lensan/court-city.png", alt: "Lensan illustration connecting football, badminton, pickleball, and other sports courts", altVi: "Minh họa Lensan kết nối các sân bóng đá, cầu lông, pickleball và các môn thể thao khác" },
      { src: "/images/projects/lensan/01-hero.jpg", alt: "Lensan customer app preview introducing sports and court booking", altVi: "Bản xem trước ứng dụng khách Lensan giới thiệu việc chơi thể thao và đặt sân" },
      { src: "/images/projects/lensan/02-find-courts.jpg", alt: "Lensan customer app preview for finding available courts", altVi: "Bản xem trước ứng dụng khách Lensan tìm sân còn trống" },
      { src: "/images/projects/lensan/03-map.jpg", alt: "Lensan customer app preview showing courts on a map", altVi: "Bản xem trước ứng dụng khách Lensan hiển thị sân trên bản đồ" },
      { src: "/images/projects/lensan/04-ai-assistant.jpg", alt: "Lensan customer app preview of the AI assistant", altVi: "Bản xem trước ứng dụng khách Lensan với trợ lý AI" },
      { src: "/images/projects/lensan/05-group.jpg", alt: "Lensan customer app preview for playing with a group", altVi: "Bản xem trước ứng dụng khách Lensan cho nhóm chơi thể thao" },
      { src: "/images/projects/lensan/06-skill.jpg", alt: "Lensan customer app preview of player skill features", altVi: "Bản xem trước ứng dụng khách Lensan với tính năng kỹ năng người chơi" },
      { src: "/images/projects/lensan/07-weekly-qr.jpg", alt: "Lensan customer app preview of weekly play and QR check-in", altVi: "Bản xem trước ứng dụng khách Lensan với lịch chơi hằng tuần và mã QR điểm danh" },
    ],
    platforms: ["Web", "iOS", "Android"],
    keyFeatures: ["Find available courts", "Booking and venue schedules", "Venue operations", "AI assistance"],
    technologies: ["Next.js", "React Native", "Expo", "NestJS", "PostgreSQL", "Supabase"],
    roles: ["Founder", "Product designer", "Full-stack developer"],
    demo: "https://lensan.vn",
  },
  ["lati-coffee"]: {
    id: "lati-coffee",
    name: "LATi Coffee",
    overview: "A responsive ordering app for LATi Coffee in Cần Thơ. Customers can explore the menu, customize drinks, place delivery orders, track progress, and order together in a group.",
    thumbnail: "/images/projects/lati-coffee/desktop-home.png",
    images: [
      { src: "/images/projects/lati-coffee/desktop-home.png", alt: "LATi Coffee desktop homepage with a featured drink and menu categories", altVi: "Trang chủ LATi Coffee trên máy tính với món nổi bật và các nhóm đồ uống" },
      { src: "/images/projects/lati-coffee/mobile-home.png", alt: "LATi Coffee mobile homepage with quick reorder and group ordering", altVi: "Trang chủ LATi Coffee trên di động với đặt lại nhanh và đơn nhóm" },
      { src: "/images/projects/lati-coffee/order-tracking.png", alt: "Completed LATi Coffee order with a step-by-step delivery timeline", altVi: "Đơn LATi Coffee đã hoàn thành với tiến trình giao hàng" },
      { src: "/images/projects/lati-coffee/group-order.png", alt: "LATi Coffee group order showing each participant's drinks and the shared total", altVi: "Đơn nhóm LATi Coffee hiển thị đồ uống của từng người và tổng tiền" },
      { src: "/images/projects/lati-coffee/profile.png", alt: "LATi Coffee account with loyalty points, vouchers, orders, and addresses", altVi: "Tài khoản LATi Coffee với điểm thưởng, voucher, đơn hàng và địa chỉ" },
    ],
    platforms: ["Responsive web", "PWA"],
    keyFeatures: ["Drink customization and delivery", "Live order tracking", "Group ordering", "Loyalty points and vouchers"],
    technologies: ["React", "TypeScript", "Vite", "Firebase", "Sapo FnB", "Tailwind CSS"],
    roles: ["Founder", "Product designer", "Full-stack developer"],
    demo: "https://lati.io.vn",
  },
  ["ptn-sport"]: {
    id: "ptn-sport",
    disabledAnimation: true,
    name: "PTNSport",
    overview: `The comprehensive website for the PTN Sport project serves as an indispensable hub, not only offering real-time updates on PTN Global's sporting events but also providing in-depth details on a wide array of athletic competitions. Users can easily navigate through the platform to access schedules, live scores, and exclusive insights into their favorite sports. Additionally, the website features engaging multimedia content, including highlights, interviews, and behind-the-scenes footage, enhancing the overall experience for sports enthusiasts. With a user-friendly interface and a commitment to delivering accurate and timely information, the PTN Sport website aims to become the go-to destination for individuals seeking a centralized source for all things related to PTN Global's diverse sporting events.`,
    thumbnail: "/images/projects/ptn-sport/banner.png",
    images: [
      {
        src: "/images/projects/ptn-sport/hero-home-page.png",
        alt: "Home page",
        className: "col-span-3",
        width: 2862,
        height: 1578,
      },
      {
        src: "/images/projects/ptn-sport/home-page.png",
        alt: "Sports",
        className: "col-span-3",
        width: 2880,
        height: 1800,
      },
      {
        src: "/images/projects/ptn-sport/matches-schedule.png",
        alt: "Matches schedule",
        width: 828,
        height: 1792,
      },
      {
        src: "/images/projects/ptn-sport/results-of-matches.png",
        alt: "Results of matches",
        width: 828,
        height: 1792,
      },
      {
        src: "/images/projects/ptn-sport/sports.png",
        alt: "Sports on mobile",
        width: 828,
        height: 1792,
      },
    ],
    platforms: ["Web"],
    keyFeatures: [`News`, `Matches Schedule`, `Matches Results`, `Teams`],
    technologies: [`Figma`, `Nextjs`],
    roles: [`UI/UX Design`, `Develop website`],
    demo: "https://ptnsports.vercel.app/fo4",
  },
  ["easy-vocabulary"]: {
    id: "easy-vocabulary",
    name: "EasyVocabulary",
    overview: `The English vocabulary learning application for Vietnamese users is a user-friendly application that tailors vocabulary lists to individual proficiency levels and learning goals. With interactive quizzes, educational games, and detailed performance feedback, users can enhance their English vocabulary skills anytime, anywhere.`,
    thumbnail: "/images/projects/easy-vocabulary/banner.png",
    images: [
      {
        src: "/images/projects/easy-vocabulary/image (8).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/easy-vocabulary/image (7).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/easy-vocabulary/image (6).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/easy-vocabulary/image (5).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/easy-vocabulary/image (4).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/easy-vocabulary/image (3).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/easy-vocabulary/image (2).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/easy-vocabulary/image (1).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/easy-vocabulary/image (9).png",
        alt: "Screenshots",
      },
    ],
    platforms: ["Android", "IOS"],
    keyFeatures: [
      `Translate VI/EN and EN/VI`,
      `Add a vocabulary to bookmarks`,
      `Learn vocabulary`,
      `Take exam`,
    ],
    technologies: [`Figma`, `React Native`, `Expo`],
    roles: [`Product owner`, `UI/UX Designer`, `Developer`],
  },
  ["kl-glass"]: {
    id: "kl-glass",
    name: "KLGlass",
    overview: `The KLGlass project represents a groundbreaking leap in wearable technology, providing an advanced application that seamlessly integrates with smart glasses. Beyond its primary function of health tracking, the application offers a spectrum of additional features to enrich the user experience. From fitness monitoring and vital sign tracking to augmented reality overlays, KLGlass ensures a holistic approach to well-being.`,
    thumbnail: "/images/projects/kl-glass/banner.png",
    images: [
      {
        src: "/images/projects/kl-glass/login.png",
        alt: "Login screen",
      },
      {
        src: "/images/projects/kl-glass/register.png",
        alt: "Register screen",
      },
      {
        src: "/images/projects/kl-glass/home.png",
        alt: "Home screen",
      },
      {
        src: "/images/projects/kl-glass/glass.png",
        alt: "Glass screen",
      },
      {
        src: "/images/projects/kl-glass/profile.png",
        alt: "Profile screen",
      },
      {
        src: "/images/projects/kl-glass/profile-2.png",
        alt: "Profile screen",
      },
    ],
    platforms: ["Android", "IOS"],
    keyFeatures: [`Manage glass device`, `Health check`, `Manage account`],
    technologies: [`Figma`, `React Native`, `Expo`],
    roles: [`Hardware designer`, `UI/UX designer`, `Developer`],
  },
  ["smart-bin"]: {
    id: "smart-bin",
    name: "SmartBin",
    overview: `In addition to promoting responsible waste disposal, the SmartBin application offers a gamified and rewarding experience for users. The point system serves as an incentive for individuals to actively participate in recycling efforts, fostering a sense of environmental responsibility. Users can track their point accumulation through the app, creating a tangible measure of their positive impact on sustainability.`,
    thumbnail: "/images/projects/smart-bin/banner.png",
    images: [
      {
        src: "/images/projects/smart-bin/image (4).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/smart-bin/image (1).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/smart-bin/image (2).png",
        alt: "Screenshots",
      },
      {
        src: "/images/projects/smart-bin/image (3).png",
        alt: "Screenshots",
      },
    ],
    platforms: ["Android", "IOS"],
    keyFeatures: [
      `Earn stars to buy a gift`,
      `Manage smart recycle bin`,
      `Manage profile`,
    ],
    technologies: [`Figma`, `React Native`, `Expo`],
    roles: [`Hardware designer`, `UI/UX designer`, `Developer`],
  },
  ["small-gift"]: {
    id: "small-gift",
    name: "SmallGift",
    disabledAnimation: true,
    overview: `The SmallGift project is a non-profit initiative aimed at facilitating charitable activities through innovative software solutions, offering an organized platform for philanthropic initiatives.`,
    thumbnail: "/images/projects/small-gift/banner.png",
    images: [
      {
        src: "/images/projects/small-gift/dashboard.png",
        alt: "Dashboard",
        className: "col-span-3",
      },
      {
        src: "/images/projects/small-gift/users.png",
        alt: "Users",
        className: "col-span-3",
      },
      {
        src: "/images/projects/small-gift/add-project.png",
        alt: "Add project",
        className: "col-span-3",
      },
      {
        src: "/images/projects/small-gift/print-qr.png",
        alt: "Print QR",
        className: "col-span-3",
      },
    ],
    platforms: ["Web", "Android", "IOS"],
    keyFeatures: [
      `Manage charitable project`,
      `Manage volunteers`,
      `Print gift card with QR code for `,
    ],
    technologies: [`Figma`, `Reactjs`, `React Native`, `Expo`],
    roles: [`Product owner`, `UI/UX Designer`, `Developer`],
    demo: "https://small-gift.vercel.app/",
  },
};
