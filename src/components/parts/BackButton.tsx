import { FC } from 'react';

type Props = {
  onClick: () => void;
};

const BackButton: FC<Props> = (onClick) => {
  return (
    <button
      className="pl-12 xl:pl-4 text-gray-50 hover:text-gray-800 focus:outline-none text-3xl xl:text-base"
      {...onClick}
    >
      <i className="fas fa-arrow-left" />
    </button>
  );
};
export default BackButton;
