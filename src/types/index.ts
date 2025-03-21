export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
  avatar?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  notes?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Contact {
  id: string;
  clientId: string;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  notes?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Opportunity {
  id: string;
  clientId: string;
  name: string;
  value: number;
  status: "new" | "contacted" | "proposal" | "negotiation" | "won" | "lost";
  notes?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "in_progress" | "completed" | "canceled";
  dueDate?: Date | string;
  assigneeId?: string;
  clientId?: string;
  opportunityId?: string;
  createdAt: Date | string;
  updatedAt: Date | string;
} 