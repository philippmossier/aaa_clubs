import { Club } from '../components/types';

export const getSortedData = (data: Club[], key: string | void) => {
  switch (key) {
    case 'name':
      return data.sort((a, b) => (a.name > b.name ? 1 : -1));
    case 'value':
      return data.sort((a, b) => (a.value < b.value ? 1 : -1));
    default:
      return data;
  }
};
