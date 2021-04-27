import React from 'react';
import { List } from 'rsuite';

import { CourtForm } from '../containers';
import { CourtRow } from '../components';

function Courts(props) {
  const { allCourts, currentUser, remove, history } = props;

  return (
    <List hover>
      {currentUser && currentUser.role === 'admin' ? (
        <div style={{ textAlign: 'right', margin: 20 }}>
          {<CourtForm btnTxt='Заал нэмэх' />}
        </div>
      ) : null}
      {allCourts.map((item, index) => {
        return (
          <CourtRow
            court={item}
            index={index}
            remove={remove}
            loading={props.loading}
            history={history}
            currentUser={currentUser}
          />
        );
      })}
    </List>
  );
}

export default Courts;
