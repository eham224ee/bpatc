import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-12 px-6 bg-linear-to-br from-slate-100/70 via-white to-blue-100/40 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="relative section-surface overflow-hidden p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -right-20 top-6 h-52 w-52 rounded-full bg-sky-600/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-6">
              <div>
                <p className="section-heading-small">Contact Us</p>
                <h2 className="section-heading-title">
                  Send us a message and we'll respond as soon as possible.
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Use the form to share your enquiry, feedback, or admission questions. We will make sure a team member from <span className="font-semibold text-slate-900">BPATC School & College</span> responds promptly.
              </p>
            </div>

            <div className="panel-muted p-6 lg:p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    className="input-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Your email"
                    className="input-base"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Write your message"
                    className="input-base resize-none"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
