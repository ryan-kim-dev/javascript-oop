import { People } from './data/people';
import { Products } from './data/products';

export interface ListProps {
  items: People[] | Products[];
  resourceName: string;
  itemComponent: any;
}
/**
 * 리스트 아이템 컴포넌트를 만들기 위해 재사용되는 레이아웃 컴포넌트
 * @param items
 * @returns 받는 데이터 전체의 배열
 * @param resourceName
 * @returns 화면에 보여줄 데이터 이름 (people 또는 products)
 * @param itemComponent
 * @returns 데이터 배열의 각 요소를 받는 리스트 아이템 컴포넌트
 */

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: ListProps) => {
  return (
    <>
      {items.map((item, idx) => (
        <ItemComponent key={idx} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;

// {...{ [resourceName]: item }} 은
// person={item} 또는 product={item} 과 같다
