import { Element } from "@prisma/client";

export function countTypeElement(elements: Element[]) {

    let wordpress = 0;
    let google = 0;
    let email = 0;

    elements.forEach((element) => {
        const type = element.typeElement;
        switch (type) {
            case "Wordpress":
                return wordpress++;
            case "Google Drive":
                return google++;
            case "Email":
                return email++;
            default:
                break;
        }
    });

    return {
        wordpress, google, email
    };
}