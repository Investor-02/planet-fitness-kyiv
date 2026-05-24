export type Lang = 'ua' | 'en'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const links = {
  instagram: 'https://www.instagram.com/planet_fitness_kyiv/',
  direct: 'https://ig.me/m/planet_fitness_kyiv',
  maps:
    'https://www.google.com/maps/search/?api=1&query=Golosiivsky%20prospekt%20132%2C%20Kyiv%2C%20Ukraine',
  appleMaps: 'https://maps.apple.com/?q=Golosiivsky%20prospekt%20132%2C%20Kyiv%2C%20Ukraine',
}

export const images = {
  logo: asset('images/instagram/logo-clean.webp'),
  heroGym: asset('images/instagram/hero-gym.webp'),
  heroTraining: asset('images/instagram/hero-training.webp'),
  cardio: asset('images/instagram/cardio-zone.webp'),
  strength: asset('images/instagram/strength-zone.webp'),
  floor: asset('images/instagram/training-floor.webp'),
  recovery: asset('images/instagram/recovery.webp'),
  samboKids: asset('images/instagram/sambo-kids.webp'),
  location: asset('images/instagram/location-exterior.webp'),
  denys: asset('images/instagram/trainer-denys.webp'),
  yulia: asset('images/instagram/trainer-yulia-portrait.webp'),
  polina: asset('images/instagram/trainer-polina.webp'),
  trainerTeam: asset('images/instagram/trainer-team-new.webp'),
  group: asset('images/instagram/gallery-group.webp'),
  priceStart: asset('images/instagram/price-start-2-months.webp'),
  priceThree: asset('images/instagram/price-3-months.webp'),
  priceThreeAlt: asset('images/instagram/price-3-months-alt.webp'),
  priceCouple: asset('images/instagram/price-couple.webp'),
  priceTwo: asset('images/instagram/price-two-3-months.webp'),
  priceStudent: asset('images/instagram/price-student.webp'),
  posterWhy: asset('images/instagram/poster-why.webp'),
  galleryBench: asset('images/instagram/gallery-bench.webp'),
  galleryLunge: asset('images/instagram/gallery-lunge.webp'),
  galleryLeg: asset('images/instagram/gallery-leg.webp'),
  galleryStretch: asset('images/instagram/gallery-stretch.webp'),
  galleryStretchLight: asset('images/instagram/gallery-stretch-light.webp'),
  galleryMachines: asset('images/instagram/gallery-machines.webp'),
  galleryRow: asset('images/instagram/gallery-row.webp'),
  galleryWeightStack: asset('images/instagram/gallery-weight-stack.webp'),
  galleryBackTraining: asset('images/instagram/gallery-back-training.webp'),
}

export const nav = {
  ua: [
    ['/', 'Головна'],
    ['/training', 'Тренування'],
    ['/trainers', 'Тренери'],
    ['/memberships', 'Абонементи'],
    ['/gallery', 'Галерея'],
    ['/contacts', 'Контакти'],
  ],
  en: [
    ['/', 'Home'],
    ['/training', 'Training'],
    ['/trainers', 'Trainers'],
    ['/memberships', 'Memberships'],
    ['/gallery', 'Gallery'],
    ['/contacts', 'Contacts'],
  ],
} as const

