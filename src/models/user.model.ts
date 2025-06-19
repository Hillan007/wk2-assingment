// src/models/user.model.ts

export class User {
    constructor(
        public username: string,
        public password: string,
        public email: string
    ) {}

    // Method to save the user to the database
    async save() {
        // Logic to save user to the database
    }

    // Method to find a user by username
    static async findByUsername(username: string) {
        // Logic to find user by username
    }

    // Method to validate password
    validatePassword(password: string): boolean {
        // Logic to validate password
        return true; // Placeholder
    }
}