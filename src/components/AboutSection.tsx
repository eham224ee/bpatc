import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="relative py-16 px-6 bg-linear-to-br from-slate-50 via-white to-blue-100/30 text-gray-800">
      <div className="max-w-4xl mx-auto section-panel rounded-4xl px-6 py-10 sm:px-8 sm:py-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-lg leading-relaxed space-y-4"
        >
          <p>
            <span className="font-bold">BPATC School & College</span>, established in <span className="font-bold">1988</span> under the Bangladesh Public Administration Training Centre, stands as a premier institution recognized by the Ministry of Education and BISE.
          </p>
          <p>
            Awarded the distinction of "Best Institution" in <span className="font-bold">1998</span>, the campus transitioned into a comprehensive college in <span className="font-bold">2002</span> and hosts an official HSC Examination Centre since <span className="font-bold">2004</span>
            
          </p>
          
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-2">
              <p>
                Today, our faculty mentors over 800 students across Science, Humanities, and Business Studies within a disciplined, serene environment.
              </p>
              <p>
                Guided by the principles of Education, Discipline, Peace, and Prosperity, we combine academic rigor with national-level success in debate and culture to cultivate the next generation of expert human resources and global citizens.
              </p>
            </div>
          </motion.div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700 font-semibold transition-colors mt-4"
          >
            <span>{isExpanded ? "Read Less" : "Read More"}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          className="mt-12 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong>National Progress:</strong> Dedicated to the betterment of the Nation and the advancement of humanity through the creation of exemplary citizens.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong>Qualitative Education:</strong> Delivering academic rigor through expert instruction.</li>
              <li><strong>Character Building:</strong> Forging integrity and discipline in every student.</li>
              <li><strong>Human Skill Development:</strong> Cultivating the essential talents for a global future.</li>
            </ul>
          </div>
        </motion.div>
      </div>
      {/* Navy gradient at bottom right */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-linear-to-tl from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutSection;