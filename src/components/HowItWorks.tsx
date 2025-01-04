import React from 'react';
import styled from 'styled-components';
import ArrowImage1 from '../images/arrow1.png';
import ArrowImage2 from '../images/arrow2.png';
import ArrowImage3 from '../images/arrow3.png';
import Image1 from '../images/add-friend 1.png';
import Image2 from '../images/gift-card 1.png';
import Image3 from '../images/goal 2.png';
import Image4 from '../images/pay-per-click 1.png';
import EllipseImage from '../images/Ellipse 1.png'; // Import ellipse image

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 15px;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 28px; /* Reduce title size */
    margin-bottom: 50px; /* Adjust spacing */
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack steps vertically */
    gap: 50px; /* Adjust gap between steps */
  }
`;

const StepWrapper = styled.div<{ offset?: number }>`
  transform: translateY(${props => props.offset || 0}px);

  @media (max-width: 768px) {
    transform: none; /* Remove offset for smaller screens */
  }
`;

const Arrow = styled.img`
  position: absolute;
  width: 150px;
  height: auto;

  @media (max-width: 1040px) {
    display: none; /* Hide arrows on smaller screens */
  }
`;

const Ellipse = styled.div`
  width: 140px;
  height: 140px;
  background-image: url(${EllipseImage});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top */
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding-top: 10px;

  @media (max-width: 768px) {
    width: 100px; /* Reduce ellipse size */
    height: 100px;
  }
`;

const StepImage = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 10px;
  z-index: 2;

  @media (max-width: 768px) {
    width: 30px; /* Reduce image size */
    height: 30px;
  }
`;

const StepText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-align: center;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 14px; /* Reduce text size */
    margin-top:25px;
  }
`;
const StepText1 = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-align: center;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 14px; /* Reduce text size */
    margin-top:0px;
  }
`;

const HowItWorks: React.FC = () => {
  return (
    <Container>
      <Title>How It Works</Title>
      <StepsContainer>
        <StepWrapper offset={203}>
          <Ellipse>
            <StepImage src={Image3} alt="Set your goal" />
            <StepText className="mt-12">Step 1:</StepText>
            <StepText1>Set your goal</StepText1>
          </Ellipse>
        </StepWrapper>
        <Arrow className="top-24" src={ArrowImage1} style={{ left: '130px' }} />
        <StepWrapper offset={50}>
          <Ellipse>
            <StepImage src={Image1} alt="Create or Join Group" />
            <StepText className="mt-12">Step 2:</StepText>
            <StepText1>Create or Join Group</StepText1>
          </Ellipse>
        </StepWrapper>
        <Arrow className="top-24" src={ArrowImage2} style={{ left: '425px' }} />
        <StepWrapper offset={110}>
          <Ellipse>
            <StepImage src={Image4} alt="Pay amount on time" />
            <StepText className="mt-12">Step 3:</StepText>
            <StepText1>Pay amount on time</StepText1>
          </Ellipse>
        </StepWrapper>
        <Arrow className="top-40" src={ArrowImage3} style={{ left: '720px' }} />
        <StepWrapper offset={34}>
          <Ellipse>
            <StepImage src={Image2} alt="Earn Rewards" />
            <StepText className="mt-12">Step 4:</StepText>
            <StepText1>Earn Rewards</StepText1>
          </Ellipse>
        </StepWrapper>
      </StepsContainer>
    </Container>
  );
};

export default HowItWorks;
