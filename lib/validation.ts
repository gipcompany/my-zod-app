import { z } from "zod";

const hexRegex = /^0x[a-f0-9]+$/i;

const UserSchema = z.object({
  name: z.string().min(1, "名前は必須で、1文字以上である必要があります"),
  age: z.number().int().positive("年齢は正の整数である必要があります"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  walletAddress: z
    .string()
    .regex(hexRegex, "walletAddressはhex形式である必要があります"),
});

const sampleData = {
  name: "Taro",
  age: 25,
  email: "taro@example.com",
  walletAddress: "0x1234567890aBcDef",
};

try {
  UserSchema.parse(sampleData);
  console.log("バリデーション成功");
} catch (e) {
  console.error("バリデーションエラー:", e.errors);
}
