export default {
    type: 'card',

    // Settings
    keypadFix: true,
    rootNode: null,
    loadingContext: null,
    brands: [],
    allowedDOMAccess: false,
    showWarnings: false,
    autoFocus: true,
    trimTrailingSeparator: true,

    // Events
    onChange: () => {},
    onLoad: () => {},
    onConfigSuccess: () => {},
    onAllValid: () => {},
    onFieldValid: () => {},
    onBrand: () => {},
    onError: () => {},
    onBinValue: () => {},
    onFocus: () => {},
    onAutoComplete: () => {},
    onTouchstartIOS: () => null,

    // Customization
    styles: {}
};
