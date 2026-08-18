/* ============================================================
   CHATBOT — Lorena Gómez Portfolio
   Smart conversational bot with predefined responses
   ============================================================ */

class Chatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
        this.botName = 'Lore IA';
        this.botAvatar = '💜';
        
        // Knowledge base
        this.responses = {
            greetings: {
                patterns: ['hola', 'hello', 'hi', 'hey', 'buenos', 'buenas', 'qué tal', 'que tal', 'saludos'],
                replies: [
                    '¡Hola! 👋 Soy el asistente virtual de Lorena. ¿En qué puedo ayudarte hoy?',
                    '¡Bienvenido/a! 💜 Estoy aquí para contarte sobre los servicios y experiencia de Lorena. ¿Qué te gustaría saber?',
                    '¡Hola! Gracias por visitar el portafolio de Lorena. ¿Te gustaría conocer sus servicios, experiencia o contactarla directamente?'
                ]
            },
            services: {
                patterns: ['servicio', 'servicios', 'qué hace', 'que hace', 'qué ofrece', 'que ofrece', 'trabajos', 'ayuda'],
                replies: [
                    'Lorena ofrece servicios profesionales en:\n\n📊 **Gestión de Compras** — Coordinación completa del proceso de adquisiciones\n📋 **Control de Inventarios** — Sistemas de seguimiento y optimización\n🤝 **Negociación con Proveedores** — Obtención de mejores condiciones\n📈 **Optimización de Procesos** — Mejora continua de flujos administrativos\n💼 **Consultoría Administrativa** — Asesoría para empresas\n\n¿Te interesa alguno en particular?'
                ]
            },
            experience: {
                patterns: ['experiencia', 'trayectoria', 'trabajo', 'trabajado', 'años', 'carrera', 'recorrido'],
                replies: [
                    'Lorena cuenta con experiencia sólida como **Coordinadora de Compras**, donde ha:\n\n✅ Gestionado relaciones con múltiples proveedores\n✅ Optimizado procesos de adquisición\n✅ Reducido costos operativos\n✅ Implementado sistemas de control de inventarios\n✅ Liderado equipos administrativos\n\nSu capacidad de aprendizaje rápido y orientación a resultados la distinguen en el mercado. 🌟'
                ]
            },
            skills: {
                patterns: ['habilidad', 'habilidades', 'competencia', 'competencias', 'sabe', 'capacidad', 'conocimiento'],
                replies: [
                    'Las competencias clave de Lorena incluyen:\n\n🔧 **Técnicas:**\n• Gestión de compras y adquisiciones\n• Negociación estratégica\n• Excel avanzado\n• Control de inventarios\n• Elaboración de presupuestos\n\n💡 **Blandas:**\n• Liderazgo y trabajo en equipo\n• Comunicación efectiva\n• Resolución de problemas\n• Aprendizaje rápido\n• Orientación al detalle'
                ]
            },
            education: {
                patterns: ['estudio', 'estudios', 'formación', 'formacion', 'educación', 'educacion', 'sena', 'certificación', 'certificacion'],
                replies: [
                    'Lorena se formó en el **SENA** en el área administrativa y complementa su formación con aprendizaje continuo. 📚\n\nSu filosofía es que el conocimiento práctico y la disposición para aprender son tan valiosos como los títulos. ¡Y lo demuestra con resultados!'
                ]
            },
            contact: {
                patterns: ['contacto', 'contactar', 'correo', 'email', 'teléfono', 'telefono', 'whatsapp', 'llamar', 'hablar', 'reunión', 'reunion', 'cita'],
                replies: [
                    '¡Genial que quieras contactar a Lorena! 💜\n\nPuedes hacerlo de varias formas:\n\n📱 **WhatsApp** — Haz clic en el botón verde flotante\n📧 **Email** — Usa el formulario de contacto en la sección "Contacto"\n💼 **LinkedIn** — Encuéntrala en sus redes sociales\n\n¿Prefieres que te redirija al formulario de contacto?'
                ]
            },
            pricing: {
                patterns: ['precio', 'precios', 'costo', 'costos', 'tarifa', 'tarifas', 'cobrar', 'cobra', 'cuánto', 'cuanto', 'cotización', 'cotizacion', 'presupuesto'],
                replies: [
                    'Los precios varían según el servicio y alcance del proyecto. 📋\n\nLorena ofrece:\n💎 Consulta inicial **gratuita** para entender tus necesidades\n📊 Presupuestos personalizados según el proyecto\n🤝 Tarifas competitivas y flexibles\n\n¡Lo mejor es contactarla directamente para una cotización personalizada! Haz clic en el botón de WhatsApp 📱'
                ]
            },
            thanks: {
                patterns: ['gracias', 'thanks', 'genial', 'perfecto', 'excelente', 'super', 'increíble', 'increible'],
                replies: [
                    '¡Con todo gusto! 💜 Si necesitas algo más, aquí estaré. ¡No dudes en contactar a Lorena!',
                    '¡Gracias a ti por tu interés! 🌟 Lorena estará encantada de ayudarte. ¡No dudes en escribirle!',
                    '¡Un placer poder ayudarte! Si tienes más preguntas, aquí me encuentras. 😊'
                ]
            },
            goodbye: {
                patterns: ['adiós', 'adios', 'bye', 'chao', 'hasta luego', 'nos vemos'],
                replies: [
                    '¡Hasta pronto! 👋💜 Recuerda que puedes contactar a Lorena cuando lo necesites. ¡Éxitos!',
                    '¡Chao! Fue un gusto. No olvides darle un vistazo a los servicios de Lorena. ¡Hasta la próxima! 🌟'
                ]
            }
        };

        this.defaultReplies = [
            'Interesante pregunta. Te sugiero contactar directamente a Lorena para una respuesta más detallada. 📱 Haz clic en el botón de WhatsApp.',
            'No estoy seguro de entender completamente. ¿Podrías preguntarme sobre los **servicios**, **experiencia**, **habilidades** o **contacto** de Lorena?',
            'Puedo ayudarte con información sobre:\n• Servicios profesionales\n• Experiencia laboral\n• Habilidades y competencias\n• Cómo contactar a Lorena\n\n¿Qué te gustaría saber?'
        ];

        this.quickReplies = [
            { text: '📊 Servicios', value: 'servicios' },
            { text: '💼 Experiencia', value: 'experiencia' },
            { text: '🎯 Habilidades', value: 'habilidades' },
            { text: '📱 Contacto', value: 'contacto' }
        ];

        this.init();
    }

    init() {
        this.createUI();
        this.addEventListeners();
        
        // Welcome message after a short delay
        setTimeout(() => {
            this.addBotMessage('¡Hola! 👋 Soy el asistente virtual de Lorena. Puedo contarte sobre sus servicios, experiencia y cómo contactarla. ¿En qué te puedo ayudar?', true);
        }, 3000);
    }

    createUI() {
        const chatHTML = `
            <div class="chatbot-container" id="chatbot">
                <button class="chatbot-toggle" id="chatbot-toggle" aria-label="Abrir chat">
                    <span class="chatbot-toggle-icon">💬</span>
                    <span class="chatbot-toggle-close">✕</span>
                    <span class="chatbot-notification" id="chatbot-notification">1</span>
                </button>

                <div class="chatbot-window" id="chatbot-window">
                    <div class="chatbot-header">
                        <div class="chatbot-header-info">
                            <div class="chatbot-avatar">${this.botAvatar}</div>
                            <div>
                                <div class="chatbot-name">${this.botName}</div>
                                <div class="chatbot-status">
                                    <span class="chatbot-status-dot"></span>
                                    En línea
                                </div>
                            </div>
                        </div>
                        <button class="chatbot-close" id="chatbot-close" aria-label="Cerrar chat">✕</button>
                    </div>

                    <div class="chatbot-messages" id="chatbot-messages">
                    </div>

                    <div class="chatbot-quick-replies" id="chatbot-quick-replies">
                        ${this.quickReplies.map(qr => `
                            <button class="quick-reply-btn" data-value="${qr.value}">${qr.text}</button>
                        `).join('')}
                    </div>

                    <div class="chatbot-input-container">
                        <input type="text" class="chatbot-input" id="chatbot-input" 
                               placeholder="Escribe tu mensaje..." 
                               autocomplete="off">
                        <button class="chatbot-send" id="chatbot-send" aria-label="Enviar mensaje">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 2L11 13"></path>
                                <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatHTML);
    }

    addEventListeners() {
        const toggle = document.getElementById('chatbot-toggle');
        const close = document.getElementById('chatbot-close');
        const input = document.getElementById('chatbot-input');
        const send = document.getElementById('chatbot-send');
        const quickReplies = document.querySelectorAll('.quick-reply-btn');

        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.toggleChat());

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                this.handleUserMessage(input.value.trim());
                input.value = '';
            }
        });

        send.addEventListener('click', () => {
            if (input.value.trim()) {
                this.handleUserMessage(input.value.trim());
                input.value = '';
            }
        });

        quickReplies.forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleUserMessage(btn.getAttribute('data-value'));
            });
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('chatbot-window');
        const toggle = document.getElementById('chatbot-toggle');
        const notification = document.getElementById('chatbot-notification');

        if (this.isOpen) {
            window.classList.add('active');
            toggle.classList.add('active');
            notification.style.display = 'none';
            document.getElementById('chatbot-input').focus();
        } else {
            window.classList.remove('active');
            toggle.classList.remove('active');
        }
    }

    handleUserMessage(text) {
        this.addUserMessage(text);
        
        // Show typing indicator
        setTimeout(() => {
            this.showTyping();
            
            // Find response
            setTimeout(() => {
                this.hideTyping();
                const response = this.findResponse(text);
                this.addBotMessage(response);
            }, 800 + Math.random() * 1200);
        }, 300);
    }

    findResponse(text) {
        const input = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        for (const category of Object.values(this.responses)) {
            for (const pattern of category.patterns) {
                const normalizedPattern = pattern.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                if (input.includes(normalizedPattern)) {
                    return category.replies[Math.floor(Math.random() * category.replies.length)];
                }
            }
        }

        return this.defaultReplies[Math.floor(Math.random() * this.defaultReplies.length)];
    }

    addUserMessage(text) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', 'user-message');
        messageDiv.innerHTML = `
            <div class="message-bubble user-bubble">
                <p>${this.escapeHTML(text)}</p>
                <span class="message-time">${this.getTime()}</span>
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addBotMessage(text, isWelcome = false) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', 'bot-message');
        
        // Parse markdown-like formatting
        const formattedText = this.formatText(text);
        
        messageDiv.innerHTML = `
            <div class="message-avatar">${this.botAvatar}</div>
            <div class="message-bubble bot-bubble">
                <div class="message-content">${formattedText}</div>
                <span class="message-time">${this.getTime()}</span>
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();

        if (isWelcome && !this.isOpen) {
            const notification = document.getElementById('chatbot-notification');
            if (notification) notification.style.display = 'flex';
        }
    }

    showTyping() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('chat-message', 'bot-message', 'typing-indicator');
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">${this.botAvatar}</div>
            <div class="message-bubble bot-bubble typing-bubble">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTyping() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }

    formatText(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/• /g, '&bull; ');
    }

    escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    getTime() {
        return new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
    }

    scrollToBottom() {
        const container = document.getElementById('chatbot-messages');
        container.scrollTop = container.scrollHeight;
    }
}

// Initialize chatbot
document.addEventListener('DOMContentLoaded', () => {
    window.chatbot = new Chatbot();
});
