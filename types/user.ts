export interface UserType {
    id: string; 
    name?: string; 
    username?: string; 
    password?: string;
    email?: string; 
    image?: string; 
    coverImage?: string; 
    profileImage?: string; 
    hashedPassword?: string; 
    createdAt: Date; 
    updatedAt: Date; 
  }
  