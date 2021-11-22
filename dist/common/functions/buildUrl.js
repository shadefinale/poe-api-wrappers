"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildURL = void 0;
const url_1 = require("url");
function buildURL(url, optionalParameters, defaults, additionalParameters) {
    const urlObj = new url_1.URL(url);
    if (optionalParameters && defaults) {
        for (const key in defaults) {
            if (optionalParameters[key] == null) {
                optionalParameters[key] = defaults[key];
            }
        }
    }
    if (optionalParameters == null && defaults) {
        optionalParameters = defaults;
    }
    if (optionalParameters != null) {
        for (const [key, value] of Object.entries(optionalParameters)) {
            if (value != null) {
                urlObj.searchParams.append(key, value);
            }
        }
    }
    if (additionalParameters) {
        for (const key in additionalParameters) {
            urlObj.searchParams.append(key, additionalParameters[key]);
        }
    }
    return urlObj;
}
exports.buildURL = buildURL;
