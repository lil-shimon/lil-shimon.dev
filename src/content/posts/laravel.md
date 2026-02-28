---
title: 久しぶりにLaravel/PHPを書いて感じたこと
date: 2026-02-28
description: LaravelがTypeScriptフレームワークででたら使いたい
---

Laravelは以前に2年半ほど実務で使っていた。  
当時は結構好きだった。  

だけど久しぶりに触って、少し意見が変わった。  

先に良かったことは、Laravelの仕様が大きく変わっていなかったこと。  
そのおかげでLaravel6を触っていたエンジニアでも特別に大きなキャッチアップをせずともLaravel12をいじることができた。  
もちろん新しく追加されている機能で面白そうなのもあったので進化が止まっているわけじゃないと思う。  
結構Laravelに載せるフロントエンド側の進化がされているなと感じた。  
だけどここら辺はさらっと触るだけだとブラックボックス感がすごいなと感じたのであまり使われていないんじゃないかなと予測。  
bladeのように管理画面とかをサクッと作るのには良いのかな？という感じ。だけどそれならbladeでいいんじゃない？とも思う  
→ `Wayfinder`, `Inertia`らへんのことを言っています。  

あとはAIに結構力を入れていることかな。  
`laravel new`で新しいプロジェクトをセットアップしていたら最後にAIのSKILLを作成するかとかMCPの設定を追加するか？というオプションが表示された。  
Yesを選択するだけで使えそうなSKILLやMCPが設定される。（Claude Codeはもちろん、CodexやGemini、Cursorなど大体思いつくものは設定できる）  

> laravel boost

https://github.com/laravel/boost

こんな感じでMCPを使いつつ実装していってくれる
```
⏺ laravel-boost - database-schema (MCP)(filter: "wallet_tokens", include_column_details: true)
  ⎿  {
       "engine": "sqlite",
       "tables": {
     … +58 lines (ctrl+o to expand)

⏺ laravel-boost - list-artisan-commands (MCP)
  ⎿  [{"name":"_complete","description":"Internal command to provide shell completion suggestions"},{"name":"about","descr
     iption":"Display basic information about your application"},{"name":"auth:clear-resets","description":"Flush expired
     password reset tokens"},{"name":"boost:add-skill","description":"Add skills from a remote GitHub repository"},{"name"
     … +100 lines (ctrl+o to expand)

⏺ Bash(php artisan make:migration add_usdt_value_to_wallet_tokens_table --no-interaction)
```

ここからはもうあんまり書きたくないなと思った理由。  
これはLaravelの問題じゃないと思うけど。  
普段はTSをメインで使っている自分からすると型がないのがこれほど辛いと思わなかった。  
interfaceを使えばある程度どのようなメソッドが入っているとかがわかるが、配列とかを操作する時に中にどのような値が入っているかがわかりづらい。  

バックエンドなので配列を操作する場面が多いと思うけど、中身がどのような構造になっているかを常に意識しないと容易に壊れてしまうのがきつい。  

あとスコープがとても曖昧なこと。  
たとえばif文の中で定義した変数もif外のスコープからアクセスできる。  
これがだいぶ許せなかった。  

```php
if () {
    $var = 'xxx';
} else {
    $var = 'yyy';
}

print($var);
```

最終的に思ったけど、Laravelは結構良さそう。  
不満を持っているのはPHPの言語仕様。  

あと結構MCPのセットアップをしてくれて〜〜とかある程度自動で生成してくれて〜〜とかに感動をしてしまったということは案外自分はEasyさも好きなのかもしれない。
だけどブラックボックスは嫌いです。

