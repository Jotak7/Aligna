export type Plan = {
    id: string;
    title: string;
    description: string;
    duration: number;
    level: string;
    created_at?: string;
  };
  
  export type User = {
    id: string;
    email: string;
    name: string;
    created_at?: string;
  };
  
  export type PostureLog = {
    id: string;
    user_id: string;
    posture_type: string;
    score: number;
    created_at?: string;
  };
  
  export type PostureResult = {
    id: string;
    user_id: string;
    result: string;
    created_at?: string;
  };
  
  export type AIAdvice = {
    id: string;
    user_id: string;
    advice: string;
    created_at?: string;
  };
  
  export type Action = {
    id: string;
    title: string;
    description: string;
    created_at?: string;
  };
  
  export type Checkin = {
    id: string;
    user_id: string;
    completed: boolean;
    created_at?: string;
  };