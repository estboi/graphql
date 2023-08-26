function PersonalInfo({ data }: any) {
  const personalData = data.data.user[0].attrs;
  return (
    <div id="PersonalBlock">
      <h3>Personal Information</h3>
      {data ? (
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
