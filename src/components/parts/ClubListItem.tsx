import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Club } from '../types';

type Props = {
  club: Club;
  index: number;
};

const ClubListItem: FC<Props> = ({ club, index }) => {
  return (
    <li className="flex items-center border-b-2">
      <div className="p-6 xl:p-3">
        <img src={club.image} className="h-20 w-20 xl:h-12 xl:w-12" />
      </div>
      <div>
        <Link to={`/detailsview/${index}`}>
          <p className="font-medium cursor-pointer hover:underline text-2xl xl:text-base">{club.name}</p>
        </Link>
        <p className="font-medium text-2xl xl:text-base">
          {club.country}
          <span className="text-gray-400">{` ${club.value} Millionen Euro`}</span>
        </p>
      </div>
    </li>
  );
};

export default ClubListItem;
