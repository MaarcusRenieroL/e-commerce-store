import { FC } from "react";
import { Billboard as BillboardType } from "~/lib/types";

type Props = {
  billboard: BillboardType;
};

export const Billboard: FC<Props> = ({ billboard }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{
          backgroundImage:
            "url('https://utfs.io/f/bda6cc49-e3a7-4496-b34a-917a02c83aa9-mi9bnt.png')",
        }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl text-white sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {billboard.billboardLabel}
          </div>
        </div>
      </div>
    </div>
  );
};
