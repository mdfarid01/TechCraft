import React, { useState } from 'react';
import { ComponentSelector } from '../components/ComponentSelector';
import { ColorSelector } from '../components/ColorSelector';
import { TextureSelector } from '../components/TextureSelector';
import { CameraDesignSelector } from '../components/CameraDesignSelector';
import { PhonePreview } from '../components/PhonePreview';
import { Cart } from '../components/Cart';
import { OrderForm } from '../components/OrderForm';
import { PhoneConfiguration, OrderDetails } from '../types/phone';
import { processors, rams, cameras, speakers, displays, batteries, storage } from '../data/components';
import { phoneColors } from '../data/colors';
import { phoneTextures } from '../data/textures';
import { cameraDesigns } from '../data/camera-designs';

export function CustomizePage() {
  const [configuration, setConfiguration] = useState<PhoneConfiguration>({
    processor: null,
    ram: null,
    storage: null,
    camera: null,
    display: null,
    battery: null,
    speaker: null,
    color: null,
    texture: null,
    cameraDesign: null
  });

  const calculateTotal = () => {
    return Object.values(configuration)
      .filter(Boolean)
      .reduce((sum, component) => {
        if (component && 'price' in component) {
          return sum + component.price;
        }
        return sum;
      }, 0);
  };

  const handleOrder = (details: OrderDetails) => {
    console.log('Order placed:', details);
    alert('Thank you for your order! We will contact you soon.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Customize Your Phone</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ColorSelector
            colors={phoneColors}
            selectedColor={configuration.color}
            onSelect={(color) =>
              setConfiguration((prev) => ({ ...prev, color }))
            }
          />
          <TextureSelector
            textures={phoneTextures}
            selectedTexture={configuration.texture}
            onSelect={(texture) =>
              setConfiguration((prev) => ({ ...prev, texture }))
            }
          />
          <CameraDesignSelector
            designs={cameraDesigns}
            selectedDesign={configuration.cameraDesign}
            onSelect={(cameraDesign) =>
              setConfiguration((prev) => ({ ...prev, cameraDesign }))
            }
          />
          <ComponentSelector
            title="Processor"
            components={processors}
            selectedComponent={configuration.processor}
            onSelect={(component) =>
              setConfiguration((prev) => ({ ...prev, processor: component }))
            }
          />
          <ComponentSelector
            title="RAM"
            components={rams}
            selectedComponent={configuration.ram}
            onSelect={(component) =>
              setConfiguration((prev) => ({ ...prev, ram: component }))
            }
          />
          <ComponentSelector
            title="Storage"
            components={storage}
            selectedComponent={configuration.storage}
            onSelect={(component) =>
              setConfiguration((prev) => ({ ...prev, storage: component }))
            }
          />
          <ComponentSelector
            title="Camera"
            components={cameras}
            selectedComponent={configuration.camera}
            onSelect={(component) =>
              setConfiguration((prev) => ({ ...prev, camera: component }))
            }
          />
          <ComponentSelector
            title="Display"
            components={displays}
            selectedComponent={configuration.display}
            onSelect={(component) =>
              setConfiguration((prev) => ({ ...prev, display: component }))
            }
          />
          <ComponentSelector
            title="Battery"
            components={batteries}
            selectedComponent={configuration.battery}
            onSelect={(component) =>
              setConfiguration((prev) => ({ ...prev, battery: component }))
            }
          />
          <ComponentSelector
            title="Speakers"
            components={speakers}
            selectedComponent={configuration.speaker}
            onSelect={(component) =>
              setConfiguration((prev) => ({ ...prev, speaker: component }))
            }
          />
        </div>

        <div className="lg:col-span-1">
          <div className="space-y-6 sticky top-4">
            <PhonePreview configuration={configuration} />
            <Cart
              configuration={configuration}
              totalPrice={calculateTotal()}
            />
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <OrderForm
                configuration={configuration}
                totalPrice={calculateTotal()}
                onSubmit={handleOrder}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}