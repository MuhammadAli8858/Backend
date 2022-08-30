import styled from "styled-components";

export const Blok = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 500px;
  height: 400px;
  margin: 7% 31%;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.85);
  border: 0px solid rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  top: 0;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const Component = styled.div``;

export const Video = styled.div``;

export const H1 = styled.div`
  color: #18a0fb;
  text-indent: 15px;
  margin-top: 64px;
  margin-left: 15px;
  border-color: #18a0fb;
  font-family: "Silkscreen", cursive;
`;

export const Input = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 43px;
`;
export const InputName = styled.div`
  justify-content: center;
  align-items: center;
`;

export const InputFirstName = styled.input`
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid white;
  padding: 5px 5px;
  color: #18a0fb;
  margin-bottom: 10px;
  border-radius: 1px;
  width: 200px;
  font-family: "Silkscreen", cursive;
`;
export const InputLastName = styled.input`
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid white;
  padding: 5px 5px;
  border-radius: 1px;
  color: #18a0fb;
  margin-bottom: 10px;
  margin-right: 5px;
  width: 200px;
  font-family: "Silkscreen", cursive;
`;
export const InputEmail = styled.input`
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid white;
  padding: 5px 5px;
  display: flex;
  border-radius: 1px;
  color: #18a0fb;
  margin-left: 32px;
  margin-bottom: 10px;
  width: 430px;
  font-family: "Silkscreen", cursive;
`;
export const InputPassword = styled.input`
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid white;
  padding: 5px 5px;
  display: flex;
  margin-left: 32px;
  border-radius: 1px;
  color: #18a0fb;
  margin-bottom: 10px;
  width: 430px;
  font-family: "Silkscreen", cursive;
`;
export const Button = styled.button`
  background: #18a0fb;
  border-radius: 6px;
  padding: 11px 34px;
  margin: 20px 10px 20px 32px;
  border-color: #18a0fb;
  color: white;
  font-family: "Silkscreen", cursive;
  :active {
    transform: scale(0.9);
    transition: all 0.1s linear;
  }
`;
