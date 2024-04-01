import { v4 as uuidv4 } from 'uuid';

export const defaultUser = {
  id: uuidv4(),
  user: "Fortes",
  password: "123",
  createdAt: Date.now(),
};
