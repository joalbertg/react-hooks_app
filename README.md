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
│   │   └── 03-examples
│   │       ├── MultipleCustomHooks.js
│   │       └── hooks.css
│   ├── hooks
│   │   ├── useCounter.js
│   │   ├── useFetch.js
│   │   └── useForm.js
│   └── index.js
└── yarn.lock

6 directories, 19 files
```

### Start project

> run `docker-compose up`

