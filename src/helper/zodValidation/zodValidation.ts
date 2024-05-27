import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z
    .string()
    .length(10, "Телефонный номер должен содержать ровно 10 цифр")
    .regex(/^\d{10}$/, "Телефонный номер должен содержать только цифры"),
  peopleCount: z.coerce
    .number()
    .gte(1, { message: "Количество участников должно быть не меньше 1" })
    .lte(10, { message: "Максимальное количество участников 10" }),
});

export default schema;
