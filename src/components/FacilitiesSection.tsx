import { motion } from "framer-motion";
import { Monitor, Bus, BookOpen, FlaskConical , ArrowRight } from "lucide-react";
import { useState } from "react";

const FacilitiesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const facilities = [
    {
      icon: Monitor,
      title: "Computer Lab",
      shortDescription: "Modern facilities for digital learning.",
      description: "State-of-the-art computer facilities equipped with modern hardware and software for practical learning and digital skills development.",
      highlight: ["State-of-the-art"],
    },
    {
      icon: Bus,
      title: "Transportation",
      shortDescription: "Safe and reliable student transport.",
      description: "Safe and reliable transportation services ensuring students reach school comfortably and on time from various locations.",
      highlight: ["Safe and reliable"],
    },
    {
      icon: BookOpen,
      title: "Library",
      shortDescription: "Extensive collection of academic resources.",
      description: "A comprehensive collection of books, journals, and digital resources fostering a culture of reading and academic excellence.",
      highlight: ["comprehensive", "academic excellence"],
    },
    {
      icon: FlaskConical,
      title: "Laboratory",
      shortDescription: "Advanced science labs for experiments.",
      description: "Well-equipped science laboratories for hands-on experiments in physics, chemistry, and biology to enhance practical understanding.",
      highlight: ["Well-equipped", "hands-on"],
    },
  ];

  return (
    <section className="py-16 px-6 bg-linear-to-br from-slate-100/70 via-white to-blue-100/40">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Facilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            const isExpanded = expandedCard === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600 section-panel flex flex-col"
              >
                <div className="flex flex-col items-center text-center grow">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{facility.title}</h3>
                  
                  {/* Show short or full description based on expanded state */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {isExpanded ? facility.description : facility.shortDescription}
                  </p>
                </div>

                {/* Learn More Button - moved to right */}
                <div className="flex justify-end">
                  <motion.button
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors text-sm group"
                  >
                    <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                    <motion.div
                      animate={{ x: isExpanded ? 0 : 3, rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;