const FooterSection = () => {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <p className="text-xl font-semibold text-white">BPATC School & College</p>
            <p className="text-slate-300 leading-relaxed">
              A distinguished institution in Savar, delivering strong academic standards and trusted governance while nurturing students through a balanced blend of education and extra-curricular growth.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">Quick Links</p>
            <ul className="space-y-2 text-slate-300">
              <li>Academic Programs</li>
              <li>Facilities</li>
              <li>Admission Info</li>
              <li>Governing Body</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">Contact</p>
            <div className="text-slate-300 space-y-2">
              <p>BPATC School & College, Savar, Dhaka</p>
              <p>Email: bpatcsc@gmail.com</p>
              <p>Phone: (+88) 02-7747146</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BPATC School & College. All rights reserved.</p>
          <p>Designed for strong structure and easy navigation.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
