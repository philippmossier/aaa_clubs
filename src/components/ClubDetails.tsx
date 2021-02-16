import { FC } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useApi } from '../hooks/useApi';
import { Club } from './types';
import BackButton from './parts/BackButton';
import LoadingSpinner from './parts/LoadingSpinner';
import * as styles from './ClubDetails-styles';

type Params = {
  id: string;
};

const ClubDetails: FC<Partial<Club>> = () => {
  const { state, error, data } = useApi<Club>('https://public.allaboutapps.at/hiring/clubs.json');
  const { id }: Params = useParams();
  const itemIndex: number = parseInt(id);
  const itemData: Club = data.filter((_, idx) => idx === itemIndex)[0];
  const history = useHistory();

  switch (state) {
    case 'ERROR':
      return <p>ERROR: {error || 'General error'}</p>;
    case 'SUCCESS':
      return (
        <>
          <nav className={styles.navBar}>
            <BackButton onClick={() => history.goBack()} />
            <a className={styles.navText}>{itemData.name}</a>
          </nav>
          <main className={styles.container}>
            <section className={styles.section1Container}>
              <img className={styles.image} src={itemData.image}></img>
            </section>
            <h3 className={styles.countryHeader}>{itemData.country}</h3>
            <section className={styles.section2Container}>
              <p>
                Der Club <span className="font-bold">{`${itemData.name}`}</span> aus {`${itemData.country}`} hat einen
                Wert von {`${itemData.value}`}.
              </p>
              {itemData.european_titles && (
                <p className="pt-12 xl:pt-4">
                  <span className="font-bold">{`${itemData.name}`}</span> konnte bislang {`${itemData.european_titles}`}{' '}
                  Siege auf europäischer Ebene erreichen.
                </p>
              )}
            </section>
          </main>
        </>
      );
    default:
      return <LoadingSpinner />;
  }
};

export default ClubDetails;
