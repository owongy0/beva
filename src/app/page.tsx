import Link from "next/link"

// Trigger redeploy
export default function HomePage() {
  return (
    <>
      <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Advanced Brain &<br />
                <span className="text-blue-600">Endovascular Care</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg">
                Expert treatment for stroke, brain aneurysms, and complex neurological conditions using minimally invasive techniques.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/book"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Consultation
                </Link>
                <Link 
                  href="/procedures"
                  className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  Our Procedures
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-slate-900">15+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">2,000+</div>
                  <div className="text-sm text-slate-500">Procedures</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">4.9</div>
                  <div className="text-sm text-slate-500">Patient Rating</div>
                </div>
              </div>
            </div>
            
            {/* Right: Image Placeholder */}
            <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-2xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Hero Image Placeholder</span>
            </div>
            
          </div>
        </div>
      </section>
      {/* Procedures Section */}
      <section id="procedures" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Procedures</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Minimally invasive treatments for complex neurological and vascular conditions
            </p>
          </div>
          
          {/* Procedure cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/procedures?procedure=cerebral-aneurysm" className="block bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-2xl">🧠</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Cerebral Aneurysm Treatment</h3>
              <p className="text-slate-600 text-sm">Minimally invasive repair using coiling and flow diversion.</p>
            </Link>
            <Link href="/procedures?procedure=carotid-stenting" className="block bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-2xl">🫀</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Carotid Artery Stenting</h3>
              <p className="text-slate-600 text-sm">Stroke prevention through minimally invasive stenting.</p>
            </Link>
            <Link href="/procedures?procedure=subdural-hematoma" className="block bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-2xl">🩸</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Subdural Hematoma</h3>
              <p className="text-slate-600 text-sm">Embolization treatment for chronic brain bleeding.</p>
            </Link>
            <Link href="/procedures?procedure=trans-venous-embolization" className="block bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-2xl">💉</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trans-Venous Embolization</h3>
              <p className="text-slate-600 text-sm">Treatment for pelvic congestion and varicocele.</p>
            </Link>
            <Link href="/procedures?procedure=trans-arterial-embolization" className="block bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-2xl">🔧</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trans-Arterial Embolization</h3>
              <p className="text-slate-600 text-sm">Treatment for hemorrhoids, fibroids, and joint pain.</p>
            </Link>
            <Link href="/procedures?procedure=aortic-aneurysm" className="block bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-2xl">🏥</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Aortic Aneurysm Repair</h3>
              <p className="text-slate-600 text-sm">Endovascular repair for abdominal aortic aneurysm.</p>
            </Link>
          </div>
          

          
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Specialists</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Board-certified neurosurgeons and endovascular specialists
            </p>
          </div>
          
          {/* Team cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Doctor 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-200 border-2 border-dashed border-gray-400 h-64 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Doctor Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">Dr. Sarah Chen</h3>
                <p className="text-blue-600 font-medium mb-3">Endovascular Neurosurgeon</p>
                <p className="text-slate-600 mb-4">Specializing in stroke treatment and brain aneurysm repair with 15+ years of experience.</p>
                <Link href="/team" className="text-blue-600 font-medium hover:underline">View all specialists →</Link>
              </div>
            </div>
            
            {/* Doctor 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-200 border-2 border-dashed border-gray-400 h-64 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Doctor Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">Dr. Michael Rodriguez</h3>
                <p className="text-blue-600 font-medium mb-3">Interventional Neuroradiologist</p>
                <p className="text-slate-600 mb-4">Expert in minimally invasive procedures for cerebrovascular diseases and spinal interventions.</p>
                <Link href="/team" className="text-blue-600 font-medium hover:underline">View all specialists →</Link>
              </div>
            </div>
            
            {/* Doctor 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-200 border-2 border-dashed border-gray-400 h-64 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Doctor Photo</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">Dr. Emily Thompson</h3>
                <p className="text-blue-600 font-medium mb-3">Neurosurgeon</p>
                <p className="text-slate-600 mb-4">Fellowship-trained in cerebrovascular surgery with expertise in complex brain and spine conditions.</p>
                <Link href="/team" className="text-blue-600 font-medium hover:underline">View all specialists →</Link>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Schedule a consultation or reach out with questions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Get in Touch</h3>
                <p className="text-slate-600">
                  Our team is ready to assist you with appointment scheduling and answer any questions about our services.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Phone</p>
                    <p className="text-slate-600">(555) 123-4567</p>
                    <p className="text-sm text-slate-500">Mon-Fri, 8am-5pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Email</p>
                    <p className="text-slate-600">info@brainendovascular.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Address</p>
                    <p className="text-slate-600">123 Medical Center Drive<br />Suite 200<br />City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-2xl h-96 flex items-center justify-center">
              <span className="text-gray-500 font-medium">Google Map Embed Placeholder</span>
            </div>
            
          </div>
          
        </div>
      </section>
    </main>
    
    {/* Footer */}
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        
        {/* Top row: Logo and tagline */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-2">
            Brain & Endovascular Associates
          </h3>
          <p className="text-slate-400">
            Advanced neurological and endovascular care
          </p>
        </div>
        
        {/* Middle row: Quick links and contact */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/procedures" className="hover:text-white transition-colors">Procedures</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition-colors">Book Appointment</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>(555) 123-4567</li>
              <li>info@brainendovascular.com</li>
              <li>123 Medical Center Drive, Suite 200</li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Mon - Fri: 8:00 AM - 5:00 PM</li>
              <li>Saturday: 9:00 AM - 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom row: Legal */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Brain & Endovascular Associates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  </>
  )
}