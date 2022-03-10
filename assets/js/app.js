let card = [
  {
    name: "nfvo1",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo2",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo3",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo4",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo5",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo6",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo7",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo8",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo9",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo10",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo11",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo12",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo13",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo14",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo15",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo16",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo17",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo18",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo19",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
  {
    name: "nfvo20",
    info1: "1vCPU x86",
    info2: "1TB HDD",
    info3: "1vCPU x86",
    info4: "04",
  },
];
renderCard = (cardInfo) => {
  const monitor = document.createElement("p");
  monitor.innerText = cardInfo.info4;
  monitor.setAttribute("class", "accessory");

  const ram = document.createElement("p");
  ram.innerText = cardInfo.info1;
  ram.setAttribute("class", "accessory");

  const tbHDD = document.createElement("p");
  tbHDD.innerText = cardInfo.info2;
  tbHDD.setAttribute("class", "accessory");

  const vCPU = document.createElement("p");
  vCPU.innerText = cardInfo.info3;
  vCPU.setAttribute("class", "accessory");

  const imgMonitor = document.createElement("img");
  imgMonitor.setAttribute(
    "src",
    "/assets/img/computer-monitor-svgrepo-com 1.svg"
  );

  const imgRam = document.createElement("img");
  imgRam.setAttribute("src", "/assets/img/Vector.svg");

  const imgComputerChip = document.createElement("img");
  imgComputerChip.setAttribute("src", "/assets/img/computer-chip 1.svg");

  const imgHardDrive = document.createElement("img");
  imgHardDrive.setAttribute("src", "/assets/img/hard-drive 2.svg");

  const divAccessoryItems = document.createElement("div");
  divAccessoryItems.appendChild(imgComputerChip);
  divAccessoryItems.appendChild(vCPU);
  divAccessoryItems.setAttribute("class", "accessory__items__1");

  const divAccessoryItems1 = document.createElement("div");
  divAccessoryItems1.appendChild(imgRam);
  divAccessoryItems1.appendChild(ram);
  divAccessoryItems1.setAttribute("class", "accessory__items__1");

  const divAccessoryItems3 = document.createElement("div");
  divAccessoryItems3.appendChild(imgMonitor);
  divAccessoryItems3.appendChild(monitor);
  divAccessoryItems3.setAttribute("class", "accessory__items__1");

  const divAccessoryItems2 = document.createElement("div");
  divAccessoryItems2.appendChild(imgHardDrive);
  divAccessoryItems2.appendChild(tbHDD);
  divAccessoryItems2.setAttribute("class", "accessory__items__1");

  const divAccessoryItemsRight = document.createElement("div");
  divAccessoryItemsRight.appendChild(divAccessoryItems);
  divAccessoryItemsRight.appendChild(divAccessoryItems2);
  divAccessoryItemsRight.setAttribute("class", "accessory__items__right");

  const divAccessoryItemsRight1 = document.createElement("div");
  divAccessoryItemsRight1.appendChild(divAccessoryItems1);
  divAccessoryItemsRight1.setAttribute("class", "accessory__items__1");

  const divAccessoryItemsRight2 = document.createElement("div");
  divAccessoryItemsRight2.appendChild(divAccessoryItems1);
  divAccessoryItemsRight2.appendChild(divAccessoryItems3);

  divAccessoryItemsRight2.setAttribute("class", "accessory__items__right");

  const nfvo1 = document.createElement("p");
  nfvo1.innerText = cardInfo.name;
  nfvo1.setAttribute("class", "nfvo1");

  const divTriangle = document.createElement("div");
  divTriangle.setAttribute("class", "triangle-right");

  const divRectangle = document.createElement("div");
  divRectangle.appendChild(nfvo1);
  divRectangle.setAttribute("class", "rectangle");

  const divShape = document.createElement("div");
  divShape.appendChild(divRectangle);
  divShape.appendChild(divTriangle);

  divShape.setAttribute("class", "shapes");

  const divInfoItems = document.createElement("div");
  divInfoItems.appendChild(divShape);
  divInfoItems.appendChild(divAccessoryItemsRight);
  divInfoItems.appendChild(divAccessoryItemsRight2);
  divInfoItems.setAttribute("class", "info__items");

  document.getElementById("root").appendChild(divInfoItems);
};

load = () => {
  for (let i = 0; i < card.length; i++) {
    renderCard(card[i]);
  }
};
