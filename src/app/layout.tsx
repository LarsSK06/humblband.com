import IParentProps from "@/types/IParentProps";
import Header from "@/components/Header";

import { ColorSchemeScript, createTheme, mantineHtmlProps, MantineProvider } from "@mantine/core";
import { Metadata } from "next";
import { currentLanguage, t } from "@/utils/translation";

import "@/css/globals.css";
import "@mantine/core/styles.css";

export const metadata = {
    title: t("metadataTitle"),
    description: t("metadataDesc"),
    keywords: ["music", "band", "humbl", "Lars Synslien Kvihaugen", "Lars S.K."],
    creator: "Lars Synslien Kvihaugen",
    icons: "/icon.svg"
} satisfies Metadata;

export default async ({ children }: IParentProps) => {

    const theme = createTheme({ primaryColor: "pink" });

    return (
        <html lang={currentLanguage} {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider theme={theme} forceColorScheme="dark">
                    <Header />
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
};