import { FC } from 'react';

import { Club } from '../types';

type Props = {
  onClick: () => Club[];
};

const FilterButton: FC<Props> = (onClick) => {
  return (
    <button
      {...onClick}
      className="flex items-center rounded-full p-6 xl:h-12 xl:w-12 bg-light-green focus:outline-none hover:bg-green-700 mr-2 text-white"
    >
      <i className="-m-2 fas fa-sort-amount-up lg:text-xl sm:text-3xl" />
    </button>
  );
};
export default FilterButton;
