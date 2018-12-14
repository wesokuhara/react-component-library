import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const RowItem = styled.li`
  height: 16px;
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 5px;

  &:not(:first-child) {
    margin-top: 14px;
  }

  &:last-child {
    width: 75%;
  }
`;

const Title = styled(RowItem)`
  width: 40%;
  margin-bottom: 20px;
`;

const activeAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const activeStyles = css`
  ${RowItem}, ${Title} {
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    animation: ${activeAnimation} 3s ease infinite;
    background-size: 400% 100%;
  }
`;

const RowList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${p => p.active && activeStyles}
`;

const Skeleton = ({ loading, active, numRows, hasTitle, children }) => {
  if (!loading) {
    return children;
  }

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(<RowItem key={i} />)
    }
    return rows;
  }

  return (
    <RowList active={active}>
      {hasTitle && <Title />}
      {renderRows()}
    </RowList>
  );
}

Skeleton.defaultProps = {
  numRows: 3,
  loading: true,
  active: false,
  hasTitle: false,
};

export default Skeleton;
