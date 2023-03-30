export interface People {
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

export const people: People[] = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },
  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
];
