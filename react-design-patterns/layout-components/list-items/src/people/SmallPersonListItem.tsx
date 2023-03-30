const SmallPersonListItem = ({ person }: any) => {
  const { name, age } = person;

  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  );
};

export default SmallPersonListItem;
