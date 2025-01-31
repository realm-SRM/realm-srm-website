const loadCashfree = (callback) => {
    if (window.Cashfree) {
        callback(window.Cashfree);
        return;
    }

    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;
    script.onload = () => {
        if (window.Cashfree) {
            callback(window.Cashfree);
        }
    };

    document.body.appendChild(script);
};

export default loadCashfree;
