import type { Locale } from "@/components/SitePreferences";

export const copy = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact", menu: "Open menu", close: "Close menu" },
    theme: { light: "Switch to light mode", dark: "Switch to dark mode" },
    hero: {
      roleBefore: "Product designer &",
      roleAccent: "developer",
      intro: "I turn ideas into useful digital experiences.",
      cta: "View projects",
      availability: "Open to opportunities and collaborations",
      location: "Based in Cần Thơ, Vietnam",
    },
    work: {
      title: "Selected work",
      intro: "Products I have helped design and build, from mobile learning to community platforms.",
      view: "View project",
      all: "Explore all work",
    },
    about: {
      title: "A little about me.",
      leadBefore: "I’m Khan Trần. You can call me",
      leadAccent: "Kevin.",
      body: "I work across product design and software development, shaping ideas into web and mobile experiences. I care about the details people notice and the decisions that make a product easier to use.",
      approachTitle: "How I work",
      approach: "I move between product thinking, interface design, and implementation so the idea remains clear all the way to the finished product.",
      skillsTitle: "Tools & skills",
      skillsNote: "Design, engineering, and AI tools I use to build digital products.",
    },
    contact: {
      titleBefore: "Let’s make something",
      titleAccent: "useful.",
      body: "Have a role, project, or collaboration in mind? Tell me what you’re working on.",
      email: "Email me",
      phone: "Call me",
      linkedin: "LinkedIn",
      location: "Cần Thơ, Vietnam",
    },
    detail: {
      back: "Back to work",
      overview: "Overview",
      platform: "Platforms",
      features: "Key features",
      technology: "Technology",
      role: "My role",
      visit: "Visit live project",
      next: "Next project",
      gallery: "Project gallery",
    },
    footer: "Designed and built by Kevin.",
  },
  vi: {
    nav: { work: "Dự án", about: "Giới thiệu", contact: "Liên hệ", menu: "Mở menu", close: "Đóng menu" },
    theme: { light: "Chuyển sang giao diện sáng", dark: "Chuyển sang giao diện tối" },
    hero: {
      roleBefore: "Thiết kế sản phẩm &",
      roleAccent: "phát triển phần mềm",
      intro: "Tôi biến ý tưởng thành trải nghiệm số rõ ràng và hữu ích.",
      cta: "Xem dự án",
      availability: "Sẵn sàng cho cơ hội và hợp tác mới",
      location: "Làm việc tại Cần Thơ, Việt Nam",
    },
    work: {
      title: "Dự án tiêu biểu",
      intro: "Những sản phẩm tôi tham gia thiết kế và phát triển, từ ứng dụng học tập đến nền tảng cộng đồng.",
      view: "Xem dự án",
      all: "Khám phá tất cả dự án",
    },
    about: {
      title: "Một chút về tôi.",
      leadBefore: "Tôi là Khan Trần. Bạn có thể gọi tôi là",
      leadAccent: "Kevin.",
      body: "Tôi làm việc ở giao điểm của thiết kế sản phẩm và phát triển phần mềm, biến ý tưởng thành trải nghiệm web và di động. Tôi chú ý đến những chi tiết người dùng cảm nhận được và những quyết định giúp sản phẩm dễ dùng hơn.",
      approachTitle: "Cách tôi làm việc",
      approach: "Tôi kết nối tư duy sản phẩm, thiết kế giao diện và triển khai để ý tưởng luôn rõ ràng từ đầu đến sản phẩm hoàn thiện.",
      skillsTitle: "Công cụ & kỹ năng",
      skillsNote: "Thiết kế, kỹ thuật và công cụ AI tôi dùng để xây dựng sản phẩm số.",
    },
    contact: {
      titleBefore: "Cùng tạo nên điều",
      titleAccent: "hữu ích.",
      body: "Bạn có vị trí, dự án hoặc ý tưởng hợp tác? Hãy chia sẻ với tôi.",
      email: "Gửi email",
      phone: "Gọi điện",
      linkedin: "LinkedIn",
      location: "Cần Thơ, Việt Nam",
    },
    detail: {
      back: "Về danh sách dự án",
      overview: "Tổng quan",
      platform: "Nền tảng",
      features: "Tính năng chính",
      technology: "Công nghệ",
      role: "Vai trò của tôi",
      visit: "Xem dự án trực tuyến",
      next: "Dự án tiếp theo",
      gallery: "Hình ảnh dự án",
    },
    footer: "Thiết kế và phát triển bởi Kevin.",
  },
} as const;

