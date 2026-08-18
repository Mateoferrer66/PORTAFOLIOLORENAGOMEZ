/* ============================================================
   i18n.js — Lorena Gómez Portfolio
   Internationalization (Spanish / English)
   ============================================================ */

const translations = {
    es: {
        "nav.about": "Sobre Mí",
        "nav.services": "Servicios",
        "nav.skills": "Habilidades",
        "nav.experience": "Experiencia",
        "nav.portfolio": "Proyectos",
        "nav.testimonials": "Testimonios",
        "nav.contact": "Contacto",
        "nav.cta": "Hablemos",
        
        "hero.badge": "Disponible para nuevos proyectos",
        "hero.greeting": "Hola, soy",
        "hero.description": "Profesional apasionada por la eficiencia empresarial. Transformo procesos de compras en ventajas competitivas para las organizaciones.",
        "hero.btn.contact": "💬 Contáctame",
        "hero.btn.services": "Explorar Servicios ↓",
        "hero.scroll": "Scroll",

        "about.badge": "✨ Conóceme",
        "about.title": "Sobre Mí",
        "about.subtitle": "Profesional comprometida con la excelencia en gestión administrativa",
        "about.badge1": "📊 +50 Proveedores Gestionados",
        "about.badge2": "⭐ Resultados Comprobados",
        "about.heading": "Transformando la gestión de compras en una ventaja estratégica",
        "about.p1": "Soy Lorena Gómez, una profesional administrativa formada en el <strong>SENA</strong> con pasión por la optimización de procesos y la gestión eficiente de recursos. Mi experiencia como <strong>Coordinadora de Compras</strong> me ha permitido desarrollar habilidades clave en negociación, control de inventarios y análisis de costos.",
        "about.p2": "Creo firmemente que el aprendizaje continuo es la clave del crecimiento profesional. Mi capacidad de adaptación rápida y mi orientación a resultados me distinguen como una aliada estratégica para cualquier organización.",
        "about.highlight1": "Orientada a resultados",
        "about.highlight2": "Aprendizaje continuo",
        "about.highlight3": "Trabajo en equipo",
        "about.highlight4": "Proactiva y eficiente",
        "about.stat1": "Años de Experiencia",
        "about.stat2": "Proveedores Gestionados",
        "about.stat3": "Compromiso Total",

        "services.badge": "💼 Servicios",
        "services.title": "Lo Que Puedo Hacer Por Ti",
        "services.subtitle": "Soluciones profesionales en gestión administrativa y compras empresariales",
        "services.s1.title": "Gestión de Compras",
        "services.s1.desc": "Coordinación integral del proceso de adquisiciones. Desde la identificación de necesidades hasta la entrega final, optimizando tiempos y costos.",
        "services.s2.title": "Control de Inventarios",
        "services.s2.desc": "Implementación de sistemas de seguimiento y control de stock. Reducción de mermas y optimización del almacenamiento.",
        "services.s3.title": "Negociación con Proveedores",
        "services.s3.desc": "Obtención de las mejores condiciones comerciales. Evaluación, selección y gestión de relaciones con proveedores estratégicos.",
        "services.s4.title": "Optimización de Procesos",
        "services.s4.desc": "Análisis y mejora continua de flujos administrativos. Identificación de cuellos de botella y propuestas de mejora eficientes.",
        "services.s5.title": "Análisis de Costos",
        "services.s5.desc": "Evaluación detallada de estructura de costos. Identificación de oportunidades de ahorro y reducción de gastos operativos.",
        "services.s6.title": "Cotizaciones & Presupuestos",
        "services.s6.desc": "Elaboración profesional de cotizaciones comparativas y presupuestos detallados. Documentación organizada y transparente.",
        "services.s7.title": "Logística & Suministros",
        "services.s7.desc": "Coordinación de la cadena de suministro. Seguimiento de pedidos, control de entregas y gestión de devoluciones.",
        "services.s8.title": "Consultoría Administrativa",
        "services.s8.desc": "Asesoría integral para empresas. Diagnóstico organizacional, propuestas de mejora y acompañamiento en implementación.",

        "skills.badge": "🎯 Competencias",
        "skills.title": "Habilidades & Competencias",
        "skills.subtitle": "Combinación de habilidades técnicas y competencias interpersonales",
        "skills.tech.title": "🔧 Habilidades Técnicas",
        "skills.tech.s1": "Gestión de Compras & Adquisiciones",
        "skills.tech.s2": "Negociación Estratégica",
        "skills.tech.s3": "Microsoft Excel Avanzado",
        "skills.tech.s4": "Control de Inventarios",
        "skills.tech.s5": "Elaboración de Presupuestos",
        "skills.tech.s6": "Google Workspace & Office 365",
        "skills.tech.s7": "Sistemas ERP Básico",
        "skills.soft.title": "💡 Habilidades Blandas",
        "skills.soft.s1": "🎯 Liderazgo",
        "skills.soft.s2": "💬 Comunicación Efectiva",
        "skills.soft.s3": "🤝 Trabajo en Equipo",
        "skills.soft.s4": "🧩 Resolución de Problemas",
        "skills.soft.s5": "📝 Orientación al Detalle",
        "skills.soft.s6": "⚡ Aprendizaje Rápido",
        "skills.soft.s7": "⏰ Gestión del Tiempo",
        "skills.soft.s8": "🔄 Adaptabilidad",
        "skills.soft.s9": "📊 Pensamiento Analítico",
        "skills.soft.s10": "🌟 Proactividad",
        "skills.soft.s11": "🎯 Orientación a Resultados",
        "skills.soft.s12": "🗂️ Organización",
        "skills.soft.s13": "🤲 Servicio al Cliente",
        "skills.soft.s14": "💡 Creatividad",
        "skills.soft.s15": "📈 Mejora Continua",

        "exp.badge": "💼 Trayectoria",
        "exp.title": "Experiencia Profesional",
        "exp.subtitle": "Mi recorrido profesional en el mundo administrativo",
        "exp.j1.date": "2022 — Presente",
        "exp.j1.title": "Coordinadora de Compras",
        "exp.j1.company": "Empresa Actual",
        "exp.j1.desc": "Liderazgo integral del departamento de compras, gestionando relaciones estratégicas con proveedores y optimizando procesos de adquisición.",
        "exp.j1.l1": "Gestión de más de 50 proveedores activos",
        "exp.j1.l2": "Reducción de costos operativos",
        "exp.j1.l3": "Implementación de control de inventarios",
        "exp.j1.l4": "Negociación de mejores condiciones comerciales",
        "exp.j2.date": "2020 — 2022",
        "exp.j2.title": "Auxiliar Administrativa",
        "exp.j2.company": "Área de Compras",
        "exp.j2.desc": "Apoyo en procesos de adquisición y gestión documental del departamento de compras.",
        "exp.j2.l1": "Elaboración de órdenes de compra",
        "exp.j2.l2": "Seguimiento de pedidos y entregas",
        "exp.j2.l3": "Archivo y gestión documental",
        "exp.j2.l4": "Atención a proveedores",
        "exp.j3.date": "2018 — 2020",
        "exp.j3.title": "Asistente Administrativa",
        "exp.j3.company": "Área Administrativa",
        "exp.j3.desc": "Soporte administrativo integral, manejo de correspondencia, agendas y gestión de documentos.",
        "exp.j3.l1": "Gestión de correspondencia",
        "exp.j3.l2": "Manejo de base de datos",
        "exp.j3.l3": "Atención al cliente interno y externo",
        "exp.j3.l4": "Apoyo en procesos contables básicos",

        "edu.badge": "📚 Formación",
        "edu.title": "Educación & Certificaciones",
        "edu.subtitle": "Mi camino de aprendizaje y formación profesional",
        "edu.e1.title": "Técnico en Gestión Administrativa",
        "edu.e1.sub": "SENA — Servicio Nacional de Aprendizaje",
        "edu.e1.tag": "Formación Técnica",
        "edu.e1.back1": "Competencias Adquiridas",
        "edu.e1.back2": "Gestión documental, procesos administrativos, atención al cliente, manejo de herramientas ofimáticas, y fundamentos de contabilidad empresarial.",
        "edu.e2.title": "Excel Avanzado",
        "edu.e2.sub": "Formación Complementaria",
        "edu.e2.tag": "Capacitación Continua",
        "edu.e2.back1": "Temas Cubiertos",
        "edu.e2.back2": "Tablas dinámicas, funciones avanzadas, macros básicos, análisis de datos, gráficos profesionales y dashboards de gestión.",
        "edu.e3.title": "Aprendizaje Autodidacta",
        "edu.e3.sub": "Formación Continua & Práctica",
        "edu.e3.tag": "Siempre Aprendiendo",
        "edu.e3.back1": "Filosofía de Vida",
        "edu.e3.back2": "La curiosidad y las ganas de crecer son mi motor. Cada reto es una oportunidad de aprendizaje que me impulsa a ser mejor profesional cada día.",

        "port.badge": "🏆 Proyectos",
        "port.title": "Casos de Éxito",
        "port.subtitle": "Logros y proyectos que demuestran resultados tangibles",
        "port.filter.all": "Todos",
        "port.filter.compras": "Compras",
        "port.filter.procesos": "Procesos",
        "port.filter.negociacion": "Negociación",
        "port.filter.ahorro": "Ahorro",
        
        "port.p1.title": "Reducción de Costos Operativos",
        "port.p1.desc": "Implementación de estrategias de ahorro que permitieron reducir significativamente los costos de adquisición.",
        "port.p1.t1": "Ahorro", "port.p1.t2": "Estrategia", "port.p1.t3": "Análisis",
        
        "port.p2.title": "Sistema de Control de Inventarios",
        "port.p2.desc": "Diseño e implementación de un sistema de tracking de inventarios que mejoró la eficiencia del almacén.",
        "port.p2.t1": "Inventarios", "port.p2.t2": "Control", "port.p2.t3": "Excel",
        
        "port.p3.title": "Renegociación de Contratos",
        "port.p3.desc": "Proceso de renegociación con proveedores clave que resultó en mejores condiciones comerciales y plazos de pago.",
        "port.p3.t1": "Negociación", "port.p3.t2": "Contratos", "port.p3.t3": "Proveedores",
        
        "port.p4.title": "Automatización de Procesos",
        "port.p4.desc": "Digitalización y automatización de procesos de compras repetitivos usando Excel avanzado y herramientas digitales.",
        "port.p4.t1": "Automatización", "port.p4.t2": "Digital", "port.p4.t3": "Eficiencia",
        
        "port.p5.title": "Base de Datos de Proveedores",
        "port.p5.desc": "Creación de una base de datos completa de proveedores con evaluaciones de desempeño y comparativas de precios.",
        "port.p5.t1": "Base de Datos", "port.p5.t2": "Proveedores", "port.p5.t3": "Evaluación",
        
        "port.p6.title": "Manual de Procedimientos",
        "port.p6.desc": "Documentación completa de procedimientos del área de compras para estandarizar y facilitar la capacitación.",
        "port.p6.t1": "Documentación", "port.p6.t2": "Procesos", "port.p6.t3": "Calidad",

        "test.badge": "💬 Testimonios",
        "test.title": "Lo Que Dicen De Mí",
        "test.subtitle": "Opiniones de colegas y colaboradores sobre mi trabajo",
        "test.t1.text": "Lorena es una profesional excepcional. Su capacidad para negociar con proveedores y encontrar las mejores opciones para la empresa es admirable. Siempre comprometida con la excelencia.",
        "test.t1.role": "Gerente Administrativo",
        "test.t2.text": "Su organización y atención al detalle transformaron nuestro departamento de compras. Lorena logró reducir costos y mejorar los tiempos de entrega significativamente.",
        "test.t2.role": "Directora de Operaciones",
        "test.t3.text": "Trabajar con Lorena es un placer. Su actitud proactiva y su capacidad de aprendizaje rápido la convierten en un activo invaluable para cualquier equipo.",
        "test.t3.role": "Líder de Proyecto",

        "contact.badge": "📬 Contacto",
        "contact.title": "¡Trabajemos Juntos!",
        "contact.subtitle": "¿Tienes un proyecto en mente? Me encantaría escucharte",
        "contact.connect": "Conectemos",
        "contact.desc": "Estoy disponible para nuevas oportunidades laborales, proyectos de consultoría o cualquier propuesta profesional. ¡No dudes en contactarme!",
        "contact.loc.title": "Ubicación",
        "contact.loc.desc": "Colombia 🇨🇴",
        "contact.form.name": "Nombre Completo *",
        "contact.form.name.ph": "Tu nombre completo",
        "contact.form.email": "Correo Electrónico *",
        "contact.form.subject": "Asunto",
        "contact.form.subject.ph": "¿En qué puedo ayudarte?",
        "contact.form.msg": "Mensaje *",
        "contact.form.msg.ph": "Cuéntame sobre tu proyecto o propuesta...",
        "contact.form.btn": "Enviar Mensaje",

        "footer.desc": "Profesional en gestión administrativa y coordinación de compras. Comprometida con la excelencia y la mejora continua.",
        "footer.nav": "Navegación",
        "footer.contact": "Contacto",
        "footer.avail": "💼 Disponible para trabajar",
        "footer.rights": "© 2026 Lorena Gómez. Todos los derechos reservados. Hecho con"
    },
    en: {
        "nav.about": "About Me",
        "nav.services": "Services",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.portfolio": "Projects",
        "nav.testimonials": "Testimonials",
        "nav.contact": "Contact",
        "nav.cta": "Let's Talk",
        
        "hero.badge": "Available for new projects",
        "hero.greeting": "Hi, I'm",
        "hero.description": "Professional passionate about business efficiency. I transform purchasing processes into competitive advantages for organizations.",
        "hero.btn.contact": "💬 Contact Me",
        "hero.btn.services": "Explore Services ↓",
        "hero.scroll": "Scroll",

        "about.badge": "✨ Meet Me",
        "about.title": "About Me",
        "about.subtitle": "Professional committed to excellence in administrative management",
        "about.badge1": "📊 +50 Suppliers Managed",
        "about.badge2": "⭐ Proven Results",
        "about.heading": "Transforming purchasing management into a strategic advantage",
        "about.p1": "I am Lorena Gómez, an administrative professional trained at <strong>SENA</strong> with a passion for process optimization and efficient resource management. My experience as a <strong>Purchasing Coordinator</strong> has allowed me to develop key skills in negotiation, inventory control, and cost analysis.",
        "about.p2": "I firmly believe that continuous learning is the key to professional growth. My ability to adapt quickly and my results-oriented approach make me a strategic ally for any organization.",
        "about.highlight1": "Results-oriented",
        "about.highlight2": "Continuous learning",
        "about.highlight3": "Teamwork",
        "about.highlight4": "Proactive and efficient",
        "about.stat1": "Years of Experience",
        "about.stat2": "Suppliers Managed",
        "about.stat3": "Total Commitment",

        "services.badge": "💼 Services",
        "services.title": "What I Can Do For You",
        "services.subtitle": "Professional solutions in administrative management and corporate purchasing",
        "services.s1.title": "Purchasing Management",
        "services.s1.desc": "Comprehensive coordination of the procurement process. From identifying needs to final delivery, optimizing time and costs.",
        "services.s2.title": "Inventory Control",
        "services.s2.desc": "Implementation of tracking and stock control systems. Reduction of shrinkage and storage optimization.",
        "services.s3.title": "Supplier Negotiation",
        "services.s3.desc": "Obtaining the best commercial conditions. Evaluation, selection, and management of relationships with strategic suppliers.",
        "services.s4.title": "Process Optimization",
        "services.s4.desc": "Continuous analysis and improvement of administrative workflows. Identification of bottlenecks and efficient improvement proposals.",
        "services.s5.title": "Cost Analysis",
        "services.s5.desc": "Detailed evaluation of cost structures. Identification of savings opportunities and reduction of operating expenses.",
        "services.s6.title": "Quotes & Budgets",
        "services.s6.desc": "Professional preparation of comparative quotes and detailed budgets. Organized and transparent documentation.",
        "services.s7.title": "Logistics & Supplies",
        "services.s7.desc": "Coordination of the supply chain. Order tracking, delivery control, and returns management.",
        "services.s8.title": "Administrative Consulting",
        "services.s8.desc": "Comprehensive advisory for companies. Organizational diagnosis, improvement proposals, and implementation support.",

        "skills.badge": "🎯 Competencies",
        "skills.title": "Skills & Competencies",
        "skills.subtitle": "A combination of technical skills and interpersonal competencies",
        "skills.tech.title": "🔧 Technical Skills",
        "skills.tech.s1": "Purchasing & Procurement Management",
        "skills.tech.s2": "Strategic Negotiation",
        "skills.tech.s3": "Advanced Microsoft Excel",
        "skills.tech.s4": "Inventory Control",
        "skills.tech.s5": "Budget Preparation",
        "skills.tech.s6": "Google Workspace & Office 365",
        "skills.tech.s7": "Basic ERP Systems",
        "skills.soft.title": "💡 Soft Skills",
        "skills.soft.s1": "🎯 Leadership",
        "skills.soft.s2": "💬 Effective Communication",
        "skills.soft.s3": "🤝 Teamwork",
        "skills.soft.s4": "🧩 Problem Solving",
        "skills.soft.s5": "📝 Detail-Oriented",
        "skills.soft.s6": "⚡ Fast Learner",
        "skills.soft.s7": "⏰ Time Management",
        "skills.soft.s8": "🔄 Adaptability",
        "skills.soft.s9": "📊 Analytical Thinking",
        "skills.soft.s10": "🌟 Proactivity",
        "skills.soft.s11": "🎯 Results-Oriented",
        "skills.soft.s12": "🗂️ Organization",
        "skills.soft.s13": "🤲 Customer Service",
        "skills.soft.s14": "💡 Creativity",
        "skills.soft.s15": "📈 Continuous Improvement",

        "exp.badge": "💼 Career Path",
        "exp.title": "Professional Experience",
        "exp.subtitle": "My professional journey in the administrative world",
        "exp.j1.date": "2022 — Present",
        "exp.j1.title": "Purchasing Coordinator",
        "exp.j1.company": "Current Company",
        "exp.j1.desc": "Comprehensive leadership of the purchasing department, managing strategic relationships with suppliers and optimizing procurement processes.",
        "exp.j1.l1": "Management of over 50 active suppliers",
        "exp.j1.l2": "Reduction of operational costs",
        "exp.j1.l3": "Implementation of inventory control",
        "exp.j1.l4": "Negotiation of better commercial conditions",
        "exp.j2.date": "2020 — 2022",
        "exp.j2.title": "Administrative Assistant",
        "exp.j2.company": "Purchasing Department",
        "exp.j2.desc": "Support in procurement processes and document management of the purchasing department.",
        "exp.j2.l1": "Preparation of purchase orders",
        "exp.j2.l2": "Tracking of orders and deliveries",
        "exp.j2.l3": "Filing and document management",
        "exp.j2.l4": "Supplier customer service",
        "exp.j3.date": "2018 — 2020",
        "exp.j3.title": "Administrative Assistant",
        "exp.j3.company": "Administrative Department",
        "exp.j3.desc": "Comprehensive administrative support, correspondence handling, agendas, and document management.",
        "exp.j3.l1": "Correspondence management",
        "exp.j3.l2": "Database handling",
        "exp.j3.l3": "Internal and external customer service",
        "exp.j3.l4": "Support in basic accounting processes",

        "edu.badge": "📚 Education",
        "edu.title": "Education & Certifications",
        "edu.subtitle": "My learning path and professional training",
        "edu.e1.title": "Technical Degree in Administrative Management",
        "edu.e1.sub": "SENA — National Learning Service",
        "edu.e1.tag": "Technical Training",
        "edu.e1.back1": "Acquired Competencies",
        "edu.e1.back2": "Document management, administrative processes, customer service, use of office tools, and fundamentals of corporate accounting.",
        "edu.e2.title": "Advanced Excel",
        "edu.e2.sub": "Complementary Training",
        "edu.e2.tag": "Continuous Training",
        "edu.e2.back1": "Covered Topics",
        "edu.e2.back2": "Pivot tables, advanced functions, basic macros, data analysis, professional charts, and management dashboards.",
        "edu.e3.title": "Self-Taught Learning",
        "edu.e3.sub": "Continuous Training & Practice",
        "edu.e3.tag": "Always Learning",
        "edu.e3.back1": "Life Philosophy",
        "edu.e3.back2": "Curiosity and the desire to grow are my engine. Every challenge is a learning opportunity that drives me to be a better professional every day.",

        "port.badge": "🏆 Projects",
        "port.title": "Success Stories",
        "port.subtitle": "Achievements and projects that demonstrate tangible results",
        "port.filter.all": "All",
        "port.filter.compras": "Purchasing",
        "port.filter.procesos": "Processes",
        "port.filter.negociacion": "Negotiation",
        "port.filter.ahorro": "Savings",
        
        "port.p1.title": "Reduction of Operating Costs",
        "port.p1.desc": "Implementation of savings strategies that significantly reduced procurement costs.",
        "port.p1.t1": "Savings", "port.p1.t2": "Strategy", "port.p1.t3": "Analysis",
        
        "port.p2.title": "Inventory Control System",
        "port.p2.desc": "Design and implementation of an inventory tracking system that improved warehouse efficiency.",
        "port.p2.t1": "Inventories", "port.p2.t2": "Control", "port.p2.t3": "Excel",
        
        "port.p3.title": "Contract Renegotiation",
        "port.p3.desc": "Renegotiation process with key suppliers that resulted in better commercial conditions and payment terms.",
        "port.p3.t1": "Negotiation", "port.p3.t2": "Contracts", "port.p3.t3": "Suppliers",
        
        "port.p4.title": "Process Automation",
        "port.p4.desc": "Digitization and automation of repetitive purchasing processes using advanced Excel and digital tools.",
        "port.p4.t1": "Automation", "port.p4.t2": "Digital", "port.p4.t3": "Efficiency",
        
        "port.p5.title": "Supplier Database",
        "port.p5.desc": "Creation of a comprehensive supplier database with performance evaluations and price comparisons.",
        "port.p5.t1": "Database", "port.p5.t2": "Suppliers", "port.p5.t3": "Evaluation",
        
        "port.p6.title": "Procedures Manual",
        "port.p6.desc": "Complete documentation of purchasing department procedures to standardize and facilitate training.",
        "port.p6.t1": "Documentation", "port.p6.t2": "Processes", "port.p6.t3": "Quality",

        "test.badge": "💬 Testimonials",
        "test.title": "What They Say About Me",
        "test.subtitle": "Opinions from colleagues and collaborators about my work",
        "test.t1.text": "Lorena is an exceptional professional. Her ability to negotiate with suppliers and find the best options for the company is admirable. Always committed to excellence.",
        "test.t1.role": "Administrative Manager",
        "test.t2.text": "Her organization and attention to detail transformed our purchasing department. Lorena managed to significantly reduce costs and improve delivery times.",
        "test.t2.role": "Operations Director",
        "test.t3.text": "Working with Lorena is a pleasure. Her proactive attitude and fast learning ability make her an invaluable asset to any team.",
        "test.t3.role": "Project Lead",

        "contact.badge": "📬 Contact",
        "contact.title": "Let's Work Together!",
        "contact.subtitle": "Have a project in mind? I'd love to hear from you",
        "contact.connect": "Let's Connect",
        "contact.desc": "I am available for new job opportunities, consulting projects, or any professional proposal. Don't hesitate to contact me!",
        "contact.loc.title": "Location",
        "contact.loc.desc": "Colombia 🇨🇴",
        "contact.form.name": "Full Name *",
        "contact.form.name.ph": "Your full name",
        "contact.form.email": "Email Address *",
        "contact.form.subject": "Subject",
        "contact.form.subject.ph": "How can I help you?",
        "contact.form.msg": "Message *",
        "contact.form.msg.ph": "Tell me about your project or proposal...",
        "contact.form.btn": "Send Message",

        "footer.desc": "Professional in administrative management and purchasing coordination. Committed to excellence and continuous improvement.",
        "footer.nav": "Navigation",
        "footer.contact": "Contact",
        "footer.avail": "💼 Available for work",
        "footer.rights": "© 2026 Lorena Gómez. All rights reserved. Made with"
    }
};

