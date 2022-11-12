import styled from "styled-components";

const StyledImg = styled.img`
  max-height: 300px;
  object-fit: cover;
  max-width: 150px;
  width: 100%;
  height: 230px;
  @media (max-width: 767px) {
    max-width: unset;
    width: 100%;
    object-position: top;
  }
`;

const StyledDiv = styled.div`
  .flip {
    perspective: 600px;
  }

  .active .flip-content {
    transform: rotateY(180deg);
    transition: transform 1s;
  }

  .flip-content {
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  .flip-front,
  .flip-back {
    backface-visibility: hidden;
  }
  .flip-back {
    transform: rotateY(180deg);
  }
  .acive.flip-content.flip-front {
    position:absolute;
  }
  .active.flip-content.back{
    position:unset;
  }
`;

export { StyledImg, StyledDiv };
