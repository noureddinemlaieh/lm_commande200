"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormGroup, FormLabel, FormMessage } from "@/components/ui/form";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Réinitialiser l'erreur lors de la saisie
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simuler une connexion (à remplacer par votre API réelle)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      if (formData.email === "demo@example.com" && formData.password === "password") {
        // Rediriger vers le dashboard après connexion réussie
        router.push("/dashboard");
      } else {
        // Afficher une erreur d'authentification
        setErrors({ 
          general: "Email ou mot de passe incorrect" 
        });
      }
    } catch (error) {
      setErrors({ 
        general: "Une erreur est survenue lors de la connexion" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Connexion</h1>
        <p className="text-muted-foreground">Accédez à votre tableau de bord CRM</p>
      </div>
      
      {errors.general && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          {errors.general}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormGroup>
          <FormLabel htmlFor="email" required>Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />
          {errors.email && <FormMessage>{errors.email}</FormMessage>}
        </FormGroup>
        
        <FormGroup>
          <div className="flex justify-between">
            <FormLabel htmlFor="password" required>Mot de passe</FormLabel>
            <Link href="/mot-de-passe-oublie" className="text-xs text-primary hover:underline">
              Mot de passe oublié?
            </Link>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="current-password"
          />
          {errors.password && <FormMessage>{errors.password}</FormMessage>}
        </FormGroup>
        
        <Button type="submit" className="w-full" isLoading={isLoading}>
          Se connecter
        </Button>
      </form>
      
      <div className="text-center text-sm">
        <p>
          Pas encore de compte?{" "}
          <Link href="/register" className="text-primary hover:underline">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
} 