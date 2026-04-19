import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const GoverningBodySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMembersExpanded, setIsMembersExpanded] = useState(false);
  return (
    <section className="pb-16 px-6 bg-surface text-slate-900">
      <div className="max-w-6xl mx-auto section-panel rounded-4xl px-6 py-10 sm:px-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
          className="rounded-2xl border border-slate-200 bg-white shadow-[0_8px_32px_rgba(15,23,42,0.06)] overflow-hidden"
        >
          <div className="px-6 py-8 lg:px-10 lg:py-10">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal mb-2">
                Governing Body
              </p>
              <h2 className="text-4xl font-bold text-brand-teal">
                Leadership and governance for a thriving institution.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] items-start">
              <div className="overflow-hidden rounded-xl bg-slate-100 shadow-sm border border-slate-200/50">
                <img
                  src="/governing-body/Sayeed Mahbub Khan.jpg"
                  alt="Sayeed Mahbub Khan, Chairman"
                  className="h-72 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-6 text-base leading-relaxed text-slate-700">
                <p>
                  <span className="font-bold text-slate-900">Chairman:</span> <span className="font-semibold text-slate-800">Sayeed Mahbub Khan</span>, Rector (Secretary to the Government), Bangladesh Public Administration Training Centre, Savar, Dhaka.
                </p>
                <p>
                  BPATC School & College is administered by the rules and regulations of the Higher Secondary Education Board Bangladesh. It is continuously governed by the prominent Governing Body formed by Bangladesh Public Administration Training Centre (BPATC). The honorable Rector of BPATC, (Savar, Dhaka) performs the duty of the chairman of the Governing Body.
                </p>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pt-2">
                    <p>
                      The <span className="font-bold text-slate-900">chairman</span>, the <span className="font-bold text-slate-900">vice-chairman</span> and the <span className="font-bold text-slate-900">members</span> concerned of the Governing Body constitute the principles of conducting the institution and the college is also run according to those principles. The <span className="font-bold text-slate-900">principal</span> is the administrative Head of the college. According to the decisions of the Governing Body, the principal governs the academic as well as administrative activities.
                    </p>
                    <p>
                      The tenure of the Governing Body remains valid for <span className="font-semibold text-slate-900">3 years</span> from the first meeting of the GB.
                    </p>
                  </div>
                </motion.div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center space-x-2 text-brand-teal hover:text-brand-teal font-semibold transition-colors mt-4"
                >
                  <span>{isExpanded ? "See Less" : "Read More"}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-slate-200/70 bg-white/50 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Governing Body Members</h3>
                <button
                  onClick={() => setIsMembersExpanded(!isMembersExpanded)}
                  className="inline-flex items-center space-x-2 text-brand-teal hover:text-brand-teal font-semibold transition-colors"
                >
                  <span>{isMembersExpanded ? "Show Less" : "See All"}</span>
                  <motion.div
                    animate={{ rotate: isMembersExpanded ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
              </div>
              
              <motion.div
                initial={false}
                animate={{ height: isMembersExpanded ? "auto" : "auto", opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="font-bold text-slate-900 mb-1">Chairman</p>
                    <p className="text-slate-700 text-sm leading-relaxed">Sayeed Mahbub Khan, Rector (Secretary to the Government), Bangladesh Public Administration Training Centre, Savar, Dhaka.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="font-bold text-slate-900 mb-1">Member</p>
                    <p className="text-slate-700 text-sm leading-relaxed">Mohammad Razibul Islam, Director (Admin), Bangladesh Public Administration Training Centre, Savar, Dhaka.</p>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ height: isMembersExpanded ? "auto" : 0, opacity: isMembersExpanded ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                    className="overflow-hidden sm:col-span-2"
                  >
                    <div className="grid gap-5 sm:grid-cols-2 pt-2">
                      <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="font-bold text-slate-900 mb-1">Member</p>
                        <p className="text-slate-700 text-sm leading-relaxed">Nasrin Akter, Deputy Director, Bangladesh Public Administration Training Centre, Savar, Dhaka.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="font-bold text-slate-900 mb-1">Member</p>
                        <p className="text-slate-700 text-sm leading-relaxed">Dr. Shamima Akter, Medical Officer, Bangladesh Public Administration Training Centre, Savar, Dhaka.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="font-bold text-slate-900 mb-1">Member</p>
                        <p className="text-slate-700 text-sm leading-relaxed">Sultal Ahmmed Siddiqui, Senior Lecturer, ICT, BPATC School & College, Savar, Dhaka.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="font-bold text-slate-900 mb-1">Member</p>
                        <p className="text-slate-700 text-sm leading-relaxed">Mukita Khatun, Senior Teacher, BPATC School & College, Savar, Dhaka.</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 sm:col-span-2">
                        <p className="font-bold text-slate-900 mb-1">Member Secretary of The Governing Body</p>
                        <p className="text-slate-700 text-sm leading-relaxed">S M Mehedi Hasan, Director and Principal (In-Charge), BPATC School & College, Savar, Dhaka.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoverningBodySection;
