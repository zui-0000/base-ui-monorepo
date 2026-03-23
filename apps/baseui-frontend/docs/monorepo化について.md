# monorepo化について

## 概要

このプロジェクトでは、`apps/baseui-frontend` 内に直接置かれていた UI コンポーネント群を、`packages/ui` という独立したパッケージとして切り出す対応を行った。

---

## 背景・目的

もともと UI コンポーネント（Button、Checkbox、Input など）は `apps/baseui-frontend/src/components/ui/` 以下に配置されていた。これらをアプリ側に直接持つ構成では、将来的に別アプリが同じコンポーネントを使いたい場合にコピーが発生してしまう。

monorepo のメリットを活かして `packages/ui` に切り出すことで、以下を実現する：

- 複数アプリ間でのコンポーネント共有
- UI ロジックの一元管理
- アプリ側コードのシンプル化

---

## 変更内容

### 削除されたファイル（apps/baseui-frontend 側）

```
src/components/ui/Button/index.tsx
src/components/ui/Checkbox/index.tsx
src/components/ui/Input/index.tsx
src/components/ui/RadioGroup/index.tsx
src/components/ui/Select/index.tsx
```

### 追加されたパッケージ（packages/ui）

```
packages/ui/
├── package.json
└── src/
    ├── index.ts                   # 各コンポーネントの re-export
    ├── lib/
    │   └── utils.ts               # cn() ユーティリティ
    └── components/
        ├── Button/index.tsx
        ├── Checkbox/index.tsx
        ├── Input/index.tsx
        ├── RadioGroup/index.tsx
        └── Select/index.tsx
```

---

## packages/ui の設計

### package.json

```json
{
  "name": "@packages/ui",
  "exports": {
    ".": "./src/index.ts"
  },
  "peerDependencies": {
    "@base-ui/react": "*",
    "react": "*",
    "react-dom": "*"
  },
  "dependencies": {
    "clsx": "catalog:dependencies"
  }
}
```

**ポイント：**

- `@base-ui/react`、`react`、`react-dom` は `peerDependencies` に指定している。これらはアプリ側（`baseui-frontend`）がすでに持っているため、`packages/ui` 側では重複してインストールしない設計にしている。
- `clsx` は `packages/ui` 内で直接使うため `dependencies` に含める。

### src/index.ts（公開 API）

```ts
export { Button } from "./components/Button";
export { Checkbox } from "./components/Checkbox";
export { Input } from "./components/Input";
export { RadioGroup } from "./components/RadioGroup";
export { Select } from "./components/Select";
export { cn } from "./lib/utils";
```

`index.ts` に使用する API をまとめて re-export することで、利用側は `@packages/ui` からまとめて import できる。

---

## アプリ側（baseui-frontend）の変更

### package.json への追加

```json
"dependencies": {
  "@packages/ui": "workspace:*",
  ...
}
```

`workspace:*` は pnpm の workspace プロトコル。ローカルの `packages/ui` を参照する。

### import の変更

変更前：

```tsx
import { Button } from "~/components/ui/Button";
import { Checkbox } from "~/components/ui/Checkbox";
// ...
```

変更後：

```tsx
import { Button, Checkbox, Input, RadioGroup, Select } from "@packages/ui";
```

---

## pnpm-workspace.yaml との関係

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

`packages/*` が workspace に含まれているため、`@packages/ui` を `workspace:*` で参照できる。バージョン管理は `catalogs` で一元化されており、各パッケージは `catalog:dependencies` のように参照することでバージョンの重複・ズレを防いでいる。
