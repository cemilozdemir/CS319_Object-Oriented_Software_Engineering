function importAll(r) {
    let mapped = r.keys().map(r);
    let withID = {};
    r.keys().forEach((el, index) => {
        let ID = el.substring(2);
        ID = ID.substring(0, ID.indexOf("."));
        ID = ID.toUpperCase();
        withID[ID] = mapped[index];
    });
    return withID;
}

export const SportActivityImages = importAll(
    require.context(
        "./SportActivityImages",
        false,
        /\.(png|jpe?g|svg|webp|cms)$/
    )
);
