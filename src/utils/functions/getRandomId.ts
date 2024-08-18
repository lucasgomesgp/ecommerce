import { v4 as uuidv4 } from "uuid";

export function getRandomId(id: string | number) {
  let randomId = `${crypto.randomUUID()}-${id}-${uuidv4()}`;
  return randomId;
}
