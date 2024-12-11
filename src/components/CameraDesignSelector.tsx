import React from 'react';
import { CameraDesign } from '../types/phone';
import { Camera } from 'lucide-react';

interface CameraDesignSelectorProps {
  designs: CameraDesign[];
  selectedDesign: CameraDesign | null;
  onSelect: (design: CameraDesign) => void;
}

export function CameraDesignSelector({ designs, selectedDesign, onSelect }: CameraDesignSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Camera Design</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {designs.map((design) => (
          <div
            key={design.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedDesign?.id === design.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onSelect(design)}
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-lg border-2 border-gray-200 flex items-center justify-center bg-gray-50">
                <CameraPreview layout={design.layout} />
              </div>
              <div className="text-center">
                <h3 className="font-medium">{design.name}</h3>
                <p className="text-blue-600 font-semibold">
                  {design.price === 0 ? 'Included' : `+$${design.price}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CameraPreview({ layout }: { layout: string }) {
  switch (layout) {
    case 'single':
      return <Camera className="w-8 h-8" />;
    case 'dual-vertical':
      return (
        <div className="grid grid-cols-1 gap-1">
          <Camera className="w-6 h-6" />
          <Camera className="w-6 h-6" />
        </div>
      );
    case 'triple-triangle':
      return (
        <div className="relative w-12 h-12">
          <Camera className="w-6 h-6 absolute top-0 left-3" />
          <Camera className="w-6 h-6 absolute bottom-0 left-0" />
          <Camera className="w-6 h-6 absolute bottom-0 right-0" />
        </div>
      );
    case 'quad-matrix':
      return (
        <div className="grid grid-cols-2 gap-1">
          <Camera className="w-5 h-5" />
          <Camera className="w-5 h-5" />
          <Camera className="w-5 h-5" />
          <Camera className="w-5 h-5" />
        </div>
      );
    default:
      return <Camera className="w-8 h-8" />;
  }
}