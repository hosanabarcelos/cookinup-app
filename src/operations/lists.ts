export function itemOfList(list01: unknown[], lista2: unknown[]) {
    return list01.every((itemList01) => lista2.includes(itemList01));
}