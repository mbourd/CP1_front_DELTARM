import styled from 'styled-components';

const CommentRejectControlStyled = styled.div((props) => {
  return {
    position: 'relative',
    maxWidth: '70%',
    margin: 'auto',

    '& .MuiSvgIcon-root:hover': {
      color: 'inherit',
      cursor: 'inherit',
    },
  };
});

export { CommentRejectControlStyled };
