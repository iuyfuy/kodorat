
import React from 'react';
import CountdownTimer from '@/components/CountdownTimer';
import VideoSection from '@/components/VideoSection';
import CTAButton from '@/components/CTAButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Countdown Timer at top */}
      <CountdownTimer />

      {/* Main content */}
      <div className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-900/10 via-transparent to-transparent" />

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="text-center py-16 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Main headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mb-8 leading-tight">
                How One Short Video Became the Foundation for a Business That Sells 5-Figure Monthly
              </h1>

              {/* Subheadline */}
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
                And How We Can Help You Apply the Same System in Your Business
              </h2>
            </div>
          </section>

          {/* Video Section */}
          <VideoSection />

          {/* CTA Section */}
          <section className="py-16">
            <CTAButton />
          </section>

          {/* Social Proof Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-12">
                Join Thousands of Successful Creators
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-amber-400 mb-2">10,000+</div>
                  <div className="text-gray-300">Students Enrolled</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-amber-400 mb-2">$2M+</div>
                  <div className="text-gray-300">Revenue Generated</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
                <blockquote className="text-lg md:text-xl text-gray-200 italic mb-6">
                  "This system completely transformed my business. In just 6 months, I went from struggling to make $1,000 a month to consistently hitting 5-figure months."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">SM</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">Sarah Mitchell</div>
                    <div className="text-gray-400 text-sm">Online Business Coach</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
