import { CameraDesign } from '../types/phone';

export const cameraDesigns: CameraDesign[] = [
  {
    id: 'classic',
    name: 'Classic Single',
    layout: 'single',
    price: 0
  },
  {
    id: 'dual-vertical',
    name: 'Dual Vertical',
    layout: 'dual-vertical',
    price: 29
  },
  {
    id: 'triple-triangle',
    name: 'Triple Triangle',
    layout: 'triple-triangle',
    price: 49
  },
  {
    id: 'quad-matrix',
    name: 'Quad Matrix',
    layout: 'quad-matrix',
    price: 69
  }
];