export const skillGroups = [
  {
    id: "ai",
    label: { en: "AI", vi: "AI" },
    skills: ["Claude", "Codex", "GitHub Copilot", "Custom skills", "Custom agents", "MCP servers", "In-app agents"],
  },
  {
    id: "frontend",
    label: { en: "Frontend", vi: "Frontend" },
    skills: ["React", "React Native", "Expo", "Next.js", "Angular", "MUI", "Tailwind CSS", "Bootstrap", "Kendo UI", "shadcn/ui"],
  },
  {
    id: "backend",
    label: { en: "Backend", vi: "Backend" },
    skills: ["NestJS", "Java", "Python", "PHP"],
  },
  {
    id: "other",
    label: { en: "Other", vi: "Khác" },
    skills: ["Product design", "UI/UX design", "Figma design", "Adobe Photoshop"],
  },
] as const;

export type ProjectCopy = {
  category: string;
  summary: string;
  overview: string;
  features: string[];
  galleryNote?: string;
  story?: { challengeTitle: string; challenge: string; systemTitle: string; system: string; assistantTitle: string; assistant: string };
};

const roleTranslations: Record<string, string> = {
  Founder: "Nhà sáng lập",
  "Product designer": "Nhà thiết kế sản phẩm",
  "Full-stack developer": "Lập trình viên full-stack",
  "UI/UX Design": "Thiết kế UI/UX",
  "UI/UX Designer": "Nhà thiết kế UI/UX",
  "UI/UX designer": "Nhà thiết kế UI/UX",
  "Develop website": "Phát triển website",
  "Product owner": "Chủ sản phẩm",
  "Hardware designer": "Thiết kế phần cứng",
  Developer: "Lập trình viên",
};

export function displayRole(role: string, locale: Locale) {
  return locale === "vi" ? roleTranslations[role] ?? role : role;
}

