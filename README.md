# Hooks

- [The Breaking Bad API][breakingbadapi]
- [useLayoutEffect][uselayouteffect]

[breakingbadapi]: https://breakingbadapi.com/documentation
[uselayouteffect]: https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect

### Installs

With `package.json` and dependencies
```shell
docker-compose run app yarn
```

### Project Structure

> run `tree -I "node_modules|public"`
```shell
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── src
│   ├── HookApp.js
│   ├── components
│   │   ├── 01-useState
│   │   │   ├── CounterApp.js
│   │   │   ├── CounterWithCustomHook.js
│   │   │   └── counter-app.css
│   │   ├── 02-useEffect
│   │   │   ├── FormWithCustomHook.js
│   │   │   ├── Message.js
│   │   │   ├── SimpleForm.js
│   │   │   └── effects.css
│   │   ├── 03-examples
│   │   │   ├── MultipleCustomHooks.js
│   │   │   └── hooks.css
│   │   ├── 04-useRef
│   │   │   ├── FocusScreen.js
│   │   │   ├── RealExampleRef.js
│   │   │   └── focus.css
│   │   ├── 05-useLayoutEffect
│   │   │   ├── Layout.js
│   │   │   └── layout.css
│   │   ├── 06-memos
│   │   │   ├── CallbackHook.js
│   │   │   ├── MemoHook.js
│   │   │   ├── Memorize.js
│   │   │   ├── ShowIncrement.js
│   │   │   ├── Small.js
│   │   │   └── memo.css
│   │   └── 07-tarea-memo
│   │       ├── Hijo.js
│   │       ├── Padre.js
│   │       └── styles.css
│   ├── helpers
│   │   └── heavyProcess.js
│   ├── hooks
│   │   ├── useCounter.js
│   │   ├── useFetch.js
│   │   └── useForm.js
│   └── index.js
└── yarn.lock

11 directories, 34 files
```

### Start project

> run `docker-compose up`

