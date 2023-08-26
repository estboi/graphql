export const fetchLogin = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) => {
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

const query = `
{
	user {
    auditRatio
    attrs


    mystats:transactions(where: {
			type: {_eq:"xp"}
			path:{_regex:"div-0"}
			_and: {_not:{path:{_regex:"piscine-js"}}}
		}
		order_by: {createdAt:asc})
    {
      type
      amount
      object {
        name
      }
    }


    audits:transactions(where: {
			_or: [
				{type: {_eq:"down"}}
				{type: {_eq:"up"}}	
			]
		})
    {
      type
      amount
      object {
        name
      }
    }


  }
}
  `;

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
        query: query,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
  return "error";
};
