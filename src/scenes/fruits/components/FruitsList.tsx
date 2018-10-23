import * as React from "react";
import { IFruitDetails } from "../Fruits";

interface IFruitsListProps {
  data: IFruitDetails[];
}

const FruitsList: React.SFC<IFruitsListProps> = props => {
  return (
    <div>
      <ul>
        {props.data.map(fruit => (
          <li key={fruit.id}>{fruit.data}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;
