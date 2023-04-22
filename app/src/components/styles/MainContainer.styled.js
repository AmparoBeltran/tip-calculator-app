import styled from "styled-components";

export const MainContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px 20px 0 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1em;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    border-radius: 20px;
    display: grid;

    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    max-width: 70%;
    padding: 2em;
    gap: 2em;
  }

  label {
    font-size: 0.6em;
  }

  .label {
    display: flex;
    justify-content: space-between;
    small {
      color: orangered;
      font-size: 0.6em;
    }
  }
  input {
    border: none;
    background-color: ${({ theme }) => theme.colors.veryLightGrayishCyan};
    border-radius: 5px;
    padding: 0.5em;
    :focus-visible {
      outline-color: ${({ theme }) => theme.colors.strongCyan};
    }
    &:invalid {
      outline-color: orangered;
      border: 1px solid orangered;
    }
  }

  p {
    font-size: 0.6em;
    margin: 0;
  }

  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .bill,
  .people {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }
  .tip {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    input {
      font-family: "Space Mono", monospace;
      font-size: 1em;
      padding: 0.5em 0.8em 0.5em 0.5em;
      text-align: end;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, calc(50% - 0.25em));
      grid-template-rows: auto;
      gap: 0.5em;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        grid-template-columns: repeat(3, calc(33% - 0.25em));
        grid-template-rows: auto;
      }

      button {
        font-size: 0.9em;
        font-weight: 700;
        background-color: ${({ theme }) => theme.colors.veryDarkCyan};
        color: ${({ theme }) => theme.colors.white};
        border: none;
        border-radius: 5px;
        padding: 0.5em;
        font-family: "Space Mono", monospace;

        &.selected {
          background-color: hsl(172 67% 70% / 1);
          color: ${({ theme }) => theme.colors.veryDarkCyan};
        }
      }
    }
  }

  .total {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 1em;
    gap: 0.5em;
    background-color: ${({ theme }) => theme.colors.veryDarkCyan};
    .tip-amount,
    .total-amount {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .tip-person,
    .total-person {
      display: flex;
      flex-direction: column;
    }
    p {
      font-size: 0.6em;
      color: ${({ theme }) => theme.colors.white};
    }
    span {
      font-size: 0.6em;
    }
    h3 {
      font-size: 1.8em;
      margin: 0;
    }
    h3,
    span {
      color: ${({ theme }) => theme.colors.strongCyan};
    }
    button {
      border: none;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.veryDarkCyan};
      font-weight: 700;
      background-color: ${({ theme }) => theme.colors.strongCyan};
      padding: 0.5em;
      font-size: 0.9em;
      font-family: "Space Mono", monospace;
      margin-top: auto;

      :hover {
        background-color: hsl(172 67% 70% / 1);
      }
    }
  }

  .dollar,
  .person {
    background-repeat: no-repeat;
    text-indent: 20px;
    background-position-y: center;
    background-position-x: 10px;
    text-align: end;
    color: ${({ theme }) => theme.colors.veryDarkCyan};
    font-size: 1em;
    font-weight: 700;
    font-family: "Space Mono", monospace;
  }

  .dollar {
    background-image: url("/images/icon-dollar.svg");
  }

  .person {
    background-image: url("/images/icon-person.svg");
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 30%;
    align-self: center;
    padding-block: 2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 5%;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 3em;
  }
`;
