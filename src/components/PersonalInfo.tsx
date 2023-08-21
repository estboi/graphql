function PersonalInfo({ otherData }: any) {
  const personalData = otherData.data.user[0].attrs;
  console.log(otherData);
  return (
    <div id="PersonalBlock">
      <h2>Personal Information</h2>
      {otherData ? (
        <div>
          <p>Name: {personalData.firstName + " " + personalData.lastName}</p>
          <p>Email: {personalData.email}</p>
          <p>Tel: {personalData.tel}</p>
          <p>Date of birth: {personalData.dateOfBirth.substring(0, 10)}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default PersonalInfo;
