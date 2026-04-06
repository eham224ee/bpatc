import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const GoverningBodySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="pb-16 px-6 bg-linear-to-br from-slate-50 via-white to-blue-100/30 text-slate-900">
      <div className="max-w-6xl mx-auto section-panel rounded-4xl px-6 py-10 sm:px-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-4xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden"
        >
          <div className="px-6 py-8 lg:px-10 lg:py-10">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 mb-2">
                Governing Body
              </p>
              <h2 className="text-4xl font-bold text-slate-900">
                Leadership and governance for a thriving institution.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] items-start">
              <div className="overflow-hidden rounded-3xl bg-slate-100 shadow-inner shadow-slate-200/70">
                <img
                  src="/governing-body/chairman.jpg"
                  alt="Sayeed Mahbub Khan, Chairman"
                  className="h-72 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-6 text-base leading-relaxed text-slate-700">
                <p>
                  Chairman: <span className="font-semibold text-slate-900">Sayeed Mahbub Khan</span>, Rector (Secretary to the Government), Bangladesh Public Administration Training Centre, Savar, Dhaka.
                </p>
                <p>
                  BPATC School & College is administered by the rules and regulations of the Higher Secondary Education Board Bangladesh. It is continuously governed by the prominent Governing Body formed by Bangladesh Public Administration Training Centre (BPATC). The honorable Rector of BPATC, (Savar, Dhaka) performs the duty of the chairman of the Governing Body.
                </p>

                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pt-2">
                    <p>
                      The chairman, the vice-chairman and the members concerned of the Governing Body constitute the principles of conducting the institution and the college is also run according to those principles. The principal is the administrative Head of the college. According to the decisions of the Governing Body, the principal governs the academic as well as administrative activities.
                    </p>
                    <p>
                      The tenure of the Governing Body remains valid for <span className="font-semibold text-slate-900">3 years</span> from the first meeting of the GB.
                    </p>
                  </div>
                </motion.div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors mt-4"
                >
                  <span>{isExpanded ? "See Less" : "Read More"}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-slate-900">Chairman</p>
                  <p className="text-slate-700">Sayeed Mahbub Khan, Rector (Secretary to the Government), Bangladesh Public Administration Training Centre, Savar, Dhaka.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Member</p>
                  <p className="text-slate-700">Mohammad Razibul Islam, Director (Admin), Bangladesh Public Administration Training Centre, Savar, Dhaka.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Member</p>
                  <p className="text-slate-700">Nasrin Akter, Deputy Director, Bangladesh Public Administration Training Centre, Savar, Dhaka.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Member</p>
                  <p className="text-slate-700">Dr. Shamima Akter, Medical Officer, Bangladesh Public Administration Training Centre, Savar, Dhaka.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Member</p>
                  <p className="text-slate-700">Sultal Ahmmed Siddiqui, Senior Lecturer, ICT, BPATC School & College, Savar, Dhaka.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Member</p>
                  <p className="text-slate-700">Mukita Khatun, Senior Teacher, BPATC School & College, Savar, Dhaka.</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-semibold text-slate-900">Member Secretary of The Governing Body</p>
                  <p className="text-slate-700">S M Mehedi Hasan, Director and Principal (In-Charge), BPATC School & College, Savar, Dhaka.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoverningBodySection;
