import { motion } from 'framer-motion';
import { Building2, Gavel, FileText, Umbrella, ShieldAlert } from 'lucide-react';

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
        <section id="servicios" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Nuestros Soluciones
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Garantías y Seguros diseñados para proteger tus intereses y asegurar el cumplimiento.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {serviceCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl mb-6">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                            <p className="text-sm text-gray-500 mb-6 min-h-[40px]">{category.description}</p>

                            <ul className="space-y-3">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                                        <div>
                                            <span className="text-sm font-medium text-gray-900 block">{item.name}</span>
                                            <span className="text-xs text-gray-500">{item.detail}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
