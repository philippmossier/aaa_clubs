# how to run this app

1. `git clone git@github.com:philippmossier/all_about_clubs.git`
2. `cd all_about_clubs`
3. `npm install`
4. `npm run`

Used Versions:

- node 15.6.0
- npm 7.4.0

---

## Description

Habe ca. 8Std gebraucht, muss aber auch sagen das ich die Gelegenheit genutzt habe ein paar neue Dinge auszuprobieren.

Probleme gabs mit der fehlenden Id am Club. Nen index dafür zu verwenden is nicht gerade schön, aber hab mich hier an die Angabe gehalten.
Data fetching is auch suboptimal da aktuell nichts gecached wird und ich beim aufruf beider Pages (ClubDetailsPage und ClubListPage) jedes mal ein neuer request an die API abgesetzt wird.
Caching würd ich lieber mit nextjs oder react-query lösen oder das Club-Array in einem global state/store speichern. Wollte mir aber bei so einem kleinen Projekt jetzt nicht zu viele Dependencies reinholen.
Bei der HTML/CSS Aufteilung in der ClubDetails Komponente hab ich zwischen zwei sections einen header womit ich noch etwas unzufrieden bin das kann man noch verbessern.

Vom coding Stil her habe ich bewusst verschiedene patterns bei der struktur der Komponenten verwendet, um zu zeigen wie flexibel man mit tailwind ist.

## Dynamic Component Example

Man könnte die Komponenten auch dynamischer strukturieren (Was aber dann schon sehr in Richtung Design-System geht)

```js
<Button size="sm" textColor="white" bgColor="blue-500">Enable</Button>
```

Was dann bei der Implementierung mit tailwind dann in etwa so aussehen könnte.

```js
import classnames from 'classnames';
function Button ({size, value, bgColor, textColor, children}) {
    return (
        <button className={classnames("bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded", {
    "text-xs": size === 'sm'
    "text-xl": size === 'lg',
    })}>
        {children}
    </button>
    )
};
export default Button;
```

---

## How i installed this app (bash history)

- `npx create-react-app all_about_clubs --template typescript --use-npm`
- `npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
- `npm install @craco/craco`
- `npx tailwindcss init`
- `npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react prettier eslint-config-prettier eslint-plugin-prettier`
- ...
