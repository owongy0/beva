import Link from "next/link"

const doctors = [
  {
    name: "Dr. Sarah Chen",
    role: "Endovascular Neurosurgeon",
    credentials: "MD, PhD, FACS",
    bio: "15+ years experience in stroke treatment and brain aneurysm repair. Fellowship-trained at Johns Hopkins.",
  },
  {
    name: "Dr. Michael Rodriguez", 
    role: "Interventional Neuroradiologist",
    credentials: "MD, FSIR",
    bio: "Expert in spinal interventions and venous disorders. Trained at Mayo Clinic.",
  },
  {
    name: "Dr. Emily Thompson",
    role: "Neurosurgeon", 
    credentials: "MD, FAANS",
    bio: "Specializes in cerebrovascular and skull base surgery. Harvard Medical School graduate.",
  },
]

export default function TeamPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Board-certified specialists dedicated to exceptional patient care
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="text-center">
                {/* Avatar */}
                <div className="w-40 h-40 mx-auto mb-6 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-slate-400 text-sm">Photo</span>
                </div>
                
                {/* Info */}
                <h2 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h2>
                <p className="text-blue-600 font-medium mb-1">{doctor.role}</p>
                <p className="text-slate-500 text-sm mb-4">{doctor.credentials}</p>
                <p className="text-slate-600">{doctor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Schedule a Consultation</h2>
          <p className="text-slate-600 mb-8 text-lg">Our team is ready to help you with your neurological and vascular concerns</p>
          <Link 
            href="/book" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors block"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  )
}
