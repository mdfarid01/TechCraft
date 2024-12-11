import React from 'react';
import { Component } from '../types/phone';

interface ComponentSelectorProps {
  title: string;
  components: Component[];
  selectedComponent: Component | null;
  onSelect: (component: Component) => void;
}

export function ComponentSelector({ 
  title, 
  components, 
  selectedComponent, 
  onSelect 
}: ComponentSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {components.map((component) => (
          <div
            key={component.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
              selectedComponent?.id === component.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => onSelect(component)}
          >
            <div className="flex items-center space-x-4">
              <img
                src={component.image}
                alt={component.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{component.name}</h3>
                <p className="text-gray-600">{component.brand}</p>
                <p className="text-blue-600 font-semibold">${component.price}</p>
                <ul className="text-sm text-gray-500 mt-2">
                  {component.specs.map((spec, index) => (
                    <li key={index}>• {spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}