export const copy = {
  ua: {
    seo: {
      title: 'Planet Fitness Kyiv - спортзал і реабілітація у Києві',
      description:
        'Planet Fitness Kyiv на Голосіївському проспекті, 132: тренажерний зал, персональні тренування, стретчинг, самбо, сучасні тренажери та запис через Direct.',
    },
    common: {
      brand: 'Planet Fitness Kyiv',
      eyebrow: 'Спорт зал | Реабілітація | Київ',
      direct: 'Написати в Instagram Direct',
      instagram: 'Instagram',
      route: 'Прокласти маршрут',
      join: 'Записатися',
      memberships: 'Переглянути абонементи',
      training: 'Переглянути тренування',
      clarify: 'Уточнити в Direct',
      clubLine: 'Голосіївський проспект, 132',
      footerLine: 'Тренуйся сильно. Рухайся впевнено.',
    },
    home: {
      title: 'Твоя сила тут',
      subtitle:
        'Сучасний зал у Голосієві з професійними тренерами, кардіо та силовими зонами, стретчингом, самбо й комфортом для щоденних тренувань.',
      stats: ['Голосіївський проспект, 132', 'Пн-Пт 7:00-22:00', 'Сб-Нд 9:00-18:00'],
      highlights: [
        ['Сучасні тренажери', 'Кардіо-зона, силові тренажери та великий гантельний ряд.'],
        ['Тренери поруч', 'Підказують техніку, підтримують і допомагають скласти план.'],
        ['Комфорт щодня', 'Просторі роздягальні, душ, гаряча вода, тепло та генератор.'],
        ['Реабілітаційний фокус', 'Безпечний рух, спина, кор, постава і поступове навантаження.'],
      ],
      sectionsEyebrow: 'Формати клубу',
      sectionsTitle: 'Обирайте свій формат',
    },
    training: {
      title: 'Тренування',
      subtitle:
        'Силові та кардіо тренування, персональний супровід, стретчинг, реабілітаційний рух і самбо на базі клубу.',
    },
    trainers: {
      title: 'Тренери',
      subtitle:
        'Команда клубу допомагає з технікою, страхуванням, поступовим навантаженням і вибором формату під вашу ціль.',
      limited: 'За персональними слотами, спеціалізаціями та розкладом краще написати клубу в Direct.',
    },
    memberships: {
      title: 'Абонементи',
      subtitle:
        'Клуб регулярно публікує спеціальні пропозиції. Перед оплатою краще підтвердити наявність абонемента у Direct або на рецепції.',
      cardSource: 'Пропозиція клубу',
      eyebrow: 'Вартість і пропозиції',
    },
    gallery: {
      title: 'Галерея',
      subtitle: 'Зал, тренажери, тренування, стретчинг і робоча атмосфера Planet Fitness Kyiv.',
    },
    contacts: {
      title: 'Контакти',
      subtitle: 'Запис на тренування та уточнення абонементів - через Direct. Маршрут можна відкрити одразу в навігаторі.',
      addressLabel: 'Адреса',
      address: 'Голосіївський проспект, 132, Київ, Україна',
      hoursLabel: 'Графік роботи',
      weekday: 'Пн-Пт: 7:00-22:00',
      weekend: 'Сб, Нд: 9:00-18:00',
      phone: 'Телефон: уточнити в Direct',
      metro: 'Метро Виставковий центр',
    },
  },
  en: {
    seo: {
      title: 'Planet Fitness Kyiv - premium gym in Kyiv',
      description:
        'Planet Fitness Kyiv at 132 Holosiivskyi Avenue: gym, personal training, stretching, sambo, modern equipment and booking via Direct.',
    },
    common: {
      brand: 'Planet Fitness Kyiv',
      eyebrow: 'Gym | Rehabilitation | Kyiv',
      direct: 'Message in Instagram Direct',
      instagram: 'Instagram',
      route: 'Get directions',
      join: 'Book a visit',
      memberships: 'View memberships',
      training: 'View training',
      clarify: 'Confirm in Direct',
      clubLine: '132 Holosiivskyi Avenue',
      footerLine: 'Train strong. Move with confidence.',
    },
    home: {
      title: 'Your power starts here',
      subtitle:
        'A modern gym in Holosiiv with professional trainers, cardio and strength zones, stretching, sambo and daily training comfort.',
      stats: ['132 Holosiivskyi Avenue', 'Mon-Fri 7:00-22:00', 'Sat-Sun 9:00-18:00'],
      highlights: [
        ['Modern equipment', 'Cardio zone, strength machines and a large dumbbell range.'],
        ['Trainers nearby', 'Technique guidance, support and a plan shaped around your goal.'],
        ['Daily comfort', 'Spacious changing rooms, showers, hot water, warmth and a generator.'],
        ['Rehabilitation focus', 'Safe movement, back, core, posture and gradual load.'],
      ],
      sectionsEyebrow: 'Club formats',
      sectionsTitle: 'Choose your format',
    },
    training: {
      title: 'Training',
      subtitle:
        'Strength and cardio training, personal guidance, stretching, rehabilitation-focused movement and sambo at the club.',
    },
    trainers: {
      title: 'Trainers',
      subtitle:
        'The club team helps with technique, spotting, gradual loading and choosing the right format for your goal.',
      limited: 'For personal slots, specializations and schedule details, message the club in Direct.',
    },
    memberships: {
      title: 'Memberships',
      subtitle:
        'The club regularly publishes special offers. Confirm availability in Direct or at reception before payment.',
      cardSource: 'Club offer',
      eyebrow: 'Prices and offers',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Gym floor, equipment, training, stretching and the working atmosphere of Planet Fitness Kyiv.',
    },
    contacts: {
      title: 'Contacts',
      subtitle: 'Book training and confirm memberships via Direct. Open the route in your navigator right away.',
      addressLabel: 'Address',
      address: '132 Holosiivskyi Avenue, Kyiv, Ukraine',
      hoursLabel: 'Opening hours',
      weekday: 'Mon-Fri: 7:00-22:00',
      weekend: 'Sat, Sun: 9:00-18:00',
      phone: 'Phone: confirm in Direct',
      metro: 'Vystavkovyi Tsentr metro',
    },
  },
} as const

