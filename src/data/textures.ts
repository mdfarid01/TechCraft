import { PhoneTexture } from '../types/phone';

export const phoneTextures: PhoneTexture[] = [
  {
    id: 'smooth',
    name: 'Smooth Glass',
    pattern: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    price: 0
  },
  {
    id: 'matte',
    name: 'Matte Finish',
    pattern: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 4px)',
    price: 29
  },
  {
    id: 'carbon',
    name: 'Carbon Fiber',
    pattern: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 2px, transparent 2px, transparent 4px)',
    price: 49
  },
  {
    id: 'leather',
    name: 'Leather Texture',
    pattern: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.05) 0%, transparent 50%)',
    price: 69
  }
];