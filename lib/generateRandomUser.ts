export const generateRandomUsername = (length = 8) => {
    const adjectives = [
        "Horrible",
        "Heroico",
        "Fantástico",
        "Genial",
        "Impresionante",
        "Elegante",
        "Poderoso",
        "Magnífico",
        "Maravilloso",
        "Brillante",
        "Encantador",
        "Increíble",
    ]
    const nouns = [
        "Estrella",
        "Topo",
        "Leon",
        "Dragón",
        "Espada",
        "Guerrero",
        "Soldado",
        "Caballero",
        "Rey",
        "Hermano",
        "Hermana",
        "Niño",
        "Niña",
        "Reyna"
    ]

    const randomItem = (array: string[]) => array[Math.floor(Math.random() * array.length)];

    let username = "";
    username += randomItem(adjectives);
    username += randomItem(nouns);
    username += Math.floor(Math.random() * 1000);

    if(username.length < length) {
        username = username.substring(0, length);
    }

    return username;
}