class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('portfolio-lang') || 'es';
        this.toggleBtn = document.getElementById('lang-toggle');
        
        if (this.currentLang === 'en') {
            this.setLanguage('en');
        } else {
            this.updateButtonText(); // Para que diga EN si está en ES
        }

        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => {
                this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
                this.setLanguage(this.currentLang);
            });
        }
    }

    setLanguage(lang) {
        localStorage.setItem('portfolio-lang', lang);
        document.documentElement.lang = lang;
        
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.type === 'submit') {
                        element.value = translations[lang][key];
                    } else {
                        element.placeholder = translations[lang][key];
                    }
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Update typed text dataset if necessary
        const typedElement = document.getElementById('typed-text');
        if (typedElement) {
             const esTexts = '["Coordinadora de Compras", "Gestión Administrativa", "Optimización de Procesos", "Negociación Estratégica", "Control de Inventarios"]';
             const enTexts = '["Purchasing Coordinator", "Administrative Management", "Process Optimization", "Strategic Negotiation", "Inventory Control"]';
             typedElement.setAttribute('data-texts', lang === 'es' ? esTexts : enTexts);
             // Note: It would be best to re-init the typed effect here if possible, 
             // but we'll let it be for now or handle it via a custom event.
        }

        this.updateButtonText();
    }

    updateButtonText() {
        if (this.toggleBtn) {
            this.toggleBtn.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new LanguageSwitcher();
});
