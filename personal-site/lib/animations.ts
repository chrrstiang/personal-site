

export const rotation = (el:any) => {

    // possible titles being rotated
    const titles: string[] = [
        "Student",
        "Powerlifter",
        "Programmer",
        "Entrepreneur"
    ];

    // tracks index of title
    let titleIndex: number = 0;

    // changeMessage displays the text content of the titleIndex, then updates it to the next one
    function changeMessage(el:any): void {
        const titleElement = el;
        if (titleElement) {
            titleElement.textContent = titles[titleIndex];
        }
        titleIndex = (titleIndex + 1) % titles.length;

        setInterval(changeMessage, 200);
    }
}