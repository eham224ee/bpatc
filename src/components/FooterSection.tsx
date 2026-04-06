const FooterSection = () => {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <p className="text-xl font-semibold text-white">BPATC School & College</p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6124318173124!2d90.26621671231186!3d23.867892478501137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e984fba99569%3A0xa6e619d950d1c0e7!2sBPATC%20School%20and%20College!5e0!3m2!1sen!2sbd!4v1775509993797!5m2!1sen!2sbd" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">Quick Links</p>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Academic Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Admission Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Governing Body</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">Contact</p>
            <div className="text-slate-300 space-y-2">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                BPATC School & College, Savar, Dhaka
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                bpatcsc@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (+88) 02-7747146
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BPATC School & College. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
