import { fromJsonToUserAdapter } from "../adapters/fromJsonToUser.adapter";

const mockUsers = [
  {
    id: "1",
    username: "andresvpineros",
    email: "user1@example.com",
    password: "password123",
  },
  {
    id: "2",
    username: "tecnomaster109",
    email: "user2@example.com",
    password: "password456",
  },
];

export class UserRepository {
  async authenticate(email: string, password: string) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const token = `mock_token_${user.id}`;
    return {
      token,
      user: fromJsonToUserAdapter(user),
    };
  }
}
