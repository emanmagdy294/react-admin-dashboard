const BASE_URL = "https://6a3287f9c6ca2aee43852f15.mockapi.io/users";

type User = {
  id?: string;
  name: string;
  email: string;
  mobile: string;
  password: string;
};

export const registerApi = async (data: User) => {
  // 1- get all users
  const users: User[] = await fetch(BASE_URL).then((res) => res.json());

  // 2- check email
  const existingUser = users.find((user) => user.email === data.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // 3- confirm user
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Register failed");
  }

  return res.json();
};

// Login

export const loginApi = async (data: { email: string; password: string }) => {
  const users: User[] = await fetch(BASE_URL).then((res) => res.json());

  const user = users.find(
    (user) => user.email === data.email && user.password === data.password,
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
};
