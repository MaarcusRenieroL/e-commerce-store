"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import qs from "query-string";
import { Color, Size } from "~/lib/types";
import { Button } from "~/components/ui/button";

type Props = {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
};

export const Filter: FC<Props> = ({ valueKey, name, data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      {
        skipNull: true,
      },
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              variant={selectedValue === filter.id ? "default" : "outline"}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
