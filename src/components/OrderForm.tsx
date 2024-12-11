import React, { useState } from 'react';
import { PhoneConfiguration, OrderDetails } from '../types/phone';

interface OrderFormProps {
  configuration: PhoneConfiguration;
  totalPrice: number;
  onSubmit: (details: OrderDetails) => void;
}

export function OrderForm({ configuration, totalPrice, onSubmit }: OrderFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      configuration,
      totalPrice,
      ...formData
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.customerName}
          onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
        <textarea
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          value={formData.address}
          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
        />
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Place Order (${totalPrice})
        </button>
      </div>
    </form>
  );
}