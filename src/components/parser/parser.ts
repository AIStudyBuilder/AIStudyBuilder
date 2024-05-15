import { z } from 'zod';
import { zu } from 'zod_utilz';

const dialogMessageSchema = z.object({
  i: z.string(),
  r: z.string(),
});

export const parseBotReply = (str: string) => {
  try {
    const parsingResult = zu
      .stringToJSON()
      .transform((v) => dialogMessageSchema.safeParse(v))
      .safeParse(`${str}`);

    if (parsingResult.success && parsingResult.data.success) return parsingResult.data.data;

    return str;
  } catch (error) {
    return new Error('Parsing error');
  }
};
