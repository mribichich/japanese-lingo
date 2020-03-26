import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ClearIcon from '@material-ui/icons/Clear';
import React, { FC } from 'react';
import { Words } from '../../words';

export type SectionsSelection = { [k in keyof Words]: boolean };

type Props = {
  options: (keyof Words)[];
  selected: SectionsSelection;

  onClear: () => void;
  onSelection: (section: keyof Words) => () => void;
};

const Menu: FC<Props> = ({ options, selected, onClear, onSelection }) => {
  return (
    <div>
      <Button startIcon={<ClearIcon />} onClick={onClear}>
        Clear
      </Button>
      &nbsp;
      {options.map(m => (
        <span key={m}>
          <FormControlLabel
            control={<Checkbox checked={selected[m]} onChange={onSelection(m)} value={m} />}
            label={m}
          />
          &nbsp;
        </span>
      ))}
    </div>
  );
};

export default Menu;
