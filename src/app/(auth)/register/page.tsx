"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormGroup, FormLabel, FormMessage } from "@/components/ui/form";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
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
    
    if (!formData.name) {
      newErrors.name = "Le nom est requis";
    }
    
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 8) {
      newErrors.password = "Le mot de passe doit contenir au moins 8 caractères";
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simuler une inscription (à remplacer par votre API réelle)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Rediriger vers le dashboard après inscription réussie
      router.push("/dashboard");
    } catch (error) {
      setErrors({ 
        general: "Une erreur est survenue lors de l'inscription" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 rounded-lg border p-8 shadow-lg">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Inscription</h1>
        <p className="text-muted-foreground">Créez votre compte CRM</p>
      </div>
      
      {errors.general && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          {errors.general}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormGroup>
          <FormLabel htmlFor="name" required>Nom</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Votre nom complet"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
          />
          {errors.name && <FormMessage>{errors.name}</FormMessage>}
        </FormGroup>
        
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
          <FormLabel htmlFor="password" required>Mot de passe</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="new-password"
          />
          {errors.password && <FormMessage>{errors.password}</FormMessage>}
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="confirmPassword" required>Confirmer le mot de passe</FormLabel>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            autoComplete="new-password"
          />
          {errors.confirmPassword && <FormMessage>{errors.confirmPassword}</FormMessage>}
        </FormGroup>
        
        <Button type="submit" className="w-full" isLoading={isLoading}>
          S'inscrire
        </Button>
      </form>
      
      <div className="text-center text-sm">
        <p>
          Vous avez déjà un compte?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
} 