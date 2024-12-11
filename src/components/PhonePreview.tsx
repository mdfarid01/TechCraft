import React from 'react';
import { PhoneConfiguration } from '../types/phone';
import { Smartphone, Camera } from 'lucide-react';

interface PhonePreviewProps {
  configuration: PhoneConfiguration;
}

export function PhonePreview({ configuration }: PhonePreviewProps) {
  const isComplete = Object.values(configuration).every(Boolean);

  const renderCameraModule = () => {
    if (!configuration.camera || !configuration.cameraDesign) return null;

    const baseStyle = "absolute bg-black bg-opacity-20";
    switch (configuration.cameraDesign.layout) {
      case 'single':
        return (
          <div className={`${baseStyle} top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center`}>
            <Camera className="w-8 h-8 text-gray-600" />
          </div>
        );
      case 'dual-vertical':
        return (
          <div className={`${baseStyle} top-4 left-4 w-12 h-20 rounded-2xl flex flex-col items-center justify-evenly`}>
            <Camera className="w-8 h-8 text-gray-600" />
            <Camera className="w-8 h-8 text-gray-600" />
          </div>
        );
      case 'triple-triangle':
        return (
          <div className={`${baseStyle} top-4 left-4 w-20 h-20 rounded-2xl flex flex-wrap items-center justify-center gap-2`}>
            <Camera className="w-8 h-8 text-gray-600" />
            <Camera className="w-8 h-8 text-gray-600" />
            <Camera className="w-8 h-8 text-gray-600" />
          </div>
        );
      case 'quad-matrix':
        return (
          <div className={`${baseStyle} top-4 left-4 w-20 h-20 rounded-2xl grid grid-cols-2 gap-2 p-2`}>
            <Camera className="w-8 h-8 text-gray-600" />
            <Camera className="w-8 h-8 text-gray-600" />
            <Camera className="w-8 h-8 text-gray-600" />
            <Camera className="w-8 h-8 text-gray-600" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-xl font-semibold mb-4">Phone Preview</h2>
      <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
        <div
          className="relative w-48 h-96 rounded-3xl shadow-xl transition-all duration-300"
          style={{
            backgroundColor: configuration.color?.hex || '#e5e7eb',
            backgroundImage: configuration.texture?.pattern,
            opacity: isComplete ? 1 : 0.7,
          }}
        >
          {!isComplete && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <Smartphone className="w-16 h-16 mx-auto mb-2" />
                <p className="text-sm">Complete your selection to preview</p>
              </div>
            </div>
          )}
          {renderCameraModule()}
          {configuration.display && (
            <div className="absolute inset-3 rounded-2xl bg-black bg-opacity-10" />
          )}
        </div>
      </div>
      {isComplete && (
        <div className="mt-4 text-center text-sm text-gray-600">
          Your custom {configuration.color?.name} phone with {configuration.texture?.name} finish,
          {configuration.cameraDesign?.name} camera design, {configuration.processor?.name},
          {configuration.ram?.name}, and more
        </div>
      )}
    </div>
  );
}