import { useEffect, useState } from "react";
import AuditRatio from "./AuditRatio";
import { fetchData } from "./fetchingData";
import PersonalInfo from "./PersonalInfo";
import Header from "./Header";

function MainPage({ user, Logout }: any) {
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
  return (
    <>
      <Header data={data} Logout={Logout} />
      <div id="mainPage">
        <div id="myInfo">
          <PersonalInfo data={data} />
          <AuditRatio data={data} />
        </div>
        <div id="progressInfo"></div>
      </div>
    </>
  );
}

export default MainPage;
