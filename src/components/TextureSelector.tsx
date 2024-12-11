import React from 'react';
import { PhoneTexture } from '../types/phone';

interface TextureSelectorProps {
  textures: PhoneTexture[];
  selectedTexture: PhoneTexture | null;
  onSelect: (texture: PhoneTexture) => void;
}

export function TextureSelector({ textures, selectedTexture, onSelect }: TextureSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Texture</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {textures.map((texture) => (
          <div
            key={texture.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedTexture?.id === texture.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onSelect(texture)}
          >
            <div className="flex flex-col items-center space-y-2">
              <div
                className="w-16 h-16 rounded-lg border-2 border-gray-200"
                style={{ background: texture.pattern }}
              />
              <div className="text-center">
                <h3 className="font-medium">{texture.name}</h3>
                <p className="text-blue-600 font-semibold">
                  {texture.price === 0 ? 'Included' : `+$${texture.price}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}