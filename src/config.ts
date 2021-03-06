const redirectTo = process.env.REDIRECT_TO || "http://localhost:3000";
const beURL = process.env.BE_BASEURL || "http://localhost:5000";

export const spidConfig = {
  extraProviders: [
    {
      active: true,
      entityID: "xx_testenv2",
      entityName: "Test ID",
      protocols: ["SAML"],
    },
  ],
  mapping: {
    "https://posteid.poste.it": "posteid",
  },
  method: "GET",
  selector: "#spid-button",
  supported: [
    "https://loginspid.aruba.it",
    "https://identity.infocert.it",
    "https://posteid.poste.it",
    "https://identity.sieltecloud.it",
    "https://login.id.tim.it/affwebservices/public/saml2sso",
    "https://idp.namirialtsp.com/idp",
    "https://spid.register.it",
    "https://spid.intesa.it",
    "https://id.lepida.it/idp/shibboleth",
  ],
  url: `${beURL}/login?entityID={{idp}}&redirectTo=${redirectTo}`,
};
