import { UserRepository } from "../../data/repositories/user.repository";

export class AuthenticateUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(email: string, password: string) {
    try {
      const { token, user } = await this.userRepository.authenticate(
        email,
        password
      );

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));

      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Authentication failed");
    }
  }
}
