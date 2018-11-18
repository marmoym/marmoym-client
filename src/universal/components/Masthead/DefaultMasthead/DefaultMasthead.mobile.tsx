import * as React from 'react';
import styled from 'styled-components';

import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';
import MastheadBase from '@components/Masthead/MastheadBase/MastheadBase.mobile';
import SearchMasthead from '@components/Masthead/SearchMasthead/SearchMasthead.mobile';

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.div`
  cursor: pointer;
  height: 100%;
  padding: 0 4px;
  margin: 0 4px;
`;

const Logo = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const DefaultMasthead = ({
  query,
  handleChangeQuery,
  handleClickHamburger,
  handleClickLeftArrow,
  handleClickMarmoymLogo,
  handleClickPencil,
  handleClickSearch,
  handleKeyDown,
  isSearching,
  modalIsVisible,
  searchRequested,
}) => {
  return (
    <MastheadBase>
      <ButtonGroup>
        {isSearching ? (
          <SearchMasthead 
            handleChangeQuery={handleChangeQuery}
            handleClickLeftArrow={handleClickLeftArrow}
            handleKeyDown={handleKeyDown}
            query={query}
          />
        ): (
          <Button onClick={handleClickMarmoymLogo}>
          <Logo>Language Project</Logo>
          </Button>
        )}
      </ButtonGroup>
      <ButtonGroup>
        <Button onClick={handleClickSearch}>
          <Facon label="search"/>
        </Button>
        <Button onClick={handleClickPencil}>
          <Facon label="pencil-square"/>
        </Button>
        <Button onClick={handleClickHamburger}>
          <Facon label="bars"/>
        </Button>
      </ButtonGroup>
    </MastheadBase>
  );
};

export default DefaultMasthead;
