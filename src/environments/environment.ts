// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  mapbox: {
    accessToken: 'pk.eyJ1IjoibXZoYWRlbiIsImEiOiJja3poZDB0enQxOXR0MnVueWhyZ3JwcTBtIn0.REqPaUAimBK3TB2P9dSqNw'
  },
  googleMap: {
    apiKey: 'AIzaSyAp-au0nM_esKXU4E89iY1JmaeX43tCpS0'
  },

  // apiURL: "http://localhost:8080/api/v1/"
  apiURL: "https://rimcode-samsar.herokuapp.com/api/v1/"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
