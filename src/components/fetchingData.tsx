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
  } else {
    return false;
  }
};

const queryString = `
{
    user {
    	received:transactions_aggregate(where:{
    		_or: [
    				{type: {_eq:"down"}}							
    											]
    	}){aggregate{count}}
    	done:transactions_aggregate(where:{
    		_or: [
    				{type: {_eq:"up"}}							
    											]
    	}){aggregate{count}}
    
    	audits:transactions(where: {					
    		_or: [
    			{type: {_eq:"down"}}
    			{type: {_eq:"up"}}
            
    		]
        
    	}) {
    		type
        
    		amount
    		path
    		object {name}
    	}
        firstName					
        lastName
        auditRatio
        attrs
        totalUp							
        totalDown           
        transactions(where: {
    	type: {_eq:"xp"}
    	path:{_regex:"div-0"}
    	_and: {_not:{path:{_regex:"piscine-js"}}}
    }
    order_by: {createdAt:asc}
    ) {
            type
            amount
            path
            object {
                name
      }
    }
				
  }
}`;

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
      body: JSON.stringify({ query: queryString }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );

  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
    return true;
  } else {
    return false;
  }
};
