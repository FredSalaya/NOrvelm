


import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-slate-800">
                    <div className="flex flex-col items-start">
                        <Link to="/" className="flex items-center mb-2">
                            <img
                                src="/logos/SVG/Recurso 4logo_norvelm_isologo.svg"
                                alt="Norvelm Logo"
                                className="h-10 w-auto brightness-0 invert"
                            />
                            <span className="ml-2 text-xl font-bold tracking-tight text-white">NORVELM</span>
                        </Link>
                        <p className="text-xs text-slate-400 max-w-xs">
                            Gestión de riesgos, fianzas y seguros con atención personalizada.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-start md:justify-center gap-6 text-sm text-gray-300">
                        <Link to="/" className="hover:text-[#008C9E] transition-colors">Inicio</Link>
                        <Link to="/nosotros" className="hover:text-[#008C9E] transition-colors">Nosotros</Link>
                        <Link to="/contacto" className="hover:text-[#008C9E] transition-colors">Contacto</Link>
                    </div>

                    <div className="flex flex-col md:items-end space-y-2 text-xs text-gray-400">
                        <a href="mailto:mventura@norvelm.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail className="w-3.5 h-3.5 text-[#008C9E]" /> mventura@norvelm.com
                        </a>
                        <a href="https://wa.me/52931165496" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone className="w-3.5 h-3.5 text-[#008C9E]" /> 931 165 496
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <div>
                        &copy; {new Date().getFullYear()} Norvelm. Todos los derechos reservados.
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-gray-400 transition-colors">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
