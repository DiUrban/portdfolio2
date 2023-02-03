"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 7963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./config/nodemailer.ts

const email = process.env.EMAILUSER;
const pass = process.env.EMAILPASS;
const transporter = external_nodemailer_default().createTransport({
    host: "smtp.ionos.co.uk",
    port: 587,
    secure: false,
    auth: {
        user: email,
        pass: pass
    }
});
const mailOptions = {
    from: email,
    to: process.env.SENTTOEMAIL
};

;// CONCATENATED MODULE: ./pages/api/contact.ts

const handler = async (req, res)=>{
    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.email) {
            return res.status(400).json({
                message: "Bad Request"
            });
        }
        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: data.subject,
                text: "This is test string",
                html: `${data.name} has sent you a message regarding ${data.subject}.
         The message reads as: 
         ${data.message}
         Their contact email is ${data.email}`
            });
            return res.status(200).json({
                sucess: true
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
    return res.status(400).json({
        message: "Bad Request"
    });
};
/* harmony default export */ const contact = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7963));
module.exports = __webpack_exports__;

})();