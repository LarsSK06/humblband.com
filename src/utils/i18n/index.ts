// Imports

import { IAny } from "../types";

import no from "./langs/no.json";



// Variables

export const langs: IAny = { no };
export const defaultLang: string = "en";

export let lang: string =
    window.localStorage.getItem("lang")
    ?? defaultLang;



// Functions

export function t(phrase: string): string{
    if(lang == defaultLang)
        return phrase;

    if(!(lang in langs))
        return phrase;

    if(!(phrase in langs[lang]))
        return phrase;

    return langs[lang][phrase];
}