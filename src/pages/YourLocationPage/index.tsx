import React from 'react';
import { useSelector } from 'react-redux';
import { Picker } from '@salutejs/plasma-ui/components/Pickers/Picker';
import { RootState } from '../../redux';
import styles from './Picker.module.scss'
import cn from 'classnames';
import { ReactComponent as Loupe } from '../../assets/img/icons/loupe.svg';
const YourLocationPage = () => {
  return (
    <div className={styles.yourLocation}>
      <div className={styles.yourLocation__container}>
        <div className={styles.yourLocation__title}>Вы находитесь в городе</div>
        {
          false ? (
            <Picker
            items={[{ value: "1", label: "One" },
            { value: "2", label: "Two" },
            { value: "3", label: "Three" },
            { value: "4", label: "Four" },
            ]}
            value={"3"}
            enableNativeControl={true}
            infiniteScroll={false}
            className={styles.picker}
          />
          )
          :
          (
          <div>
            <div className={styles.yourLocation__textCity}>
              Екатеринбург
              <button className={styles.yourLocation__buttonIcon}>
                <Loupe/>
            </button>
            </div>
          </div>
        )
        }
      </div>
      <div className={styles.yourLocation__buttonContainer}>
          <button
            className={cn(styles.yourLocation__button, styles.yourLocation__button_green)}>
            Да
          </button>
      </div>
    </div>
  )
};

export default YourLocationPage;
