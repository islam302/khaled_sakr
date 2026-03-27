import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE'; // Replace with your Web3Forms access key

const socials = [
  { icon: <FaGithub className="text-2xl" />, label: 'GitHub', href: 'https://github.com/khaled-sakr' },
  { icon: <FaLinkedin className="text-2xl" />, label: 'LinkedIn', href: 'https://linkedin.com/in/khaledskr' },
  { icon: <FaEnvelope className="text-2xl" />, label: 'Email', href: 'mailto:khaledsakr12345@gmail.com' },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_KEY);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-10"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-center mb-10"
        >
          Want to get in touch?
          <br />
          Drop me a line
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 transition-shadow"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 transition-shadow"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 transition-shadow resize-y"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : status === 'error' ? 'Failed, try again' : 'Submit'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
