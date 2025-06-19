export interface UserRequest {
    username: string;
    password: string;
}

export interface UserResponse {
    id: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthResponse {
    token: string;
    user: UserResponse;
}