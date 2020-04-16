import React from "react";
import axios from "axios";

export const useImageHook = (url: string, deps: any[] = []) => {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    axios.get(url).then((data) => {
      setData(data.data);
      setLoading(false);
    });
  }, deps);

  return [data, loading];
};
