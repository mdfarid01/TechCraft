import React from 'react';
import { PhoneColor } from '../types/phone';

interface ColorSelectorProps {
  colors: PhoneColor[];
  selectedColor: PhoneColor | null;
  onSelect: (color: PhoneColor) => void;
}

export function ColorSelector({ colors, selectedColor, onSelect }: ColorSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Color</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map((color) => (
          <div
            key={color.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedColor?.id === color.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onSelect(color)}
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-8 h-8 rounded-full border-2 border-gray-200"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <h3 className="font-medium">{color.name}</h3>
                <p className="text-blue-600 font-semibold">
                  {color.price === 0 ? 'Included' : `+$${color.price}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}