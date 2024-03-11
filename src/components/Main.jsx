import { Container } from "react-bootstrap";
import TheIceAge from "./TheIceAge";
import LordOfTheRings from "./LordOfTheRings";
import TheChroniclesOfNarnia from "./TheChroniclesOfNarnia";

function Main() {
  return (
    <>
      <Container>
      <h5 className="text-light fs-2">The Ice Age</h5>
        <TheIceAge />
      </Container>

      <Container>
      <h5 className="text-white fs-2">Lord Of The Rings</h5>
        <LordOfTheRings />
      </Container>

      <Container>
      <h5 className="text-white fs-2">The Chronicles Of Narnia</h5>
        <TheChroniclesOfNarnia />
      </Container>
    </>
  );
}

export default Main;
