import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textColor = scrolled ? 'text-slate-700' : 'text-white';
    const logoColor = scrolled ? 'text-[#0F2C3E]' : 'text-white';
    const hoverColor = scrolled ? 'hover:text-[#008C9E]' : 'hover:text-[#008C9E]';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src="/logos/SVG/Recurso 3logo_norvelm_s.svg"
                            alt="Norvelm Logo"
                            className="h-10 w-auto"
                        />
                        <span className={`ml-2 text-2xl font-bold ${logoColor} tracking-tight`}>Norvelm</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#inicio" className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Inicio</a>
                            <a href="#about" className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Nosotros</a>
                            <a href="#servicios" className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Fianzas</a>
                            <a href="#seguros" className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Seguros</a>
                            <a href="https://wa.me/529931165496" target='_blank' rel='noopener noreferrer' className="bg-[#008C9E] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#007A8A] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Llamar
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} hover:text-[#008C9E] focus:outline-none`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#008C9E] hover:bg-gray-50">Inicio</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#008C9E] hover:bg-gray-50">Nosotros</a>
                        <a href="#servicios" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#008C9E] hover:bg-gray-50">Fianzas</a>
                        <a href="#seguros" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#008C9E] hover:bg-gray-50">Seguros</a>
                        <a href="https://wa.me/529931165496" target='_blank' rel='noopener noreferrer' onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[#008C9E] font-bold bg-cyan-50">Llamar</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
