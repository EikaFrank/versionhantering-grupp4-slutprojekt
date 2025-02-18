// Thien (group 5) - converts any URLs in the text to clickable links
export function getTextAndConvertToLink(trimmedText) {
    const pattern = /(https?\:\/\/)?(www\.)?[^\s]+\.[^\s]+/g;
    return trimmedText.replace(pattern, (matched) => {
        let withProtocol = matched;
        if (!withProtocol.startsWith("http")) {
            withProtocol = "http://" + matched;
        }
        return `<a class="text-link" href="${withProtocol}" target="_blank">${matched}</a>`;
    });
}