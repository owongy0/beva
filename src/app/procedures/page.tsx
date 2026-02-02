"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const procedures = [
  {
    id: "cerebral-aneurysm",
    title: "Endovascular Treatment of Cerebral Aneurysm",
    shortDesc: "Minimally invasive repair of brain aneurysms using coiling and flow diversion",
    fullDesc: "Cerebral aneurysms are weakened areas in brain artery walls that can rupture and cause life-threatening bleeding. Our endovascular approach uses catheters navigated through blood vessels to place platinum coils or flow-diverting stents inside the aneurysm, preventing rupture without open brain surgery. This technique offers shorter recovery times and reduced risk compared to traditional surgical clipping.",
    duration: "2-4 hours",
    recovery: "1-2 days in hospital",
  },
  {
    id: "carotid-stenting",
    title: "Carotid Artery Stenting",
    shortDesc: "Stent placement to open narrowed carotid arteries and prevent stroke",
    fullDesc: "Carotid artery disease is a major cause of stroke. When the carotid arteries become narrowed by plaque buildup, blood flow to the brain is restricted. Our stenting procedure opens these blocked arteries by placing a small mesh tube (stent) to keep the artery open. The procedure is performed through a small incision in the groin, with most patients returning home within 24 hours.",
    duration: "1-2 hours",
    recovery: "Same day or overnight",
  },
  {
    id: "subdural-hematoma",
    title: "Chronic Subdural Hematoma and Embolization Treatment",
    shortDesc: "Minimally invasive treatment for chronic brain bleeding",
    fullDesc: "Chronic subdural hematoma is a collection of blood on the brain's surface, often occurring after minor head trauma. Traditional treatment requires drilling holes in the skull. Our embolization approach blocks the abnormal blood vessels feeding the hematoma through a catheter, allowing the body to naturally reabsorb the blood collection without invasive surgery.",
    duration: "1-3 hours",
    recovery: "Observation, often same day",
  },
  {
    id: "trans-venous-embolization",
    title: "Trans-Venous Embolization",
    shortDesc: "Treatment for pelvic congestion, varicocele, and venous disorders",
    fullDesc: "Trans-venous embolization treats conditions caused by abnormal venous blood flow. We offer: (1) Pelvic Congestion and Ovarian Vein Embolization for chronic pelvic pain, (2) Varicocele and Testicular Vein Embolization for male infertility and scrotal pain. The procedure blocks abnormal veins through a small catheter, redirecting blood flow to healthy vessels.",
    duration: "1-2 hours",
    recovery: "Same day discharge",
  },
  {
    id: "trans-arterial-embolization",
    title: "Trans-Arterial Embolization",
    shortDesc: "Minimally invasive treatment for hemorrhoids, prostate, fibroids, and joint pain",
    fullDesc: "Trans-arterial embolization blocks blood flow to specific areas to treat various conditions. We offer treatments for: Hemorrhoids (reduces swelling and bleeding), Enlarged Prostate/BPH (shrinks prostate tissue), Uterine Fibroids (reduces heavy bleeding and pain), Knee Arthritis (reduces inflammation and pain), and Chronic Foot Pain (blocks pain signals). All procedures are performed through a small catheter, avoiding major surgery.",
    duration: "1-3 hours depending on condition",
    recovery: "Same day or overnight",
  },
  {
    id: "aortic-aneurysm",
    title: "Endovascular Repair for Abdominal Aortic Aneurysm",
    shortDesc: "Stent graft repair of aortic aneurysms without open surgery",
    fullDesc: "An abdominal aortic aneurysm (AAA) is a dangerous enlargement of the main artery in the abdomen that can rupture and cause life-threatening bleeding. Our endovascular aneurysm repair (EVAR) places a fabric-covered stent graft inside the aorta through small incisions in the groin. This reinforces the artery wall and prevents rupture, with significantly faster recovery than traditional open surgery.",
    duration: "2-4 hours",
    recovery: "1-2 days in hospital",
  },
]

export default function ProceduresPage() {
  const searchParams = useSearchParams()
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    const procedureId = searchParams.get("procedure")
    if (procedureId) {
      setExpandedId(procedureId)
    }
  }, [searchParams])

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <main className="min-h-screen">
      {/* Page header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Procedures
            </h1>
            <p className="text-lg text-slate-600">
              We specialize in minimally invasive endovascular treatments that avoid 
              open surgery. Our advanced catheter-based techniques treat complex 
              vascular and neurological conditions with faster recovery and reduced risk.
            </p>
          </div>
        </div>
      </section>

      {/* Procedure cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {procedures.map((procedure) => (
              <div
                key={procedure.id}
                className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Card header - always visible */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    {procedure.title}
                  </h2>
                  <p className="text-slate-600 mb-4">{procedure.shortDesc}</p>
                  
                  <button
                    onClick={() => toggleExpand(procedure.id)}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {expandedId === procedure.id ? "Show less ↑" : "Learn more →"}
                  </button>
                </div>

                {/* Expanded content */}
                {expandedId === procedure.id && (
                  <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                    <p className="text-slate-600 mb-4">{procedure.fullDesc}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-slate-900">Duration:</span>
                        <p className="text-slate-600">{procedure.duration}</p>
                      </div>
                      <div>
                        <span className="font-medium text-slate-900">Recovery:</span>
                        <p className="text-slate-600">{procedure.recovery}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Have questions about a procedure?
          </h2>
          <p className="text-slate-600 mb-6">
            Our team is here to help you understand your treatment options.
          </p>
          <Link
            href="/book"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
