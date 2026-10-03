import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'fianzas',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message
    setIsSubmitted(true);
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hola Norvelm, mi nombre es ${formData.name || 'un cliente'}. Me interesa información sobre ${formData.service}. ${formData.message ? `Mensaje: ${formData.message}` : ''}`;
    const url = `https://wa.me/52931165496?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      {/* Hero / Header Section */}
      <section className="relative py-20 bg-[#0F2C3E] text-white overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#008C9E] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={fadeIn.transition}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#008C9E] text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>ATENCIÓN PERSONALIZADA</span>
            </motion.div>

            <motion.h1
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="text-4xl font-extrabold sm:text-5xl md:text-6xl tracking-tight leading-tight"
            >
              Hablemos de tu <span className="text-[#008C9E]">Tranquilidad</span>
            </motion.h1>

            <motion.p
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed"
            >
              En <strong className="text-white">NORVELM</strong> te ofrecemos asesoría profesional y soluciones a la medida en Fianzas y Seguros. Contáctanos hoy mismo y uno de nuestros especialistas atenderá tus necesidades.
            </motion.p>
          </div>
        </div>

        {/* Bottom curve divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="w-full h-12 text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Main Content: Info Cards & Interactive Form */}
      <section className="py-16 -mt-4 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Cards & Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2C3E] mb-3">
                  Información de Contacto
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Comunícate directamente por el canal de tu preferencia. Te responderemos con la mayor agilidad.
                </p>
              </div>

              {/* Card 1: Correo Electrónico */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Corporativo</span>
                    <h3 className="text-lg font-bold text-[#0F2C3E] mt-0.5 truncate">
                      mventura@norvelm.com
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Escríbenos para solicitudes, cotizaciones y dudas.</p>
                    <div className="mt-3 flex items-center gap-3">
                      <a
                        href="mailto:mventura@norvelm.com"
                        className="inline-flex items-center text-sm font-semibold text-[#008C9E] hover:text-[#007A8A]"
                      >
                        Enviar correo <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <button
                        onClick={() => handleCopy('mventura@norvelm.com', 'email')}
                        type="button"
                        className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                      >
                        {copied === 'email' ? '¡Copiado!' : 'Copiar'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Teléfono / WhatsApp */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Teléfono / WhatsApp</span>
                    <h3 className="text-lg font-bold text-[#0F2C3E] mt-0.5">
                      931 165 496
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Línea directa de atención y mensajería instantánea.</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <a
                        href="https://wa.me/52931165496"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                      >
                        Abrir WhatsApp <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                      <a
                        href="tel:931165496"
                        className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                      >
                        Llamar
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Redes / Instagram */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Síguenos en Redes</span>
                    <h3 className="text-lg font-bold text-[#0F2C3E] mt-0.5">
                      @norvelm_
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">Conoce consejos, actualizaciones y novedades.</p>
                    <div className="mt-3">
                      <a
                        href="https://instagram.com/norvelm_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700"
                      >
                        Ver perfil de Instagram <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Horario & Asesor */}
              <div className="p-6 bg-gradient-to-br from-[#0F2C3E] to-[#174663] text-white rounded-2xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#008C9E]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Horarios de Atención</h4>
                    <p className="text-xs text-slate-300">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#008C9E]" /> Misael Ventura
                  </span>
                  <span className="bg-[#008C9E]/20 text-[#008C9E] font-semibold px-2 py-0.5 rounded">
                    Asesoría Especializada
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#008C9E] text-xs font-bold uppercase tracking-wider mb-2">
                    <MessageSquare className="w-3.5 h-3.5" /> Mensaje Directo
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2C3E]">
                    Envíanos tu Solicitud
                  </h3>
                  <p className="text-slate-500 mt-1">
                    Completa el formulario y nos comunicaremos contigo a la brevedad.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-100"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-emerald-900 mb-2">
                      ¡Mensaje Enviado con Éxito!
                    </h4>
                    <p className="text-emerald-700 max-w-md mx-auto mb-6">
                      Gracias por contactarnos. Hemos recibido tu mensaje y el equipo de Misael Ventura te responderá en breve.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', service: 'fianzas', message: '' });
                      }}
                      className="px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors shadow"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ej. Juan Pérez"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008C9E] focus:ring-2 focus:ring-[#008C9E]/20 transition-all outline-none text-slate-800 bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                          Teléfono / Celular *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ej. 931 165 496"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008C9E] focus:ring-2 focus:ring-[#008C9E]/20 transition-all outline-none text-slate-800 bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008C9E] focus:ring-2 focus:ring-[#008C9E]/20 transition-all outline-none text-slate-800 bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                          Servicio de Interés
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008C9E] focus:ring-2 focus:ring-[#008C9E]/20 transition-all outline-none text-slate-800 bg-slate-50/50"
                        >
                          <option value="Fianzas de Cumplimiento">Fianzas de Cumplimiento</option>
                          <option value="Fianzas de Anticipo">Fianzas de Anticipo</option>
                          <option value="Fianzas de Vicios Ocultos">Fianzas de Vicios Ocultos</option>
                          <option value="Fianzas Judiciales">Fianzas Judiciales</option>
                          <option value="Seguro de Responsabilidad Civil">Seguro de Responsabilidad Civil</option>
                          <option value="Seguro Empresarial / Daños">Seguro Empresarial / Daños</option>
                          <option value="Otra Asesoría">Otra Asesoría</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                        ¿En qué podemos ayudarte? *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Escribe los detalles de tu proyecto o cotización requerida..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008C9E] focus:ring-2 focus:ring-[#008C9E]/20 transition-all outline-none text-slate-800 bg-slate-50/50 resize-y"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        type="submit"
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#0F2C3E] hover:bg-[#163f58] active:scale-[0.99] transition-all shadow-md hover:shadow-lg"
                      >
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#008C9E] hover:bg-[#007A8A] active:scale-[0.99] transition-all shadow-md hover:shadow-lg"
                      >
                        <Phone className="w-5 h-5" />
                        Cotizar por WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Commitment Banner */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#008C9E] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#0F2C3E]">Respuesta Inmediata</h4>
                <p className="text-sm text-slate-500 mt-0.5">Atención oportuna para la emisión de tus pólizas y fianzas.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#008C9E] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#0F2C3E]">Asesoría Certificada</h4>
                <p className="text-sm text-slate-500 mt-0.5">Respaldados por las principales instituciones del país.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#008C9E] flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#0F2C3E]">Cobertura Integral</h4>
                <p className="text-sm text-slate-500 mt-0.5">Soluciones para personas físicas, pymes y grandes empresas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
