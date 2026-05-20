import { motion } from 'framer-motion';
import { Code2, Server, Database, Lock } from 'lucide-react';

export default function API() {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/users',
      description: 'Obtener lista de usuarios',
      color: 'bg-blue-500/10 text-blue-500',
    },
    {
      method: 'POST',
      path: '/api/v1/users',
      description: 'Crear nuevo usuario',
      color: 'bg-green-500/10 text-green-500',
    },
    {
      method: 'PUT',
      path: '/api/v1/users/:id',
      description: 'Actualizar usuario',
      color: 'bg-yellow-500/10 text-yellow-500',
    },
    {
      method: 'DELETE',
      path: '/api/v1/users/:id',
      description: 'Eliminar usuario',
      color: 'bg-red-500/10 text-red-500',
    },
  ];

  const sdks = [
    { name: 'JavaScript/TypeScript', package: '@loopra/sdk-js' },
    { name: 'Python', package: 'loopra-sdk' },
    { name: 'Go', package: 'github.com/loopra/sdk-go' },
    { name: 'Ruby', package: 'loopra-sdk' },
    { name: 'Java', package: 'com.loopra:sdk' },
    { name: 'PHP', package: 'loopra/sdk' },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            API Reference
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Documentación completa de la API REST de Loopra v1
          </p>

          {/* Autenticación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl font-semibold text-foreground">
                Autenticación
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Todas las solicitudes a la API deben incluir tu API Key en el header.
            </p>
            <div className="bg-background rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-muted-foreground font-mono">
{`curl -X GET https://api.loopra.com/v1/users \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>
          </motion.div>

          {/* Endpoints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl font-semibold text-foreground">
                Endpoints
              </h2>
            </div>
            <div className="space-y-4">
              {endpoints.map((endpoint, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded font-mono text-sm font-semibold ${endpoint.color}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-foreground font-mono">{endpoint.path}</code>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{endpoint.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ejemplo de respuesta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl font-semibold text-foreground">
                Ejemplo de Respuesta
              </h2>
            </div>
            <div className="bg-background rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-muted-foreground font-mono">
{`{
  "success": true,
  "data": {
    "id": "usr_123456",
    "email": "user@example.com",
    "name": "John Doe",
    "created_at": "2026-05-18T22:10:00Z",
    "updated_at": "2026-05-18T22:10:00Z"
  },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2026-05-18T22:10:00Z"
  }
}`}
              </pre>
            </div>
          </motion.div>

          {/* SDKs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl font-semibold text-foreground">
                SDKs Disponibles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sdks.map((sdk, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-2">{sdk.name}</h3>
                  <code className="text-sm text-muted-foreground font-mono">{sdk.package}</code>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Códigos de Error */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Códigos de Error
            </h2>
            <div className="space-y-4">
              {[
                { code: '200', message: 'OK - Solicitud exitosa' },
                { code: '400', message: 'Bad Request - Parámetros inválidos' },
                { code: '401', message: 'Unauthorized - API Key inválida' },
                { code: '403', message: 'Forbidden - Acceso denegado' },
                { code: '404', message: 'Not Found - Recurso no encontrado' },
                { code: '429', message: 'Too Many Requests - Rate limit excedido' },
                { code: '500', message: 'Internal Server Error - Error del servidor' },
              ].map((error, idx) => (
                <div key={idx} className="flex items-center gap-4 pb-4 border-b border-border last:border-b-0">
                  <span className="font-mono font-semibold text-primary min-w-fit">{error.code}</span>
                  <span className="text-muted-foreground">{error.message}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
