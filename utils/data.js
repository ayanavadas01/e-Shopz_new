import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ayanava Das',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Tribit XFree Go',
      slug: 'Tribit XFree Go_1',
      category: 'Headphones',
      image: '/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp',
      price: 70,
      brand: 'Tribit',
      rating: 4.5,
      numReviews: 873,
      countInStock: 20,
      description:
        'Tribit XFree Go Headphones with Mic, Wireless Bluetooth Headphone Over Ear, HiFi Sound,Deep Bass,Lightweight,Type-C Lightening Fast Charge, Voice Control,Black',
    },
    {
      name: 'boAt Rockerz 255 Pro+',
      slug: 'boAt Rockerz 255 Pro+_1',
      category: 'Earphones',
      image: '/images/earphones_c_1.webp',
      price: 70,
      brand: 'boAT',
      rating: 4.5,
      numReviews: 18000,
      countInStock: 200,
      description:
        'boAt Rockerz 255 Pro+ Bluetooth Neckband with Upto 40 Hours Playback, ASAP™ Charge, IPX7, Dual Pairing, BT v5.0 and Mic(Black)',
    },
    {
      name: 'boAt Bassheads 242',
      slug: 'boAt Bassheads 242_1',
      category: 'Earphones',
      image: '/images/earphones_a_1.webp',
      price: 45,
      brand: 'boAt',
      rating: 3.9,
      numReviews: 105,
      countInStock: 15,
      description:
        'boAt Bassheads 242 in Ear Wired Earphones with Mic(Active Black)',
    },
    {
      name: 'boAt Wave Lite Smartwatch',
      slug: 'boAt Wave Lite Smartwatch_1',
      category: 'Smartwatches',
      image: '/images/watch_1.webp',
      price: 90,
      brand: 'boAt',
      rating: 4.5,
      numReviews: 356,
      countInStock: 120,
      description:
        'boAt Wave Lite Smartwatch with 1.69" HD Display, Sleek Metal Body, HR & SpO2 Level Monitor, 140+ Watch Faces, Activity Tracker, Multiple Sports Modes, IP68 & 7 Days Battery Life(Active Black)',
    },
    {
      name: 'Boat Partypal',
      slug: 'Boat Partypal_1',
      category: 'Speakers',
      image: '/images/speaker1.webp',
      price: 190,
      brand: 'boAt',
      rating: 4.9,
      numReviews: 1443,
      countInStock: 6,
      description:
        'Boat Partypal 50 20W Bluetooth, Wireless, Auxiliary, USB, Fm Speaker - Knight Black',
    },
    {
      name: 'boAt Bassheads 242',
      slug: 'boAt Bassheads 242_2',
      category: 'Earphones',
      image: '/images/earphones_a_2.webp',
      price: 95,
      brand: 'boAt',
      rating: 3.9,
      numReviews: 1117,
      countInStock: 20,
      description:
        'boAt Bassheads 242 in Ear Wired Earphones with Mic(Spirit Lime)',
    },
    {
      name: 'boAt Airdopes 121 PRO',
      slug: 'boAt Airdopes 121 PRO_1',
      category: 'Earbuds',
      image: '/images/earphones_b_3.webp',
      price: 95,
      brand: 'boAt',
      rating: 4.1,
      numReviews: 1114,
      countInStock: 160,
      description:
        'boAt Airdopes 121 PRO True Wireless Earbuds with boAt Signature Sound, Quad Mic ENx™, Beast™ Mode for Gaming, 40H Playtime, IWP™, IPX4, Battery Indicator Screen(Royal Blue)',
    },
  ],
};

export default data;
