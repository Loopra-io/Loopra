import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center px-4 bg-background">
      <Card className="w-full max-w-lg shadow-lg border-0 bg-card">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
              <AlertCircle className="relative h-12 w-12 md:h-16 md:w-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">404</h1>

          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
            Página no encontrada
          </h2>

          <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
            Lo sentimos, la página que buscas no existe.
            <br />
            Puede que haya sido movida o eliminada.
          </p>

          <Button
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg transition-all duration-200"
          >
            <Home className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}