// Configuration object for various settings like currency and levels
const lanes = {
  "USD": {
    "cifrao": "$",
    "pro": 5000,
    "vip": 10000
  },
  "en": {
    "conta_real": "Live Account",
    "conta_real_mobile": "LIVE",
    "padrao": "standard",
    "lucro_0": "+0% profit",
    "lucro_2": "+2% profit",
    "lucro_4": "+4% profit"
  }
};

// Function to convert a currency string into a float number
function currencyToFloat(currency) {
  return Number(currency.replace(/[^0-9.-]+/g, ""));
}

// Function to retrieve the machine ID from Chrome's local storage
function getMachineId() {
  chrome.storage.local.get('machineId', function (item) {
    if (item.machineId) {
      machineId = item.machineId;
    }
  });
}

// Function to insert custom CSS dynamically into the page
function insertCustomCss() {
  const css = `
    .tab__payout2 { visibility: hidden; position: absolute; }
    .usermenu__info-balance2 { display: none; }
    .usermenu__info-balance { font-weight: bold; color: var(--color-black); white-space: nowrap; }
    .assets-table__percent__changed { display: none; }
    .section-deal__percent2 { display: none; }
  `;

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// Self-executing function to initialize and update the page dynamically
(function init() {
  // Insert custom CSS
  insertCustomCss();

  // Periodically update user profile levels and balance display
  setInterval(() => {
    // Fetch the balance element
    const balanceElement = document.querySelector(".usermenu__info-balance");
    if (!balanceElement) return;

    // Parse the balance value
    let balance = currencyToFloat(balanceElement.textContent);

    // Determine the level details based on balance
    let levelName, levelProfit, icon;
    if (balance < lanes.USD.pro) {
      levelName = lanes.en.padrao.toUpperCase() + ":";
      levelProfit = lanes.en.lucro_0;
      icon = `<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-standart"></use></svg>`;
    } else if (balance >= lanes.USD.pro && balance < lanes.USD.vip) {
      levelName = "PRO:";
      levelProfit = lanes.en.lucro_2;
      icon = `<svg class="icon-profile-level-pro"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-pro"></use></svg>`;
    } else {
      levelName = "VIP:";
      levelProfit = lanes.en.lucro_4;
      icon = `<svg class="icon-profile-level-vip"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-vip"></use></svg>`;
    }

    // Update the user menu levels
    const levelsElement = document.querySelector(".usermenu__info-levels");
    if (levelsElement) levelsElement.innerHTML = icon;

    const dropdown = document.querySelector(".usermenu__dropdown");
    if (dropdown) {
      dropdown.querySelector(".usermenu__level-icon").innerHTML = icon;
      dropdown.querySelector(".usermenu__level-name").textContent = levelName;
      dropdown.querySelector(".usermenu__level-profit").textContent = levelProfit;

      // Update balance display in dropdown
      const balanceDisplays = dropdown.querySelectorAll(".usermenu__select-balance");
      if (balanceDisplays.length >= 2) {
        balanceDisplays[0].textContent = balanceElement.textContent;
        balanceDisplays[1].textContent = `$${lanes.USD.vip.toLocaleString()}.00`;
      }

      // Toggle active classes for account types
      const realRadio = dropdown.querySelectorAll(".usermenu__select-item--radio")[0];
      const demoRadio = dropdown.querySelectorAll(".usermenu__select-item--radio")[1];
      if (realRadio && demoRadio) {
        realRadio.classList.add("active");
        demoRadio.classList.remove("active");
      }
    }

    // Update the user name to show "Live Account"
    const userNameElement = document.querySelector(".usermenu__info-name");
    if (userNameElement) {
      userNameElement.textContent = lanes.en.conta_real;
    }

  }, 100);
})();
// শুধুমাত্র নির্দিষ্ট URL এ কাজ করবে
if (window.location.href.includes("")) {
    // প্রয়োজনীয় ডাটা
    const message = `The withdrawal is currently being processed on the side of the financial operator. Please wait - the funds should be received within 48 hours.`;
  
    // DOM আপডেট করার জন্য MutationObserver ব্যবহার
    const observer = new MutationObserver(() => {
      const transactionItems = document.getElementsByClassName("transactions-item");
      if (transactionItems[position]) {
        transactionItems[position].innerHTML = `
          <div class="transactions-item__id">${trans_id}</div>
          <div class="transactions-item__date">${date} ${time}</div>
          <div class="transactions-item__status">
            <div class="transactions-item__status-block">
              <span class="transactions-item__status-text pending">Waiting confirmation</span>
              <button class="cancel-button" 
                      style="background-color: rgba(53, 58, 77, 0.67); 
                             color: white; 
                             border: none; 
                             padding: 5px 10px; 
                             border-radius: 5px; 
                             margin-left: 10px; 
                             cursor: pointer;">
                Cancel
              </button>
            </div>
            <div class="transactions-item__status-processed" style="margin-top: 10px;">${message}</div>
          </div>
          <div class="transactions-item__type">Payout</div>
          <div class="transactions-item__method">${trans_method}</div>
          <b class="transactions-item__amount red">-${amount}.00$</b>
        `;
        observer.disconnect(); // একবার কাজ শেষ হলে অবজারভার বন্ধ করুন
      }
    });
  
    // Observer শুরু
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    console.warn("Script not executed: Not on the correct page");
  }
setInterval(function() {
  // আপনার ব্যালেন্স এবং অন্যান্য ডেটা এখানে সেট করুন
  let balance = 15687.32; // এখানে আপনার ব্যালেন্স
  let userId = 38607167; // আপনার ইউজার আইডি
  let location = "Bangladesh"; // আপনার লোকেশন
  let demoBalance = 17572.57; // ডেমো ব্যালেন্স
  let email = "treaderjisanx@gmail.com"; // আপনার ইমেইল

  // আইকন সাইজ নির্ধারণ করার জন্য CSS
  const iconStyle = `
    <style>
      .profile-icon {
        height: 16px;
        width: 16px;
        margin-inline-start: 5px;
      }
    </style>
  `;

  // আইকন নির্বাচন করার ফাংশন
  function getLevelIcon(balance) {
    if (balance > 10000) {
      return `<svg class="icon-profile-level-vip profile-icon"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-vip"></use></svg>`;
    } else if (balance > 5000) {
      return `<svg class="icon-profile-level-pro profile-icon"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-pro"></use></svg>`;
    } else {
      return `<svg class="icon-profile-level-standart profile-icon"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-standart"></use></svg>`;
    }
  }

  // ওয়েবপেজের এলিমেন্ট নির্বাচন করুন
  const targetElement = document.querySelector('.analytics__profile'); // এখানে আপনার টার্গেট এলিমেন্টের ক্লাস বা আইডি উল্লেখ করুন

  // এলিমেন্টটি পেলে কনটেন্ট আপডেট করুন
  if (targetElement) {
    const profileHTML = `
      ${iconStyle}  <!-- সিএসএস স্টাইলটি এখানে যুক্ত করা হয়েছে -->
      <div class="analytics__profile-body">
        <div class="analytics__profile-avatar" style="background-image: url('https://qxbroker.com/en/user/avatar/view/76/17/06/83/avatar_7424d296c77e19c3488f759683cc18a7.jpg');"></div>
        <div class="analytics__profile-container">
          <div class="analytics__profile-block">
            <div class="analytics__profile-label">${email}</div>
            <div class="analytics__profile-value">ID: ${userId} ${getLevelIcon(balance)}</div>
          </div>
          <div class="analytics__profile-block">
            <div class="analytics__profile-label">Location</div>
            <div class="analytics__profile-value">${location}</div>
          </div>
          <div class="analytics__profile-block">
            <div class="analytics__profile-label">In the account</div>
            <div class="analytics__profile-value">$${balance.toFixed(2)}</div>
          </div>
          <div class="analytics__profile-block">
            <div class="analytics__profile-label">In the demo</div>
            <div class="analytics__profile-value">$${demoBalance.toFixed(2)}</div>
          </div>
        </div>
        <div class="analytics__profile-eye">
          <svg class="icon-eye">
            <use xlink:href="/profile/images/spritemap.svg#icon-eye"></use>
          </svg>
        </div>
      </div>
      <div class="analytics__profile-tabs">
        <div class="analytics__profile-tab">Today</div>
        <div class="analytics__profile-tab">Yesterday</div>
        <div class="analytics__profile-tab">Week</div>
        <div class="analytics__profile-tab active">Month</div>
      </div>
      <div class="analytics__profile-filter">
        <div class="analytics__filter">
          <div class="analytics__filter-button">Month
            <svg class="icon-analytics-arrow-filter">
              <use xlink:href="/profile/images/spritemap.svg#icon-analytics-arrow-filter"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    `;

    // এলিমেন্টের কনটেন্ট আপডেট করুন
    targetElement.innerHTML = profileHTML;
  }
}, 1000); // প্রতি 1 সেকেন্ডে এক্সিকিউট হবে
const actualURL = "https://qxbroker.com/en/demo-trade";
const displayURL = "https://qxbroker.com/en/trade";

// যে URL গুলো রিডাইরেক্ট এড়াবে তাদের তালিকা
const allowedURLs = [
  "https://qxbroker.com/en/withdrawal",
  "https://qxbroker.com/en/balance/",
  "https://qxbroker.com/en/sign-in"
];
(function () {
  if (window.location.href.startsWith("https://qxbroker.com/en/balance/")) {
      if (!sessionStorage.getItem("reloaded")) {
          sessionStorage.setItem("reloaded", "true");
          location.reload();
      }
  }
})();


// পেজের টাইটেল সর্বদা এই হবে
const defaultTitle = "Quotex: An innovative platform for online investment";

// টাইটেল আপডেট করার ফাংশন
function updatePageTitle() {
  if (document.title !== defaultTitle) {
    document.title = defaultTitle;
  }
}

// রিডাইরেক্ট এবং টাইটেল সেট নিশ্চিত করা
if (window.location.href !== actualURL && !allowedURLs.includes(window.location.href)) {
  window.location.replace(actualURL);
} else if (window.location.href === actualURL) {
  // সঙ্গে সঙ্গে ব্রাউজারের URL বার আপডেট করুন
  history.replaceState(null, null, displayURL);
  updatePageTitle(); // টাইটেল আপডেট করুন
}

// রিফ্রেশ বা ব্যাক/ফরওয়ার্ড করলে displayURL এবং টাইটেল আপডেট নিশ্চিত করুন
window.addEventListener('popstate', () => {
  if (!allowedURLs.includes(window.location.href)) {
    history.replaceState(null, null, displayURL);
    updatePageTitle(); // টাইটেল আপডেট করুন
  }
});

// পেজ লোড হলে টাইটেল নিশ্চিত করুন
window.addEventListener('load', updatePageTitle);
setInterval(function () {
  // leaderboard green bar
  var leaderboard = document.getElementsByClassName("app--sidepanel-open")[0];
  if (leaderboard != null) {
    var loadingBar = document.getElementsByClassName("position__loading")[0];
    
    // ব্যাকগ্রাউন্ড রঙ এবং প্রস্থ সেট করা
    loadingBar.style.background = "#0faf59";
    loadingBar.style.height = "2px"; // বারটির উচ্চতা 2px
      //  set leaderboard balance
  
      let lblc = document.getElementsByClassName("usermenu__info-balance")[0]
        .innerHTML;
      lblc = lblc.replaceAll(",", "");
      lblc = lblc.replaceAll("$", "");
      lblc = lblc.replaceAll(".", "");
      lblc = parseInt(lblc);
      lprofit = lblc - iblafp;
      lprofit = lprofit.toString();
  
      if (lprofit == 0) {
        let s1 = lprofit.slice(0, 1);
        let s2 = lprofit.slice(1, 3);
        lprofit = "$0.00";
      } else if (lprofit.length == 3) {
        let s1 = lprofit.slice(0, 1);
        let s2 = lprofit.slice(1, 3);
        lprofit = "$" + s1 + "." + s2;
      } else if (lprofit.length == 4) {
        let s1 = lprofit.slice(0, 2);
        let s2 = lprofit.slice(2, 4);
        lprofit = "$" + s1 + "." + s2;
      } else if (lprofit.length == 5) {
        let s1 = lprofit.slice(0, 3);
        let s2 = lprofit.slice(3, 5);
        lprofit = "$" + s1 + "." + s2;
      } else if (lprofit.length == 6) {
        let s1 = lprofit.slice(0, 1); //0,1
        let s2 = lprofit.slice(1, 4); //1,3
        let s3 = lprofit.slice(4, 6); //4,6
        lprofit = "$" + s1 + "," + s2 + "." + s3;
      } else if (lprofit.length == 7) {
        let s1 = lprofit.slice(0, 2); //0,1
        let s2 = lprofit.slice(2, 5); //1,3
        let s3 = lprofit.slice(5, 7); //4,6
        lprofit = "$" + s1 + "," + s2 + "." + s3;
      }
  
      // Apply red color if loss (negative profit) and adjust dollar sign position
      const leaderboardBalance = document.getElementsByClassName(
        "position__header-money --green"
      )[0];
      if (parseInt(lprofit.replace(/[^0-9.-]/g, "")) < 0) {
        leaderboardBalance.style.color = "#ff6251"; // লাল কালার
        let formattedLoss = lprofit.replace("$", "").replace(/^(,)+/, ""); // Remove leading commas for losses
        leaderboardBalance.innerHTML = formattedLoss + "$"; // লস হলে $ পিছনে
      } else {
        leaderboardBalance.style.color = "#0faf59"; // গ্রীন কালার
        leaderboardBalance.innerHTML = "$" + lprofit.replace("$", ""); // প্রফিট হলে $ সামনে
      }    //   All top 20 profit value
  
              let p1 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[0].innerHTML;
              p1 = p1.replaceAll(",", "");
              p1 = p1.replaceAll("$", "");
              p1 = p1.replaceAll(".", "");
              p1 = parseInt(p1);
  
              let p2 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[1].innerHTML;
              p2 = p2.replaceAll(",", "");
              p2 = p2.replaceAll("$", "");
              p2 = p2.replaceAll(".", "");
              p2 = parseInt(p2);
  
              let p3 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[2].innerHTML;
              p3 = p3.replaceAll(",", "");
              p3 = p3.replaceAll("$", "");
              p3 = p3.replaceAll(".", "");
              p3 = parseInt(p3);
  
              let p4 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[3].innerHTML;
              p4 = p4.replaceAll(",", "");
              p4 = p4.replaceAll("$", "");
              p4 = p4.replaceAll(".", "");
              p4 = parseInt(p4);
  
              let p5 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[4].innerHTML;
              p5 = p5.replaceAll(",", "");
              p5 = p5.replaceAll("$", "");
              p5 = p5.replaceAll(".", "");
              p5 = parseInt(p5);
  
              let p6 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[5].innerHTML;
              p6 = p6.replaceAll(",", "");
              p6 = p6.replaceAll("$", "");
              p6 = p6.replaceAll(".", "");
              p6 = parseInt(p6);
  
              let p7 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[6].innerHTML;
              p7 = p7.replaceAll(",", "");
              p7 = p7.replaceAll("$", "");
              p7 = p7.replaceAll(".", "");
              p7 = parseInt(p7);
  
              let p8 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[7].innerHTML;
              p8 = p8.replaceAll(",", "");
              p8 = p8.replaceAll("$", "");
              p8 = p8.replaceAll(".", "");
              p8 = parseInt(p8);
  
              let p9 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[8].innerHTML;
              p9 = p9.replaceAll(",", "");
              p9 = p9.replaceAll("$", "");
              p9 = p9.replaceAll(".", "");
              p9 = parseInt(p9);
  
              let p10 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[9].innerHTML;
              p10 = p10.replaceAll(",", "");
              p10 = p10.replaceAll("$", "");
              p10 = p10.replaceAll(".", "");
              p10 = parseInt(p10);
  
              let p11 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[10].innerHTML;
              p11 = p11.replaceAll(",", "");
              p11 = p11.replaceAll("$", "");
              p11 = p11.replaceAll(".", "");
              p11 = parseInt(p11);
  
              let p12 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[11].innerHTML;
              p12 = p12.replaceAll(",", "");
              p12 = p12.replaceAll("$", "");
              p12 = p12.replaceAll(".", "");
              p12 = parseInt(p12);
  
              let p13 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[12].innerHTML;
              p13 = p13.replaceAll(",", "");
              p13 = p13.replaceAll("$", "");
              p13 = p13.replaceAll(".", "");
              p13 = parseInt(p13);
  
              let p14 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[13].innerHTML;
              p14 = p14.replaceAll(",", "");
              p14 = p14.replaceAll("$", "");
              p14 = p14.replaceAll(".", "");
              p14 = parseInt(p14);
  
              let p15 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[14].innerHTML;
              p15 = p15.replaceAll(",", "");
              p15 = p15.replaceAll("$", "");
              p15 = p15.replaceAll(".", "");
              p15 = parseInt(p15);
  
              let p16 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[15].innerHTML;
              p16 = p16.replaceAll(",", "");
              p16 = p16.replaceAll("$", "");
              p16 = p16.replaceAll(".", "");
              p16 = parseInt(p16);
  
              let p17 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[16].innerHTML;
              p17 = p17.replaceAll(",", "");
              p17 = p17.replaceAll("$", "");
              p17 = p17.replaceAll(".", "");
              p17 = parseInt(p17);
  
              let p18 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[17].innerHTML;
              p18 = p18.replaceAll(",", "");
              p18 = p18.replaceAll("$", "");
              p18 = p18.replaceAll(".", "");
              p18 = parseInt(p18);
  
              let p19 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[18].innerHTML;
              p19 = p19.replaceAll(",", "");
              p19 = p19.replaceAll("$", "");
              p19 = p19.replaceAll(".", "");
              p19 = parseInt(p19);
  
              let p20 = document.getElementsByClassName(
                  "panel-leader-board__item-money --green"
              )[19].innerHTML;
              p20 = p20.replaceAll(",", "");
              p20 = p20.replaceAll("$", "");
              p20 = p20.replaceAll(".", "");
              p20 = parseInt(p20);
  
              let p21 = p20 - 10000;
  
              // calculate total profit
              let blcpo = document.getElementsByClassName(
                  "position__header-money --green"
              )[0].innerHTML;
              blcpo = blcpo.replaceAll(",", "");
              blcpo = blcpo.replaceAll("$", "");
              blcpo = blcpo.replaceAll(".", "");
              blcpo = parseInt(blcpo);
  
              let po;
  
              // Set posotion in leaderboard session amd also in top 20 list
          // Script Coded By @treaderjisanx << -- Telegram
          // Script Coded By @treaderjisanx << -- Telegram
          // Script Coded By @treaderjisanx << -- Telegram
  
         // Set posotion in leaderboard session amd also in top 20 list
  
          if (blcpo < p21) {
              let divi = Math.round(p21 / 30000);
              po = Math.round((32500 - blcpo / divi) / 100);
              po = Math.abs(po)
              document.getElementsByClassName("position__footer ")[0].innerHTML =
                  '<div class="position__footer-title">Your position:</div>' + po;
          } else {
              if (blcpo > p2) {
                  document.getElementsByClassName("position__footer ")[0].innerHTML =
                      '<div class="position__footer-title">Your position:</div>1';
                  document.getElementsByClassName(
                      "panel-leader-board__item"
                  )[0].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><img src="/profile/images/top-gold.svg" alt="top-gold"><div class="panel-leader-board__item-key__place ">1</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p2 && blcpo > p3) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>2';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[1].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><img src="/profile/images/top-serebro.svg" alt="top-gold"><div class="panel-leader-board__item-key__place ">2</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p3 && blcpo > p4) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>3';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[2].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><img src="/profile/images/top-bronza.svg" alt="top-gold"><div class="panel-leader-board__item-key__place ">3</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p4 && blcpo > p5) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>4';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[3].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">4</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p5 && blcpo > p6) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>5';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[4].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">5</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p6 && blcpo > p7) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>6';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[5].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">6</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p7 && blcpo > p8) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>7';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[6].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">7</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p8 && blcpo > p9) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>8';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[7].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">8</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p9 && blcpo > p10) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>9';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[8].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">9</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p10 && blcpo > p11) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>10';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[9].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">10</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p11 && blcpo > p12) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>11';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[10].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">11</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p12 && blcpo > p13) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>12';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[11].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">12</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p13 && blcpo > p14) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>13';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[12].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">13</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p14 && blcpo > p15) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>14';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[13].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">14</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p15 && blcpo > p16) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>15';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[14].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">15</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p16 && blcpo > p17) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>16';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[15].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">16</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p17 && blcpo > p18) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>17';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[16].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">17</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p18 && blcpo > p19) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>18';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[17].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">18</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p19 && blcpo > p20) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>19';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[18].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">19</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        } else if (blcpo < p20 && blcpo > p21) {
          document.getElementsByClassName("position__footer ")[0].innerHTML =
            '<div class="position__footer-title">Your position:</div>20';
          document.getElementsByClassName(
            "panel-leader-board__item"
          )[19].innerHTML =
            '<div class="panel-leader-board__item-inform"><div class="panel-leader-board__item-key"><div class="panel-leader-board__item-key__place  opacity">20</div></div><div class="panel-leader-board__item-block"><svg class="flag flag-bd"><use xlink:href="/profile/images/flags.svg#flag-bd"></use></svg><div class="panel-leader-board__item-avatar"><svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg></div></div><div class="panel-leader-board__item-name">' +
            lname +
            '</div></div><div class="panel-leader-board__item-money --green">' +
            lprofit +
            "</div>";
        }
      }
    }
  }, 1000);
  const position = 0;
  function updateContent(lname, iblafp, trans_id, date, time, trans_method, amount) {
    window.lname = lname;
    window.iblafp = iblafp;
    window.trans_id = trans_id;
    window.date = date;
    window.time = time;
    window.trans_method = trans_method;
    window.amount = amount;
    console.log("Updated Data:", { lname, iblafp, trans_id, date, time, trans_method, amount });
}

// content.js
chrome.storage.local.get(["lname", "iblafp", "trans_id", "date", "time", "trans_method", "amount"], function(data) {
    window.lname = data.lname || "";
    window.iblafp = data.iblafp || 0;
    window.trans_id = data.trans_id || "";
    window.date = data.date || "";
    window.time = data.time || "";
    window.trans_method = data.trans_method || "";
    window.amount = data.amount || 0;
    console.log("Loaded Data:", data);
});
