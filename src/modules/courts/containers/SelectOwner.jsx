import SelectWithSearch from 'erxes-ui/lib/components/SelectWithSearch';
import * as React from 'react';
import { queries } from '../graphql';

// get config options for react-select-plus
export function generateUserOptions(array) {
  return array.map(item => {
    const user = item || {};

    return {
      value: user._id,
      label: user.firstName
    };
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  queryParams,
  onSelect,
  initialValue,
  multi = true,
  label,
  name
}) => {
  const defaultValue = queryParams ? queryParams[name] : initialValue;

  return (
    <SelectWithSearch
      showAvatar={false}
      label={label}
      queryName='users'
      name={name}
      customQuery={queries.users}
      initialValue={defaultValue}
      generateOptions={generateUserOptions}
      onSelect={onSelect}
      multi={multi}
    />
  );
};
