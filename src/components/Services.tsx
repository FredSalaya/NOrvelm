import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Gavel, FileText, Umbrella, ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const ServiceCard = ({ category, index }: { category: any, index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const INITIAL_VISIBLE_ITEMS = 4;
    const hasMoreItems = category.items.length > INITIAL_VISIBLE_ITEMS;
    const visibleItems = isExpanded ? category.items : category.items.slice(0, INITIAL_VISIBLE_ITEMS);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col h-full p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

            <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-sm text-gray-500 mb-6 min-h-[40px] leading-relaxed">{category.description}</p>
            </div>

            <div className="flex-grow">
                <ul className="space-y-3">
                    <AnimatePresence initial={false} mode="wait">
                        {visibleItems.map((item: any, idx: number) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex items-start"
                            >
                                <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                                <div>
                                    <span className="text-sm font-medium text-gray-900 block">{item.name}</span>
                                    <span className="text-xs text-gray-500 leading-snug">{item.detail}</span>
                                </div>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>

            {hasMoreItems && (
                <div className="mt-6 pt-4 border-t border-gray-50 flex justify-center">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center space-x-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors focus:outline-none"
                    >
                        <span>{isExpanded ? 'Ver menos' : 'Ver más'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                </div>
            )}
        </motion.div>
    );
};

const Services = () => {
    const serviceCategories = [
        {
            title: "Fianzas Administrativas",
            description: "Garantizan el cumplimiento de obligaciones contractuales en diversos contextos.",
            icon: <FileText className="w-8 h-8 text-blue-600" />,
            items: [
                { name: "Anticipo", detail: "Garantiza el uso correcto de anticipos para obras o bienes." },
                { name: "Cumplimiento", detail: "Asegura el cumplimiento de todas las obligaciones del contrato." },
                { name: "Buena Calidad", detail: "Garantiza estándares de calidad y protege contra vicios ocultos." },
                { name: "Obra y Proveeduría", detail: "Cumplimiento de entrega de bienes o ejecución de obras." },
                { name: "Concurso / Licitación", detail: "Asegura la seriedad de la oferta en licitaciones." },
                { name: "Fiscales", detail: "Cumplimiento de pago de impuestos y derechos." },
                { name: "Arrendamiento", detail: "Garantiza el pago de rentas y obligaciones de alquiler." },
                { name: "Contingencias Laborales", detail: "Asegura obligaciones laborales ante empleados." }
            ]
        },
        {
            title: "Fianzas de Crédito",
            description: "Garantía para asegurar el cumplimiento de pago de un prestatario.",
            icon: <Building2 className="w-8 h-8 text-blue-600" />,
            items: [
                { name: "Ante PEMEX y CFE", detail: "Garantizar pago, Exploración, Refinación, Gas, Petroquímica." }
            ]
        },
        {
            title: "Fianzas de Fidelidad",
            description: "Protección contra pérdidas por deshonestidad o fraude de empleados.",
            icon: <ShieldAlert className="w-8 h-8 text-blue-600" />,
            items: [
                { name: "Individual y Colectivas", detail: "Personal administrativo, ventas, agentes." },
                { name: "Empleados Públicos", detail: "Protección del patrimonio de organizaciones públicas." }
            ]
        },
        {
            title: "Fianzas Judiciales",
            description: "Garantizan responsabilidades en procesos judiciales.",
            icon: <Gavel className="w-8 h-8 text-blue-600" />,
            items: [
                { name: "Sanción Pecuniaria", detail: "Pago de multas impuestas por el tribunal." },
                { name: "Daños y Perjuicios", detail: "Indemnización a la parte afectada." },
                { name: "Embargos Precautorios", detail: "Disponibilidad de bienes embargados." }
            ]
        },
        {
            title: "Seguros de Responsabilidad Civil",
            description: "Protección financiera contra reclamaciones por daños o lesiones a terceros.",
            icon: <Umbrella className="w-8 h-8 text-blue-600" />,
            items: [
                { name: "RC General", detail: "Daños en operaciones generales. Excluye daños intencionales." },
                { name: "RC para Contratistas", detail: "Daños derivados de actividades en sitio. Excluye propiedad propia." }
            ]
        }
    ];

    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Nuestras Soluciones</h2>
                        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Protección Integral para tu Empresa
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            Garantías y Seguros diseñados estratégicamente para proteger tus intereses y asegurar el cumplimiento en cada paso.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
                    {serviceCategories.map((category, index) => (
                        <ServiceCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
