import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Picker } from '@salutejs/plasma-ui/components/Pickers/Picker';
import { RootState } from '../../redux';
import styles from './Picker.module.scss'
import cn from 'classnames';
import { ReactComponent as Loupe } from '../../assets/img/icons/loupe.svg';
import { getCities, getCity } from '../../redux/yourLocationPage';
import { sendData } from '../../redux/assistant';
import { PickerItem } from '@salutejs/plasma-ui/components/Pickers/types';

const YourLocationPage = () => {

  const dispatch = useDispatch();
  const citiesArray = useSelector(getCities);
  const locationCity = useSelector(getCity);
  const [pickerLabel, setPickerLabel] = useState<string | number | Date>(locationCity);


  const handleClickButton = () => {
    dispatch(
      sendData({
        action_id: 'clickButtonPicker',
        parameters: pickerLabel,
      })
    );
  }
  const handleClickLoupe = () => {
    dispatch(
      sendData({
        action_id: 'clickLoupe',
      })
    );
  }
  return (
    <div className={styles.yourLocation}>
      <div className={styles.yourLocation__container}>
        <div className={styles.yourLocation__title}>Вы находитесь в городе</div>
        {
          citiesArray.length > 0 ? (
            <Picker
              items={citiesArray.map((item, index) => ({ value: item, label: item }))}
              value={pickerLabel}
              enableNativeControl={true}
              infiniteScroll={true}
              className={styles.picker}
              autofocus = {true}
              onChange={(value: PickerItem) => (setPickerLabel(value.value))}

            />
          )
            :
            (
              <div className={styles.yourLocation__textLocationContainer} onClick={handleClickLoupe}>
                <div className={styles.yourLocation__textCity}>
                  {locationCity}
                </div>
                <button className={styles.yourLocation__buttonIcon} onClick={handleClickLoupe}>
                  <Loupe />
                </button>
              </div>
            )
        }
      </div>
      <div className={styles.yourLocation__buttonContainer}>
        <button
          onClick={handleClickButton}
          className={cn(styles.yourLocation__button, styles.yourLocation__button_green)}>
          Да
        </button>
      </div>
    </div>
  )
};

export default YourLocationPage;
