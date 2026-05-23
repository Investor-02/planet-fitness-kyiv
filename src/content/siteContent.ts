export type Lang = 'ua' | 'en'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const links = {
  instagram: 'https://www.instagram.com/planet_fitness_kyiv/',
  direct: 'https://www.instagram.com/direct/t/planet_fitness_kyiv',
  maps:
    'https://www.google.com/maps/search/?api=1&query=Golosiivsky%20prospekt%20132%2C%20Kyiv%2C%20Ukraine',
  appleMaps: 'https://maps.apple.com/?q=Golosiivsky%20prospekt%20132%2C%20Kyiv%2C%20Ukraine',
}

export const images = {
  logo: asset('images/instagram/logo.webp'),
  heroGym: asset('images/instagram/hero-gym.webp'),
  heroTraining: asset('images/instagram/hero-training.webp'),
  cardio: asset('images/instagram/cardio-zone.webp'),
  strength: asset('images/instagram/strength-zone.webp'),
  floor: asset('images/instagram/training-floor.webp'),
  denys: asset('images/instagram/trainer-denys.webp'),
  yulia: asset('images/instagram/trainer-yulia.webp'),
  bike: asset('images/instagram/gallery-bike.webp'),
  group: asset('images/instagram/gallery-group.webp'),
  recovery: asset('images/instagram/recovery.webp'),
  samboKids: asset('images/instagram/sambo-kids.webp'),
  location: asset('images/instagram/location-exterior.webp'),
  priceStart: asset('images/instagram/price-start-2-months.webp'),
  priceThree: asset('images/instagram/price-3-months.webp'),
  priceThreeAlt: asset('images/instagram/price-3-months-alt.webp'),
  priceCouple: asset('images/instagram/price-couple.webp'),
  priceTwo: asset('images/instagram/price-two-3-months.webp'),
  posterWhy: asset('images/instagram/poster-why.webp'),
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
        'Planet Fitness Kyiv на Голосіївському проспекті, 132: тренажерний зал, персональні тренування, самбо, сучасні тренажери, душ, генератор і запис у Direct.',
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
      sourceNote: 'Дані підтверджені Instagram-профілем клубу.',
    },
    home: {
      title: 'Простір твого розвитку у серці Голосієва',
      subtitle:
        'Сучасний зал, професійні тренери, реабілітаційний фокус і атмосфера, в яку хочеться повертатися після кожного тренування.',
      stats: ['Голосіївський проспект, 132', 'Пн-Пт 7:00-22:00', 'Сб-Нд 9:00-18:00'],
      highlights: [
        ['Сучасні тренажери', 'Кардіо-зона, силові тренажери та великий гантельний ряд.'],
        ['Тренери поруч', 'Підказують техніку, підтримують і допомагають скласти план.'],
        ['Комфорт щодня', 'Просторі роздягальні, душ, гаряча вода, тепло та генератор.'],
        ['Реабілітаційний фокус', 'Безпечний рух, спина, кор, постава і поступове навантаження.'],
      ],
      sectionsTitle: 'Обирайте свій формат',
    },
    training: {
      title: 'Тренування',
      subtitle:
        'Напрями зібрані з Instagram клубу та партнерських публікацій, де Planet Fitness Kyiv позначено як локацію.',
    },
    trainers: {
      title: 'Тренери',
      subtitle:
        'У профілі підтверджені професійні тренери клубу. Імена та ролі вказані лише там, де їх вдалося підтвердити.',
      limited: 'Більше деталей про спеціалізацію тренера краще уточнити в Instagram Direct.',
    },
    memberships: {
      title: 'Абонементи',
      subtitle:
        'Ціни та акції перенесені з підписів і фото-карток Instagram. Актуальність краще підтвердити перед оплатою.',
      cardSource: 'Джерело: Instagram',
    },
    gallery: {
      title: 'Галерея',
      subtitle: 'Фото залу, обладнання, тренувань і атмосфери з Instagram профілю Planet Fitness Kyiv.',
    },
    contacts: {
      title: 'Контакти',
      subtitle: 'Запис на тренування клуб вказує через Direct. Телефон у перевіреному Instagram-контенті не знайдено.',
      addressLabel: 'Адреса',
      hoursLabel: 'Графік роботи',
      weekday: 'Пн-Пт: 7:00-22:00',
      weekend: 'Сб, Нд: 9:00-18:00',
      phone: 'Телефон не підтверджено в Instagram',
      metro: 'Метро Виставковий центр',
    },
  },
  en: {
    seo: {
      title: 'Planet Fitness Kyiv - gym and rehabilitation in Kyiv',
      description:
        'Planet Fitness Kyiv at 132 Holosiivskyi Avenue: gym, personal training, sambo, modern equipment, showers, generator and booking via Instagram Direct.',
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
      sourceNote: 'Data confirmed from the club Instagram profile.',
    },
    home: {
      title: 'Your growth space in Holosiivskyi',
      subtitle:
        'A modern gym, professional trainers, a rehabilitation focus and an atmosphere that makes you want to come back after every session.',
      stats: ['132 Holosiivskyi Avenue', 'Mon-Fri 7:00-22:00', 'Sat-Sun 9:00-18:00'],
      highlights: [
        ['Modern equipment', 'Cardio zone, strength machines and a large dumbbell range.'],
        ['Trainers nearby', 'They guide technique, support you and help shape a plan.'],
        ['Daily comfort', 'Spacious changing rooms, showers, hot water, warmth and a generator.'],
        ['Rehabilitation focus', 'Safe movement, back, core, posture and gradual load.'],
      ],
      sectionsTitle: 'Choose your format',
    },
    training: {
      title: 'Training',
      subtitle:
        'Programs are collected from the club Instagram and partner posts where Planet Fitness Kyiv is tagged as the location.',
    },
    trainers: {
      title: 'Trainers',
      subtitle:
        'The profile confirms professional club trainers. Names and roles are listed only where they were confirmed.',
      limited: 'More detail about each trainer is best confirmed via Instagram Direct.',
    },
    memberships: {
      title: 'Memberships',
      subtitle:
        'Prices and promotions were transferred from Instagram captions and image cards. Please confirm availability before purchase.',
      cardSource: 'Source: Instagram',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Photos of the gym, equipment, training and atmosphere from the Planet Fitness Kyiv Instagram profile.',
    },
    contacts: {
      title: 'Contacts',
      subtitle: 'The club states that training booking is via Direct. No verified phone number was found in Instagram content.',
      addressLabel: 'Address',
      hoursLabel: 'Opening hours',
      weekday: 'Mon-Fri: 7:00-22:00',
      weekend: 'Sat, Sun: 9:00-18:00',
      phone: 'Phone number not confirmed on Instagram',
      metro: 'Vystavkovyi Tsentr metro',
    },
  },
} as const

