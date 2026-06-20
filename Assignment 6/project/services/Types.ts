export type Register = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
};

export type ClientRegister = {
  name: string;
  email: string;
  password: string;
};

export type login = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  userId: string;
  createdAt: string;
};