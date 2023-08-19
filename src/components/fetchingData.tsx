import { json } from "stream/consumers";

export const logIn = async (email: string, password: string) => {
  let response = await fetch("https://01.kood.tech/api/auth/signin", {
    method: "POST",
    body: btoa(`${email}:${password}`),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(email + ":" + password)}`,
    },
  });

  if (response.status === 200) {
    const token = await response.json();
    localStorage.setItem("token", token);
    return true;
  }
  return false;
};

export const fetchData = async () => {
  let token = localStorage.getItem("token");

  if (token == null) {
    console.error("no TOKEN");
    return [];
  }

  let response = await fetch(
    "https://01.kood.tech/api/graphql-engine/v1/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: "{ user {id}}",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return data;
  }
  return "error";
};
