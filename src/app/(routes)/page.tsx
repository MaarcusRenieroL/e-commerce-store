import { Billboard } from "~/components/sections/billboard";
import { Container } from "~/components/container";

export default function Home() {
  const billboard = {
    billboardId: "1",
    billboardLabel: "Billboard Label",
    imageUrl: "../../../public/placeholder.svg",
  };

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={billboard} />
      </div>
    </Container>
  );
}
