import React from "react";
import { AiOutlineCalendar, AiOutlineShoppingCart } from "react-icons/ai";
import { FiShoppingBag, FiHome, FiEdit } from "react-icons/fi";
import { BsKanban } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";

// AllProducts, HeatShrinkTubing, HeatShrinkMoldedParts, NonHeatShrinkTubing, SingleWall, WireAndCable, SolderSleevesAndDevices, CableTies, MarkingSystems, AdhesiveSystems, SingleWallSub, DualWall, HeavyDuty, SpecialPurpose, BraidedSleeving, Other



export const specificProductsData = require("./stranco-specific-products.json");

export const specificProductsGrid = [
  {
    accessorKey: "ItemNo",
    header: "Item No",
    id: 1,
  },
  {
    accessorKey: "Description",
    header: "Description",
    id: 2,
  },
  {
    accessorKey: "ItemVendorNumber",
    header: "Item Vendor No",
    id: 3,
  },
  {
    accessorKey: "QtyToStock",
    header: "Qty To Stock",
    id: 4,
  },
  // {
  //   accessorKey: "UnitCost",
  //   header: "Unit Cost",
  //   id: 5,
  // },
  {
    accessorKey: "VendorNo",
    header: "Vendor No",
    id: 6,
  },
  {
    accessorKey: "Category",
    header: "Category",
    id: 7,
  },
];

export const generalProductsData = require("./stranco-general-products.json");

export const generalProductsGrid = [
  {
    accessorKey: "name",
    header: "Name",
    id: 1,
  },
  {
    accessorKey: "shrinkRatio",
    header: "Shrink Ratio",
    id: 2,
  },
  {
    accessorKey: "sizeRange",
    header: "Size Range",
    id: 3,
  },
  {
    accessorKey: "specifications",
    header: "Specifications",
    id: 4,
  },
  {
    accessorKey: "applications",
    header: "Applications",
    id: 5,
  },
  {
    accessorKey: "description",
    header: "Description",
    id: 6,
  },
  {
    accessorKey: "dataSheet",
    header: "DataSheet",
    id: 8,
  },
  {
    accessorKey: "category",
    header: "Category",
    id: 9,
  },
  {
    accessorKey: "subCategory",
    header: "Sub Category",
    id: 10,
  },
];
export const links = [
  {
    links: [
      {
        name: "Home",
        link: "home",
        icon: <FiHome />,
      },
    ],
  },
  {
    title: "Dashboard",
    links: [
      {
        name: "All Products",
        link: "allproducts",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Categories",
    links: [
      {
        name: "Heat Shrink Tubing",
        link: "heatshrinktubing",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "Heat Shrink Molded Parts",
        link: "heatshrinkmoldedparts",
        icon: <IoMdContacts />,
      },
      {
        name: "Non-Heat Shrink Tubing",
        link: "nonheatshrinktubing",
        icon: <RiContactsLine />,
      },
      {
        name: "Wire and Cable",
        link: "wireandcable",
        icon: <RiContactsLine />,
      },
      {
        name: "Solder Sleeves & Devices",
        link: "soldersleevesanddevices",
        icon: <RiContactsLine />,
      },
      {
        name: "Cable Ties",
        link: "cableties",
        icon: <RiContactsLine />,
      },
      {
        name: "Marking Systems",
        link: "markingsystems",
        icon: <RiContactsLine />,
      },
      {
        name: "Adhesive Systems",
        link: "adhesivesystems",
        icon: <RiContactsLine />,
      },
      {
        name: "Braided Sleeving",
        link: "braidedsleeving",
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: "Sub Categories",
    links: [
      {
        name: "Single Wall",
        link: "singlewall",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "Dual Wall",
        link: "dualwall",
        icon: <BsKanban />,
      },
      {
        name: "Heavy Duty",
        link: "heavyduty",
        icon: <FiEdit />,
      },
      {
        name: "Special Purpose",
        link: "specialpurpose",
        icon: <BiColorFill />,
      },
      {
        name: "Wire",
        link: "wire",
        icon: <BiColorFill />,
      },
      {
        name: "Cable",
        link: "cable",
        icon: <BiColorFill />,
      },
      {
        name: "Other",
        link: "other",
        icon: <BiColorFill />,
      },
    ],
  },
];
export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#000",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];

export const ProductCategoryInformation = [
  {
    name: "AdhesiveSystems",
  },
  {
    name: "WireandCable",
  },
  {
    name: "SolderSleevesandDevices",
  },
  {
    name: "NonHeatShrinkTubing",
  },
  {
    name: "MarkingSystems",
  },
  {
    name: "HeatShrinkTubing",
  },
  {
    name: "HeatShrinkMoldedParts",
  },
  {
    name: "SingleWall",
  },
  {
    name: "DualWall",
  },
  {
    name: "HeavyDuty",
  },
  {
    name: "SpecialPurpose",
  },
  {
    name: "BraidedSleeving",
  },
];

