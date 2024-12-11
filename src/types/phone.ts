export interface Component {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  specs: string[];
}

export interface PhoneColor {
  id: string;
  name: string;
  hex: string;
  price: number;
}

export interface PhoneTexture {
  id: string;
  name: string;
  pattern: string;
  price: number;
}

export interface CameraDesign {
  id: string;
  name: string;
  layout: string;
  price: number;
}

export interface PhoneConfiguration {
  processor: Component | null;
  ram: Component | null;
  storage: Component | null;
  camera: Component | null;
  display: Component | null;
  battery: Component | null;
  speaker: Component | null;
  color: PhoneColor | null;
  texture: PhoneTexture | null;
  cameraDesign: CameraDesign | null;
}

export interface OrderDetails {
  configuration: PhoneConfiguration;
  totalPrice: number;
  customerName: string;
  email: string;
  address: string;
}