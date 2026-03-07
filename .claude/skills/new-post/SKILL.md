---
name: new-post
description: Create new post from template. 「新しい投稿を作成する」「/new-post」「記事を作成したい」などで起動。新しい記事を作成するために雛形を作成する。
tools: Read
---

下記の手順に従い、指定されたファイル名で新しい記事を作成していくための雛形を用意する。

手順
1. ファイル名を特定する。ファイル名はユーザーから引数で受け取ります。
2. `/contents/posts/<ファイル名>.md`を作成する。
3. 実行した日付を取得する。`date +%Y-%m-%d` コマンドで取得すること。
4. 下記をマークダウンファイルの先頭に追加する

```md
---
title:
date: 取得した日付
description:
isDraft: true
---
```
