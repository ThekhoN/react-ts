import * as React from "react";

interface ISearchInputProps {
  placeholder: string;
  updateSearchTerm: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchInput: React.SFC<ISearchInputProps> = props => {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        onChange={props.updateSearchTerm}
      />
    </div>
  );
};

export default SearchInput;
