import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <div id="inicio" className="relative h-screen min-h-[600px] flex items-center bg-[#0F2C3E] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="./images/image.png"
                    alt="Norvelm Corporate Architecture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0F2C3E] opacity-85 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C3E] via-transparent to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
                    >
                        Tu Aliado Estratégico en la <span className="text-[#008C9E]">Gestión de Riesgos</span> y Protección Financiera.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-lg sm:text-xl text-[#D1D1D1] mb-10 leading-relaxed max-w-2xl"
                    >
                        Expertos en soluciones de Fianzas y Seguros de Responsabilidad Civil. Blindamos tu patrimonio y aseguramos el cumplimiento de tus obligaciones contractuales con servicios de alta calidad.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="https://wa.me/529931165496"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#008C9E] rounded-full hover:bg-[#007A8A] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                        >
                            <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                            Hablar con un Agente
                        </a>

                        <a
                            href="#servicios"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white rounded-full hover:bg-white hover:text-[#0F2C3E] transition-all duration-300"
                        >
                            Conocer Coberturas
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Wave Decoration at Bottom */}
            <div className="absolute bottom-0 left-0 w-full z-10 leading-none">
                <svg className="w-full h-24 sm:h-32 text-white" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path fill="currentColor" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Subtle overlay arc pattern (CSS radial or just another SVG) 
                User asked for "Ondas" or "Arcos" as watermark. 
                I'll add a subtle big circle outline opacity.
            */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] border-[1px] border-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border-[1px] border-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        </div>
    );
};

export default Hero;
