import { AzureFunction, Context } from "@azure/functions";

const httpTrigger: AzureFunction = async (context: Context): Promise<void> => {
  const options = [" נ (Nun)", " ג (Gimmel)", " ה (Hay)", " ש (Shin)"];
  const id = Math.floor(Math.random() * (options.length - 1));
  const random = options[id];

  context.res = {
    status: 200,
    body: random
  };
};

export default httpTrigger;