export const trainingItems = {
  ua: [
    {
      title: 'Тренажерний зал',
      tag: 'Кардіо + силові',
      text: 'Сучасне обладнання, кардіо-зона, силові тренажери та великий гантельний ряд.',
      image: images.strength,
    },
    {
      title: 'Персональні тренування',
      tag: 'План під цілі',
      text: 'Тренери підказують техніку, підтримують і допомагають скласти індивідуальний план.',
      image: images.floor,
    },
    {
      title: 'Безпечна спина та кор',
      tag: 'Реабілітаційний фокус',
      text: 'Пости клубу акцентують рух, зміцнення спини, кору, поставу та поступове навантаження.',
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
      text: 'Modern equipment, a cardio zone, strength machines and a large dumbbell range.',
      image: images.strength,
    },
    {
      title: 'Personal training',
      tag: 'Goal based plan',
      text: 'Trainers guide technique, support you and help build an individual training plan.',
      image: images.floor,
    },
    {
      title: 'Back and core safety',
      tag: 'Rehabilitation focus',
      text: 'Club posts focus on movement, back and core strength, posture and gradual loading.',
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
      text: 'Згадується в Instagram як тренер, який розповідає про найчастіші помилки новачків у залі.',
      image: images.denys,
    },
    {
      name: 'Юлія',
      role: 'Тренерка Planet Fitness',
      text: 'Згадується в Instagram як тренерка з комплексу вправ для тих, хто багато часу проводить за офісним столом.',
      image: images.yulia,
    },
    {
      name: 'Команда Planet Fitness',
      role: 'Професійні тренери',
      text: 'У публікаціях клубу тренери описані як команда, що підказує, підтримує, страхує та допомагає з технікою.',
      image: images.group,
    },
  ],
  en: [
    {
      name: 'Denys',
      role: 'Planet Fitness trainer',
      text: 'Mentioned on Instagram as the trainer explaining common beginner mistakes in the gym.',
      image: images.denys,
    },
    {
      name: 'Yuliia',
      role: 'Planet Fitness trainer',
      text: 'Mentioned on Instagram as the trainer showing exercises for people who spend many hours at a desk.',
      image: images.yulia,
    },
    {
      name: 'Planet Fitness team',
      role: 'Professional trainers',
      text: 'Club posts describe the trainers as a team that guides, supports, spots and helps with technique.',
      image: images.group,
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
      name: '3 місяці',
      price: '2800 грн',
      details: ['Акційний сезонний абонемент', 'У картці вказано оплату частинами: 800 грн + 933 грн', 'Деталі краще підтвердити в Direct'],
      image: images.priceThree,
    },
    {
      name: '2 + 1 місяць',
      price: '2900 грн',
      details: ['Тренуйся 3 місяці, плати за 2', 'Пропозиція з Instagram-публікації', 'Деталі в Direct або у клубі'],
      image: images.priceThreeAlt,
    },
    {
      name: 'Для двох',
      price: '3500 грн / 5000 грн',
      details: ['2 місяці для двох: 3500 грн', '3 місяці для двох: 5000 грн', 'Дані розпізнані з фото-карток Instagram'],
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
      name: '3 months',
      price: '2800 UAH',
      details: ['Seasonal promotional membership', 'The card mentions split payment: 800 UAH + 933 UAH', 'Confirm details in Direct'],
      image: images.priceThree,
    },
    {
      name: '2 + 1 month',
      price: '2900 UAH',
      details: ['Train for 3 months, pay for 2', 'Offer from an Instagram post', 'Details in Direct or at the club'],
      image: images.priceThreeAlt,
    },
    {
      name: 'For two',
      price: '3500 UAH / 5000 UAH',
      details: ['2 months for two: 3500 UAH', '3 months for two: 5000 UAH', 'Data recognized from Instagram image cards'],
      image: images.priceTwo,
    },
  ],
} as const

export const gallery = [
  { image: images.heroGym, altUa: 'Зона тренажерів Planet Fitness Kyiv', altEn: 'Planet Fitness Kyiv equipment area', tone: 'wide' },
  { image: images.heroTraining, altUa: 'Тренування у залі Planet Fitness Kyiv', altEn: 'Training at Planet Fitness Kyiv', tone: 'tall' },
  { image: images.cardio, altUa: 'Кардіо-зона клубу', altEn: 'Club cardio zone', tone: 'tall' },
  { image: images.strength, altUa: 'Силова зона та тренажери', altEn: 'Strength zone and machines', tone: 'wide' },
  { image: images.floor, altUa: 'Тренування на силовому обладнанні', altEn: 'Training on strength equipment', tone: 'tall' },
  { image: images.bike, altUa: 'Команда біля ВДНГ', altEn: 'Team near VDNG', tone: 'wide' },
] as const
