import React from 'react';
import { PhoneConfiguration } from '../types/phone';

interface CartProps {
  configuration: PhoneConfiguration;
  totalPrice: number;
}

export function Cart({ configuration, totalPrice }: CartProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-xl font-semibold mb-4">Your Configuration</h2>
      <div className="space-y-4 mb-6">
        {Object.entries(configuration).map(([key, component]) => (
          component && (
            <div key={key} className="flex justify-between">
              <span className="text-gray-600 capitalize">{key}</span>
              <span className="font-medium">
                ${typeof component === 'object' && 'price' in component ? component.price : 0}
              </span>
            </div>
          )
        ))}
        <div className="border-t pt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}