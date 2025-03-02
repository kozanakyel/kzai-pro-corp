'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// SVG Icons for services
const ServiceIcons = {
  GenerativeAI: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4"></path><path d="M12 17v4"></path><path d="M3 12h4"></path><path d="M17 12h4"></path>
      <path d="M18.364 5.636a9 9 0 0 1 0 12.728"></path><path d="M5.636 5.636a9 9 0 0 0 0 12.728"></path>
    </svg>
  ),
  AIAgents: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v4"></path>
      <line x1="8" y1="16" x2="8" y2="16"></line>
      <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>
  ),
  FinancialAI: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  ChatbotAI: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <line x1="9" y1="10" x2="15" y2="10"></line>
    </svg>
  )
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">KZAI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#solutions" className="hover:text-amber-500 transition-colors">Solutions</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-lg hover:opacity-90 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 md:pt-36 md:pb-24">
        <div className="container mx-auto flex flex-col items-center">
          <div className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">AI Solutions</span> for the Modern Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Creating intelligent AI systems that transform how businesses operate, automate processes, and deliver exceptional value.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-lg hover:opacity-90 transition-all text-lg font-medium">
                Explore Solutions
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-amber-500 transition-all text-lg font-medium">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide cutting-edge AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Generative AI Solutions',
                description: 'Custom generative AI models for content creation, design, and innovation',
                icon: <ServiceIcons.GenerativeAI />
              },
              {
                title: 'AI Agents',
                description: 'Autonomous AI agents that perform complex tasks and make intelligent decisions',
                icon: <ServiceIcons.AIAgents />
              },
              {
                title: 'Financial AI Systems',
                description: 'RAG-powered financial analysis, forecasting, and decision-making tools',
                icon: <ServiceIcons.FinancialAI />
              },
              {
                title: 'Advanced Chatbots',
                description: 'Enterprise-grade conversational AI with seamless integrations',
                icon: <ServiceIcons.ChatbotAI />
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="mb-4 text-amber-500 dark:text-amber-400">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section id="solutions" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore how our AI technologies can transform your business
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: 'Enterprise AI Integration',
                description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
                features: ['Custom API development', 'Legacy system integration', 'Workflow automation', 'Performance monitoring']
              },
              {
                title: 'Financial Intelligence Platform',
                description: 'AI-powered financial analysis and decision-making tools for businesses of all sizes.',
                features: ['Market trend analysis', 'Risk assessment', 'Investment opportunity detection', 'Regulatory compliance']
              },
              {
                title: 'Conversational AI Suite',
                description: 'Advanced chatbots and virtual assistants that provide exceptional customer experiences.',
                features: ['Natural language understanding', 'Multi-channel deployment', 'Sentiment analysis', 'Continuous learning']
              }
            ].map((solution, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-400 h-64 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                    {solution.title} Visualization
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-amber-500 mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About KZAI</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At KZAI, we are passionate about leveraging artificial intelligence to solve complex business challenges. Our team of experts combines deep technical knowledge with industry expertise to deliver AI solutions that drive real business value.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We believe in the transformative power of AI and are committed to making it accessible and useful for businesses of all sizes. Our approach is focused on creating practical, scalable solutions that address specific business needs while being adaptable to future changes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Ready to explore how our AI solutions can help your business? Contact us today.
            </p>

            <form className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800" placeholder="Tell us about your project..."></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-lg hover:opacity-90 transition-all text-lg font-medium">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">KZAI</span>
              <p className="mt-2 text-gray-400">AI Solutions for the Future</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
              <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
              <a href="#solutions" className="hover:text-amber-400 transition-colors">Solutions</a>
              <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} KZAI Corp. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Contact: <a href="mailto:kozanakyel@gmail.com" className="text-amber-400 hover:underline">kozanakyel@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}