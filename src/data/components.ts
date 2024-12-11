import { Component } from '../types/phone';

export const processors: Component[] = [
  {
    id: 'sd-8g2',
    name: 'Snapdragon 8 Gen 2',
    brand: 'Qualcomm',
    price: 299,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    specs: ['3.2 GHz', '4nm Process', 'Adreno 740 GPU']
  },
  {
    id: 'dim-9200',
    name: 'Dimensity 9200',
    brand: 'MediaTek',
    price: 249,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    specs: ['3.05 GHz', '4nm Process', 'Immortalis-G715 GPU']
  },
  {
    id: 'a17-pro',
    name: 'A17 Pro',
    brand: 'Apple',
    price: 349,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    specs: ['3.3 GHz', '3nm Process', 'Neural Engine']
  }
];

export const rams: Component[] = [
  {
    id: 'ram-8gb',
    name: '8GB LPDDR5',
    brand: 'Samsung',
    price: 89,
    image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400',
    specs: ['6400 Mbps', 'Low Power']
  },
  {
    id: 'ram-12gb',
    name: '12GB LPDDR5X',
    brand: 'Micron',
    price: 129,
    image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400',
    specs: ['7500 Mbps', 'Enhanced Performance']
  },
  {
    id: 'ram-16gb',
    name: '16GB LPDDR5X',
    brand: 'SK Hynix',
    price: 169,
    image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400',
    specs: ['8400 Mbps', 'Ultra Performance']
  }
];

export const storage: Component[] = [
  {
    id: 'storage-128',
    name: '128GB UFS 3.1',
    brand: 'Samsung',
    price: 79,
    image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400',
    specs: ['2100MB/s Read', '1200MB/s Write']
  },
  {
    id: 'storage-256',
    name: '256GB UFS 4.0',
    brand: 'Western Digital',
    price: 129,
    image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400',
    specs: ['4200MB/s Read', '2800MB/s Write']
  },
  {
    id: 'storage-512',
    name: '512GB UFS 4.0',
    brand: 'Micron',
    price: 199,
    image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400',
    specs: ['4200MB/s Read', '2800MB/s Write']
  }
];

export const cameras: Component[] = [
  {
    id: 'cam-108mp',
    name: '108MP HM3',
    brand: 'Samsung',
    price: 199,
    image: 'https://images.unsplash.com/photo-1602087594298-706ccc894bfd?w=400',
    specs: ['108MP', 'f/1.8', 'OIS']
  },
  {
    id: 'cam-50mp',
    name: '50MP IMX989',
    brand: 'Sony',
    price: 249,
    image: 'https://images.unsplash.com/photo-1602087594298-706ccc894bfd?w=400',
    specs: ['50MP', 'f/1.9', 'Dual OIS']
  },
  {
    id: 'cam-200mp',
    name: '200MP HP3',
    brand: 'Samsung',
    price: 299,
    image: 'https://images.unsplash.com/photo-1602087594298-706ccc894bfd?w=400',
    specs: ['200MP', 'f/1.7', 'OIS+']
  }
];

export const displays: Component[] = [
  {
    id: 'disp-amoled',
    name: '6.7" AMOLED',
    brand: 'Samsung',
    price: 219,
    image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=400',
    specs: ['1080x2400', '120Hz', 'HDR10+']
  },
  {
    id: 'disp-ltpo',
    name: '6.8" LTPO OLED',
    brand: 'LG',
    price: 289,
    image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=400',
    specs: ['1440x3200', '1-120Hz', 'HDR10+']
  }
];

export const batteries: Component[] = [
  {
    id: 'bat-4500',
    name: '4500mAh',
    brand: 'Samsung SDI',
    price: 89,
    image: 'https://images.unsplash.com/photo-1594818020478-96ea6e9e4a6c?w=400',
    specs: ['4500mAh', '45W Fast Charging']
  },
  {
    id: 'bat-5000',
    name: '5000mAh',
    brand: 'LG Chem',
    price: 119,
    image: 'https://images.unsplash.com/photo-1594818020478-96ea6e9e4a6c?w=400',
    specs: ['5000mAh', '65W Fast Charging']
  }
];

export const speakers: Component[] = [
  {
    id: 'spk-stereo',
    name: 'Stereo Speakers',
    brand: 'Harman Kardon',
    price: 79,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400',
    specs: ['Dual Speakers', 'Dolby Atmos']
  },
  {
    id: 'spk-jbl',
    name: 'JBL Speakers',
    brand: 'JBL',
    price: 89,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400',
    specs: ['24-bit Audio', 'Hi-Res Certified']
  }
];