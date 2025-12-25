import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ChatBubbleN8N from './chat/ChatBubbleN8N';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const N8N_CHAT_URL = "https://publicn8n.ftf-ai-factory.online/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 100);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    const textColor = scrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-white';
    const logoColor = scrolled || location.pathname !== '/' ? 'text-[#0F2C3E]' : 'text-white';
    const hoverColor = scrolled || location.pathname !== '/' ? 'hover:text-[#008C9E]' : 'hover:text-[#008C9E]';
    const navBackground = scrolled || location.pathname !== '/' ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img
                                src="/logos/SVG/Recurso 3logo_norvelm_s.svg"
                                alt="Norvelm Logo"
                                className="h-10 w-auto"
                            />
                            <span className={`ml-2 text-2xl font-bold ${logoColor} tracking-tight`}>NORVELM</span>
                        </Link>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <Link to="/" onClick={(e) => handleNavigation(e, 'inicio')} className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Inicio</Link>
                                <Link to="/nosotros" className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>Nosotros</Link>
                                <a href="#servicios" onClick={(e) => handleNavigation(e, 'servicios')} className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer`}>Fianzas</a>
                                <a href="#seguros" onClick={(e) => handleNavigation(e, 'servicios')} className={`${textColor} ${hoverColor} px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer`}>Seguros</a>
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
                            <Link to="/" onClick={(e) => handleNavigation(e, 'inicio')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#008C9E] hover:bg-gray-50">Inicio</Link>
                            <Link to="/nosotros" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#008C9E] hover:bg-gray-50">Nosotros</Link>
                            <a href="#servicios" onClick={(e) => handleNavigation(e, 'servicios')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#008C9E] hover:bg-gray-50 cursor-pointer">Fianzas</a>
                            <a href="#seguros" onClick={(e) => handleNavigation(e, 'servicios')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#008C9E] hover:bg-gray-50 cursor-pointer">Seguros</a>
                            <a href="https://wa.me/529931165496" target='_blank' rel='noopener noreferrer' onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-[#008C9E] font-bold bg-cyan-50">Llamar</a>
                        </div>
                    </div>
                )}
            </nav>
            <ChatBubbleN8N
                url={N8N_CHAT_URL}
                agent="brand"
                title="Soporte Norvelm"
                subtitle="En línea ahora"
            />
        </>
    );
};

export default Navbar;
