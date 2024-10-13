// Imports

import { t } from "../../../../utils/i18n";

import Button from "./Button";



// Component

export default (): React.ReactNode => (
    <>
        <Button href="/">
            {t("Home")}
        </Button>
    </>
);