import RegularList from './RegularList';
import { people } from './data/people';
import { products } from './data/products';
import LargePersonListItem from './people/LargePersonListItems';
import SmallPersonListItem from './people/SmallPersonListItem';

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </>
  );
}

export default App;
