App({
    cards:[ 
      {
        "section": "A",
        "name": "Apple iCloud",
        "amount": 50.00
      },
      {
        "section": "A",
        "name": "Astro",
        "amount": 50.00
      },
      {
        "section": "C",
        "name": "Celcom",
        "amount": 50.00
      },
      {
        "section": "D",
        "name": "Discord Nitro",
        "amount": 50.00
      },
      {
        "section": "L",
        "name": "LinkedIn Premium",
        "amount": 50.00
      },
      {
        "section": "N",
        "name": "Netflix",
        "amount": 20.00
      },
      {
        "section": "S",
        "name": "Spotify Premium",
        "amount": 30.00
      },
      {
        "section": "Y",
        "name": "Youtube Premium",
        "amount": 50.00
      },
      {
        "section": "Z",
        "name": "Zoom",
        "amount": 50.00
      },
  ],

  add( item ){
    cards.concat(item);
  },

  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);

      my.getAuthCode({
        scopes: ['auth_user'],
        success: authcode => {
          console.info(authcode);

          my.getAuthUserInfo({
            success: res => {
              this.userInfo = res;
              resolve(this.userInfo);
            },
            fail: () => {
              reject({});
            },
          });
        },
        fail: () => {
          reject({});
        },
      });
    });
  },

  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  onShow(options) {
    console.log('on Show');
    // Reopened by scheme from the background
  },
});
