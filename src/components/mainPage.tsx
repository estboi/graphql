import { useEffect, useState } from "react";
import { fetchData } from "./fetchingData";
import PersonalInfo from "./PersonalInfo";

function MainPage({ user, handleLogout }: any) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchDataAndSetData() {
      const result = await fetchData();
      if (result !== "error") {
        setData(result);
      } else {
        console.error("Error fetching data");
      }
    }
    fetchDataAndSetData();
  }, []);
  if (Object.keys(data).length === 0) return <></>;
  return <PersonalInfo otherData={data} />;
}

export default MainPage;
