import { FC, useState } from 'react';

import { useApi } from '../hooks/useApi';
import { Club } from './types';
import { getSortedData } from '../utils/getSortedData';
import FilterButton from './parts/FilterButton';
import ClubListItem from './parts/ClubListItem';
import LoadingSpinner from './parts/LoadingSpinner';

const ClubList: FC = () => {
  const { state, error, data } = useApi<Club>('https://public.allaboutapps.at/hiring/clubs.json');
  const [sortBy, setsortBy] = useState('name');

  switch (state) {
    case 'ERROR':
      return <p>ERROR: {error || 'General error'}</p>;
    case 'SUCCESS':
      return (
        <>
          <nav className="flex justify-between items-center w-full h-24 xl:h-16 fixed bg-custom-green">
            <p className="pl-4 text-white sm:text-4xl lg:text-xl">all about clubs</p>
            <FilterButton onClick={() => getSortedData(data, setsortBy(sortBy === 'name' ? 'value' : 'name'))} />
          </nav>
          <ol className="pt-24 xl:pt-16">
            {getSortedData(data, sortBy).map((item: Club, index: number) => (
              <ClubListItem key={item.name} club={item} index={index} />
            ))}
          </ol>
        </>
      );
    default:
      return <LoadingSpinner />;
  }
};
export default ClubList;