export const trainingItems = {
  ua: [
    {
      title: 'Тренажерний зал',
      tag: 'Кардіо + силові',
      text: 'Сучасне обладнання, кардіо-зона, силові тренажери та великий гантельний ряд для повноцінних тренувань.',
      image: images.strength,
    },
    {
      title: 'Персональні тренування',
      tag: 'План під цілі',
      text: 'Тренери підказують техніку, підтримують, страхують і допомагають скласти індивідуальний план.',
      image: images.floor,
    },
    {
      title: 'Стретчинг',
      tag: 'Груповий та індивідуальний',
      text: 'У клубі представлені групові та індивідуальні заняття зі стретчингу для гнучкості, мобільності та відновлення.',
      image: images.galleryStretch,
    },
    {
      title: 'Безпечна спина та кор',
      tag: 'Реабілітаційний фокус',
      text: 'Контент клубу акцентує безпечний рух, зміцнення спини, кору, поставу та поступове навантаження.',
      image: images.recovery,
    },
    {
      title: 'Самбо',
      tag: 'Діти, підлітки, дорослі',
      text: 'KHMELIUK ACADEMY проводить самбо за адресою клубу. Є групи для дітей з 6 років, підлітків і дорослих.',
      image: images.samboKids,
    },
  ],
  en: [
    {
      title: 'Gym floor',
      tag: 'Cardio + strength',
      text: 'Modern equipment, a cardio zone, strength machines and a large dumbbell range for complete workouts.',
      image: images.strength,
    },
    {
      title: 'Personal training',
      tag: 'Goal based plan',
      text: 'Trainers guide technique, support you, spot safely and help build an individual training plan.',
      image: images.floor,
    },
    {
      title: 'Stretching',
      tag: 'Group and individual',
      text: 'The club offers group and individual stretching sessions for flexibility, mobility and recovery.',
      image: images.galleryStretch,
    },
    {
      title: 'Back and core safety',
      tag: 'Rehabilitation focus',
      text: 'Club content focuses on safe movement, back and core strength, posture and gradual loading.',
      image: images.recovery,
    },
    {
      title: 'Sambo',
      tag: 'Kids, teens, adults',
      text: 'KHMELIUK ACADEMY runs sambo at the club address, with groups for kids from 6, teens and adults.',
      image: images.samboKids,
    },
  ],
} as const

export const trainers = {
  ua: [
    {
      name: 'Денис',
      role: 'Тренер Planet Fitness',
      text: 'Пояснює типові помилки новачків у залі, роботу з технікою та впевнений старт тренувань.',
      image: images.denys,
    },
    {
      name: 'Юлія',
      role: 'Тренерка Planet Fitness',
      text: 'Показує комплекси вправ для тих, хто багато часу проводить за офісним столом.',
      image: images.yulia,
    },
    {
      name: 'Поліна',
      role: 'Тренерка Planet Fitness',
      text: 'Представлена у тренерському контенті клубу разом із Денисом у форматі технічного батлу.',
      image: images.polina,
    },
    {
      name: 'Команда Planet Fitness',
      role: 'Професійні тренери',
      text: 'Команда залу підказує, підтримує, страхує і допомагає рухатися безпечно та стабільно.',
      image: images.trainerTeam,
    },
    {
      name: 'KHMELIUK ACADEMY',
      role: 'Самбо у локації клубу',
      text: 'Партнерський напрям самбо для дітей від 6 років, підлітків і дорослих за адресою клубу.',
      image: images.samboKids,
    },
  ],
  en: [
    {
      name: 'Denys',
      role: 'Planet Fitness trainer',
      text: 'Explains common beginner mistakes, technique basics and a confident start in the gym.',
      image: images.denys,
    },
    {
      name: 'Yuliia',
      role: 'Planet Fitness trainer',
      text: 'Shows exercise complexes for people who spend many hours at an office desk.',
      image: images.yulia,
    },
    {
      name: 'Polina',
      role: 'Planet Fitness trainer',
      text: 'Featured in the club trainer content with Denys in a technique battle format.',
      image: images.polina,
    },
    {
      name: 'Planet Fitness team',
      role: 'Professional trainers',
      text: 'The gym team guides, supports, spots safely and helps you move with steady progress.',
      image: images.trainerTeam,
    },
    {
      name: 'KHMELIUK ACADEMY',
      role: 'Sambo at the club location',
      text: 'Partner sambo direction for kids from 6, teens and adults at the club address.',
      image: images.samboKids,
    },
  ],
} as const

