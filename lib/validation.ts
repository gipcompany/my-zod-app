import { z } from "zod";

// ユーザースキーマを定義
const UserSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  age: z.number().int().positive("年齢は正の整数である必要があります"),
  email: z.string().email("有効なメールアドレスを入力してください"),
});

// サンプルデータ
const sampleData = {
  name: "Taro",
  age: 25,
  email: "taro@example.com",
};

// バリデーションの実行
try {
  UserSchema.parse(sampleData);
  console.log("バリデーション成功");
} catch (e) {
  console.error("バリデーションエラー:", e.errors);
}
