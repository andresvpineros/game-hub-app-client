import { User } from "../../domain/entities/user";

export const fromJsonToUserAdapter = (data: User) => {
  return new User({
    id: data.id,
    username: data.username,
    email: data.email,
    password: data.password,
  });
};
