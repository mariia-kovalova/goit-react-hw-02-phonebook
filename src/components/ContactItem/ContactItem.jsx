import { StyledButton } from 'components/GlobalStyles.styled';
import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <StyledButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </StyledButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
