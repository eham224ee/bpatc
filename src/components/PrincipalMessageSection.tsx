import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const PrincipalMessageSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    "BPATC School & College has earned recognition as one of the most distinguished academic institutions in Bangladesh, renowned for its teaching excellence and strong safety measures. The popular educational institute is located in a serene and convenient location of Savar.",
    "Established as a school in 1984, it received accreditation from the Dhaka Education Board in 1987. Building on its remarkable achievements and consistent progress, the college section was inaugurated in 2000.",
    "The institution operates under the rules and regulations of the Ministry of Education and the Secondary & Higher Secondary Education Board, Dhaka, and is guided by a Governing Body comprising highly qualified members, including faculty members from the Bangladesh Public Administration Training Centre, predominantly from the Bangladesh Civil Service.",
    "BPATC School & College is celebrated not only for its academic excellence but also for its vibrant co-curricular activities. It is enriched with dedicated, experienced, and highly qualified teachers across Science, Humanities, and Business Studies, who meticulously design both academic and co-curricular programs for students.",
    "The holistic development of the institution is driven by the collective efforts of teachers, students, and guardians. We remain committed to striving for excellence in the days ahead and humbly seek the blessings of the Almighty for continued success.",
  ];

  return (
    <section className="py-16 px-6 bg-linear-to-br from-slate-50 via-white to-blue-100/30 text-slate-900">
      <div className="max-w-6xl mx-auto section-panel rounded-4xl px-6 py-8 sm:px-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
          className="rounded-4xl border border-slate-200 bg-slate-50 shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden"
        >
          <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] items-start px-6 py-8 lg:px-10 lg:py-10">
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 shadow-inner shadow-slate-200/70">
              <img
                src="/principle/principle.jpg"
                alt="Principal Dr. Md. Roushon Jamal"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="space-y-6">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 mb-2">
                  Message from the Principal
                </p>
                <h2 className="text-4xl font-bold text-slate-900">
                  Leading BPATC School & College toward continued excellence.
                </h2>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                {paragraphs.slice(0, 2).map((para, idx) => (
                  <p key={idx}>
                    {idx === 1 && (
                      <>
                        Established as a school in <span className="font-semibold text-slate-900">1984</span>, it received accreditation from the Dhaka Education Board in <span className="font-semibold text-slate-900">1987</span>. Building on its remarkable achievements and consistent progress, the college section was inaugurated in <span className="font-semibold text-slate-900">2000</span>.
                      </>
                    )}
                    {idx === 0 && para}
                  </p>
                ))}

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-2">
                    {paragraphs.slice(2).map((para, idx) => (
                      <p key={idx + 2}>
                        {idx === 0 && (
                          <>
                            The institution operates under the rules and regulations of the Ministry of Education and the Secondary & Higher Secondary Education Board, Dhaka, and is guided by a <span className="font-semibold text-slate-900">Governing Body</span> comprising highly qualified members, including faculty members from the Bangladesh Public Administration Training Centre, predominantly from the Bangladesh Civil Service.
                          </>
                        )}
                        {idx === 1 && para}
                        {idx === 2 && para}
                      </p>
                    ))}
                  </div>
                </motion.div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors mt-4"
                >
                  <span>{isExpanded ? "See Less" : "Read More"}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">Dr. Md. Roushon Jamal</p>
                    <p className="text-sm text-slate-500">Principal (Additional Charge), BPATC School & College</p>
                    <p className="text-sm text-slate-500">Director (Research & Development), Bangladesh Public Administration Training Centre, Savar, Dhaka</p>
                  </div>
                  <div className="h-14 w-40 overflow-hidden">
                    <img src="/principle/signature.jpg" alt="Principal signature" className="h-full w-full object-contain" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrincipalMessageSection;
