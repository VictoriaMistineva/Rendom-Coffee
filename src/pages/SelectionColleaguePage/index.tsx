import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SelectionСolleaguesPage.module.scss'
import cn from 'classnames';
import { Radiobox, RadioGroup } from '@salutejs/plasma-ui';
import { getMethods } from '../../redux/selectionMethodPage';
import { sendData } from '../../redux/assistant';



const SelectionColleaguesPage = () => {
  const dispatch = useDispatch();
  const methods = useSelector(getMethods);

  const handleChange = (index: number) => {
    dispatch(
      sendData({
        action_id: 'radioBoxIndex',
        parameters: index,
      })
    );
  };

  const handleClickButton = () => {
    dispatch(
      sendData({
        action_id: 'clickSelectionColleaguesSearchButton',
      })
    );
  };

  return (
    <div className={styles.selectionColleagues}>
      <div className={styles.selectionColleagues__container}>
        <div className={styles.selectionColleagues__title}>
          Я подберу для вас<br></br> коллег, с которыми <br></br> вы еще не знакомы
        </div>
      </div>
      <div className={styles.selectionColleagues__radioGroupContainer}>
        <RadioGroup >
          {methods.map((item, index) => (
            <>
              <Radiobox
                label={item.title}
                name={item.title}
                className={styles.radiobox}
                disabled={!item.canUse}
                checked={item.selected}
                onChange={(event: ChangeEvent<HTMLInputElement>) => (handleChange(index))}
              />
              {item.description ? (
                <div style={{ paddingLeft: "31.5px", paddingBottom: "9px" }}>
                  <p>{item.description}</p>
                </div>
              ) :
                <></>
              }
            </>
          )
          )}
        </RadioGroup>
      </div>

      <button className={cn(styles.selectionColleagues__button, styles.selectionColleagues__button_green)}  onClick={handleClickButton}>
        Искать
      </button>
    </div>
  );
};

export default SelectionColleaguesPage;