export const memberships = {
  ua: [
    {
      name: 'Start 2 Months',
      price: '1500 грн',
      details: ['2 місяці повного доступу до тренажерного залу', 'Для нових клієнтів', 'Активується в день покупки', 'Без заморозки'],
      image: images.priceStart,
    },
    {
      name: 'Студентський',
      price: '1100 грн',
      details: ['Спеціальна пропозиція для студентів', 'Кількість абонементів обмежена', 'Деталі та наявність - у Direct'],
      image: images.priceStudent,
    },
    {
      name: '3 місяці',
      price: '2800 грн',
      details: ['Сезонний абонемент на 3 місяці', 'Можлива оплата частинами: 800 грн + 933 грн', 'Деталі краще підтвердити в Direct'],
      image: images.priceThree,
    },
    {
      name: '2 + 1 місяць',
      price: '2900 грн',
      details: ['Тренуйся 3 місяці, плати за 2', 'Пропозиція для повного доступу до залу', 'Деталі в Direct або у клубі'],
      image: images.priceThreeAlt,
    },
    {
      name: 'Для двох',
      price: '3500 грн / 5000 грн',
      details: ['2 місяці для двох: 3500 грн', '3 місяці для двох: 5000 грн', 'Формат для тренувань удвох'],
      image: images.priceTwo,
    },
  ],
  en: [
    {
      name: 'Start 2 Months',
      price: '1500 UAH',
      details: ['2 months of full gym access', 'For new clients', 'Activated on the day of purchase', 'No freeze'],
      image: images.priceStart,
    },
    {
      name: 'Student',
      price: '1100 UAH',
      details: ['Special offer for students', 'Limited number of memberships', 'Confirm details and availability in Direct'],
      image: images.priceStudent,
    },
    {
      name: '3 months',
      price: '2800 UAH',
      details: ['Seasonal 3-month membership', 'Split payment shown: 800 UAH + 933 UAH', 'Confirm details in Direct'],
      image: images.priceThree,
    },
    {
      name: '2 + 1 month',
      price: '2900 UAH',
      details: ['Train for 3 months, pay for 2', 'Full gym access offer', 'Details in Direct or at the club'],
      image: images.priceThreeAlt,
    },
    {
      name: 'For two',
      price: '3500 UAH / 5000 UAH',
      details: ['2 months for two: 3500 UAH', '3 months for two: 5000 UAH', 'Format for training together'],
      image: images.priceTwo,
    },
  ],
} as const

export const gallery = [
  { image: images.strength, altUa: 'Силова зона та тренажери Planet Fitness Kyiv', altEn: 'Planet Fitness Kyiv strength zone and machines', tone: 'wide' },
  { image: images.heroTraining, altUa: 'Тренування у залі Planet Fitness Kyiv', altEn: 'Training at Planet Fitness Kyiv', tone: 'tall' },
  { image: images.galleryBench, altUa: 'Жим у зоні силових тренувань', altEn: 'Bench press in the strength area', tone: 'tall' },
  { image: images.galleryLunge, altUa: 'Функціональна вправа у залі', altEn: 'Functional exercise in the gym', tone: 'tall' },
  { image: images.galleryLeg, altUa: 'Тренування ніг у Planet Fitness Kyiv', altEn: 'Leg training at Planet Fitness Kyiv', tone: 'wide' },
  { image: images.galleryStretch, altUa: 'Стретчинг у клубі', altEn: 'Stretching at the club', tone: 'tall' },
  { image: images.galleryMachines, altUa: 'Тренування на обладнанні', altEn: 'Training on equipment', tone: 'wide' },
  { image: images.galleryRow, altUa: 'Силова вправа у тренажерній зоні', altEn: 'Strength exercise in the gym area', tone: 'tall' },
  { image: images.galleryWeightStack, altUa: 'Блок тренажера крупним планом', altEn: 'Machine weight stack close-up', tone: 'standard' },
  { image: images.galleryBackTraining, altUa: 'Силове тренування спини', altEn: 'Back strength training', tone: 'standard' },
  { image: images.galleryStretchLight, altUa: 'Розтяжка та мобільність', altEn: 'Stretching and mobility', tone: 'tall' },
] as const
