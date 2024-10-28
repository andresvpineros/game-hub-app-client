import { fromJsonToUserAdapter } from "../adapters/fromJsonToUser.adapter";

const mockUsers = [
  {
    id: "1",
    username: "andresvpineros",
    email: "andresvpineros@example.com",
    password: "12345",
  },
];

export class UserRepository {
  async authenticate(identifier: string, password: string) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const user = mockUsers.find(
      (u) =>
        (u.email === identifier || u.username === identifier) &&
        u.password === password
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
