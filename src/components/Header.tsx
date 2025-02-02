"use client";

import useAnchorRouter from "@/hooks/useAnchorRouter";

import { t } from "@/utils/translation";
import { Button, Container, Paper } from "@mantine/core";
import { IconQuestionMark } from "@tabler/icons-react";

type TButton = [string, string];

export default () => {

    const buttons = [
        [t("about"), "/"]
    ] as TButton[];

    const onLinkClick = useAnchorRouter();

    return (
        <Paper component="header" withBorder shadow="lg" style={{ borderTop: "none", borderRight: "none", borderLeft: "none" }}>
            <Container size="md">
                <ul className="w-full py-4 flex justify-between items-center">
                    <li>
                        <Button
                            href="/"
                            component="a"
                            variant="transparent"
                            h="fit-content"
                            p="xs"
                            aria-label={t("home")}
                            title={t("home")}
                        >
                            <img className="h-10" src="/logo.svg" />
                        </Button>
                    </li>

                    {buttons.map(([name, href]: TButton) => (
                        <li key={href}>
                            <Button
                                leftSection={<IconQuestionMark aria-hidden={true} height={20} />}
                                onClick={onLinkClick}
                                key={href}
                                href={href}
                                component="a"
                                variant="subtle"
                                size="lg"
                            >
                                {name}
                            </Button>
                        </li>
                    ))}
                </ul>
            </Container>
        </Paper>
    );
};