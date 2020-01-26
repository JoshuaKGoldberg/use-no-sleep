# use-no-sleep

[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-00aa00.svg)](https://prettier.io)
![TypeScript: Strict](https://img.shields.io/badge/typescript-strict-00aa00.svg)
[![Circle CI](https://img.shields.io/circleci/build/github/JoshuaKGoldberg/use-no-sleep.svg)](https://circleci.com/gh/JoshuaKGoldberg/use-no-sleep)

**[NoSleep.js](https://github.com/ViRPo/NoSleep.js)**, in [React Hooks](https://reactjs.org/docs/hooks-intro.html) form.
Use this hook to take your `enabled` state and translate it into NoSleep.js `enable`/`disable` calls.

## Usage

Import with either a named or default export:

```ts
import { useNoSleep } from "use-no-sleep";
import useNoSleep from "use-no-sleep";
```

`useNoSleep` takes in a single parameter, `enabled`, of type `boolean`.

```ts
useNoSleep(enabled);
```

### FAQs

#### Why NoSleep.js?

The [Wake Lock API](https://web.dev/wakelock) is not yet standardized or ready for browsers to implement.
Until then, NoSleep.js provides a workaround by playing a short silent video in the background.

#### Which NoSleep.js Version Does This Use?

This repository uses the [ViRPo fork](https://github.com/ViRPo/NoSleep.js) of the original [richtr/NoSleep.js](https://github.com/richtr/NoSleep.js) to help reduce CPU usage.
See https://github.com/richtr/NoSleep.js/issues/77.

## Development

Thanks so much for contributing! 💖

Here are the steps to set this up locally:
You probably want to develop with this locally:

```shell
git clone https://github.com/JoshuaKGoldberg/use-no-sleep
cd use-no-sleep
npm i
```
