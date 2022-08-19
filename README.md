# vitejs-vite-ngkqgb

Experimenting with Fomantic UI menus and how they need to be programmed in order for the 'active' class to be applied - spoiler: you need to add explicit javascript to do the work, unfortunately.

Also added vue router so that we can experiment with how fomantic menus might be used with routes.  Turns out that fomantic jquery event bindings get NUKED when you unmount and go to a different page route - which means you have to wire the fomantic stuff up again in the `onMounted(() => {...})` vue event for the component route page you are entering.  Of course events managed by vue don't need this manual shinnanigans e.g. `@click=""` thus  preferable.

But now we need to look at the automatic vue router active class (which is actually called `router-link-active`) and see how we can integrate that with fomantic menus.

Clues: https://stackoverflow.com/questions/46083220/how-to-vuejs-router-link-active-style <--- GREAT DOCO
`vue-router` automatically applies two active classes, `.router-link-active` and `.router-link-exact-active`, to the `<router-link>` component.

Probable solution: To change the class being applied, use the configuration e.g. `linkActiveClass: "active",` so that the fomantic compatible `active` class gets added instead of the default `router-link-exact-active` class which means nothing to fomantic.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-ngkqgb)