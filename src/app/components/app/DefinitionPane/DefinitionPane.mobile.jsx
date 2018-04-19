import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '@styles/styles';
import Color from '@constants/Color';
import Locale from '@containers/LocaleContainer/LocaleContainer';
import Lower from './Lower/Lower.mobile';
import { resolveNames, withProps } from '@src/styles/styleUtils';
import Upper from './Upper/Upper.mobile';

const Label = styled.div``;
const Usage = styled.div``;
const Pos = styled.div``;
const ExtResource = styled.div``;

const StyledDefinitionPane = styled.div`
  margin-top: 5px;
  padding: 8px 0px;
  color: ${Color.BLACK5};
  background-color: ${Color.WHITE3};
  border: 1px solid #c5b9ce;
`;

const Body = styled.div`
  padding: 9px 12px;a
`;

const renderUsages = (usages) => {
  return usages.map((usage) => {
    return <Usage key={usage.id}>{usage.label}</Usage>;
 });
};

const renderPoss = (poss) => {
  return poss.map((pos, idx) => {
    return <Pos key={idx}>{pos.label}</Pos>;
  });
};

const DefinitionPane = (props) => {
  const { Definition } = props;
  return (
    <StyledDefinitionPane>
      <Upper
        defId={Definition.get('id')}
        badges={''}
        user={Definition.get('$user')}
        term={Definition.get('$term')}
        handleClickTerm={props.handleClickTerm}/>
      <Body>
        <div>{renderPoss(Definition.get('poss'))}</div>
        <Label>
          <span>{Definition.get('label')}</span>
        </Label>
        <div>
          {renderUsages(Definition.get('usages'))}
        </div>
        <ExtResource>{''}</ExtResource>
      </Body>
      <Lower
        upvote={''}
        downvote={''}/>
    </StyledDefinitionPane>
  );
};

export default DefinitionPane;
