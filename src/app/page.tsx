import { EmailForm } from './components/email-form';
import {  CheckCircle, Smartphone,  Users, Sparkles, Image as LucideImage, Link as LucideLink} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CatalogCoveLanding() {
 
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Powered Product Details",
      description: "Struggling with product titles and descriptions? Our AI suggests compelling copy that sells, so you don't have to guess."
    },
    {
      icon: <LucideImage className="h-6 w-6" />,
      title: "Auto Background Removal",
      description: "Upload any product photo and we'll automatically remove the background for a clean, professional look."
    },
    {
      icon: <LucideLink className="h-6 w-6" />,
      title: "Instant WhatsApp Links",
      description: "Each product gets its own WhatsApp link. Customers can order with just one tap."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-First Design",
      description: "Your catalog looks perfect on every device, especially mobile where your customers are shopping."
    }
  ];

  const benefits = [
    "AI-suggested product titles & descriptions",
    "Automatic background removal",
    "No monthly hosting fees",
    "No technical maintenance",
    "Mobile-optimized catalogs",
    "Direct WhatsApp integration"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-purple-700 font-bold text-xl">
                <Image src="/images/logo.svg" alt="CatalogCove Logo" width={200} height={200} />
                </Link>
              </div>
            </div>
            <div className="">
              <Link href="#join-waitlist" className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" id='join-waitlist'>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
               Upload products.
              <br />
              <span className="text-purple-700">Get your store link.</span>
              <br />
              Receive WhatsApp orders.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We built CatalogCove for small business owners who want beautiful online catalogs 
              but don&apos;t want to deal with hosting, maintenance, or writing product descriptions from scratch.
            </p>
            
            {/* Email Signup Form - Replace this div with your widget embed code */}
            <EmailForm />

            <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                No technical skills needed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Ready in minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        We built this for our friends
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        The real story behind CatalogCove
      </p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center ">
    <div className="bg-purple-50 p-8 rounded-2xl">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-700 text-white rounded-full mb-6">
            <Users className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Built by small business lovers
          </h3>
          <p className="text-gray-600 mb-6">
            We&apos;ve watched our friends struggle with overcomplicated solutions. 
            CatalogCove is our answer - simple tools for real businesses.
          </p>
          <div className="space-y-3 flex flex-col justify-center items-start text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-purple-700" />
              No technical background needed
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-purple-700" />
              AI helps with the hard parts
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-purple-700" />
              Focus on selling, not tech
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-700">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Problem</h3>
          <p className="text-gray-600">
            Our friends run amazing small businesses - handmade jewelry, home bakeries, boutique crafts. 
            They kept asking us to build them websites, but managing hosting, updates, and technical 
            issues became a nightmare for everyone.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-700">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Realization</h3>
          <p className="text-gray-600">
            They don&apos;t need complex e-commerce sites. They need simple, beautiful catalogs that 
            connect directly to WhatsApp where their customers already are. Most orders happen 
            through personal conversations anyway.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-700">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h3>
          <p className="text-gray-600">
            So we built CatalogCove. No hosting headaches. No maintenance nightmares. 
            No technical skills required. Just beautiful catalogs that work, with AI helping 
            you write descriptions and clean up your photos.
          </p>
        </div>
      </div>
      
     
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-lg text-gray-600">
              We focused on the features that actually matter for small businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <div className="text-purple-700">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From products to orders in minutes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Upload Your Products
              </h3>
              <p className="text-gray-600">
                Add product photos, descriptions, and prices. Our mobile-first interface makes it quick and easy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get Your Catalog Link
              </h3>
              <p className="text-gray-600">
                Instantly get a beautiful catalog page with your unique link. Share it anywhere.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Start Getting Orders
              </h3>
              <p className="text-gray-600">
                Customers browse your catalog and tap to order directly via WhatsApp. Simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why small businesses choose CatalogCove
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <CheckCircle className="h-5 w-5 text-purple-200" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to create your catalog?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of small business owners who are already on our waitlist.
          </p>
          
          {/* Email Signup Form - Replace this div with your widget embed code */}
          <EmailForm /> 
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   <div className="text-center">
     <h3 className="text-2xl font-bold mb-4">CatalogCove</h3>
     <p className="text-gray-400 mb-6">
       Beautiful catalogs for small businesses. No hosting headaches.
     </p>
     <div className="flex justify-center">
       <a 
         href="https://x.com/sherifdeenolat2" 
         target="_blank" 
         rel="noopener noreferrer"
         className="text-gray-400 hover:text-purple-400 transition-colors"
         aria-label="Follow us on Twitter"
       >
         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
           <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
         </svg>
       </a>
     </div>
   </div>
 </div>
</footer>
    </div>
  );
}