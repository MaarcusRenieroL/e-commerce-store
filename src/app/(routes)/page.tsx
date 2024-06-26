import { Billboard } from "~/components/sections/billboard";
import { Container } from "~/components/container";
import { BILLBOARDS, PRODUCTS } from "~/lib/constants";
import { Products } from "~/components/sections/product";

export default function Home() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard billboard={BILLBOARDS[0]} />
        <Products products={PRODUCTS} />
      </div>
    </Container>
  );
}
