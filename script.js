//  We are using Apex Chart
var options = {
  series: [
    {
      name: "WEB",
      data: [44, 55, 57, 66, 69, 70, 73, 70, 76],
    },
    {
      name: "DATE SCIENCE",
      data: [56, 55, 61, 58, 67, 80, 81, 84, 89],
    },
    {
      name: "ANDROID",
      data: [35, 41, 36, 66, 65, 78, 82, 83, 91],
    },
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
  },
  yaxis: {
    title: {
      text: "% (students)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  val + "% " + " students";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();

// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}
