let card = [
  {
    id: 1,
    name: "nfvo1",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 2,
    name: "nfvo2",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 3,
    name: "nfvo3",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 4,
    name: "nfvo4",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 5,
    name: "nfvo5",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 6,
    name: "nfvo6",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 7,
    name: "nfvo7",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 8,
    name: "nfvo8",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 9,
    name: "nfvo9",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 10,
    name: "nfvo10",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 11,
    name: "nfvo11",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 12,
    name: "nfvo12",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 13,
    name: "nfvo13",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 14,
    name: "nfvo14",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 15,
    name: "nfvo15",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 16,
    name: "nfvo16",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 17,
    name: "nfvo17",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 18,
    name: "nfvo18",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 19,
    name: "nfvo19",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 20,
    name: "nfvo20",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    id: 21,
    name: "nfvo21",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
];
/* Handle Card */

// renderCard = (cardInfo) => {
//   const monitor = document.createElement("p");
//   monitor.innerText = cardInfo.info4;
//   monitor.setAttribute("class", "accessory");

//   const ram = document.createElement("p");
//   ram.innerText = cardInfo.info1;
//   ram.setAttribute("class", "accessory");

//   const tbHDD = document.createElement("p");
//   tbHDD.innerText = cardInfo.info2;
//   tbHDD.setAttribute("class", "accessory");

//   const vCPU = document.createElement("p");
//   vCPU.innerText = cardInfo.info3;
//   vCPU.setAttribute("class", "accessory");

//   const imgMonitor = document.createElement("img");
//   imgMonitor.setAttribute(
//     "src",
//     "/assets/img/computer-monitor-svgrepo-com 1.svg"
//   );

//   const imgRam = document.createElement("img");
//   imgRam.setAttribute("src", "/assets/img/Vector.svg");

//   const imgComputerChip = document.createElement("img");
//   imgComputerChip.setAttribute("src", "/assets/img/computer-chip 1.svg");

//   const imgHardDrive = document.createElement("img");
//   imgHardDrive.setAttribute("src", "/assets/img/hard-drive 2.svg");

//   const divAccessoryItems = document.createElement("div");
//   divAccessoryItems.appendChild(imgComputerChip);
//   divAccessoryItems.appendChild(vCPU);
//   divAccessoryItems.setAttribute("class", "accessory__items__1");

//   const divAccessoryItems1 = document.createElement("div");
//   divAccessoryItems1.appendChild(imgRam);
//   divAccessoryItems1.appendChild(ram);
//   divAccessoryItems1.setAttribute("class", "accessory__items__1");

//   const divAccessoryItems3 = document.createElement("div");
//   divAccessoryItems3.appendChild(imgMonitor);
//   divAccessoryItems3.appendChild(monitor);
//   divAccessoryItems3.setAttribute("class", "accessory__items__1");

//   const divAccessoryItems2 = document.createElement("div");
//   divAccessoryItems2.appendChild(imgHardDrive);
//   divAccessoryItems2.appendChild(tbHDD);
//   divAccessoryItems2.setAttribute("class", "accessory__items__1");

//   const divAccessoryItemsRight = document.createElement("div");
//   divAccessoryItemsRight.appendChild(divAccessoryItems);
//   divAccessoryItemsRight.appendChild(divAccessoryItems2);
//   divAccessoryItemsRight.setAttribute("class", "accessory__items__right");

//   const divAccessoryItemsRight1 = document.createElement("div");
//   divAccessoryItemsRight1.appendChild(divAccessoryItems1);
//   divAccessoryItemsRight1.setAttribute("class", "accessory__items__1");

//   const divAccessoryItemsRight2 = document.createElement("div");
//   divAccessoryItemsRight2.appendChild(divAccessoryItems1);
//   divAccessoryItemsRight2.appendChild(divAccessoryItems3);

//   divAccessoryItemsRight2.setAttribute("class", "accessory__items__right");

//   const nfvo1 = document.createElement("p");
//   nfvo1.innerText = cardInfo.name;
//   nfvo1.setAttribute("class", "nfvo1");

//   const divTriangle = document.createElement("div");
//   divTriangle.setAttribute("class", "triangle-right");

//   const divRectangle = document.createElement("div");
//   divRectangle.appendChild(nfvo1);
//   divRectangle.setAttribute("class", "rectangle");

//   const divShape = document.createElement("div");
//   divShape.appendChild(divRectangle);
//   divShape.appendChild(divTriangle);

//   divShape.setAttribute("class", "shapes");

//   const divInfoItems = document.createElement("div");
//   divInfoItems.appendChild(divShape);
//   divInfoItems.appendChild(divAccessoryItemsRight);
//   divInfoItems.appendChild(divAccessoryItemsRight2);
//   divInfoItems.setAttribute("class", "info__items");

//   document.getElementById("root").appendChild(divInfoItems);
// };
/* Search */

const search = document.getElementById("search");

let search_item = "";

var showList = () => {
  let searchCard = card
    .filter((item) => {
      return item.name.toLowerCase().includes(search_item);
    })
    .map((e) => {
      return `
      <div class="info__items">
      <div class="shapes">
        <div class="rectangle">
          <p class="nfvo1">${e.name}</p>
        </div>
        <div class="triangle-right"></div>
      </div>
      <div class="accessory__items__right">
        <div class="accessory__items__1">
          <img src="/assets/img/computer-chip 1.svg" />
          <p class="accessory">${e.info1}</p>
        </div>
        <div class="accessory__items__1">
          <img src="/assets/img/hard-drive 2.svg" />
          <p class="accessory">${e.info2}</p>
        </div>
      </div>
      <div class="accessory__items__right">
        <div class="accessory__items__1">
          <img src="/assets/img/Vector.svg" />
          <p class="accessory">${e.info3}</p>
        </div>
        <div class="accessory__items__1">
          <img src="/assets/img/computer-monitor-svgrepo-com 1.svg" />
          <p class="accessory">${e.info4}</p>
        </div>
      </div>
    </div>
      `;
    })
    .join();

  document.getElementById("root").innerHTML = searchCard;
};
showList();

/* 
  Dùng filter trả về 1 callback để gọi lại object sau đó kiểm tra xem name có khớp với chuỗi hay không.
  Sau đó kiểm tra giá trị chữ thường có khớp với (includes ghi giá trị tìm kiếm hay không)
*/

// search.addEventListener("input", (event) => {
//   search_item = event.target.value.toLowerCase();
//   showList();
//   console.log(search_item);
// });

/*
Tối ưu với Debounce
  debounce sẽ return fn và fn sẽ không chạy cho đến khi debounce không được thực thi
  trong khoản thời gian delay. Nếu immediate là true, thì fn sẽ được thực thi ngay lặp tức
  rồi mới được debounced cho những lần tiếp theo.
*/
function debounce(fn, delay, immediate) {
  let timeout;

  // Đây là function sẽ được thực thi khi debouncedKeyUp được thực thi ở ví dụ trên
  return function executedFn() {
    // Mình save lại this vào biến context
    let context = this; // "this" context của executedFn

    // Save lại arguments vào args. Trong JS, arguments giữ giá trị của tất cả tham số được truyền vào cho một function.
    // Cho dù bạn không khai báo tham số cho một hàm, thì khi truyền tham số vào cho hàm đó, các bạn vẫn có thể truy xuất
    // đến các tham số bằng biến arguments này. Theo ví dụ trên, thì arguments ở đây sẽ chứa "event"
    let args = arguments; // "arguments" của fn

    // Function later này sẽ được gọi sau khi delay được chạy xong.
    // Nghĩa là mình return executedFn, khi executedFn được thực thi thì sau khoản delay, later sẽ được thực thi.
    let later = function () {
      // Gán null cho timeout => cho thấy delay đã chạy xong
      timeout = null;

      // Gọi hàm fn với apply
      if (!immediate) fn.apply(context, args);
    };

    // Xác định xem nên gọi fn dựa vào tham số immediate
    let callNow = immediate && !timeout;

    // Dòng clearTimeout sẽ reset timeout đang hiện hữu (**existed**). Đây là điều cần thiết,
    // vì mình cần hủy timeout và tạo 1 timeout mới nếu như debounce được thực thi khi
    // delay chưa chạy xong.
    clearTimeout(timeout);

    // Khởi tạo (lại) timeout mới và gán vào biến timeout để có thể clear/check.
    timeout = setTimeout(later, delay);

    // Nếu như immediate là true, thì mình sẽ gọi fn lần đầu tiên ở đây.
    if (callNow) fn.apply(context, args);
  };
}

const keyUpHandler = (event) => {
  // do something with event
  search_item = event.target.value.toLowerCase();
  showList();
  console.log(search_item);
};

const debouncedKeyUp = debounce(keyUpHandler, 1000);

search.addEventListener("keyup", debouncedKeyUp);
/* Pagination */

let perPage = 12;
let currentPage = 1;
let start = 0;
let end = perPage;