export const projectCopy: Record<string, Record<Locale, ProjectCopy>> = {
  lensan: {
    en: {
      category: "Sports platform · Web & mobile",
      summary: "A connected place to find sports courts, manage venues, and keep every booking in sync.",
      overview: "Lensan brings players and venue owners onto one shared schedule. The live website helps people discover available football, badminton, and pickleball courts and book a time. The broader product includes customer and venue-owner app experiences, an operations dashboard, and a booking engine built to prevent conflicting reservations.",
      features: ["Court discovery and booking", "Live venue schedules", "Venue operations", "AI-assisted search and booking drafts"],
      galleryNote: "The website is live. The mobile images below are customer app previews.",
      story: {
        challengeTitle: "The problem",
        challenge: "Players often have to call or message several venues to find an open court. Owners may be coordinating the same schedule through a notebook, Zalo, and spreadsheets, making double bookings and missed details easy.",
        systemTitle: "One schedule, two sides",
        system: "I shaped Lensan around a shared source of availability: players see bookable times while venue owners see new reservations in their working schedule. The product also gives owners tools for recurring bookings, customers, and day-to-day money tracking.",
        assistantTitle: "AI with a human decision",
        assistant: "Mosco helps people search by conversation and helps owners prepare bookings or review what needs attention. Actions that change a schedule or money still require the owner's confirmation.",
      },
    },
    vi: {
      category: "Nền tảng thể thao · Web & di động",
      summary: "Một nơi kết nối người tìm sân, chủ sân và lịch đặt sân luôn đồng bộ.",
      overview: "Lensan đưa người chơi và chủ sân lên một lịch dùng chung. Website đang hoạt động giúp tìm sân bóng đá, cầu lông và pickleball còn trống rồi chọn giờ đặt. Sản phẩm rộng hơn gồm trải nghiệm ứng dụng cho khách và chủ sân, công cụ vận hành cùng hệ thống đặt sân được xây dựng để tránh trùng lịch.",
      features: ["Tìm và đặt sân", "Lịch sân cập nhật", "Công cụ vận hành cho chủ sân", "AI hỗ trợ tìm sân và chuẩn bị lịch đặt"],
      galleryNote: "Website đã hoạt động. Các hình ảnh di động bên dưới là bản xem trước ứng dụng khách.",
      story: {
        challengeTitle: "Bài toán",
        challenge: "Người chơi thường phải gọi hoặc nhắn nhiều sân để tìm giờ trống. Chủ sân có thể phải ghép thông tin từ sổ tay, Zalo và bảng tính, khiến việc trùng lịch hoặc bỏ sót chi tiết dễ xảy ra.",
        systemTitle: "Một lịch cho hai phía",
        system: "Tôi xây dựng Lensan quanh một nguồn thông tin giờ trống dùng chung: khách thấy khung giờ có thể đặt, còn chủ sân thấy lịch mới ngay trong công việc hằng ngày. Sản phẩm cũng hỗ trợ lịch cố định, khách hàng và theo dõi thu chi tại sân.",
        assistantTitle: "AI để con người quyết định",
        assistant: "Mosco giúp khách tìm sân bằng hội thoại và giúp chủ sân chuẩn bị lịch đặt hoặc xem việc cần xử lý. Những thao tác thay đổi lịch hay tiền vẫn cần chủ sân xác nhận.",
      },
    },
  },
  "lati-coffee": {
    en: {
      category: "Coffee ordering · Responsive web",
      summary: "A fast, app-like way to order drinks, follow delivery, and share a group order.",
      overview: "LATi Coffee brings a local Cần Thơ café into a responsive ordering app. Customers browse the live menu, customize drinks, choose delivery, pay, and follow their order. Group ordering lets friends or coworkers choose their own drinks before one person checks out. The web app also connects loyalty points, vouchers, and saved account details to repeat orders.",
      features: ["Live menu and drink customization", "Delivery checkout and order tracking", "Shared group orders", "Loyalty points and vouchers"],
      galleryNote: "Screens from the live responsive web app at lati.io.vn, shown on desktop and mobile.",
      story: {
        challengeTitle: "From chat to checkout",
        challenge: "Taking drink orders through messages makes it easy to miss a size, topping, address, or change from a group. LATi gives customers a clear self-service route from choosing a drink to placing an order.",
        systemTitle: "Built around the café",
        system: "The menu and orders connect to LATi’s existing Sapo FnB system. Customers see a mobile-first interface while the café keeps its established order workflow behind it.",
        assistantTitle: "One order, many people",
        assistant: "For coworkers and friends, a host can share a group order so everyone chooses their own drinks. The host reviews the combined order and completes checkout once.",
      },
    },
    vi: {
      category: "Đặt đồ uống · Web tương thích mọi màn hình",
      summary: "Đặt đồ uống nhanh như ứng dụng, theo dõi giao hàng và đặt chung cùng bạn bè.",
      overview: "LATi Coffee đưa quán cà phê tại Cần Thơ vào một ứng dụng đặt món trên web. Khách có thể xem thực đơn đang bán, tùy chỉnh đồ uống, chọn giao hàng, thanh toán và theo dõi đơn. Đơn nhóm cho phép bạn bè hoặc đồng nghiệp tự chọn món trước khi một người thanh toán. Điểm thưởng, voucher và thông tin tài khoản giúp việc đặt lại thuận tiện hơn.",
      features: ["Thực đơn và tùy chỉnh đồ uống", "Thanh toán giao hàng và theo dõi đơn", "Đặt món theo nhóm", "Điểm thưởng và voucher"],
      galleryNote: "Hình ảnh từ ứng dụng web đang hoạt động tại lati.io.vn, trên máy tính và điện thoại.",
      story: {
        challengeTitle: "Từ tin nhắn đến đơn hàng",
        challenge: "Nhận đơn qua tin nhắn dễ bỏ sót kích cỡ, món thêm, địa chỉ hoặc thay đổi từ cả nhóm. LATi giúp khách tự chọn món và hoàn tất đơn theo một quy trình rõ ràng.",
        systemTitle: "Phù hợp với cách quán vận hành",
        system: "Thực đơn và đơn hàng kết nối với hệ thống Sapo FnB quán đang sử dụng. Khách có giao diện thuận tiện trên di động, còn quán tiếp tục xử lý đơn trong quy trình quen thuộc.",
        assistantTitle: "Một đơn cho nhiều người",
        assistant: "Khi đặt cùng bạn bè hoặc đồng nghiệp, chủ nhóm chia sẻ đơn để mỗi người tự chọn đồ uống. Chủ nhóm xem lại toàn bộ món và thanh toán một lần.",
      },
    },
  },
  "ptn-sport": {
    en: {
      category: "Sports platform · Web",
      summary: "A central place for sports schedules, results, teams, and news.",
      overview: "PTNSport brings event information together in one website. Visitors can explore competitions, follow match schedules and results, and find news about the teams and events they care about.",
      features: ["Sports news", "Match schedules", "Results", "Team information"],
    },
    vi: {
      category: "Nền tảng thể thao · Web",
      summary: "Nơi theo dõi lịch thi đấu, kết quả, đội tuyển và tin tức thể thao.",
      overview: "PTNSport tập hợp thông tin sự kiện trên một website. Người xem có thể khám phá giải đấu, theo dõi lịch và kết quả trận đấu, cũng như tìm tin tức về đội tuyển và sự kiện mình quan tâm.",
      features: ["Tin thể thao", "Lịch thi đấu", "Kết quả", "Thông tin đội tuyển"],
    },
  },
  "easy-vocabulary": {
    en: {
      category: "Learning app · iOS & Android",
      summary: "Vocabulary practice shaped around Vietnamese learners.",
      overview: "EasyVocabulary helps Vietnamese learners build English vocabulary with word lists, practice activities, bookmarks, and tests that support learning over time.",
      features: ["Vietnamese–English translation", "Saved words", "Vocabulary practice", "Tests"],
    },
    vi: {
      category: "Ứng dụng học tập · iOS & Android",
      summary: "Luyện từ vựng tiếng Anh dành cho người học Việt Nam.",
      overview: "EasyVocabulary giúp người Việt mở rộng vốn từ tiếng Anh qua danh sách từ, bài luyện tập, từ đã lưu và các bài kiểm tra hỗ trợ việc học lâu dài.",
      features: ["Dịch Việt–Anh và Anh–Việt", "Lưu từ vựng", "Luyện từ", "Bài kiểm tra"],
    },
  },
  "kl-glass": {
    en: {
      category: "Connected device · iOS & Android",
      summary: "A companion app for connected smart glasses and health information.",
      overview: "KLGlass is a mobile companion for smart glasses. The concept brings device management, health information, and account settings into one interface.",
      features: ["Smart-glasses management", "Health information", "Account settings"],
    },
    vi: {
      category: "Thiết bị kết nối · iOS & Android",
      summary: "Ứng dụng đồng hành cùng kính thông minh và thông tin sức khỏe.",
      overview: "KLGlass là ứng dụng di động đồng hành với kính thông minh. Ý tưởng này đưa việc quản lý thiết bị, thông tin sức khỏe và tài khoản vào cùng một giao diện.",
      features: ["Quản lý kính thông minh", "Thông tin sức khỏe", "Cài đặt tài khoản"],
    },
  },
  "smart-bin": {
    en: {
      category: "Sustainability app · iOS & Android",
      summary: "A recycling experience with connected bins and rewards.",
      overview: "SmartBin combines bin management with a rewards system. People can follow their recycling activity, collect points, and use them toward gifts.",
      features: ["Connected-bin management", "Points and rewards", "Profile management"],
    },
    vi: {
      category: "Ứng dụng môi trường · iOS & Android",
      summary: "Trải nghiệm tái chế kết hợp thùng rác thông minh và phần thưởng.",
      overview: "SmartBin kết hợp quản lý thùng rác với hệ thống điểm thưởng. Người dùng có thể theo dõi hoạt động tái chế, tích điểm và đổi quà.",
      features: ["Quản lý thùng rác", "Điểm và phần thưởng", "Quản lý hồ sơ"],
    },
  },
  "small-gift": {
    en: {
      category: "Community platform · Web & mobile",
      summary: "Tools for organizing charitable projects and volunteers.",
      overview: "SmallGift is a non-profit initiative that supports charitable activities. Its web and mobile tools help organize projects, volunteers, and gift cards with QR codes.",
      features: ["Charitable projects", "Volunteer management", "QR gift cards"],
    },
    vi: {
      category: "Nền tảng cộng đồng · Web & di động",
      summary: "Công cụ tổ chức dự án thiện nguyện và tình nguyện viên.",
      overview: "SmallGift là một sáng kiến phi lợi nhuận hỗ trợ hoạt động thiện nguyện. Các công cụ web và di động giúp quản lý dự án, tình nguyện viên và thẻ quà tặng có mã QR.",
      features: ["Dự án thiện nguyện", "Quản lý tình nguyện viên", "Thẻ quà tặng QR"],
    },
  },
};
