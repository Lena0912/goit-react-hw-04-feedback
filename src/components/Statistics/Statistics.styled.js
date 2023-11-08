import styled from 'styled-components';

export const StatisticContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  color: #17b1fe;
  :nth-child(1) {
    color: #87b877;
  }
  :nth-child(2) {
    color: #cdcf72;
  }
  :nth-child(3) {
    color: #d16969;
  }
`;

export const StatisticName = styled.p`
  font-weight: 600;
`;

export const StatisticResult = styled.span`
  :nth-child(1) {
    color: ${p => p.theme.colors.white};
  }
`;
