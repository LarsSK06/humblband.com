import no from "./languages/no";
import en from "./languages/en";

export let currentLanguage = "no";

const langs = { no, en } as { [key: string]: { [key: string]: string } };

export const t = (phrase: string) => {
    if (!(currentLanguage in langs))
        return phrase;

    if (!(phrase in langs[currentLanguage]))
        return phrase;

    return langs[currentLanguage][phrase];
};