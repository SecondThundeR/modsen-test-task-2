import { z } from "zod";

export const parseResponse = async <T extends z.ZodType<any, any>>(
  data: unknown,
  schema: T,
): Promise<z.infer<T>> => {
  const parsedRes = await schema.parseAsync(data);
  return parsedRes;
};
