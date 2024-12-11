import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Cpu, Wrench, Shield, Zap, Clock } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build Your Dream Phone
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create a custom smartphone that perfectly matches your needs. Choose from premium components and craft your ideal device.
          </p>
          <Link
            to="/customize"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Customizing
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={Cpu}
            title="Premium Components"
            description="Choose from top-tier processors, cameras, and more from leading manufacturers."
          />
          <FeatureCard
            icon={Wrench}
            title="Full Customization"
            description="Customize every aspect of your phone, from RAM to storage to display."
          />
          <FeatureCard
            icon={Shield}
            title="Quality Guaranteed"
            description="All components come with manufacturer warranty and quality assurance."
          />
          <FeatureCard
            icon={Zap}
            title="Performance First"
            description="Build a phone that delivers the performance you need for your usage."
          />
          <FeatureCard
            icon={Clock}
            title="Quick Assembly"
            description="Your custom phone will be assembled and shipped within 5 business days."
          />
          <FeatureCard
            icon={Smartphone}
            title="Expert Support"
            description="Get guidance from our experts throughout the customization process."
          />
        </div>

        {/* CTA Section */}
        <div className="text-center bg-purple-900 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Phone?</h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied customers who have already built their dream devices.
          </p>
          <Link
            to="/customize"
            className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-100 transition-colors"
          >
            Start Building Now
          </Link>
        </div>
      </div>
    </div>
  );
}