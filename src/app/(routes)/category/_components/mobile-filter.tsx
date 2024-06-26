import { PlusCircleIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Color, Size } from "~/lib/types";
import { Filter } from "./filter";
import { COLORS, SIZES } from "~/lib/constants";

type Props = {
  sizes: Size[];
  colors: Color[];
};

export const MobileFilter: FC<Props> = ({ sizes, colors }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-x-2 lg:hidden">
            Filters <PlusCircleIcon size={20} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Filters</DialogTitle>
          <DialogDescription>Choose filters</DialogDescription>
          <Filter valueKey="sizeId" name="Sizes" data={SIZES} />
          <Filter valueKey="colorId" name="Colors" data={COLORS} />
        </DialogContent>
      </Dialog>
    </>
  );
};
