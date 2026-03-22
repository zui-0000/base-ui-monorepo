import { useState } from "react";
import { Button } from "~/components/ui/Button";
import { Checkbox } from "~/components/ui/Checkbox";
import { Input } from "~/components/ui/Input";
import { RadioGroup } from "~/components/ui/RadioGroup";
import { Select } from "~/components/ui/Select";

const genderItems = [
  { label: "男性", value: "male" },
  { label: "女性", value: "female" },
  { label: "その他", value: "other" },
];

const prefectureItems = [
  { label: "北海道", value: "hokkaido" },
  { label: "東京都", value: "tokyo" },
  { label: "神奈川県", value: "kanagawa" },
  { label: "大阪府", value: "osaka" },
  { label: "愛知県", value: "aichi" },
  { label: "福岡県", value: "fukuoka" },
  { label: "沖縄県", value: "okinawa" },
];

export default function UserPage() {
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    console.log("送信データ:", data);
    alert(`登録完了\n\n${JSON.stringify(data, null, 2)}`);
  }

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">ユーザー情報登録</h1>

        <form action={handleSubmit} className="flex flex-col gap-6">
          <fieldset className="flex flex-col gap-1">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-900">
              姓
            </label>
            <Input id="lastName" name="lastName" placeholder="山田" required />
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-900">
              名
            </label>
            <Input id="firstName" name="firstName" placeholder="太郎" required />
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-900">
              メールアドレス
            </label>
            <Input id="email" name="email" type="email" placeholder="taro@example.com" required />
          </fieldset>

          <fieldset className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-sm font-medium text-gray-900">
              電話番号
            </label>
            <Input id="phone" name="phone" type="tel" placeholder="090-1234-5678" />
          </fieldset>

          <RadioGroup name="gender" label="性別" items={genderItems} defaultValue="male" />

          <Select name="prefecture" label="都道府県" items={prefectureItems} />

          <Checkbox
            name="agreement"
            label="利用規約に同意する"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
          />

          <Button type="submit" disabled={!agreed} className="mt-2">
            登録する
          </Button>
        </form>
      </div>
    </div>
  );
}
