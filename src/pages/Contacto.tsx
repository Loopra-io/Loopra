import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// ─── Reemplaza esto con tu ID de Formspree ────────────────────────────────────
const FORMSPREE_ID = 'xwvzornb';
// ─────────────────────────────────────────────────────────────────────────────

const PLAN_LABELS: Record<string, string> = {
  startup:     'Plan Startup',
  profesional: 'Plan Profesional',
  empresarial: 'Plan Empresarial',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  nombre: string;
  email:  string;
  asunto: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?:  string;
  asunto?: string;
  mensaje?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nombre.trim())                         errors.nombre  = 'El nombre es requerido.';
  if (!data.email.trim())                          errors.email   = 'El email es requerido.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                                                   errors.email   = 'El email no es válido.';
  if (!data.asunto.trim())                         errors.asunto  = 'El asunto es requerido.';
  if (!data.mensaje.trim())                        errors.mensaje = 'El mensaje es requerido.';
  else if (data.mensaje.trim().length < 10)        errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  return errors;
}

export default function Contacto() {
  const [searchParams] = useSearchParams();
  const planParam  = searchParams.get('plan') ?? '';
  const planLabel  = PLAN_LABELS[planParam] ?? '';

  const [form, setForm]     = useState<FormData>({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (planLabel) setForm(prev => ({ ...prev, asunto: `Interesado en ${planLabel}` }));
  }, [planLabel]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify({
          nombre:  form.nombre,
          email:   form.email,
          asunto:  form.asunto,
          mensaje: form.mensaje,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-background border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? 'border-red-500 focus:ring-red-500/30'
        : 'border-border focus:ring-primary'
    }`;

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contacto
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            ¿Tienes preguntas? Nos encantaría escucharte. Contáctanos a través de cualquiera de estos canales.
          </p>

          {/* Banner plan detectado */}
          {planLabel && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-5 py-4 mb-10"
            >
              <Sparkles className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
              <p className="text-sm text-foreground">
                Estás consultando sobre el{' '}
                <span className="font-semibold text-primary">{planLabel}</span>.
                {' '}Cuéntanos más sobre tu proyecto y te respondemos en menos de 24 horas.
              </p>
            </motion.div>
          )}

          {/* Tarjetas de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">Envíanos un email y te responderemos en 24 horas.</p>
              <a href="mailto:hola@loopra.me" className="text-primary hover:text-primary/80 font-medium mt-4 inline-block">
                hola@loopra.me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Teléfono</h3>
              <p className="text-sm text-muted-foreground">Llámanos durante horario de oficina.</p>
              <a href="tel:+573162945169" className="text-primary hover:text-primary/80 font-medium mt-4 inline-block">
                +57 316 294 5169
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Ubicación</h3>
              <p className="text-sm text-muted-foreground">Cali, Valle del Cauca, Colombia</p>
            </motion.div>
          </div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Envíanos un Mensaje
            </h2>

            {/* Estado éxito */}
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-12 gap-4"
              >
                <CheckCircle2 className="w-14 h-14 text-green-500" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-foreground">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas a tu email.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <input
                      name="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      className={inputClass('nombre')}
                    />
                    {errors.nombre && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Tu email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Asunto */}
                <div>
                  <input
                    name="asunto"
                    type="text"
                    placeholder="Asunto"
                    value={form.asunto}
                    onChange={handleChange}
                    className={inputClass('asunto')}
                  />
                  {errors.asunto && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.asunto}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <textarea
                    name="mensaje"
                    placeholder="Tu mensaje"
                    rows={6}
                    value={form.mensaje}
                    onChange={handleChange}
                    className={inputClass('mensaje')}
                  />
                  {errors.mensaje && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.mensaje}
                    </p>
                  )}
                </div>

                {/* Error de envío */}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Hubo un error al enviar el mensaje. Intenta de nuevo o escríbenos directamente a hola@loopra.me
                  </motion.div>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
