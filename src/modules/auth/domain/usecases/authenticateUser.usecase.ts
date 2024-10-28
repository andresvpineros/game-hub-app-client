import { UserRepository } from "../../data/repositories/user.repository";

interface AuthenticatedUser {
  id: string;
  email: string;
  username: string;
}

export class AuthenticateUserUseCase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(
    identifier: string,
    password: string
  ): Promise<AuthenticatedUser> {
    try {
      const { user } = await this.userRepository.authenticate(
        identifier,
        password
      );

      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Authentication failed");
    }
  }
}
