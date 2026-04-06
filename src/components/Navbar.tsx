import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Plus, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isOnHero, setIsOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is typically h-screen, so around 100vh
      const heroHeight = window.innerHeight;
      setIsOnHero(window.scrollY < heroHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Academics",
      sublinks: [
        "Facilities",
        "Rules and Regulations",
        "College Dress",
        "College Identity Card",
        "Teaching Process",
        "Examination Process",
        "Class Routine",
        "Group Teacher List",
        "Academic Calendar",
      ],
    },
    {
      title: "Teachers and Staffs",
      sublinks: ["College Section", "School Section", "Office Staff"],
    },
    {
      title: "Portal",
      sublinks: [
        "Online Payments",
        "Online Result",
        "Online Admission",
        "Student Login",
        "Teacher Login",
        "Career Opportunities",
      ],
    },
    {
      title: "Contact",
      sublinks: [],
    },
  ];

  const toggleMobileExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className={`w-full fixed z-50 flex justify-between items-center min-h-18 backdrop-blur-3xl border my-2 rounded-4xl p-2 shadow-lg transition-all duration-300 ${
          isOnHero 
            ? "bg-gray-400/30 border-gray-400/30 shadow-gray-400/20" 
            : "bg-gray-300/40 border-gray-300/30 shadow-gray-300/10"
        }`}
      >
        <div className="ml-4">
          <Link to="/">
            <img src="/logo.png" alt="Logo" height={52} width={52} loading="lazy" decoding="async" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            item.sublinks.length > 0 ? (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center ${isOnHero ? 'text-white hover:text-gray-300' : 'text-slate-800 hover:text-blue-600'} transition-colors`}>
                  {item.title}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 w-64 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-4"
                    >
                      {item.sublinks.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={`/${sublink.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block py-2 text-gray-800 hover:text-blue-600 transition-colors"
                        >
                          {sublink}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={index}
                to={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`${isOnHero ? 'text-white hover:text-gray-300' : 'text-slate-800 hover:text-blue-600'} transition-colors`}
              >
                {item.title}
              </Link>
            )
          ))}
        </div>

        {/* Right side - Bell and Mobile Menu Button */}
        <div className="flex items-center space-x-4 mr-2">
          {/* Bell Icon with Notification Dot */}
          <motion.div
            className="relative cursor-pointer hidden md:flex"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bell className={`w-6 h-6 ${isOnHero ? 'text-white hover:text-gray-300' : 'text-slate-800 hover:text-blue-600'} transition-colors`} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </motion.div>

          {/* Mobile Menu - Bell and Hamburger */}
          <motion.div className="md:hidden flex items-center space-x-2">
            {/* Bell Icon for Mobile */}
            <motion.div
              className="relative cursor-pointer"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Bell className={`w-6 h-6 ${isOnHero ? 'text-white hover:text-gray-300' : 'text-slate-800 hover:text-blue-600'} transition-colors`} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </motion.div>

            {/* Hamburger Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`m-2 rounded-full p-3 cursor-pointer scale-100 transition-colors ${
                isOnHero 
                  ? "bg-white/10 hover:bg-white/20" 
                  : "bg-slate-800/10 hover:bg-slate-800/20"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className={`w-6 h-6 ${isOnHero ? 'text-white' : 'text-slate-800'}`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className={`w-6 h-6 ${isOnHero ? 'text-white' : 'text-slate-800'}`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-20 right-0 h-[calc(100vh-5rem)] w-11/12 max-w-sm bg-white/95 backdrop-blur-md rounded-l-3xl shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <nav className="space-y-4">
                  {menuItems.map((item, index) => (
                    item.sublinks.length > 0 ? (
                      <div key={index} className="border-b border-gray-200 pb-4">
                        <button
                          onClick={() => toggleMobileExpand(index)}
                          className="flex items-center justify-between w-full text-left text-gray-800 hover:text-blue-600 transition-colors py-2"
                        >
                          <span className="font-medium">{item.title}</span>
                          <motion.div
                            animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Plus className="w-5 h-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-2 mt-2">
                                {item.sublinks.map((sublink, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={`/${sublink.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="block py-1 text-gray-600 hover:text-blue-600 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {sublink}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={index}
                        to={`/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block py-2 text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-200 pb-4"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;