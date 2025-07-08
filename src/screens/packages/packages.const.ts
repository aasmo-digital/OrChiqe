// --- Mock Data (In a real app, this would come from your server) ---
export const PLANS_DATA = [
  {
    id: 'basic',
    title: 'BASIC',
    price: 8.33,
    priceNote: '/ month',
    features: [
      {text: '700 video activities & new added every week', available: true},
      {text: 'A.I. Kids Audio Stories', available: false},
      {text: 'Kids Mood Tracker', available: false},
      {text: 'Family Sharing', available: false},
    ],
  },
  {
    id: 'ultimate',
    title: 'ULTIMATE',
    price: 47.06,
    priceNote: '/ year',
    monthlyEquivalent: '$3.92 / month',
    isBestValue: true,
    features: [
      {text: '700 video activities & new added every week', available: true},
      {text: 'A.I. Kids Audio Stories', available: true},
      {text: 'Kids Mood Tracker', available: true},
      {text: 'Family Sharing', available: true},
    ],
  },
];

export const REVIEWS_DATA = [
  {
    id: '1',
    name: '@Winnpooh009',
    date: '24 December',
    rating: 5,
    text: "I love the topics that I can discuss with my kids and hear their ideas is amazing.... I'm beyond grateful to do the science projects with my babies... I feel like a teacher, but it's honestly brings so much joy to my babies and the faces and excitement is a beautiful blessing🥰🥰🥰",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: '@DavidB',
    date: '15 November',
    rating: 5,
    text: 'I really like the "something new" section: It always suggests things to be very creative about. Keep it up!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];
