const LargePersonListItem = ({ person }: any) => {
  const { name, age, hairColor, hobbies } = person;

  return (
    <>
      <h3>Name: {name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>

      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby: string) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};

export default LargePersonListItem;
